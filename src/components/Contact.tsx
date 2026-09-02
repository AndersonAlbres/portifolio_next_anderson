import { socials } from "@/data/site";
import { ExternalLinkIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contato" className="px-6 py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-accent">
          <span className="text-muted">{"//"}</span> contato
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Tem um processo manual pra automatizar, uma integração pra construir ou um
          projeto Full Stack em mente? Fico à disposição para trocar uma ideia.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
            Enviar e-mail
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
            <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
