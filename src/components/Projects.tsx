import Image from "next/image";
import { projects, type Project } from "@/data/site";
import { ExternalLinkIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STATUS_STYLES: Record<Project["status"], string> = {
  "Em produção": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Em desenvolvimento": "border-accent/30 bg-accent/10 text-accent",
  Conceito: "border-muted/30 bg-muted/10 text-muted",
};

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-border/60 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="projetos"
            title="Projetos em destaque"
            description="Uma amostra do tipo de trabalho que desenvolvo. Em constante evolução — novos projetos entram aqui conforme saem do forno."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40">
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
                  <Image
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.title}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.demoHref ? (
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                      >
                        Ver site
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted/70">
                        Link em breve
                      </span>
                    )}

                    {project.repoHref && (
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Repositório
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
