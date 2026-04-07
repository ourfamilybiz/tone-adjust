// File: src/pages/ApologyMessageGenerator.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  Heart,
  MessageCircleWarning,
  HandHeart,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const ApologyMessageGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Apology Email Generator | Say It Better</title>
  <meta
    name="description"
    content="Write a sincere apology email or message that sounds calm, respectful, and clear. Fix your tone or generate a full apology instantly."
  />
</Helmet> 

      <HeroTool
        title="Write a sincere apology in seconds."
        subtitle="Turn a rough message into something calmer, clearer, and more respectful."
        defaultTone="Apology"
        placeholder="Paste the message you want to turn into a sincere apology..."
      />

<section className="pb-12">
  <div className="container max-w-4xl space-y-6">
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          When to use this tool
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          Use this tool when your message feels unclear, messy, or difficult to understand.
          It helps improve clarity so your message is easier to follow and makes sense quickly.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          What this tool helps with
        </h2>

        <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
          <li>• rewriting unclear messages</li>
          <li>• improving clarity and structure</li>
          <li>• simplifying wording</li>
          <li>• making messages easier to understand</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      <section className="pb-16">
        <div className="container max-w-5xl space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Heart size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps turn defensive, emotional, or rushed wording into an apology
                that sounds sincere and thoughtful.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircleWarning size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Personal messages, work misunderstandings, customer service replies,
                and follow-ups after tension or conflict.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HandHeart size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why people use it</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It helps people say sorry without sounding cold, messy, or overly
                dramatic.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="mb-6 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ArrowRightLeft size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Before &amp; after example</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  A quick example of how the tool softens tone and improves clarity.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground">
                    ✎
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Before
                  </p>
                </div>

                <p className="text-sm leading-relaxed md:text-base">
                  sorry if that came off wrong, i was just frustrated and didn’t
                  mean for it to sound like that
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 size={16} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    After
                  </p>
                </div>

                <p className="text-sm leading-relaxed md:text-base">
                  I’m sorry for how that came across. I was frustrated, but that
                  does not excuse my tone. I appreciate your patience, and I want
                  to communicate more respectfully moving forward.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Fast relief</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                People often need help with apologies in stressful moments, and
                this makes the wording easier fast.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">High repeat use</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Apology situations happen in both work and personal life, which
                makes this a useful repeat tool.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Simple to trust</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Users don’t need to understand AI. They just need a better way to
                say what they mean.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              Learn more about when this helps
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Personal apologies</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Useful when your wording feels rushed, emotional, unclear, or too
                  defensive.
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Work and client communication</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helps soften tone while still sounding accountable and
                  professional.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/apology-message-generator" />
      <Footer />
    </div>
  );
};

export default ApologyMessageGenerator;