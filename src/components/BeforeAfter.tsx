import { ArrowRight } from "lucide-react";

const examples = [
  {
    before: "Hey, I just wanted to check in about the project. I think we need to talk about the timeline because things are getting a bit messy and I'm not sure we're going to make it.",
    after: "Hi — I'd like to touch base on our project timeline. I've noticed a few areas where we may need to adjust our schedule. Could we set up a quick call to align on priorities and next steps?",
    tone: "Professional",
  },
  {
    before: "I'm really sorry about what happened yesterday. I didn't mean to make you feel bad, I was just stressed and I took it out on you which wasn't fair.",
    after: "I owe you an apology for yesterday. I was dealing with a lot of stress, but that's no excuse for how I treated you. You didn't deserve that, and I'm genuinely sorry. I'll do better.",
    tone: "Apology",
  },
  {
    before: "We have this product that could help your team. Let me know if you want to chat about it sometime maybe.",
    after: "I noticed your team is scaling fast — congrats! We've helped similar teams cut onboarding time by 40%. Worth a 15-minute call this week to see if it's a fit?",
    tone: "Persuasive",
  },
];

const BeforeAfter = () => {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 md:mb-14 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground tracking-tight">
            See the difference
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">Real examples of rewritten messages.</p>
        </div>

        <div className="space-y-5">
          {examples.map((ex, i) => (
            <div key={i} className="rounded-2xl border border-border/60 overflow-hidden bg-background">
              <div className="grid md:grid-cols-2">
                <div className="p-5 md:p-6 space-y-2.5">
                  <span className="inline-block text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Before</span>
                  <p className="text-sm text-foreground/60 leading-relaxed">{ex.before}</p>
                </div>
                <div className="p-5 md:p-6 space-y-2.5 bg-accent/30 border-t md:border-t-0 md:border-l border-border/40 relative">
                  <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary items-center justify-center shadow-soft">
                    <ArrowRight size={12} className="text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-widest">After</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{ex.tone}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{ex.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
