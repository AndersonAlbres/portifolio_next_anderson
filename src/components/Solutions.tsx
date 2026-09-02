import { solutions } from "@/data/site";
import { CheckIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Solutions() {
  return (
    <section id="solucoes" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="soluções"
            title="O que eu resolvo"
            description="Do processo manual repetitivo ao sistema web completo — este é o tipo de problema que gosto de resolver."
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {solutions.map((item, index) => (
            <Reveal key={item} delayMs={index * 40}>
              <div className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground/90">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
