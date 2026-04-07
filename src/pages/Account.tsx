// File: src/pages/Account.tsx
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "sayitbetter_daily_usage";
const DAILY_FREE_LIMIT = 5;

type UsageState = {
  date: string;
  count: number;
};

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getUsageState(): UsageState {
  if (typeof window === "undefined") {
    return {
      date: getTodayKey(),
      count: 0,
    };
  }

  const today = getTodayKey();
  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return { date: today, count: 0 };
  }

  try {
    const parsed = JSON.parse(raw) as UsageState;

    if (parsed.date !== today) {
      return { date: today, count: 0 };
    }

    return {
      date: parsed.date || today,
      count: typeof parsed.count === "number" ? parsed.count : 0,
    };
  } catch {
    return { date: today, count: 0 };
  }
}

const Account = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [plan, setPlan] = useState<"free" | "pro">("free");
  const [status, setStatus] = useState<string>("inactive");
  const [usageCount, setUsageCount] = useState(0);

  useEffect(() => {
    loadAccount();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadAccount();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function loadAccount() {
    setLoading(true);
    setMessage("");

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const email = session?.user?.email ?? null;
      setUserEmail(email);

      const usage = getUsageState();
      setUsageCount(usage.count);

      if (!email) {
        setPlan("free");
        setStatus("inactive");
        return;
      }

      const { data, error } = await supabase
        .from("user_subscriptions")
        .select("plan,status")
        .eq("user_email", email)
        .maybeSingle();

      if (error) {
        console.error(error);
        setPlan("free");
        setStatus("inactive");
        return;
      }

      setPlan(data?.plan === "pro" ? "pro" : "free");
      setStatus(data?.status ?? (data?.plan === "pro" ? "active" : "inactive"));
    } catch (error) {
      console.error(error);
      setMessage("Could not load your account right now.");
      setPlan("free");
      setStatus("inactive");
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    setSigningOut(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        setMessage(error.message);
        return;
      }

      navigate("/auth");
    } catch (error) {
      console.error(error);
      setMessage("Could not sign out right now.");
    } finally {
      setSigningOut(false);
    }
  }

  const isPro =
    plan === "pro" && (status === "active" || status === "trialing");

  const usageLabel = useMemo(() => {
    if (isPro) {
      return "Unlimited daily usage";
    }

    return `${usageCount} / ${DAILY_FREE_LIMIT} free uses used today`;
  }, [isPro, usageCount]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
  <title>My Account | Say It Better</title>
  <meta
    name="description"
    content="View your Say It Better account, plan, and daily usage."
  />
</Helmet>

      <section className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container max-w-4xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Account
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Your account
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              View your plan, usage, and account status in one place.
            </p>
          </div>

          {message && (
            <div className="rounded-2xl border border-border bg-card px-4 py-4 text-sm text-muted-foreground">
              {message}
            </div>
          )}

          {loading ? (
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <p className="text-sm text-muted-foreground">Loading account...</p>
            </div>
          ) : !userEmail ? (
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  You are not signed in
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sign in to view your account details, subscription status, and
                  usage.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  Go to Sign In
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-muted-foreground">Signed in as</p>
                    <p className="mt-1 break-all text-lg font-semibold text-foreground">
                      {userEmail}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">Plan</p>
                    <p className="mt-1 text-xl font-semibold capitalize text-foreground">
                      {plan}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="mt-1 text-xl font-semibold capitalize text-foreground">
                      {status}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={signingOut}
                    className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted disabled:opacity-60"
                  >
                    {signingOut ? "Signing out..." : "Sign out"}
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Subscription and usage
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      See where your account stands today.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">Today’s usage</p>
                    <p className="mt-1 text-xl font-semibold text-foreground">
                      {usageLabel}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">
                      Advanced personalization
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Tone DNA and stronger comparison options are intended to
                      be part of the Pro experience.
                    </p>
                  </div>

                  {isPro ? (
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                      <p className="text-sm font-medium text-foreground">
                        Pro is active on this account
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You have unlimited usage and access to higher-value
                        generation features as they are added.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-border bg-background p-4">
                        <p className="text-sm font-medium text-foreground">
                          Upgrade to Pro
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Unlock unlimited use, stronger message generation, and
                          more personalized results.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigate("/upgrade")}
                        className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                      >
                        Go to Upgrade
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Account;