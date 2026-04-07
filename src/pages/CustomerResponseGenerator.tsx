// File: src/pages/CustomerResponseGenerator.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Handshake,
  Headphones,
  HelpCircle,
  MessageCircleMore,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function CustomerResponseGenerator() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

    <Helmet>
  <title>Customer Response Generator | Say It Better</title>
  <meta
    name="description"
    content="Generate professional responses to customers quickly. Improve tone, clarity, and communication in customer service situations."
  />
</Helmet>

      <HeroTool
        title="Customer Response Generator"
        subtitle="Write customer replies that sound clear, calm, and professional."
        placeholder="Paste the customer message or describe what the customer asked."
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

      <section className="pb-16">
        <div className="container max-w-5xl space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircleMore size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Improves customer-facing replies so they feel more polished,
                helpful, and easier to send.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Headphones size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Service businesses, scheduling replies, answering questions,
                handling delays, and day-to-day customer communication.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Handshake size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps your response sound respectful and professional while still
                feeling human.
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
                  See how a rushed customer reply becomes clearer and more polished.
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
                  We are busy right now but can get back to you later.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={14} />
                  After
                </div>
                <p className="text-sm leading-relaxed">
                  Thanks for reaching out. We’re assisting other customers at the
                  moment, but we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <ShieldCheck size={20} />
              <h3 className="mt-3 font-semibold">Protects your tone</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps avoid replies that feel too short, too cold, or unclear to a
                customer.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Sparkles size={20} />
              <h3 className="mt-3 font-semibold">Sounds more polished</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Makes everyday business replies sound more put together without
                being overly formal.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier customer communication</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Useful when you need a quick response that still reflects well on
                your business.
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
                This page is helpful when a customer asks a question, needs an
                update, wants scheduling information, or is waiting on a response.
              </p>
              <p>
                It helps you answer clearly while keeping the tone friendly and
                professional.
              </p>
              <p>
                That makes it especially useful for service businesses,
                freelancers, and anyone who communicates with customers often.
              </p>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/customer-response-generator" />
      <Footer />
    </div>
  );
}