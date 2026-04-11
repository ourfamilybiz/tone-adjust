// File: src/pages/Auth.tsx

import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successMode, setSuccessMode] = useState<"none" | "signup">("none");

  useEffect(() => {
    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadSession();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function loadSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const signedInEmail = session?.user?.email ?? null;
    setUserEmail(signedInEmail);

    if (signedInEmail) {
      navigate("/account");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccessMode("none");

    try {
      if (mode === "signup") {
        const redirectUrl =
          window.location.hostname === "localhost"
            ? "http://localhost:5173/auth"
            : "https://tone-adjust.vercel.app/auth";

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl,
          },
        });

        if (error) {
          setMessage(error.message);
          return;
        }

        setSuccessMode("signup");
        setMessage(
          "Your account was created. Please check your email, confirm your account, then come back here and sign in."
        );
        setPassword("");
        setMode("signin");
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Signed in successfully. Redirecting...");
      navigate("/account");
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Signed out.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container max-w-2xl">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Account
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {userEmail ? "Your account" : "Sign in or create an account"}
                </h1>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Create your account first, then you can unlock Pro access after
                  payment.
                </p>
              </div>

              {userEmail ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">Signed in as</p>
                    <p className="mt-1 font-medium text-foreground">
                      {userEmail}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={loading}
                    className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:opacity-60"
                  >
                    {loading ? "Signing out..." : "Sign out"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setMode("signin");
                        setMessage("");
                        setSuccessMode("none");
                      }}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                        mode === "signin"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      Sign in
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setMode("signup");
                        setMessage("");
                        setSuccessMode("none");
                      }}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                        mode === "signup"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      Create account
                    </button>
                  </div>

                  {successMode === "signup" && message ? (
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-foreground">
                          Check your email
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {message}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSuccessMode("none");
                            setMessage("");
                            setMode("signin");
                          }}
                          className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                        >
                          Go to Sign In
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="auth-email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <input
                          id="auth-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="auth-password"
                          className="text-sm font-medium text-foreground"
                        >
                          Password
                        </label>
                        <input
                          id="auth-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                          placeholder="Enter your password"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:opacity-60"
                      >
                        {loading
                          ? mode === "signin"
                            ? "Signing in..."
                            : "Creating account..."
                          : mode === "signin"
                          ? "Sign in"
                          : "Create account"}
                      </button>
                    </form>
                  )}
                </>
              )}

              {message && successMode !== "signup" && !userEmail && (
                <div className="rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Auth;