import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Depois de escolher o domínio final, defina NEXT_PUBLIC_SITE_URL no ambiente
// de deploy (ex.: Vercel) para as imagens de OpenGraph resolverem com URL absoluta.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Anderson Albres — Desenvolvedor Python & Full Stack";
const description =
  "Portfólio de Anderson Albres, desenvolvedor Python e Full Stack especializado em automação, APIs REST, integrações e sistemas web.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Anderson Albres",
    "Desenvolvedor Python",
    "Full Stack",
    "Automação",
    "APIs REST",
    "n8n",
    "React",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Anderson Albres",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
