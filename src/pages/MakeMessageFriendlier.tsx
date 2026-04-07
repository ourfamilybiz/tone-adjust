// File: src/pages/MakeMessageFriendlier.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";
import {
  Smile,
  MessageCircleHeart,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const MakeMessageFriendlier = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Make My Message Friendlier | Say It Better</title>
  <meta
    name="description"
    content="Make your message sound warmer and more friendly while staying clear and natural. Improve tone for better communication."
  />
</Helmet>

      <HeroTool
        title="Make your message sound friendlier."
        subtitle="Turn dry or cold wording into something warmer, more natural, and easier to send."
        defaultTone="Casual"
        placeholder="Paste the message you want to make friendlier..."
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
                <Smile size={20} />
              </div>
              <h2 className="text-lg font-semibold">What it does</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps soften cold, blunt, or dry wording so your message feels
                warmer and easier to receive.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircleHeart size={20} />
              </div>
              <h2 className="text-lg font-semibold">Best for</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Texts, casual check-ins, customer replies, follow-ups, and
                messages where you want to sound more approachable.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-semibold">Why people use it</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It makes communication feel more human and less abrupt without
                changing the meaning.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="mb-6 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ArrowRightLeft size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Before &amp; after example</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  See how a cold message becomes warmer and easier to send.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground">
                    ✎
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Before
                  </p>
                </div>

                <p className="text-sm leading-relaxed md:text-base">
                  Let me know when you are available.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 size={16} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    After
                  </p>
                </div>

                <p className="text-sm leading-relaxed md:text-base">
                  Let me know when you&apos;re free — happy to work around your
                  schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">Softer tone</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Helps remove cold or abrupt phrasing that can make a message feel
                too sharp.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">More natural replies</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Great for everyday communication that should feel warmer and more
                human.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-background p-5">
              <h3 className="font-semibold">High repeat use</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Friendly messaging is something people need constantly in texts,
                replies, and check-ins.
              </p>
            </div>
          </div>

          <details className="rounded-2xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              Learn more about when this helps
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Personal messages</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Useful when you want to sound warmer, kinder, or more relaxed
                  in everyday texting.
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <h3 className="font-medium">Customer communication</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Helps business replies feel more welcoming and easier for
                  people to receive.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <RelatedTools currentHref="/make-message-friendlier" />
      <Footer />
    </div>
  );
};

export default MakeMessageFriendlier;