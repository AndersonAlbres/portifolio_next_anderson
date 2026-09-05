import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile, socials } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  alternates: {
    canonical: siteUrl,
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description,
  url: siteUrl,
  email: `mailto:${socials.email}`,
  sameAs: [socials.github, socials.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
