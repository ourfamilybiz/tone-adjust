// File: src/pages/AllTools.tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolCategories } from "@/data/tools";

const AllTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

    <Helmet>
  <title>All AI Message Tools | Say It Better</title>
  <meta
    name="description"
    content="Explore all AI message tools to rewrite emails, generate responses, fix awkward text, and create better messages for any situation."
  />
</Helmet>

      <section className="pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="container max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-3">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
    All Tools
  </p>

  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
    Explore every message tool in one place
  </h1>

  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
    Start with the tool that matches your situation. Some help rewrite
    something you already wrote. Others help when you do not know what
    to say yet.
  </p>
</div>

<section className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold tracking-tight">
      When to use these tools
    </h2>

    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
      Use these tools when you need help writing a message, rewriting something
      you already wrote, or creating the right response from a situation. They
      are useful for work messages, apology messages, follow-ups, customer
      responses, payment reminders, and everyday communication.
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
      <li>• generating a message from a situation</li>
    </ul>
  </div>
</section>

<div className="grid gap-6">
            {toolCategories.map((category) => (
              <section
                key={category.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
              >
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {category.title}
                  </h2>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {category.tools.map((tool) => {
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
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllTools;