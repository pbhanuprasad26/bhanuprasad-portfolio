import Link from "next/link";
import { Lock, ArrowUpRight } from "lucide-react";
import { projectsIntro, projects } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader num={projectsIntro.eyebrowNum} eyebrow={projectsIntro.eyebrow} headline={projectsIntro.headline} sub={projectsIntro.sub} />

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const inner = (
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-start md:items-center py-8 border-t transition-colors group-hover:bg-[var(--color-hover-soft)]" style={{ borderColor: "var(--color-border)" }}>
                <span className="mono text-sm" style={{ color: "var(--color-text-faint)" }}>{project.n}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{project.category}</span>
                    <span
                      className="mono text-[11px] px-2.5 py-1 rounded border flex items-center gap-1.5"
                      style={
                        project.badgeType === "confidential"
                          ? { borderColor: "var(--color-border-strong)", color: "var(--color-text-muted)" }
                          : { borderColor: "var(--color-accent-border)", background: "var(--color-accent-soft)", color: "var(--color-accent)" }
                      }
                    >
                      {project.badgeType === "confidential" && <Lock size={10} />}
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm max-w-xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.summary}
                  </p>
                </div>
                <div className="flex md:flex-col items-start md:items-end gap-2 flex-wrap md:min-w-[160px]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded border" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                      {tag}
                    </span>
                  ))}
                  {project.caseStudy && (
                    <ArrowUpRight
                      size={18}
                      className="mt-1 transition-all duration-300 ease-out text-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent-bright)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-125"
                    />
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={project.slug} delay={i * 60}>
                {project.caseStudy ? (
                  <Link href={`/case-studies/${project.slug}`} className="block group">
                    {inner}
                  </Link>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </Reveal>
            );
          })}
          <div className="border-t" style={{ borderColor: "var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
