import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project || !project.caseStudy) return notFound();

  const total = projects.length;
  const next = projects[(index + 1) % total];

  return (
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-14">
      <div className="flex items-center justify-between mb-14">
        <Link
          href="/#projects"
          className="group flex items-center gap-2 text-sm transition-colors duration-300"
          style={{ color: "var(--color-text-muted)" }}
        >
          <ArrowLeft
            size={15}
            className="transition-all duration-300 ease-out text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-accent-bright)] group-hover:-translate-x-1"
          />
          <span className="group-hover:text-[color:var(--color-text)] transition-colors duration-300">
            Back to projects
          </span>
        </Link>
        <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>
          CASE STUDY {project.n} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <Reveal>
        <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{project.category}</span>
        <span
          className="mono text-[11px] ml-3 px-2.5 py-1 rounded border inline-flex items-center gap-1.5"
          style={{ borderColor: "var(--color-border-strong)", color: "var(--color-text-muted)" }}
        >
          <Lock size={10} />
          {project.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mt-5 leading-[1.1]">{project.title}</h1>
        <p className="text-lg mt-4 max-w-xl" style={{ color: "var(--color-text-muted)" }}>{project.summary}</p>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_260px] gap-12 mt-14">
        <div>
          <Reveal delay={80}>
            <span className="mono text-xs block mb-4" style={{ color: "var(--color-accent)" }}>CONTEXT</span>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{project.caseStudy.context}</p>
            <p className="text-sm italic mt-4" style={{ color: "var(--color-text-faint)" }}>
              Client details, data, and implementation specifics are confidential and intentionally omitted.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <span className="mono text-xs block mt-12 mb-4" style={{ color: "var(--color-accent)" }}>WHAT I CONTRIBUTE</span>
            <div className="flex flex-col">
              {project.caseStudy.contribute.map((item) => (
                <div key={item} className="py-3.5 border-b text-sm" style={{ borderColor: "var(--color-border)" }}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <span className="mono text-xs block mt-12 mb-4" style={{ color: "var(--color-accent)" }}>APPROACH</span>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.caseStudy.approach.map((step, i) => (
                <div key={step.title} className="rounded-xl border p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
                  <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold mt-2 mb-1.5">{step.title}</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border)" }}>
            <span className="mono text-xs block mb-4" style={{ color: "var(--color-text-faint)" }}>TOOLS</span>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.caseStudy.tools.map((tool) => (
                <span key={tool} className="text-xs px-2.5 py-1.5 rounded border" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>Want to talk about this kind of work?</p>
            <Link
              href="/#contact"
              className="block text-center px-4 py-3 rounded-lg font-medium text-sm"
              style={{ background: "var(--color-accent)", color: "white" }}
            >
              Start a conversation →
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="border-t mt-16 pt-8" style={{ borderColor: "var(--color-border)" }}>
        <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>NEXT CASE STUDY</span>
        <Link
          href={next.caseStudy ? `/case-studies/${next.slug}` : "/#projects"}
          className="group flex items-center gap-3 text-2xl font-semibold mt-2 w-fit"
        >
          <span>{next.title}</span>
          <ArrowRight
            size={22}
            className="transition-all duration-300 ease-out text-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent-bright)] group-hover:translate-x-1.5 group-hover:scale-125"
          />
        </Link>
      </div>
    </main>
  );
}
