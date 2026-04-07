// File: src/pages/Auth.tsx

import { FormEvent, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

    setUserEmail(session?.user?.email ?? null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

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

        setMessage(
          "Account created. Check your email to confirm your account, then return here to sign in."
        );
        setEmail("");
        setPassword("");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setMessage(error.message);
          return;
        }

        setMessage("Signed in successfully.");
      }
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
                  This is the first step needed before we can unlock Pro access
                  after payment.
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
                      onClick={() => setMode("signin")}
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
                      onClick={() => setMode("signup")}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                        mode === "signup"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      Create account
                    </button>
                  </div>

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
                </>
              )}

              {message && (
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