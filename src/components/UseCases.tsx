import { Mail, MessageCircle, Megaphone, HeartHandshake, Share2, ShieldCheck } from "lucide-react";

const cases = [
  { icon: Mail, title: "Professional emails", desc: "Sound polished and clear in every inbox." },
  { icon: MessageCircle, title: "Text messages", desc: "Get the right tone for tricky conversations." },
  { icon: Megaphone, title: "Sales & outreach", desc: "Write compelling messages that get replies." },
  { icon: HeartHandshake, title: "Apologies", desc: "Say sorry sincerely without overthinking it." },
  { icon: Share2, title: "Social posts", desc: "Craft posts that sound natural and engaging." },
  { icon: ShieldCheck, title: "Confident replies", desc: "Respond with clarity and self-assurance." },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
            Works for everything you write
          </h2>
          <p className="text-muted-foreground">From quick texts to important emails.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border p-5 space-y-3 hover:shadow-card transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <c.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
