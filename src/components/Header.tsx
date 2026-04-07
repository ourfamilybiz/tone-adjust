// File: src/components/Header.tsx

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Professional", path: "/make-message-professional" },
  { label: "Apology", path: "/apology-message-generator" },
  { label: "Fix Awkward", path: "/fix-awkward-text" },
  { label: "All Tools", path: "/tools" },
];

const Header = () => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isPro, setIsPro] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    loadHeaderState();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadHeaderState();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function loadHeaderState() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const email = session?.user?.email ?? null;
      setUserEmail(email);

      if (!email) {
        setIsPro(false);
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
        return;
      }

      const pro =
        data?.plan === "pro" &&
        (data?.status === "active" || data?.status === "trialing");

      setIsPro(!!pro);
    } catch (error) {
      console.error(error);
      setIsPro(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-md">
      <div className="container max-w-6xl">
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition group-hover:bg-primary/15">
                <span className="text-base font-bold">S</span>
              </div>

              <div className="leading-tight">
                <p className="text-base font-semibold tracking-tight text-foreground md:text-lg">
                  SayItBetter
                </p>
                <p className="text-xs text-muted-foreground">
                  Clearer messages. Less overthinking.
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <nav
              className="flex flex-wrap items-center gap-2 md:justify-end"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={[
                    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    isActive(item.path)
                      ? "border-primary/20 bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/20 hover:bg-primary/5 hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}

              {userEmail ? (
                <Link
                  to="/account"
                  className={[
                    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    isActive("/account")
                      ? "border-primary/20 bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/20 hover:bg-primary/5 hover:text-foreground",
                  ].join(" ")}
                >
                  Account
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className={[
                    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    isActive("/auth")
                      ? "border-primary/20 bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/20 hover:bg-primary/5 hover:text-foreground",
                  ].join(" ")}
                >
                  Sign In
                </Link>
              )}

              {!isPro && (
                <Link
                  to="/upgrade"
                  className={[
                    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    isActive("/upgrade")
                      ? "border-primary/20 bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/20 hover:bg-primary/5 hover:text-foreground",
                  ].join(" ")}
                >
                  Upgrade
                </Link>
              )}
            </nav>

            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {isPro && (
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Pro
                </span>
              )}

              {userEmail && (
                <span className="text-xs text-muted-foreground">
                  {userEmail}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;