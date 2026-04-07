// File: supabase/functions/stripe-webhook/index.ts
// @ts-nocheck

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2025-03-31.basil",
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

serve(async (req) => {
  try {
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Missing stripe-signature header", { status: 400 });
    }

    const body = await req.text();

    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      stripeWebhookSecret,
      undefined,
      cryptoProvider
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        const email =
          session.customer_details?.email ||
          session.customer_email ||
          session.metadata?.user_email ||
          session.client_reference_id;

        if (!email) {
          return new Response("No user email found on checkout session", {
            status: 400,
          });
        }

        let subscriptionId = null;
        let customerId = null;
        let currentPeriodEnd = null;
        let status = "active";

        if (typeof session.subscription === "string") {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription
          );

          subscriptionId = subscription.id;
          customerId =
            typeof subscription.customer === "string"
              ? subscription.customer
              : subscription.customer?.id || null;
          status = subscription.status;

          if (subscription.current_period_end) {
            currentPeriodEnd = new Date(
              subscription.current_period_end * 1000
            ).toISOString();
          }
        }

        const { error } = await supabaseAdmin
          .from("user_subscriptions")
          .upsert(
            {
              user_email: email,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              status,
              plan: status === "active" || status === "trialing" ? "pro" : "free",
              current_period_end: currentPeriodEnd,
            },
            { onConflict: "user_email" }
          );

        if (error) {
          return new Response(error.message, { status: 500 });
        }

        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object;

        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer?.id || null;

        const status = subscription.status;
        const plan =
          status === "active" || status === "trialing" ? "pro" : "free";

        const currentPeriodEnd = subscription.current_period_end
          ? new Date(subscription.current_period_end * 1000).toISOString()
          : null;

        const { error } = await supabaseAdmin
          .from("user_subscriptions")
          .update({
            status,
            plan,
            current_period_end: currentPeriodEnd,
          })
          .eq("stripe_subscription_id", subscription.id);

        if (error) {
          return new Response(error.message, { status: 500 });
        }

        break;
      }

      default:
        break;
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      err instanceof Error ? err.message : "Webhook error",
      { status: 400 }
    );
  }
});