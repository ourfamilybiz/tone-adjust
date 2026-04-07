// File: src/pages/ReplyToDifficultMessage.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  HelpCircle,
  MessageSquareWarning,
  RefreshCcw,
  Shield,
  Waves,
} from "lucide-react";

const ReplyToDifficultMessage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

    <Helmet>
  <title>Reply to a Difficult Message | Say It Better</title>
  <meta
    name="description"
    content="Respond to difficult messages with clarity and control. Stay professional, calm, and effective in challenging situations."
  />
</Helmet>

      <HeroTool
        title="Reply to a Difficult Message"
        subtitle="Respond with a calmer, clearer tone when a message feels tense, awkward, or emotionally charged."
        placeholder="Paste the message you received or write what you want to respond to."
        defaultTone="Calm"
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
                <MessageSquareWarning size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps rewrite tense or emotional replies so they sound calmer,
                more thoughtful, and more controlled.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AlertCircle size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Conflict, misunderstandings, pressure, awkward conversations, and
                messages that make you want to react too quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps you protect your tone and say what you mean without making
                the situation worse.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Before &amp; after</h2>
                <p className="text-sm text-muted-foreground">
                  See how a tense reply becomes calmer and easier to send.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <RefreshCcw size={14} />
                  Before
                </div>
                <p className="text-sm leading-relaxed">
                  “That’s not what happened.”
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={14} />
                  After
                </div>
                <p className="text-sm leading-relaxed">
                  “I understand your perspective. From my side, the situation felt
                  different.”
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Waves size={20} />
              <h3 className="mt-3 font-semibold">Calmer tone</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps you slow down and respond in a more steady, thoughtful way.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <HeartHandshake size={20} />
              <h3 className="mt-3 font-semibold">Less tension</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Useful when you want to keep the conversation respectful even if
                the message was difficult.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier to reply</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Gives you a better starting point when you do not want to answer
                emotionally.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-base font-semibold">
              <HelpCircle size={18} />
              Learn more
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Some messages are hard to answer because they feel tense,
                emotional, or unfair.
              </p>
              <p>
                This tool helps you respond with more control so your message
                sounds clearer and calmer.
              </p>
              <p>
                It works well for personal situations, work tension, difficult
                customer communication, and awkward misunderstandings.
              </p>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/reply-to-difficult-message" />
      <Footer />
    </div>
  );
};

export default ReplyToDifficultMessage;