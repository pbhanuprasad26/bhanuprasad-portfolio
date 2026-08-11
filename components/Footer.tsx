import { footer, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-display font-semibold">{site.name}</span>
        <span className="text-sm" style={{ color: "var(--color-text-faint)" }}>{footer.copyright}</span>
        <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{footer.tagline}</span>
      </div>
    </footer>
  );
}
