// File: src/pages/RescheduleMessageGenerator.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";

import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileText,
  HelpCircle,
  MoveRight,
  RefreshCcw,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const RescheduleMessageGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
  <title>Reschedule Message Generator | Say It Better</title>
  <meta
    name="description"
    content="Write a clear and polite message to reschedule meetings or appointments. Stay professional and respectful."
  />
</Helmet>

      <HeroTool
        title="Reschedule Message Generator"
        subtitle="Move a meeting, appointment, or plan in a way that sounds clear, polite, and considerate."
        placeholder="Paste your reschedule message or write what you need to move."
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
          
          {/* WHAT / BEST FOR / WHY */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <CalendarClock size={20} />
              <h2 className="mt-3 text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rewrites reschedule messages so they sound more polished and respectful.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Clock3 size={20} />
              <h2 className="mt-3 text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Meetings, appointments, customer bookings, and schedule changes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <ShieldCheck size={20} />
              <h2 className="mt-3 text-lg font-semibold">Why it helps</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps you sound organized and considerate instead of rushed or casual.
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
                  Can we do another day instead?
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={14} /> After
                </div>
                <p className="text-sm">
                  Would it be possible to reschedule for another day? Something came up on my end.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <TimerReset size={20} />
              <h3 className="mt-3 font-semibold">Better timing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Helps you ask for a change clearly without sounding abrupt.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <MoveRight size={20} />
              <h3 className="mt-3 font-semibold">Smoother scheduling</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Keeps your message considerate when adjusting plans.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ArrowRight size={20} />
              <h3 className="mt-3 font-semibold">Easier to send</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gives you a clean message ready to send quickly.
              </p>
            </div>
          </div>

          {/* LEARN MORE */}
          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-semibold">
              Learn more
            </summary>
            <div className="mt-3 text-sm text-muted-foreground space-y-2">
              <p>Rescheduling can feel awkward.</p>
              <p>This tool helps make your message clearer and more respectful.</p>
              <p>Works well for work meetings, services, and personal plans.</p>
            </div>
          </details>

        </div>
      </section>

      <RelatedTools currentHref="/reschedule-message-generator" />

      <Footer />
    </div>
  );
};

export default RescheduleMessageGenerator;