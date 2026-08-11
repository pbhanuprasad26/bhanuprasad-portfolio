import { experienceIntro, currentRole, experience } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          num={experienceIntro.eyebrowNum}
          eyebrow={experienceIntro.eyebrow}
          headline={experienceIntro.headline}
          sub={experienceIntro.sub}
        />

        {/* Currently card */}
        <Reveal delay={100}>
          <div className="grid md:grid-cols-2 gap-8 rounded-2xl border p-7 md:p-9 mb-16" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
                <span className="mono text-xs" style={{ color: "var(--color-text-muted)" }}>{currentRole.badge}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold">{currentRole.company}</h3>
              <p className="mt-1" style={{ color: "var(--color-text-muted)" }}>{currentRole.role}</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="mono text-xs px-3 py-1.5 rounded-md border" style={{ borderColor: "var(--color-accent-border)", background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                  {currentRole.engagementBadge}
                </span>
                <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{currentRole.period}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {currentRole.description}
              </p>
            </div>
            <div>
              <span className="mono text-xs block mb-3" style={{ color: "var(--color-text-faint)" }}>CONTRIBUTION AREAS</span>
              <div className="flex flex-col gap-2.5">
                {currentRole.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2.5 text-sm border-b pb-2.5" style={{ borderColor: "var(--color-border)" }}>
                    <span className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--color-accent)" }} />
                    {tag}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs italic" style={{ color: "var(--color-text-faint)" }}>
                {currentRole.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <Timeline items={experience} />
      </div>
    </section>
  );
}
