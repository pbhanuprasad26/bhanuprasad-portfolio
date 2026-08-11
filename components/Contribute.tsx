import { ArrowRight } from "lucide-react";
import { contributeIntro, contributeSteps, enterpriseScale } from "@/data/content";
import Reveal from "./Reveal";

export default function Contribute() {
  return (
    <section className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="mono text-xs flex items-center gap-3 mb-5">
            <span style={{ color: "var(--color-accent)" }}>{contributeIntro.eyebrowNum}</span>
            <span style={{ color: "var(--color-text-faint)" }}>{contributeIntro.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-14">{contributeIntro.headline}</h2>
        </Reveal>

        <div className="grid md:grid-cols-5 border-t border-l md:border-l-0" style={{ borderColor: "var(--color-border)" }}>
          {contributeSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <div
                className="border-b border-r md:border-l p-6 h-full min-h-[220px] flex flex-col"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="mono text-sm mb-6" style={{ color: "var(--color-accent)" }}>{step.n}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8">
            <span className="mono text-xs block mb-4" style={{ color: "var(--color-text-faint)" }}>{enterpriseScale.label}</span>
            <div className="rounded-xl border px-6 py-6 flex flex-wrap items-center gap-3" style={{ borderColor: "var(--color-border)" }}>
              {enterpriseScale.flow.map((item, i) => (
                <span key={item} className="mono text-sm flex items-center gap-3" style={{ color: "var(--color-text-muted)" }}>
                  {item}
                  {i < enterpriseScale.flow.length - 1 && <ArrowRight size={14} style={{ color: "var(--color-accent)" }} />}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
