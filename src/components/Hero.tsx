import { profile, socials } from "@/data/site";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";
import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-sm text-accent">Olá, meu nome é</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground text-glow sm:text-6xl">
          {profile.name}
        </h1>

        <div className="mt-4 h-10 font-mono text-xl text-muted sm:text-2xl">
          <TypedText phrases={profile.taglines} className="text-foreground/90" />
        </div>

        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          {profile.bio[0]}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            Entrar em contato
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-muted">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="E-mail"
            className="transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-accent"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent animate-bounce"
      >
        <ArrowDownIcon className="h-5 w-5" />
      </a>
    </section>
  );
}
