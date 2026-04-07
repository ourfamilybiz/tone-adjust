// File: src/pages/FixAwkwardText.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  MessageSquareDashed,
  Send,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const FixAwkwardText = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

    <Helmet>
  <title>Fix Awkward Text Messages | Say It Better</title>
  <meta
    name="description"
    content="Fix awkward or unclear messages and make them sound natural, smooth, and confident. Improve tone and clarity instantly."
  />
</Helmet>

      <HeroTool
        title="Fix awkward text fast."
        subtitle="Make a clunky message sound smoother, clearer, and easier to send."
        defaultTone="Casual"
        placeholder="Paste the awkward message you want to fix..."
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
                <MessageSquareDashed size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Cleans up wording that feels too stiff, too messy, or just plain
                awkward.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Send size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Texts, casual replies, dating messages, check-ins, follow-ups, and
                anything that feels weird to send.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why people use it</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It helps people sound more natural without overthinking every word.
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
                  Here is how awkward wording gets cleaned up fast.
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
                  hey i was meaning to say if maybe you wanted to still probably
                  do something later if you’re not busy or whatever
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
                  Hey, I wanted to see if you’d still like to do something later if
                  you’re free.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Very relatable</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Most people know the feeling of typing something that sounds off
                but not knowing how to fix it.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Easy to understand</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                “Fix awkward text” is simple, specific, and easy for first-time
                users to trust.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Strong repeat use</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Texting and quick messaging happen every day, which makes this a
                high-repeat tool.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              See when this helps most
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Personal texts</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helps when your message feels too wordy, too hesitant, or unclear.
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Casual follow-ups</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Great for smoothing out check-ins, invitations, and social replies.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/fix-awkward-text" />
      <Footer />
    </div>
  );
};

export default FixAwkwardText;