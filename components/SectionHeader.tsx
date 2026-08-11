import Reveal from "./Reveal";

export default function SectionHeader({
  num,
  eyebrow,
  headline,
  sub,
}: {
  num: string;
  eyebrow: string;
  headline: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="mono text-xs md:text-sm flex items-center gap-3 mb-5">
          <span className="text-accent" style={{ color: "var(--color-accent)" }}>{num}</span>
          <span className="text-faint" style={{ color: "var(--color-text-faint)" }}>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">{headline}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-5 text-lg max-w-xl" style={{ color: "var(--color-text-muted)" }}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
