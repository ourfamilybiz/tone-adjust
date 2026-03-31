import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Sparkles, RotateCcw } from "lucide-react";

const tones = ["Professional", "Casual", "Persuasive", "Apology", "Confident"];
const modifiers = ["Make shorter", "Fix grammar", "More confident"];

const sampleOutput = `Thank you for reaching out. I appreciate your patience, and I'd like to address your concerns directly.

After reviewing the situation, I believe the best path forward is to schedule a brief call so we can align on expectations and next steps. Would Thursday or Friday work for you?

Looking forward to resolving this together.`;

const HeroTool = () => {
  const [input, setInput] = useState("");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [activeModifiers, setActiveModifiers] = useState<string[]>([]);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [isRewriting, setIsRewriting] = useState(false);

  const toggleModifier = (mod: string) => {
    setActiveModifiers((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const handleRewrite = () => {
    if (!input.trim()) return;
    setIsRewriting(true);
    setTimeout(() => {
      setOutput(sampleOutput);
      setIsRewriting(false);
    }, 1200);
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInput("");
    setOutput("");
    setActiveModifiers([]);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container max-w-2xl">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12 space-y-3">
          <h1 className="text-3xl md:text-[2.75rem] font-bold font-display text-foreground leading-[1.15] tracking-tight">
            Say it better.{" "}
            <span className="text-primary">Stay you.</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Rewrite emails, texts, and replies with the tone you want — in seconds.
          </p>
        </div>

        {/* Tool Card */}
        <div className="bg-card rounded-2xl shadow-elevated border border-border/60 p-5 md:p-7 space-y-5">
          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste your message here..."
            rows={4}
            className="w-full rounded-xl border border-border bg-background p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all text-sm md:text-base leading-relaxed"
          />

          {/* Tone selector */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Tone</p>
            <div className="flex flex-wrap gap-2">
              {tones.map((tone) => (
                <Button
                  key={tone}
                  variant={selectedTone === tone ? "pill-active" : "pill"}
                  size="sm"
                  onClick={() => setSelectedTone(tone)}
                >
                  {tone}
                </Button>
              ))}
            </div>
          </div>

          {/* Modifiers */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Options</p>
            <div className="flex flex-wrap gap-2">
              {modifiers.map((mod) => (
                <Button
                  key={mod}
                  variant={activeModifiers.includes(mod) ? "pill-active" : "pill"}
                  size="sm"
                  onClick={() => toggleModifier(mod)}
                >
                  {mod}
                </Button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button
              variant="rewrite"
              onClick={handleRewrite}
              disabled={!input.trim() || isRewriting}
              className="flex-1"
            >
              <Sparkles size={18} />
              {isRewriting ? "Rewriting…" : "Rewrite Message"}
            </Button>
            {(input || output) && (
              <Button variant="outline" size="lg" onClick={handleReset} className="px-4">
                <RotateCcw size={16} />
              </Button>
            )}
          </div>

          {/* Output */}
          {output && (
            <div className="animate-fade-in space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Improved Message</p>
                <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-1.5 h-8 text-xs">
                  {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                className="rounded-xl border border-primary/15 bg-accent/40 p-4 text-foreground text-sm md:text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {output}
              </div>
            </div>
          )}

          {/* Trust note */}
          <p className="text-center text-xs text-muted-foreground pt-1">
            🔒 We don't store your messages. Your privacy matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroTool;
