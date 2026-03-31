import { ClipboardPaste, SlidersHorizontal, Copy } from "lucide-react";

const steps = [
  {
    icon: ClipboardPaste,
    title: "Paste your message",
    description: "Drop in the email, text, or reply you want to improve.",
    step: "1",
  },
  {
    icon: SlidersHorizontal,
    title: "Choose a tone",
    description: "Pick professional, casual, confident, or any style you need.",
    step: "2",
  },
  {
    icon: Copy,
    title: "Rewrite & copy",
    description: "Get your improved message instantly. Copy it and go.",
    step: "3",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card border-y border-border/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 md:mb-14 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground tracking-tight">
            How it works
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">Three steps. No sign-up required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <step.icon size={22} className="text-primary" />
              </div>
              <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-widest">Step {step.step}</span>
              <h3 className="font-semibold text-foreground text-[15px]">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
