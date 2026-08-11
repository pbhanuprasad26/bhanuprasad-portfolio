"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceEntry } from "@/data/content";
import Reveal from "./Reveal";

export default function Timeline({ items }: { items: ExperienceEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillHeight, setFillHeight] = useState(0);
  const [filledCount, setFilledCount] = useState(0);

  useEffect(() => {
    let frame = 0;

    function measure() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Line starts filling as it enters the lower part of the viewport,
      // finishes filling as its bottom clears the upper part — works
      // smoothly in both scroll directions since it's driven by position.
      const startTrigger = vh * 0.82;
      const endTrigger = vh * 0.3;
      const span = rect.height + (startTrigger - endTrigger);
      const traveled = startTrigger - rect.top;
      const pct = Math.min(Math.max(traveled / span, 0), 1);
      const px = pct * rect.height;

      setFillHeight(px);

      let count = 0;
      itemRefs.current.forEach((node) => {
        if (node && node.offsetTop <= px + 6) count++;
      });
      setFilledCount(count);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative pl-8 md:pl-10">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-[1.5px]"
        style={{ background: "var(--color-border-strong)" }}
      />
      <div
        className="absolute left-[7px] top-2 w-[1.5px] timeline-fill"
        style={{ height: `${fillHeight}px`, background: "var(--color-accent)" }}
      />

      {items.map((role, i) => {
        const filled = i < filledCount;
        return (
          <Reveal key={role.company + role.period} delay={i * 60}>
            <div
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              className="relative pb-14 last:pb-0"
            >
              <span
                className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rotate-45 border-2 transition-colors duration-500"
                style={{
                  borderColor: filled ? "var(--color-accent)" : "var(--color-border-strong)",
                  background: filled ? "var(--color-accent)" : "var(--color-bg)",
                }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {role.role}{" "}
                  <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>· {role.company}</span>
                </h3>
                <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>
                  {role.period}
                </span>
              </div>
              {role.badge && (
                <span className="mono text-xs inline-block mt-2" style={{ color: "var(--color-accent)" }}>
                  {role.badge}
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
                {role.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-md border"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {role.note && (
                <p className="mt-3 text-xs italic" style={{ color: "var(--color-text-faint)" }}>
                  {role.note}
                </p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
