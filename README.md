# Portfólio — Anderson Albres

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)

Site de portfólio pessoal, construído com Next.js (App Router) + TypeScript +
Tailwind CSS. Tema dark/tech com cor de destaque customizável, fundo animado
de partículas, seções de apresentação, stack, soluções, experiência/projetos
e contato, animações de entrada ao rolar, favicon e imagem de
compartilhamento (OpenGraph) geradas dinamicamente.

Repositório: [github.com/AndersonAlbres/portifolio_next_anderson](https://github.com/AndersonAlbres/portifolio_next_anderson)

## Rodando localmente


```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

| Comando         | Descrição                                   |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Sobe o servidor de desenvolvimento           |
| `npm run build` | Gera o build de produção                     |
| `npm start`     | Serve o build de produção (rodar após build) |
| `npm run lint`  | Roda o ESLint no projeto                     |

## Editando o conteúdo

Praticamente todo o conteúdo textual (nome, bio, stack, soluções, projetos e
links de contato) fica centralizado em [src/data/site.ts](src/data/site.ts) —
edite ali, os componentes só consomem esses dados.

- **Experiência & Projetos**: hoje tem 2 projetos reais em `projects`.
  Acrescente novos conforme forem saindo do forno (título, `kind` —
  "Projeto pessoal" ou "Projeto para cliente" —, descrição, tags, status,
  `image`, `demoHref`/`repoHref`). Screenshots ficam em
  [public/projects/](public/projects/).
- **Contato**: e-mail, WhatsApp, LinkedIn e GitHub ficam em `socials`.

## Tema e cor de destaque

O tema (cores, gradientes de fundo e fundo animado de partículas) fica em
[src/app/globals.css](src/app/globals.css), nas variáveis `--accent` e
`--accent-2`. Para trocar a cor de destaque, edite essas duas variáveis e os
mesmos valores em hex (usados por não aceitarem CSS var) em:

- [src/app/icon.tsx](src/app/icon.tsx) e
  [src/app/apple-icon.tsx](src/app/apple-icon.tsx) (favicon)
- [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) (imagem de
  compartilhamento)
- [src/components/ParticlesBackground.tsx](src/components/ParticlesBackground.tsx)
  (constante `PARTICLE_COLOR`, em rgb)

O fundo animado de partículas roda em `<canvas>` (sem dependências externas),
cobre a página inteira atrás do conteúdo e respeita `prefers-reduced-motion`
(desenha a rede de pontos parada, sem drift, quando o usuário/SO pede menos
animação).

## Estrutura

```
src/
  app/
    layout.tsx            metadados, fontes e OpenGraph/Twitter card
    page.tsx               compõe as seções na página inicial
    globals.css             tema (cores, gradientes de fundo, animações)
    icon.tsx / apple-icon.tsx / opengraph-image.tsx
                             favicon e imagem de compartilhamento (gerados via next/og)
  components/               Header, Hero, About, Skills, Solutions, Projects
                             (Experiência & Projetos), Contact, Footer,
                             ParticlesBackground (fundo animado), Reveal
                             (animação ao rolar), TypedText
  data/site.ts               conteúdo do site (editar aqui)
public/projects/             screenshots usados nos cards de projeto
```

## Build de produção

```bash
npm run build
npm start
```

## Deploy

Funciona out-of-the-box na [Vercel](https://vercel.com/new) (criadora do
Next.js) — basta importar o repositório. Também roda em qualquer host que
suporte Node.js (Netlify, Railway, etc.).

Depois de escolher o domínio final, defina a variável de ambiente
`NEXT_PUBLIC_SITE_URL` (ex.: `https://andersonalbres.dev`) no provedor de
deploy — ela é usada para resolver a URL absoluta da imagem de
compartilhamento (OpenGraph).

## Licença

Todos os direitos reservados — veja [LICENSE](LICENSE). O código é público
apenas para fins de portfólio/demonstração.
