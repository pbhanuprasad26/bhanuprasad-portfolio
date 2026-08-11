import { Diamond, FileText } from "lucide-react";
import { hero } from "@/data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-[120px] md:pt-[160px] pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px]" style={{ background: "var(--color-accent)" }} />
                <span className="mono text-xs" style={{ color: "var(--color-text-muted)" }}>
                  {hero.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight">
                {hero.headlineLine1}
                <br />
                {hero.headlineLine2Prefix}
                <span style={{ color: "var(--color-accent)" }}>{hero.headlineHighlight}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed max-w-md" style={{ color: "var(--color-text-muted)" }}>
                {hero.subhead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3 mt-8">
                <div
                  className="px-4 py-2.5 rounded-lg border text-sm font-medium"
                  style={{ borderColor: "var(--color-border-strong)" }}
                >
                  {hero.roleBadge}{" "}
                  <span style={{ color: "var(--color-text-muted)" }}>{hero.roleBadgeSuffix}</span>
                </div>
                <div
                  className="mono px-4 py-2.5 rounded-lg border text-xs flex items-center"
                  style={{ borderColor: "var(--color-accent-border)", background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
                >
                  {hero.engagementBadge}
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <a
                  href={hero.ctaPrimary.href}
                  className="px-6 py-3.5 rounded-lg font-medium text-sm transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--color-accent)", color: "white" }}
                >
                  {hero.ctaPrimary.label} ↓
                </a>
                <a
                  href={hero.ctaSecondary.href}
                  className="px-6 py-3.5 rounded-lg font-medium text-sm border transition-colors hover-surface"
                  style={{ borderColor: "var(--color-border-strong)" }}
                >
                  {hero.ctaSecondary.label} ↗
                </a>
                <a
                  href={hero.ctaTertiary.href}
                  download
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <FileText size={16} />
                  {hero.ctaTertiary.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Pipeline diagram */}
          <Reveal delay={200}>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
                <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>
                  {hero.pipelineSystemLabel}
                </span>
                <span className="mono text-xs flex items-center gap-1.5" style={{ color: "var(--color-accent)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
                  LIVE
                </span>
              </div>
              <div className="px-6 py-8 relative">
                <div
                  className="absolute left-[31px] top-8 bottom-8 w-[1.5px]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, var(--color-accent) 0 4px, transparent 4px 8px)",
                  }}
                />
                {hero.pipeline.map((step, i) => (
                  <div
                    key={step.n}
                    className="pipeline-step relative flex items-center gap-5 py-4"
                    style={{ animationDelay: `${450 + i * 230}ms` }}
                  >
                    <Diamond
                      size={16}
                      className="relative z-10 shrink-0"
                      style={{
                        color: "var(--color-accent)",
                        fill: i === hero.pipeline.length - 1 ? "var(--color-accent)" : "transparent",
                      }}
                    />
                    <div>
                      <span className="mono text-xs block" style={{ color: "var(--color-text-faint)" }}>
                        {step.n}
                      </span>
                      <span className="font-medium tracking-wide text-sm">{step.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mono text-xs px-6 py-4 border-t flex justify-between"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-faint)" }}
              >
                <span>{hero.footerStrip}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex whitespace-nowrap py-4 marquee-track" style={{ width: "max-content" }}>
          {[...hero.marquee, ...hero.marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-8 mx-4">
              <span className="text-base md:text-lg font-medium" style={{ color: "var(--color-text-muted)" }}>
                {item}
              </span>
              <Diamond size={8} style={{ color: "var(--color-accent)", fill: "var(--color-accent)" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
