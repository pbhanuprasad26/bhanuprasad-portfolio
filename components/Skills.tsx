"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { skillsIntro, skillGroups } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader num={skillsIntro.eyebrowNum} eyebrow={skillsIntro.eyebrow} headline={skillsIntro.headline} sub={skillsIntro.sub} />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="text-sm mt-1 mb-5" style={{ color: "var(--color-text-muted)" }}>
                  {group.sub}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const key = group.title + skill.name;
                    const isOpen = open === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="text-left rounded-lg border px-4 py-2.5 text-sm transition-colors"
                        style={{
                          borderColor: isOpen ? "var(--color-accent-border)" : "var(--color-border)",
                          background: isOpen ? "var(--color-accent-soft)" : "var(--color-bg-elevated)",
                        }}
                      >
                        <span className="flex items-center gap-2">
                          {skill.name}
                          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                        </span>
                        {isOpen && (
                          <span className="block mt-2 text-xs max-w-[220px]" style={{ color: "var(--color-text-muted)" }}>
                            {skill.context}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
