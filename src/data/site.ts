// Conteúdo central do site. Edite aqui — os componentes só consomem estes dados.

export const profile = {
  name: "Anderson Albres",
  role: "Desenvolvedor Python & Full Stack",
  taglines: [
    "Python Developer",
    "Full Stack Developer",
    "Automação e Integrações",
    "React • Node.js • n8n",
    "APIs REST e Soluções Web",
  ],
  bio: [
    "Desenvolvedor Python com experiência em automação de processos, integrações de sistemas e desenvolvimento Full Stack.",
    "Atuo na criação de soluções voltadas para automação empresarial, APIs REST, sistemas web, dashboards, integrações entre plataformas e processamento/tratamento de dados.",
    "Atualmente focado em evolução Full Stack utilizando React, Node.js e Python.",
  ],
  location: "Brasil",
};

export const socials = {
  github: "https://github.com/AndersonAlbres",
  linkedin: "https://www.linkedin.com/in/anderson-albres-202a1a1a7/",
  email: "andersonalbres99@gmail.com",
  whatsapp: "https://wa.me/5551991251926",
  whatsappDisplay: "+55 51 99125-1926",
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Django", "Node.js"],
  },
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Automação & Integrações",
    items: ["n8n", "Selenium", "Playwright"],
  },
  {
    title: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Docker", "OpenTelemetry"],
  },
];

export const solutions: string[] = [
  "Automação de processos empresariais",
  "Desenvolvimento Full Stack",
  "APIs REST e integrações",
  "Dashboards e sistemas web",
  "Web Scraping e OCR",
  "Integrações com n8n",
  "Processamento e tratamento de dados",
  "Sistemas internos e automações operacionais",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string; // screenshot em /public/projects
  demoHref?: string; // link do site/app no ar
  repoHref?: string; // link do repositório público
  status: "Em produção" | "Em desenvolvimento" | "Conceito";
};

// Projetos reais. Acrescente novos aqui conforme forem saindo do forno.
export const projects: Project[] = [
  {
    title: "Termo 1x1",
    description:
      "Jogo de palavras multiplayer em tempo real (estilo Termo/Wordle BR), com modos Duelo, Grupo, Solo e Impostor. Comunicação via WebSocket e instalável como PWA (o multiplayer exige conexão com o servidor). Projeto feito para testar o Claude Code na prática.",
    tags: ["Python", "FastAPI", "WebSocket", "PWA"],
    image: "/projects/termo1x1.png",
    demoHref: "https://jogo-online-wptw.onrender.com/",
    repoHref: "https://github.com/AndersonAlbres/jogo-online",
    status: "Em produção",
  },
  {
    title: "Samara Leite Mídias",
    description:
      "Site institucional para um estúdio de criação de conteúdo digital (social media, fotografia e gestão de redes sociais). Projeto de ponta a ponta: design, desenvolvimento, compra e configuração de domínio próprio até publicação.",
    tags: ["Site institucional", "Domínio & DNS", "Deploy"],
    image: "/projects/samaraleitemidias.png",
    demoHref: "https://www.samaraleitemidias.com.br/",
    status: "Em produção",
  },
];
