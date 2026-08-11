import { ArrowRight } from "lucide-react";
import { directionIntro, directionStages, directionFlow } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Direction() {
  return (
    <section className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader num={directionIntro.eyebrowNum} eyebrow={directionIntro.eyebrow} headline={directionIntro.headline} sub={directionIntro.sub} />

        <div className="grid md:grid-cols-2 gap-6">
          {directionStages.map((stage, i) => (
            <Reveal key={stage.n} delay={i * 100}>
              <div className="rounded-2xl border p-7 md:p-8 h-full flex flex-col" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
                <span className="mono text-sm mb-5" style={{ color: "var(--color-text-faint)" }}>{stage.n}</span>
                <h3 className="text-2xl font-semibold mb-3">{stage.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-muted)" }}>{stage.description}</p>
                <span
                  className="mono text-xs px-3 py-1.5 rounded-md border w-fit mt-6"
                  style={
                    stage.statusType === "expertise"
                      ? { borderColor: "var(--color-accent-border)", background: "var(--color-accent-soft)", color: "var(--color-accent)" }
                      : { borderColor: "var(--color-border-strong)", color: "var(--color-text-muted)" }
                  }
                >
                  {stage.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            {directionFlow.map((item, i) => (
              <span
                key={item}
                className="mono text-sm flex items-center gap-3"
                style={{ color: i === directionFlow.length - 1 ? "var(--color-accent)" : "var(--color-text-muted)" }}
              >
                {item}
                {i < directionFlow.length - 1 && <ArrowRight size={14} style={{ color: "var(--color-accent)" }} />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
