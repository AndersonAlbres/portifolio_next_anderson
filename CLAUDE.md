@AGENTS.md

# Notas do projeto

Portfólio pessoal (Next.js App Router + TypeScript + Tailwind CSS v4). Tema
dark/tech com cor de destaque única (`--accent`/`--accent-2` em
[src/app/globals.css](src/app/globals.css)) e fundo animado de partículas em
canvas ([src/components/ParticlesBackground.tsx](src/components/ParticlesBackground.tsx)).

- Conteúdo textual (perfil, skills, soluções, projetos, links de contato)
  fica centralizado em [src/data/site.ts](src/data/site.ts) — não hardcode
  texto nos componentes, edite ali.
- A cor de destaque também existe em hex fixo (favicon/apple-icon/OG image e
  na constante `PARTICLE_COLOR`) porque `next/og` e o `<canvas>` não leem CSS
  vars — ao trocar `--accent`/`--accent-2`, atualize os hex correspondentes
  nesses arquivos também (ver seção "Tema e cor de destaque" no README).
- `ParticlesBackground` deve continuar respeitando `prefers-reduced-motion`
  (desenha a rede de pontos estática, sem loop de animação, quando ativo).
- Antes de considerar uma mudança pronta, rode `npm run lint` e
  `npm run build`.
