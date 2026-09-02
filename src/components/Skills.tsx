import { skills } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="stack" className="border-t border-border/60 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="stack-tecnologica"
            title="Ferramentas que uso no dia a dia"
            description="Linguagens, frameworks e ferramentas com as quais construo automações, APIs e produtos web."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.title} delayMs={index * 70}>
              <div className="h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
