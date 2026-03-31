import { Shield, Eye, UserCheck } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "Privacy first",
    desc: "Your messages are never stored or shared. What you write stays with you.",
  },
  {
    icon: Eye,
    title: "No AI jargon",
    desc: "We keep things simple. No complex settings, no confusing options.",
  },
  {
    icon: UserCheck,
    title: "You stay in control",
    desc: "Edit, adjust, or rewrite as many times as you want. It's your message.",
  },
];

const TrustSection = () => {
  return (
    <section id="privacy" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 md:mb-14 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground tracking-tight">
            Your words, just clearer
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">Simple, safe, and respectful of your privacy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {points.map((p, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-[15px]">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
