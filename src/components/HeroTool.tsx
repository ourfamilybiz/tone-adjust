// File: src/components/HeroTool.tsx

import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Copy,
  Check,
  Sparkles,
  Lock,
  ArrowDown,
  RefreshCcw,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { loadToneProfile, type ToneProfile } from "@/lib/toneProfile";

type Props = {
  title: string;
  subtitle: string;
  placeholder: string;
  defaultTone?: string;
};

type ToolMode = "rewrite" | "generate";
type ProGenerateStyle = "standard" | "compare";

const toneOptions = [
  "Professional",
  "Polite",
  "Calm",
  "Warm",
  "Casual",
  "Confident",
  "Apology",
  "Persuasive",
];

const DAILY_FREE_LIMIT = 5;
const STORAGE_KEY = "sayitbetter_daily_usage";

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

function saveUsageState(state: UsageState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeTone(defaultTone: string) {
  if (toneOptions.includes(defaultTone)) return defaultTone;
  return "Professional";
}

export default function HeroTool({
  title,
  subtitle,
  placeholder,
  defaultTone = "Professional",
}: Props) {
  const navigate = useNavigate();
  const outputRef = useRef<HTMLDivElement | null>(null);

  const normalizedDefaultTone = useMemo(
    () => normalizeTone(defaultTone),
    [defaultTone]
  );

  const [mode, setMode] = useState<ToolMode>("rewrite");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState(normalizedDefaultTone);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [usageCount, setUsageCount] = useState(0);
  const [usageReady, setUsageReady] = useState(false);
  const [subscriptionReady, setSubscriptionReady] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [toneProfile, setToneProfile] = useState<ToneProfile | null>(null);
  const [proGenerateStyle, setProGenerateStyle] =
    useState<ProGenerateStyle>("standard");
  const [showReadyNotice, setShowReadyNotice] = useState(false);

  useEffect(() => {
    const usage = getUsageState();
    saveUsageState(usage);
    setUsageCount(usage.count);
    setUsageReady(true);
    setToneProfile(loadToneProfile());

    loadSubscription();
  }, []);

  useEffect(() => {
    if (!output || !outputRef.current) return;

    setShowReadyNotice(true);

    const timer = window.setTimeout(() => {
      outputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    const hideTimer = window.setTimeout(() => {
      setShowReadyNotice(false);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hideTimer);
    };
  }, [output]);

  async function loadSubscription() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const email = session?.user?.email;

      if (!email) {
        setIsPro(false);
        setSubscriptionReady(true);
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
        setSubscriptionReady(true);
        return;
      }

      const pro =
        data?.plan === "pro" &&
        (data?.status === "active" || data?.status === "trialing");

      setIsPro(!!pro);
    } catch (err) {
      console.error(err);
      setIsPro(false);
    } finally {
      setSubscriptionReady(true);
    }
  }

  const trimmedInput = useMemo(() => input.trim(), [input]);
  const usesRemaining = Math.max(0, DAILY_FREE_LIMIT - usageCount);
  const limitReached =
    usageReady && subscriptionReady && !isPro && usageCount >= DAILY_FREE_LIMIT;
  const canGenerate =
    usageReady &&
    subscriptionReady &&
    trimmedInput.length > 0 &&
    !loading &&
    !limitReached;

  const activePlaceholder =
    mode === "rewrite"
      ? placeholder
      : "Describe what happened, who this is for, what outcome you want, and how you want it to sound.";

  const helperText =
    mode === "rewrite"
      ? "Paste the message you already wrote and the tool will improve it."
      : "Explain the situation in your own words and the tool will create the message or document for you.";

  const modeHeading =
    mode === "rewrite"
      ? "Improve what you already wrote"
      : "Create the message from your situation";

  const generateHint =
    mode === "generate"
      ? "Example: My client has not paid the invoice, this is for a business customer, I want to sound firm but respectful, and I want them to pay by Friday."
      : "";

  async function handleGenerate() {
    if (!trimmedInput || limitReached) return;

    setLoading(true);
    setOutput("");
    setErrorMessage("");
    setCopied(false);
    setShowReadyNotice(false);

    if (outputRef.current) {
      outputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    try {
      const { data, error } = await supabase.functions.invoke(
        "rewrite-message",
        {
          body: {
            text: trimmedInput,
            tone,
            mode,
            proGenerateStyle:
              isPro && mode === "generate" ? proGenerateStyle : "standard",
            toneProfile:
              isPro && mode === "generate"
                ? toneProfile ?? undefined
                : undefined,
          },
        }
      );

      if (error) {
        console.error(error);
        setErrorMessage("Something went wrong while generating your result.");
        return;
      }

      if (!data?.result) {
        setErrorMessage("No result was returned.");
        return;
      }

      setOutput(data.result);

      if (!isPro) {
        const nextUsage = {
          date: getTodayKey(),
          count: usageCount + 1,
        };

        saveUsageState(nextUsage);
        setUsageCount(nextUsage.count);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong while generating your result.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (err) {
      console.error(err);
      setErrorMessage("Could not copy the result.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
    setErrorMessage("");
    setCopied(false);
    setTone(normalizedDefaultTone);
    setMode("rewrite");
    setProGenerateStyle("standard");
    setShowReadyNotice(false);
  }

  function handleUpgradeClick() {
    navigate("/upgrade");
  }

  return (
    <section className="pt-4 pb-5 md:pt-10 md:pb-8">
      <div className="container max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-5 md:p-8">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                AI Message Tool
              </p>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  {title}
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 md:px-4 md:py-4">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {isPro ? "Pro access" : "Free daily usage"}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {isPro
                      ? "Unlimited usage unlocked on this account"
                      : usesRemaining > 0
                      ? `${usesRemaining} of ${DAILY_FREE_LIMIT} free uses remaining today`
                      : `You have reached your ${DAILY_FREE_LIMIT} free uses for today`}
                  </p>
                </div>

                {!isPro && (
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          (usageCount / DAILY_FREE_LIMIT) * 100
                        )}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMode("rewrite")}
                  className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-medium transition ${
                    mode === "rewrite"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  Use My Draft
                </button>

                <button
                  type="button"
                  onClick={() => setMode("generate")}
                  className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-medium transition ${
                    mode === "generate"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  Describe Situation
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 md:px-4 md:py-4">
                <p className="text-sm font-medium text-foreground">
                  {modeHeading}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {helperText}
                </p>
                {mode === "generate" && (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {generateHint}
                  </p>
                )}
              </div>
            </div>

            {limitReached && (
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 md:p-7">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Lock size={20} />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-foreground">
                        You’ve reached your free limit
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You’ve used all {DAILY_FREE_LIMIT} free messages for
                        today.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm font-medium text-foreground">
                      Upgrade to Pro and unlock:
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>• Unlimited message rewrites</li>
                      <li>• Generate messages from situations</li>
                      <li>• Tone DNA personalization</li>
                      <li>
                        • “Closer to me” vs “Best for this situation” comparison
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={handleUpgradeClick}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                    >
                      Upgrade to Pro
                    </button>

                    <p className="text-xs text-muted-foreground">
                      Start free. Upgrade anytime.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="hero-tool-input"
                className="text-sm font-medium text-foreground"
              >
                {mode === "rewrite" ? "Your message" : "Your situation"}
              </label>

              <textarea
                id="hero-tool-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activePlaceholder}
                className="min-h-[170px] w-full rounded-2xl border border-border bg-background px-4 py-4 text-sm leading-relaxed text-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10 sm:min-h-[200px]"
              />

              <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                <p>
                  Tip: the more useful context you give, the better the result
                  usually is.
                </p>
                <p>{trimmedInput.length} characters</p>
              </div>
            </div>

            {mode === "generate" && isPro && (
              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 md:px-4 md:py-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Pro generation options
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Choose whether you want one strong version or a comparison
                      between your natural voice and the version that best fits
                      the situation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setProGenerateStyle("standard")}
                      className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-medium transition ${
                        proGenerateStyle === "standard"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      Best single version
                    </button>

                    <button
                      type="button"
                      onClick={() => setProGenerateStyle("compare")}
                      className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-medium transition ${
                        proGenerateStyle === "compare"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      Compare both
                    </button>
                  </div>
                </div>
              </div>
            )}

            {mode === "generate" && !isPro && (
              <>
                <div className="hidden md:block rounded-2xl border border-border bg-background/80 px-4 py-4">
                  <p className="text-sm font-medium text-foreground">
                    Pro feature available
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pro users can compare a version that feels closer to their
                    natural voice with a version that is best suited for the
                    situation.
                  </p>
                </div>

                <div className="md:hidden">
                  <button
                    type="button"
                    onClick={handleUpgradeClick}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Learn more about Pro
                  </button>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label
                htmlFor="hero-tool-tone"
                className="text-sm font-medium text-foreground"
              >
                Tone
              </label>

              <select
                id="hero-tool-tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="min-h-[44px] w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
              >
                {toneOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleClear}
                className="min-h-[44px] rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Sparkles size={16} />
                {loading
                  ? mode === "rewrite"
                    ? "Rewriting..."
                    : "Generating..."
                  : mode === "rewrite"
                  ? "Rewrite"
                  : "Generate"}
              </button>
            </div>

            {errorMessage && (
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {errorMessage}
              </div>
            )}

            <div ref={outputRef} className="scroll-mt-24 md:scroll-mt-28">
              {loading && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                    <RefreshCcw size={16} className="animate-spin" />
                    {mode === "rewrite"
                      ? "Rewriting your message..."
                      : "Generating your message..."}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Please wait. Your result will appear here automatically when
                    it’s ready.
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-[92%] animate-pulse rounded bg-muted" />
                    <div className="h-4 w-[86%] animate-pulse rounded bg-muted" />
                    <div className="h-4 w-[78%] animate-pulse rounded bg-muted" />
                  </div>
                </div>
              )}

              {!output && !loading && !errorMessage && !limitReached && (
                <div className="rounded-2xl border border-dashed border-border bg-background/80 px-4 py-4">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowDown size={16} className="mt-0.5 shrink-0" />
                    <span>
                      {mode === "rewrite"
                        ? "Your rewritten result will appear here after you click Rewrite."
                        : "Your generated message or document will appear here after you click Generate."}
                    </span>
                  </div>
                </div>
              )}

              {output && (
                <div className="space-y-3">
                  {showReadyNotice && (
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
                      Your result is ready below.
                    </div>
                  )}

                  <div className="rounded-2xl border border-border bg-background p-4 ring-1 ring-primary/10 md:p-5">
                    <div className="mb-3 flex flex-col gap-3">
                      <div>
                        <p className="font-semibold text-foreground">Result</p>
                        <p className="text-xs text-muted-foreground">
                          Review it, copy it, and edit it however you want.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted sm:w-fit"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>

                    <div className="rounded-2xl border border-border bg-card px-4 py-4">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                        {output}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}