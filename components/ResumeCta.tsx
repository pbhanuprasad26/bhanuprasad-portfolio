import { FileText, Download } from "lucide-react";
import { resumeCta } from "@/data/content";
import Reveal from "./Reveal";

export default function ResumeCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div
            className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}
          >
            <div>
              <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{resumeCta.label}</span>
              <h3 className="text-3xl md:text-4xl font-semibold mt-3">{resumeCta.headline}</h3>
              <p className="mt-3 max-w-md" style={{ color: "var(--color-text-muted)" }}>{resumeCta.sub}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={resumeCta.href}
                target="_blank"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm"
                style={{ background: "var(--color-accent)", color: "white" }}
              >
                <FileText size={16} />
                {resumeCta.viewLabel}
              </a>
              <a
                href={resumeCta.href}
                download
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm border"
                style={{ borderColor: "var(--color-border-strong)" }}
              >
                <Download size={16} />
                {resumeCta.downloadLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
