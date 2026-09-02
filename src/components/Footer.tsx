import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Construído com Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
