// File: src/pages/FollowUpMessageGenerator.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  ArrowRight,
  BellRing,
  Briefcase,
  CheckCircle2,
  Clock3,
  FileText,
  HelpCircle,
  Mail,
  MessageSquareReply,
  RefreshCcw,
} from "lucide-react";

export default function FollowUpMessageGenerator() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
  <title>Follow Up Email Generator | Say It Better</title>
  <meta
    name="description"
    content="Write effective follow-up emails that get responses. Stay professional, clear, and confident without sounding pushy."
  />
</Helmet>

      <HeroTool
        title="Follow-Up Message Generator"
        subtitle="Write follow-ups that sound clear, polite, and professional — without sounding pushy."
        placeholder="Paste the message you want to follow up on, or write what you want to say."
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
                <MessageSquareReply size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rewrites follow-up messages so they sound more polished, respectful,
                and easier to send.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Work replies, customer follow-ups, reminders, proposals, unpaid
                invoices, and unanswered messages.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BellRing size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helps you follow up without sounding awkward, impatient, or
                annoying.
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
                  See how a pushy follow-up becomes smoother and more professional.
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
                  Just following up again to see if you saw my last message.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={14} />
                  After
                </div>
                <p className="text-sm leading-relaxed">
                  I wanted to follow up on my last message and see whether you’ve
                  had a chance to review it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Clock3 size={20} />
              <h3 className="mt-3 font-semibold">Saves time</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Get a cleaner follow-up quickly instead of rewriting the same
                message over and over.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Mail size={20} />
              <h3 className="mt-3 font-semibold">Sounds more professional</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Useful when you need to check in without sounding too forceful.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier to send</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Reduces hesitation when you know you need to follow up but do not
                want it to come across the wrong way.
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
                This tool is helpful when someone has not replied yet and you want
                to check in without sounding impatient.
              </p>
              <p>
                It works well for work conversations, clients, proposals,
                scheduling, reminders, and other messages where tone matters.
              </p>
              <p>
                Paste in a rough message, then let the tool make it smoother and
                easier to send.
              </p>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/follow-up-message-generator" />
      <Footer />
    </div>
  );
}