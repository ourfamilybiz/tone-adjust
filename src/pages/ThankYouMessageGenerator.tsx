// File: src/pages/ThankYouMessageGenerator.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gift,
  HandHeart,
  Heart,
  HelpCircle,
  RefreshCcw,
  Sparkles,
  ThumbsUp,
} from "lucide-react";

const ThankYouMessageGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Thank You Message Generator | Say It Better</title>
  <meta
    name="description"
    content="Write thoughtful thank you messages that sound genuine and natural. Perfect for work, clients, and personal use."
  />
</Helmet>

      <HeroTool
        title="Thank You Message Generator"
        subtitle="Write thank-you messages that feel warmer, more thoughtful, and more genuine."
        placeholder="Paste your thank-you message or write what you want to thank someone for."
        defaultTone="Warm"
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
              <HandHeart size={20} />
              <h2 className="mt-3 text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rewrites thank-you messages so they feel more thoughtful, warm,
                and personal.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Gift size={20} />
              <h2 className="mt-3 text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Favors, support, gifts, interviews, customer appreciation, and
                everyday thank-you notes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Heart size={20} />
              <h2 className="mt-3 text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps your gratitude sound more genuine instead of rushed or too
                plain.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <FileText size={20} />
              <h2 className="text-xl font-semibold">Before &amp; after</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <RefreshCcw size={14} /> Before
                </div>
                <p className="text-sm">Thanks for your help.</p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={14} /> After
                </div>
                <p className="text-sm">
                  Thank you again for your help — I really appreciate your time
                  and support.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Sparkles size={20} />
              <h3 className="mt-3 font-semibold">More thoughtful tone</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps your message feel warmer and more intentional.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ThumbsUp size={20} />
              <h3 className="mt-3 font-semibold">Better appreciation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Useful when you want your thanks to feel more genuine and less
                generic.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier to send</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gives you a stronger thank-you message without needing to think
                too hard about the wording.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-semibold">
              Learn more
            </summary>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                A simple thank-you can go a long way, but sometimes the wording
                feels too short or flat.
              </p>
              <p>
                This tool helps turn a basic thank-you into something warmer and
                more meaningful.
              </p>
              <p>
                It works well for personal messages, work situations, interviews,
                customer appreciation, and support from others.
              </p>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/thank-you-message-generator" />
      <Footer />
    </div>
  );
};

export default ThankYouMessageGenerator;