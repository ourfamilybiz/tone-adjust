// File: src/pages/RewriteMorePolitely.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  HelpCircle,
  MessageCircleHeart,
  RefreshCcw,
  ShieldAlert,
  Sparkles,
  Wand2,
} from "lucide-react";

const RewriteMorePolitely = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Rewrite Message More Politely | Say It Better</title>
  <meta
    name="description"
    content="Rewrite your message to sound more polite and respectful. Improve tone while keeping your original meaning."
  />
</Helmet>

      <HeroTool
        title="Rewrite More Politely"
        subtitle="Soften blunt wording and make your message sound more respectful."
        placeholder="Paste a message you want to soften."
        defaultTone="Polite"
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

          {/* WHAT / BEST FOR / WHY */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Wand2 size={20} />
              <h2 className="mt-3 text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rewrites blunt or harsh wording so your message sounds calmer and more respectful.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <ShieldAlert size={20} />
              <h2 className="mt-3 text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tense replies, work communication, customer messages, and difficult conversations.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <HeartHandshake size={20} />
              <h2 className="mt-3 text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps protect your tone while keeping your message clear.
              </p>
            </div>
          </div>

          {/* BEFORE / AFTER */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <FileText size={20} />
              <h2 className="text-xl font-semibold">Before & after</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <RefreshCcw size={14} /> Before
                </div>
                <p className="text-sm">
                  You need to fix this.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={14} /> After
                </div>
                <p className="text-sm">
                  Could you please take a look at this when you have a chance?
                </p>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <MessageCircleHeart size={20} />
              <h3 className="mt-3 font-semibold">Better tone</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Makes your message feel more considerate and less confrontational.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Sparkles size={20} />
              <h3 className="mt-3 font-semibold">More respectful wording</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps you stay clear without sounding too direct.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier conversation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reduces tension and makes your message easier to receive.
              </p>
            </div>
          </div>

          {/* LEARN MORE */}
          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-semibold">
              Learn more
            </summary>
            <div className="mt-3 text-sm text-muted-foreground space-y-2">
              <p>Sometimes the message is right — but the tone is too sharp.</p>
              <p>This tool softens wording without changing your meaning.</p>
              <p>Works well for work, customers, and personal conversations.</p>
            </div>
          </details>

        </div>
      </section>

      <RelatedTools currentHref="/rewrite-more-politely" />

      <Footer />
    </div>
  );
};

export default RewriteMorePolitely;