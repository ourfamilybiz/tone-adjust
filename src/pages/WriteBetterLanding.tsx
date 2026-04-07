// File: src/pages/WriteBetterLanding.tsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import {
  PenSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquareText,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const WriteBetterLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
        <title>Write Better Messages Instantly | Say It Better</title>
        <meta
          name="description"
          content="Rewrite a message you already wrote or describe your situation and generate the right message instantly with Say It Better."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-border/70 bg-[#071126] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,110,255,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(0,214,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(122,69,255,0.16),transparent_34%)]" />

        <div className="relative container max-w-6xl py-12 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Aision Labs • Cognitive Division
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Stop overthinking your messages.
              <span className="block text-cyan-200">
                Write it better in seconds.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-xl">
              Rewrite something you already wrote or describe the situation and let
              Say It Better create the message for you. Faster, clearer, and more
              confident communication without the stress.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#write-better-tool"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(73,138,255,0.28)] transition hover:scale-[1.01]"
              >
                Try It Now
              </a>

              <Link
                to="/upgrade"
                className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Pro
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-5 text-left backdrop-blur-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                  <PenSquare size={20} />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Rewrite your draft
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Paste a message you already wrote and improve the tone, clarity,
                  and wording instantly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 p-5 text-left backdrop-blur-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-400/12 text-violet-200">
                  <Sparkles size={20} />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Generate from the situation
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Explain what happened and the tool will create the right message
                  or document for you.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 p-5 text-left backdrop-blur-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-200">
                  <BadgeCheck size={20} />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Sound more polished
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Great for work messages, apologies, follow-ups, payment requests,
                  and difficult replies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-12">
        <div className="container max-w-4xl space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                When to use this page
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Use this page when you know your message is off, awkward, too harsh,
                too unclear, or just not good enough to send. It is also useful when
                you have not written anything yet and just need the right words for
                the situation.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                What Say It Better helps with
              </h2>

              <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                <li>• rewriting emails and messages</li>
                <li>• improving tone, clarity, and professionalism</li>
                <li>• fixing awkward or unclear wording</li>
                <li>• generating a message or document from a situation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="write-better-tool">
        <HeroTool
          title="Write better messages now."
          subtitle="Paste your draft or describe the situation and get a stronger message in seconds."
          placeholder="Paste your message or describe the situation here..."
          defaultTone="Professional"
        />
      </div>

      <section className="pb-12">
        <div className="container max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageSquareText size={22} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                Use my draft
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Best when you already wrote something but it sounds too rough, too
                vague, too emotional, or just not good enough yet.
              </p>

              <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  “hey just checking if you got my last message because i need to know soon”
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Briefcase size={22} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                Describe the situation
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Best when you have not written the message yet and want the tool to
                create the right wording for a real situation.
              </p>

              <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  “I need to follow up with a client after not replying for two days and I want to sound professional.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container max-w-6xl">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why people use it
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Better wording can change the whole outcome
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                The same message can sound rude, awkward, unclear, or unprofessional
                depending on how it is written. Say It Better helps users send
                messages that feel more polished, more thoughtful, and more effective.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-semibold">Faster decisions</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Stop rewriting the same message over and over.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-semibold">Stronger tone</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sound clearer, calmer, and more professional when it matters.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-semibold">Real-life usefulness</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helpful for work, clients, money conversations, and personal
                  situations too.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#write-better-tool"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                Try It Free
              </a>

              <Link
                to="/upgrade"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                See Pro Features
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WriteBetterLanding;