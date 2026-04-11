// File: src/components/Header.tsx

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="container max-w-6xl">
        {/* TOP ROW */}
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="font-bold">S</span>
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold md:text-base">
                SayItBetter
              </p>
              <p className="text-[10px] text-muted-foreground md:text-xs">
                Clearer messages. Less overthinking.
              </p>
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg border p-2"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={[
                  "rounded-full border px-4 py-2 text-sm",
                  isActive(item.path)
                    ? "bg-primary text-white"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}

            {userEmail ? (
              <Link to="/account" className="rounded-full border px-4 py-2 text-sm">
                Account
              </Link>
            ) : (
              <Link to="/auth" className="rounded-full border px-4 py-2 text-sm">
                Sign In
              </Link>
            )}

            {!isPro && (
              <Link to="/upgrade" className="rounded-full border px-4 py-2 text-sm">
                Upgrade
              </Link>
            )}
          </nav>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="flex flex-col gap-2 pb-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border px-4 py-3 text-sm"
              >
                {item.label}
              </Link>
            ))}

            {userEmail ? (
              <Link
                to="/account"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border px-4 py-3 text-sm"
              >
                Account
              </Link>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border px-4 py-3 text-sm"
              >
                Sign In
              </Link>
            )}

            {!isPro && (
              <Link
                to="/upgrade"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border px-4 py-3 text-sm"
              >
                Upgrade
              </Link>
            )}

            {isPro && (
              <span className="text-xs text-primary font-semibold pt-2">
                PRO USER
              </span>
            )}

            {userEmail && (
              <span className="text-xs text-muted-foreground">
                {userEmail}
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;