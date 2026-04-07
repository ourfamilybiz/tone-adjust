// File: src/pages/MakeMessageClearer.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Glasses,
  HelpCircle,
  Lightbulb,
  MessageSquareText,
  RefreshCcw,
  ScanText,
  Sparkles,
} from "lucide-react";

const MakeMessageClearer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
  <title>Make My Message Clearer | Say It Better</title>
  <meta
    name="description"
    content="Rewrite your message to make it clearer and easier to understand. Remove confusion and improve communication instantly."
  />
</Helmet>

      <HeroTool
        title="Make Message Clearer"
        subtitle="Turn confusing or messy wording into something easier to understand."
        placeholder="Paste a message that feels unclear or messy."
        defaultTone="Professional"
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
              <MessageSquareText size={20} />
              <h2 className="mt-3 text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rewrites unclear messages so they sound more direct and easier to follow.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Glasses size={20} />
              <h2 className="mt-3 text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Work messages, updates, and anything that feels hard to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Lightbulb size={20} />
              <h2 className="mt-3 text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps your message make sense faster so people understand you immediately.
              </p>
            </div>
          </div>

          {/* BEFORE / AFTER */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
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
                  I was just reaching out to kind of see what you were thinking about the thing we talked about.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={14} /> After
                </div>
                <p className="text-sm">
                  I wanted to check your thoughts on what we discussed.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <ScanText size={20} />
              <h3 className="mt-3 font-semibold">Easier to read</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Removes clutter so your message is easier to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Sparkles size={20} />
              <h3 className="mt-3 font-semibold">Cleaner wording</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps when your message feels messy or too wordy.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Better communication</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Makes your point easier to understand quickly.
              </p>
            </div>
          </div>

          {/* LEARN MORE */}
          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-semibold">
              Learn more
            </summary>
            <div className="mt-3 text-sm text-muted-foreground space-y-2">
              <p>Some messages are not wrong — they are just hard to follow.</p>
              <p>This tool cleans them up so your meaning is clearer.</p>
              <p>Works well for work messages, updates, and longer texts.</p>
            </div>
          </details>

        </div>
      </section>

      <RelatedTools currentHref="/make-message-clearer" />

      <Footer />
    </div>
  );
};

export default MakeMessageClearer;