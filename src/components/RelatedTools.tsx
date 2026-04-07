// File: src/components/RelatedTools.tsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allTools } from "@/data/tools";

type RelatedToolsProps = {
  currentHref: string;
  title?: string;
  limit?: number;
};

const RelatedTools = ({
  currentHref,
  title = "Try related tools",
  limit = 4,
}: RelatedToolsProps) => {
  const currentTool = allTools.find((tool) => tool.href === currentHref);

  const sameCategoryTools = currentTool
    ? allTools.filter(
        (tool) =>
          tool.href !== currentHref && tool.category === currentTool.category
      )
    : [];

  const fallbackTools = allTools.filter(
    (tool) =>
      tool.href !== currentHref &&
      !sameCategoryTools.some((item) => item.href === tool.href)
  );

  const toolsToShow = [...sameCategoryTools, ...fallbackTools].slice(0, limit);

  if (toolsToShow.length === 0) {
    return null;
  }

  return (
    <section className="pb-10">
      <div className="container max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold">{title}</h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Keep refining your wording or explore another tool built for a
              different kind of message.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {toolsToShow.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.href}
                  to={tool.href}
                  className="group rounded-2xl border border-border bg-background p-4 transition-all hover:border-primary/20 hover:bg-primary/5 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-sm font-semibold leading-tight">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Open tool
                    <ArrowRight
                      size={14}
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
  );
};

export default RelatedTools;