// File: src/pages/ShortenMessageTool.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  Scissors,
  MessageSquareText,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const ShortenMessageTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Shorten My Message | Say It Better</title>
  <meta
    name="description"
    content="Shorten your message while keeping the key meaning. Make your communication more concise and effective."
  />
</Helmet>

      <HeroTool
        title="Shorten your message fast."
        subtitle="Turn long, rambling wording into something shorter, clearer, and easier to send."
        defaultTone="Professional"
        placeholder="Paste the message you want to shorten..."
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
                <Scissors size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps trim long, repetitive, or wordy messages into something
                shorter and easier to read.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageSquareText size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Work replies, follow-ups, customer messages, texts, and any
                message that feels too long before sending.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why people use it</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It saves time, removes filler, and helps users get to the point
                faster.
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
                  See how a long message becomes shorter and cleaner.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_0.95fr]">
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
                  Hey, I was just reaching out because I wanted to check in with
                  you and see if maybe you had a chance to look over what I sent
                  earlier when you have time.
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
                  Just checking whether you had a chance to review what I sent
                  earlier.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Cleaner communication</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Removes extra words so your message feels more focused and
                easier to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Better for busy readers</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Shorter messages are easier for people to read quickly and respond to.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Everyday usefulness</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Works well for people who write too much and want a faster,
                simpler version.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              Learn more about when this helps
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Work and follow-ups</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helps make business messages shorter without losing the main point.
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Everyday texting</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Great when your message feels too long and you want something
                  simpler to send.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/shorten-message-tool" />
      <Footer />
    </div>
  );
};

export default ShortenMessageTool;