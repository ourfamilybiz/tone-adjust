// File: src/components/Footer.tsx

import { Link } from "react-router-dom";
import { toolCategories } from "@/data/tools";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container max-w-6xl py-10 space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_2fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">SayItBetter</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Simple tools to help you say things better.
            </p>

            <Link
              to="/tools"
              className="inline-flex text-sm font-medium text-primary hover:underline"
            >
              View all tools
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {toolCategories.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {group.title}
                </h4>

                <div className="space-y-2">
                  {group.tools.map((tool) => (
                    <Link
                      key={tool.href}
                      to={tool.href}
                      className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;