import { profile } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="sobre-mim" title="Quem eu sou" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3 space-y-5 leading-relaxed text-muted" delayMs={80}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal className="md:col-span-2" delayMs={160}>
          <div className="rounded-xl border border-border bg-surface p-6 font-mono text-sm leading-relaxed">
            <p className="text-muted">
              <span className="text-accent-2">const</span>{" "}
              <span className="text-foreground">dev</span> = {"{"}
            </p>
            <p className="pl-4 text-muted">
              nome: <span className="text-accent">&quot;{profile.name}&quot;</span>,
            </p>
            <p className="pl-4 text-muted">
              foco: <span className="text-accent">&quot;Python &amp; Full Stack&quot;</span>,
            </p>
            <p className="pl-4 text-muted">
              area: <span className="text-accent">&quot;Automação &amp; Integrações&quot;</span>,
            </p>
            <p className="pl-4 text-muted">
              local: <span className="text-accent">&quot;{profile.location}&quot;</span>,
            </p>
            <p className="pl-4 text-muted">
              disponivel: <span className="text-accent-2">true</span>,
            </p>
            <p className="text-muted">{"}"}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
