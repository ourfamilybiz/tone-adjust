import { ClipboardPaste, SlidersHorizontal, Copy } from "lucide-react";

const steps = [
  {
    icon: ClipboardPaste,
    title: "Paste your message",
    description: "Drop in the email, text, or reply you want to improve.",
  },
  {
    icon: SlidersHorizontal,
    title: "Choose a tone",
    description: "Pick professional, casual, confident, or any style you need.",
  },
  {
    icon: Copy,
    title: "Rewrite & copy",
    description: "Get your improved message instantly. Copy it and go.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-surface">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            How it works
          </h2>
          <p className="text-muted-foreground">Three steps. No sign-up required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
