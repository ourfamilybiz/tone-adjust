// File: src/pages/DeclineRequestPolitely.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Hand,
  HelpCircle,
  Shield,
  SmilePlus,
  UserCheck,
  XCircle,
  RefreshCcw,
} from "lucide-react";

const DeclineRequestPolitely = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Decline a Request Politely | Say It Better</title>
  <meta
    name="description"
    content="Politely decline requests without sounding rude or awkward. Write clear, respectful responses for work, clients, or personal situations."
  />
</Helmet>

      <HeroTool
        title="Decline a Request Politely"
        subtitle="Say no in a way that sounds respectful, clear, and considerate."
        placeholder="Paste the request or write what you want to decline."
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
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Hand size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rewrites messages so you can decline a request without sounding rude,
                cold, or uncomfortable.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <UserCheck size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Favors, invitations, extra work, scheduling conflicts, and requests
                you need to turn down politely.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps you protect your time and boundaries while still sounding kind
                and respectful.
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
                  See how a blunt decline becomes clearer and more considerate.
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
                  Sorry I can’t do that.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={14} />
                  After
                </div>
                <p className="text-sm leading-relaxed">
                  I appreciate you thinking of me, but I won’t be able to take this
                  on right now.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <SmilePlus size={20} />
              <h3 className="mt-3 font-semibold">Softer tone</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Makes your message sound more thoughtful and less abrupt.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <XCircle size={20} />
              <h3 className="mt-3 font-semibold">Clear boundary</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps you say no clearly without overexplaining.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier to send</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Useful when you know you need to decline something but want to do it
                the right way.
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
                This page is useful when you need to turn down a request but do not
                want your wording to sound harsh.
              </p>
              <p>
                It works well for personal situations, work requests, favors, and
                invitations.
              </p>
              <p>
                Paste a rough message and let the tool make it clearer, kinder, and
                easier to send.
              </p>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/decline-request-politely" />
      <Footer />
    </div>
  );
};

export default DeclineRequestPolitely;