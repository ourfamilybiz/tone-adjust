// File: src/pages/Upgrade.tsx

import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  PenSquare,
  FileText,
  UserRound,
  ArrowRight,
} from "lucide-react";

const Upgrade = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);
  const [isPro, setIsPro] = useState(false);

  const checkoutStatus = searchParams.get("checkout");

  useEffect(() => {
    loadSessionAndPlan();
  }, []);

  async function loadSessionAndPlan() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const email = session?.user?.email ?? null;
      setUserEmail(email);

      if (!email) {
        setIsPro(false);
        setSessionReady(true);
        return;
      }

      const { data, error } = await supabase
        .from("user_subscriptions")
        .select("plan,status")
        .eq("user_email", email)
        .maybeSingle();

      if (error) {
        console.error(error);
        setIsPro(false);
        setSessionReady(true);
        return;
      }

      const pro =
        data?.plan === "pro" &&
        (data?.status === "active" || data?.status === "trialing");

      setIsPro(!!pro);
    } catch (error) {
      console.error(error);
      setIsPro(false);
    } finally {
      setSessionReady(true);
    }
  }

  async function handleCheckout() {
    if (!userEmail) {
      setErrorMessage("Please sign in before upgrading.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.functions.invoke(
        "create-checkout-session",
        {
          body: {
            origin: window.location.origin,
            email: userEmail,
          },
        }
      );

      if (error) {
        console.error(error);
        setErrorMessage("Could not start checkout.");
        return;
      }

      if (!data?.url) {
        setErrorMessage("Checkout link was not returned.");
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setErrorMessage("Could not start checkout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
        <title>Upgrade to Pro | Say It Better</title>
        <meta
          name="description"
          content="Upgrade to Say It Better Pro for unlimited usage, better message generation, and more personalized results."
        />
      </Helmet>

      <section className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container max-w-6xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Upgrade
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Unlock the full Say It Better experience
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Say It Better is built to help you do more than rewrite a sentence.
              It helps you improve what you already wrote and create the right
              message or document when all you have is the situation.
            </p>
          </div>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                When to upgrade to Pro
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Upgrade to Pro when you use Say It Better often and want more
                control over how your messages are written. Pro is especially useful
                for people who regularly need help rewriting drafts, generating
                messages from situations, and getting more personalized results.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                What Pro helps with
              </h2>

              <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                <li>• unlimited rewrites and message generation</li>
                <li>• stronger support for situation-based writing</li>
                <li>• more personalized Tone DNA direction</li>
                <li>• better-fit guidance for professional and sensitive situations</li>
              </ul>
            </div>
          </section>

          {checkoutStatus === "success" && (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 px-4 py-4 text-sm text-foreground">
              Your checkout completed. The next step is making sure Pro access is
              connected to your signed-in account.
            </div>
          )}

          {checkoutStatus === "cancelled" && (
            <div className="rounded-2xl border border-border bg-card px-4 py-4 text-sm text-muted-foreground">
              Checkout was cancelled. You can come back and upgrade any time.
            </div>
          )}

          {sessionReady && !userEmail && (
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 px-4 py-4 text-sm text-foreground">
              You need to sign in before upgrading.
              <button
                type="button"
                onClick={() => navigate("/auth")}
                className="ml-3 inline-flex rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
              >
                Go to Sign In
              </button>
            </div>
          )}

          {sessionReady && userEmail && !isPro && (
            <div className="rounded-2xl border border-border bg-card px-4 py-4 text-sm text-muted-foreground">
              Signed in as{" "}
              <span className="font-medium text-foreground">{userEmail}</span>
            </div>
          )}

          {sessionReady && userEmail && isPro && (
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-4 text-sm text-foreground">
              Pro is already active for{" "}
              <span className="font-medium">{userEmail}</span>.
              <button
                type="button"
                onClick={() => navigate("/account")}
                className="ml-3 inline-flex rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
              >
                Go to Account
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-4 text-sm text-destructive">
              {errorMessage}
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles size={22} />
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                      Pro is for people who use this often and want stronger results
                    </h2>

                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      Upgrade if you want more freedom, more personalization, and
                      better support when you are trying to say something the
                      right way.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <PenSquare size={18} />
                      </div>
                      <p className="font-medium text-foreground">
                        Better rewriting
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Keep improving your own draft until it sounds cleaner,
                        stronger, and more suitable.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FileText size={18} />
                      </div>
                      <p className="font-medium text-foreground">
                        Situation to document
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explain what happened and generate the message or document
                        that best fits the situation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <UserRound size={18} />
                      </div>
                      <p className="font-medium text-foreground">
                        Tone DNA personalization
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Get results that feel more natural to you instead of
                        sounding flat or generic.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ShieldCheck size={18} />
                      </div>
                      <p className="font-medium text-foreground">
                        Smarter guidance
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        In some situations, your natural wording may not be the
                        best fit. Pro helps compare what feels like you versus
                        what may work best.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      What Pro helps with
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      This is especially useful for work messages, customer
                      communication, follow-ups, apology messages, payment
                      reminders, difficult replies, and situations where tone
                      really matters.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-primary">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Unlimited daily use
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Keep testing different versions until the wording feels
                          right.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-primary">
                        <Zap size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Stronger output for regular users
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Better for people who need this for real situations
                          often, not just once in a while.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-primary">
                        <ArrowRight size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          More like me vs best for this situation
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Pro is where the more advanced comparison experience
                          belongs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm font-medium text-foreground">
                      Good to know
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Some features are already live now, and others are part of
                      the Pro roadmap being added into the experience. The goal is
                      a tool that helps users sound more like themselves when that
                      works, and more effective when the situation calls for
                      something better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Pro Plan
                  </div>

                  <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                    Get more out of Say It Better
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Upgrade when you want less limitation and more control over
                    how your messages are created.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="mt-2 text-4xl font-bold text-foreground">
                    $9
                    <span className="text-base font-medium text-muted-foreground">
                      /month
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>Unlimited rewrites and generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>Situation-based message and document support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>Tone DNA personalization direction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>More advanced tone-fit options over time</span>
                    </li>
                  </ul>
                </div>

                {isPro ? (
                  <button
                    type="button"
                    onClick={() => navigate("/account")}
                    className="w-full rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    Go to Account
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={loading || !userEmail}
                    className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Redirecting..."
                      : userEmail
                      ? "Continue to Checkout"
                      : "Sign in to Upgrade"}
                  </button>
                )}

                {!userEmail && !isPro && (
                  <button
                    type="button"
                    onClick={() => navigate("/auth")}
                    className="w-full rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    Go to Sign In
                  </button>
                )}

                <p className="text-center text-xs text-muted-foreground">
                  Secure checkout powered by Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Upgrade;