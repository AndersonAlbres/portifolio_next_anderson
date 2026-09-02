# Portfólio — Anderson Albres

Site de portfólio pessoal, construído com Next.js (App Router) + TypeScript +
Tailwind CSS. Tema dark/tech, com seções de apresentação, stack, soluções,
projetos e contato, animações de entrada ao rolar, favicon e imagem de
compartilhamento (OpenGraph) geradas dinamicamente.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Editando o conteúdo

Praticamente todo o conteúdo textual (nome, bio, stack, soluções, projetos e
links de contato) fica centralizado em [src/data/site.ts](src/data/site.ts) —
edite ali, os componentes só consomem esses dados.

- **Projetos**: hoje tem 2 projetos reais em `projects`. Acrescente novos
  conforme forem saindo do forno (título, descrição, tags, status, `image`,
  `demoHref`/`repoHref`). Screenshots ficam em
  [public/projects/](public/projects/).
- **Contato**: e-mail, WhatsApp, LinkedIn e GitHub ficam em `socials`.

## Estrutura

```
src/
  app/
    layout.tsx            metadados, fontes e OpenGraph/Twitter card
    page.tsx               compõe as seções na página inicial
    globals.css             tema (cores, grid de fundo, animações)
    icon.tsx / apple-icon.tsx / opengraph-image.tsx
                             favicon e imagem de compartilhamento (gerados via next/og)
  components/               Header, Hero, About, Skills, Solutions, Projects,
                             Contact, Footer, Reveal (animação ao rolar), TypedText
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
