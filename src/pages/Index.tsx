// File: src/pages/Index.tsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import BeforeAfter from "@/components/BeforeAfter";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import { allTools } from "@/data/tools";
import {
  ArrowRight,
  PenSquare,
  Sparkles,
  BadgeCheck,
  Building2,
  BrainCircuit,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Helmet>
        <title>Say It Better | AI Message Writing and Rewrite Tool</title>
        <meta
          name="description"
          content="Rewrite messages or generate emails from a situation. Say It Better helps you communicate clearly, professionally, and confidently."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-border/70 bg-[#071126] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,110,255,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(0,214,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(122,69,255,0.16),transparent_34%)]" />

        <div className="relative container max-w-6xl py-12 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Aision Labs
                </span>

                <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Cognitive Division
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/aision-cognitive-logo.png"
                    alt="Aision Cognitive Systems"
                    className="h-14 w-14 rounded-2xl object-cover shadow-[0_0_30px_rgba(84,143,255,0.25)] md:h-16 md:w-16"
                  />

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                      Say It Better
                    </p>
                    <p className="text-sm text-white/65">
                      AI-powered communication writing
                    </p>
                  </div>
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                  Create the right message with more clarity, better tone, and
                  less second guessing.
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
                  Part of the <span className="font-semibold text-white">Aision Labs</span>{" "}
                  ecosystem, <span className="font-semibold text-white">Say It Better</span> helps
                  users rewrite what they already wrote or generate the message
                  or document that best fits the situation.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/12 text-cyan-200">
                    <PenSquare size={18} />
                  </div>
                  <p className="font-semibold text-white">
                    Rewrite what you already wrote
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    Improve tone, clarity, professionalism, and flow without
                    losing the core meaning.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/12 text-violet-200">
                    <Sparkles size={18} />
                  </div>
                  <p className="font-semibold text-white">
                    Generate from the situation
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    Explain what happened and let the AI create the message or
                    document that best fits the moment.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#hero-tool"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(73,138,255,0.28)] transition hover:scale-[1.01]"
                >
                  Start Writing
                </a>

                <Link
                  to="/upgrade"
                  className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  View Pro
                </Link>
              </div>

              <div className="grid gap-3 pt-1 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-cyan-200">
                    <BadgeCheck size={16} />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Tone-aware writing
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/65">
                    Rewrite and generate with stronger communication choices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-cyan-200">
                    <BrainCircuit size={16} />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Cognitive division tool
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/65">
                    Positioned under Aision’s communication intelligence layer.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-cyan-200">
                    <Building2 size={16} />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Built for real use
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/65">
                    Helpful for work, client, apology, follow-up, and payment situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3 shadow-[0_20px_80px_rgba(12,24,68,0.55)] backdrop-blur-sm">
                <img
                  src="/sayitbetter-product-image.png"
                  alt="Say It Better product preview"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Product Position
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Aision Labs product focused on messaging, communication
                    quality, and document generation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Billing Brand
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    The Stripe product image and product framing stay aligned
                    with Say It Better while still connecting back to Aision.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <img
                  src="/aision-labs-logo.png"
                  alt="Aision Labs"
                  className="h-12 w-12 rounded-xl object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-white">Aision Labs</p>
                  <p className="text-xs leading-relaxed text-white/65">
                    Parent brand for intelligent business and communication tools.
                  </p>
                </div>
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
                When to use Say It Better
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Use Say It Better when you need help improving a message you already
                wrote or creating the right message from a situation. It is especially
                useful for work communication, customer replies, follow-ups, apology
                messages, and situations where tone, clarity, and professionalism matter.
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

      <div id="hero-tool">
        <HeroTool
          title="Say it better in seconds."
          subtitle="Paste a message you already wrote or describe your situation and get help with what to say — fast."
          placeholder="Paste your message or describe the situation here..."
          defaultTone="Professional"
        />
      </div>

      <section className="pb-12">
        <div className="container max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <PenSquare size={22} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                Already wrote something?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Paste your text and improve the tone, clarity, and wording in
                seconds.
              </p>

              <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  “hey just checking if you got my message”
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={22} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                Need the message created for you?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Describe what happened, who the message is for, and the tone you
                want. The tool will write the message for you.
              </p>

              <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  “I forgot to reply to a client for two days and need to
                  apologize professionally.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container max-w-6xl">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Explore Tools
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  Start with the tool that fits your situation
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Choose a simple tool below. Each one is built for a specific
                  type of message, so you can get a better result faster without
                  overthinking what to say.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {allTools.slice(0, 6).map((tool) => {
                const Icon = tool.icon;

                return (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="group rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/20 hover:bg-primary/5 hover:shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight">
                      {tool.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tool.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Open tool
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <UseCases />
      <BeforeAfter />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;