import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">{"// 404"}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
