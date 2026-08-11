"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { site, nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "var(--color-bg-translucent)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
          <a href="#" className="font-display font-semibold text-lg tracking-tight">
            {site.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium pb-1 transition-colors"
                style={{ color: active === item.href ? "var(--color-text)" : "var(--color-text-muted)" }}
              >
                {item.label}
                {active === item.href && (
                  <span
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover-surface"
              style={{ color: "var(--color-text-muted)" }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className="fixed inset-0 z-[60] md:hidden transition-opacity duration-300"
        style={{
          background: "var(--color-bg)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex items-center justify-between px-5 h-[76px]">
          <span className="font-display font-semibold text-lg">{site.name}</span>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} style={{ color: "var(--color-text-muted)" }}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
        </div>
        <nav className="flex flex-col gap-2 px-5 mt-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-display font-semibold py-4 border-b"
              style={{
                borderColor: "var(--color-border)",
                animationDelay: `${i * 60}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-8 left-5 right-5">
          <a href={`mailto:${site.email}`} className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {site.email}
          </a>
          <div className="border-t mt-6 pt-6" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-sm" style={{ color: "var(--color-text-faint)" }}>
              © {site.year} {site.fullName}
            </p>
            <p className="mono text-xs mt-2" style={{ color: "var(--color-text-faint)" }}>
              TAX TECHNOLOGY · AUTOMATION · AI
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
