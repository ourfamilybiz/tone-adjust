// File: src/pages/MakeMessageConfident.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  ShieldCheck,
  Briefcase,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const MakeMessageConfident = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Make My Message More Confident | Say It Better</title>
  <meta
    name="description"
    content="Rewrite your message to sound more confident and assertive without being aggressive. Perfect for work and business communication."
  />
</Helmet>

      <HeroTool
        title="Make your message sound more confident."
        subtitle="Turn hesitant wording into something clearer, stronger, and more self-assured."
        defaultTone="Confident"
        placeholder="Paste the message you want to make more confident..."
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
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps turn uncertain, soft, or overly hesitant wording into a
                message that feels clearer and more assured.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Workplace replies, negotiations, follow-ups, setting
                expectations, and messages where you want to sound more sure of
                yourself.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why people use it</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It helps users sound stronger without sounding rude, stiff, or
                aggressive.
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
                  See how a hesitant message becomes clearer and more confident.
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
                  i just wanted to see if maybe that would still work for you if
                  that&apos;s okay
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
                  I wanted to confirm whether that still works for you.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Clearer tone</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Removes weak or uncertain phrasing that can make a message feel
                less effective.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Better presence</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps you sound more self-assured in business, work, and
                everyday communication.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Strong repeat value</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Useful for daily replies when you want to communicate more
                directly and confidently.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              Learn more about when this helps
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Work communication</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helps you respond with stronger wording in meetings,
                  follow-ups, and professional conversations.
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Personal boundaries</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Useful when you want to sound firm, respectful, and more sure
                  of your position.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/make-message-confident" />
      <Footer />
    </div>
  );
};

export default MakeMessageConfident;