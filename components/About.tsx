import Image from "next/image";
import { GraduationCap, Diamond } from "lucide-react";
import { aboutIntro, about } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="mono text-xs flex items-center gap-3 mb-5">
            <span style={{ color: "var(--color-accent)" }}>{aboutIntro.eyebrowNum}</span>
            <span style={{ color: "var(--color-text-faint)" }}>{aboutIntro.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-14">{aboutIntro.headline}</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">
          <div>
            <Reveal delay={80}>
              <div className="flex flex-col gap-5">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed" style={{ color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col mt-10">
                {about.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
                    <Diamond size={10} style={{ color: "var(--color-accent)", fill: "var(--color-accent)" }} />
                    <span className="text-base">{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={120}>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/profile.jpg"
                    alt={about.photoCaption.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 mono text-[11px]" style={{ color: "var(--color-text-faint)" }}>
                  <span>{about.photoCaption.name}</span>
                  <span>{about.photoCaption.company}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border p-6" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} style={{ color: "var(--color-accent)" }} />
                  <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{about.education.label}</span>
                </div>
                <h3 className="text-xl font-semibold">{about.education.degree}</h3>
                <p className="mono text-xs mt-1" style={{ color: "var(--color-text-faint)" }}>{about.education.year}</p>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{about.education.note}</p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="rounded-2xl border p-6" style={{ borderColor: "var(--color-border)" }}>
                <span className="mono text-xs block mb-3" style={{ color: "var(--color-text-faint)" }}>{about.narrative.label}</span>
                <p className="text-lg font-medium leading-snug">{about.narrative.text}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
