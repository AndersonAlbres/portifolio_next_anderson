// Depois de escolher o domínio final, defina NEXT_PUBLIC_SITE_URL no ambiente
// de deploy (ex.: Vercel) para OpenGraph, sitemap e robots resolverem com URL absoluta.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
