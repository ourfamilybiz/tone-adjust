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
];

const BeforeAfter = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            See the difference
          </h2>
          <p className="text-muted-foreground">Real examples of rewritten messages.</p>
        </div>

        <div className="space-y-6">
          {examples.map((ex, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-5 md:p-6 space-y-2 border-b md:border-b-0 md:border-r border-border">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Before</span>
                  <p className="text-sm text-foreground/70 leading-relaxed">{ex.before}</p>
                </div>
                <div className="p-5 md:p-6 space-y-2 bg-accent/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">After</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{ex.tone}</span>
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
