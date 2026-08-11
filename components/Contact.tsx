"use client";

import { Linkedin, Github, Mail, Send, ArrowUpRight } from "lucide-react";
import { contactIntro, contactForm, contactLinks, site } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const icons = { linkedin: Linkedin, github: Github, mail: Mail };

function gmailComposeUrl({ to, subject, body }: { to: string; subject?: string; body?: string }) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.open(gmailComposeUrl({ to: site.email, subject, body }), "_blank");
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader num={contactIntro.eyebrowNum} eyebrow={contactIntro.eyebrow} headline={contactIntro.headline} sub={contactIntro.sub} />

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10">
          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-2xl border p-7 md:p-8" style={{ borderColor: "var(--color-border)" }}>
              <span className="mono text-xs block mb-6" style={{ color: "var(--color-text-faint)" }}>{contactForm.label}</span>
              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{contactForm.nameLabel}</span>
                  <input
                    name="name"
                    required
                    placeholder={contactForm.namePlaceholder}
                    className="bg-transparent border rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{contactForm.emailLabel}</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={contactForm.emailPlaceholder}
                    className="bg-transparent border rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="mono text-xs" style={{ color: "var(--color-text-faint)" }}>{contactForm.messageLabel}</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={contactForm.messagePlaceholder}
                    className="bg-transparent border rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-[var(--color-accent)]"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm mt-1"
                  style={{ background: "var(--color-accent)", color: "white" }}
                >
                  <Send size={16} />
                  {contactForm.submitLabel}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex flex-col">
              {contactLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-4 py-5 border-b transition-colors hover-surface-soft"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span className="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0" style={{ borderColor: "var(--color-border)" }}>
                      <Icon size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium">{link.label}</span>
                      <span className="block text-sm" style={{ color: "var(--color-text-muted)" }}>{link.value}</span>
                    </span>
                    <ArrowUpRight size={16} style={{ color: "var(--color-text-faint)" }} />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
