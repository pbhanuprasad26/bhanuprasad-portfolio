// ============================================================
// CONTENT SOURCE OF TRUTH
// Edit this file to update site copy without touching components.
// Every claim here has been confirmed against the resume and
// against what Bhanu has actually done — nothing speculative.
// ============================================================

import { asset } from "@/lib/basePath";

export const site = {
  name: "Bhanu Prasad",
  fullName: "Bhanu Prasad Pochannapeta",
  tagline: "Tax Technology · Automation · AI",
  email: "bhanuprasad26dec@gmail.com",
  linkedin: "linkedin.com/in/bhanu-prasad-pochannapeta-89028225a",
  linkedinUrl: "https://www.linkedin.com/in/bhanu-prasad-pochannapeta-89028225a",
  github: "github.com/pbhanuprasad26",
  githubUrl: "https://github.com/pbhanuprasad26",
  year: 2026,
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ------------------------------------------------------------
// HERO
// ------------------------------------------------------------
export const hero = {
  eyebrow: "TAX TECHNOLOGY · AUTOMATION · AI",
  headlineLine1: "Turning Tax Expertise",
  headlineLine2Prefix: "Into ",
  headlineHighlight: "Technology.",
  subhead:
    "Tax Technology professional specializing in U.S. tax compliance, tax software QA, form development, e-file and print compliance, and technology-driven process improvement.",
  roleBadge: "Associate — Tax Technology",
  roleBadgeSuffix: "@ PwC India",
  engagementBadge: "INTUIT ENGAGEMENT",
  ctaPrimary: { label: "View Experience", href: "#experience" },
  ctaSecondary: { label: "Explore Projects", href: "#projects" },
  ctaTertiary: { label: "Download Resume", href: asset("/resume.pdf") },
  pipeline: [
    { n: "01", label: "TAX RULES" },
    { n: "02", label: "DATA" },
    { n: "03", label: "VALIDATION" },
    { n: "04", label: "CALCULATION" },
    { n: "05", label: "FORMS" },
    { n: "06", label: "E-FILE" },
    { n: "07", label: "AUTOMATION" },
  ],
  pipelineSystemLabel: "SYSTEM / TAX PIPELINE",
  marquee: [
    "U.S. Tax Compliance",
    "Tax Form Development",
    "E-File Compliance",
    "Print Compliance",
    "XML / XSD Schema",
    "IRS MeF",
    "Tax Software QA",
    "Automation",
  ],
  footerStrip: "U.S. TAX → TAX SOFTWARE → TAX TECHNOLOGY → AUTOMATION → AI",
};

// ------------------------------------------------------------
// EXPERIENCE
// ------------------------------------------------------------
export const experienceIntro = {
  eyebrowNum: "01",
  eyebrow: "EXPERIENCE",
  headline: "A career built across U.S. tax and tax software.",
  sub: "From tax preparation to tax technology — each role a step closer to the engineering side of the tax world.",
};

export const currentRole = {
  badge: "CURRENTLY",
  company: "PwC India",
  role: "Associate — Tax Technology",
  engagementBadge: "INTUIT ENGAGEMENT",
  period: "JULY 2026 — PRESENT",
  description:
    "Joined PwC India in July 2026 as an Associate in Tax Technology, supporting the Intuit ProTax engagement (Lacerte & ProSeries). Currently completing enterprise onboarding and Intuit-specific production training ahead of the upcoming tax season — full-scale contribution to form development, e-file compliance, and QA begins as the season starts.",
  tags: ["Onboarding & Training", "Intuit ProTax (Lacerte & ProSeries)", "Production Readiness"],
  note: "Recently joined — detailed contribution areas will be added here as the season progresses.",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  badge?: string;
  description: string;
  tags: string[];
  note?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Associate — Tax Technology",
    company: "PwC India",
    period: "July 2026 — Present",
    badge: "INTUIT ENGAGEMENT",
    description: currentRole.description,
    tags: currentRole.tags,
    note: currentRole.note,
  },
  {
    role: "Tax Analyst",
    company: "CriticalRiver Technologies",
    period: "Aug 2025 — Jun 2026",
    badge: "INTUIT — PROTAX (LACERTE & PROSERIES)",
    description:
      "Delivered end-to-end quality assurance for enterprise tax software supporting U.S. federal and multi-state compliance. Performed functional, regression, and compliance testing across Graphic Rollovers, OSI updates, and Input Sheet enhancements. Validated XML/XSD schema integrity and IRS MeF e-file outputs using Altova XMLSpy. Verified tax calculations, print forms, and 2D Barcode generation while maintaining 100% Print Form Approval across multiple tax years. Executed ATS testing across multiple states, covering Individual (1040), Corporation (1120), S-Corporation (1120-S), Partnership (1065), and Fiduciary (1041) filings. Received formal recognition from the Intuit US Plano team and Bangalore Nexus.",
    tags: [
      "Functional & Regression Testing",
      "XML/XSD Validation",
      "Altova XMLSpy",
      "2D Barcode",
      "ATS Testing",
      "Multi-State Compliance",
      "Jira",
    ],
  },
  {
    role: "Tax Analyst",
    company: "Speridian Technologies",
    period: "Oct 2023 — Jun 2025",
    badge: "H&R BLOCK",
    description:
      "Led state tax certification activities for Kentucky and Utah, coordinating Tax Sample Requests (TSRs), software validation, and Department of Revenue approval processes. Performed Field Value Comparison (FVC), Form Mapper validation, and XML verification to ensure data integrity across H&R Block platforms. Developed Python-assisted validation utilities for tax table and tax rate verification, reducing repetitive manual testing effort by approximately 30%. Also provided live support to U.S. taxpayers on the OLA project, resolving federal and state filing queries while maintaining up-to-date knowledge of annual tax law changes.",
    tags: ["State Certification (KY, UT)", "Field Value Comparison", "Form Mapper", "Python-Assisted Validation", "Live Tax Support"],
  },
  {
    role: "Senior Tax Analyst",
    company: "KHOB Solutions",
    period: "Oct 2021 — Sep 2023",
    description:
      "Prepared and reviewed over 2,000 U.S. individual income tax returns, including Forms 1040, 1040NR, W-7 (ITIN), and FBAR, with a strong focus on accuracy and compliance. Researched IRS regulations and state filing requirements to identify eligible deductions and credits. Resolved IRS and state tax notices by coordinating directly with government agencies, and verified return accuracy before electronic filing.",
    tags: ["1040 / 1040NR", "W-7 (ITIN)", "FBAR", "IRS Notice Resolution", "Lacerte", "ProSeries", "Drake"],
  },
];

// ------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------
export const skillsIntro = {
  eyebrowNum: "02",
  eyebrow: "WHAT I WORK WITH",
  headline: "An ecosystem, not a checklist.",
  sub: "Select any skill for context on how it shows up in my work.",
};

export type SkillGroup = {
  title: string;
  sub: string;
  skills: { name: string; context: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Tax Technology",
    sub: "Where domain depth meets software delivery.",
    skills: [
      { name: "U.S. Individual Taxation", context: "2,000+ returns prepared and reviewed across Forms 1040, 1040NR, W-7, and FBAR." },
      { name: "Federal & State Tax Compliance", context: "Multi-state compliance work including certification for Kentucky and Utah." },
      { name: "Tax Software QA", context: "End-to-end QA across enterprise tax platforms for federal and multi-state filing." },
      { name: "E-File Compliance", context: "IRS MeF e-file output validation using Altova XMLSpy." },
      { name: "Print Compliance", context: "Print form and 2D Barcode validation, 100% Print Form Approval maintained." },
      { name: "XML / XSD Schema Validation", context: "Schema integrity checks supporting IRS e-file compliance." },
    ],
  },
  {
    title: "Technology",
    sub: "The engineering toolkit — growing deliberately.",
    skills: [
      { name: "Python", context: "Built validation utilities that cut repetitive manual testing by ~30%." },
      { name: "XML / XSD / JSON", context: "Used daily for schema validation and e-file compliance work." },
      { name: "TypeScript / JavaScript", context: "Used to build this portfolio with Next.js and React." },
      { name: "AI Prompt Engineering", context: "Applied to research, documentation, and workflow support." },
      { name: "Automation Fundamentals", context: "Core principles applied through Python-assisted validation work." },
      { name: "Git & GitHub", context: "Version control for personal projects, including this site." },
    ],
  },
  {
    title: "Software Testing & QA",
    sub: "The discipline behind every release.",
    skills: [
      { name: "Functional & Regression Testing", context: "Core QA method across CriticalRiver's tax software releases." },
      { name: "Smoke & Integration Testing", context: "Applied ahead of and across production releases." },
      { name: "Test Case Design", context: "Structured test coverage for tax form and calculation changes." },
      { name: "Defect Lifecycle Management", context: "End-to-end defect tracking and resolution using Jira." },
      { name: "Root Cause Analysis", context: "Tracing issues back to the specific field, rule, or data mismatch." },
      { name: "Software Validation", context: "Verifying releases against requirements before sign-off." },
    ],
  },
  {
    title: "AI & Productivity Tools",
    sub: "Exploring as AI becomes part of the Intuit engagement workflow.",
    skills: [
      { name: "Claude", context: "Exploring for research, documentation, and workflow support as part of the upcoming Intuit season." },
      { name: "Cursor", context: "Exploring as an AI-assisted development environment." },
      { name: "Gemini", context: "Exploring alongside other AI tooling entering the Intuit engagement." },
      { name: "MCP Servers", context: "Aware of MCP-based tool integrations as part of the current AI tooling landscape." },
    ],
  },
  {
    title: "Tax Software & Platforms",
    sub: "Hands-on across the professional tax software landscape.",
    skills: [
      { name: "Intuit Lacerte", context: "Primary platform on the Intuit ProTax engagement." },
      { name: "Intuit ProSeries", context: "Primary platform on the Intuit ProTax engagement." },
      { name: "H&R Block (HRBS)", context: "State certification and form validation work at Speridian." },
      { name: "Drake", context: "Used during individual tax return preparation at KHOB Solutions." },
      { name: "GoSystem", context: "Familiar with the platform as part of the professional tax software landscape." },
    ],
  },
  {
    title: "Tools",
    sub: "The daily working environment.",
    skills: [
      { name: "Altova XMLSpy", context: "XML/XSD schema and e-file validation." },
      { name: "Jira", context: "Defect lifecycle management and cross-team collaboration." },
      { name: "Azure DevOps (ADO)", context: "Work item tracking and release coordination." },
      { name: "Jenkins", context: "Familiar with CI/CD pipelines as part of the release process." },
      { name: "Visual Studio Code", context: "Primary editor for scripting and validation utilities." },
      { name: "GitHub", context: "Source control and personal project hosting." },
      { name: "XML Notepad / Notepad++", context: "Quick XML inspection and text-level validation." },
      { name: "ATS", context: "Automated testing across multiple states and form types." },
      { name: "2D Barcode Technologies", context: "Print compliance validation on scannable tax forms." },
    ],
  },
];

// ------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------
export const projectsIntro = {
  eyebrowNum: "03",
  eyebrow: "PROJECTS",
  headline: "Selected work, told honestly.",
  sub: "Client work is labeled confidential and described at the level professional integrity allows. Personal work shows where I'm heading.",
};

export type Project = {
  slug: string;
  n: string;
  category: string;
  badge: string;
  badgeType: "confidential" | "personal";
  title: string;
  summary: string;
  tags: string[];
  caseStudy?: {
    context: string;
    contribute: string[];
    approach: { title: string; description: string }[];
    tools: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "us-tax-form-development",
    n: "01",
    category: "TAX TECHNOLOGY",
    badge: "PROFESSIONAL EXPERIENCE — CONFIDENTIAL",
    badgeType: "confidential",
    title: "U.S. Tax Form Development",
    summary:
      "Contributing to federal and state tax form quality within a major tax software engagement — from calculation testing through print and barcode validation.",
    tags: ["Form Testing", "2D Barcode", "ATS", "Print Compliance"],
    caseStudy: {
      context:
        "Within CriticalRiver's Intuit ProTax engagement, tax forms are living software artifacts. Every calculation must follow the taxing authority's instructions, and every printed output must meet agency compliance standards before release.",
      contribute: [
        "Perform functional and regression testing across form and calculation updates",
        "Validate print output, including 2D Barcode-compliant layouts",
        "Execute ATS testing across multiple states and entity types",
        "Track and resolve defects through the full Jira lifecycle",
      ],
      approach: [
        { title: "Understand", description: "Start from the taxing authority's instructions — what the form must collect and compute." },
        { title: "Validate", description: "Run forms through functional, regression, and print validation before release." },
        { title: "Document", description: "Log defects with clear repro steps and track them through resolution in Jira." },
        { title: "Confirm", description: "Re-verify fixes against the original requirement before sign-off." },
      ],
      tools: ["Jira", "2D Barcode Tools", "ATS", "GitHub"],
    },
  },
  {
    slug: "e-file-schema-compliance",
    n: "02",
    category: "TAX TECHNOLOGY",
    badge: "PROFESSIONAL EXPERIENCE — CONFIDENTIAL",
    badgeType: "confidential",
    title: "E-File & Schema Compliance",
    summary:
      "Supporting XML/XSD schema validation and IRS MeF e-file compliance so returns transmit accurately across jurisdictions.",
    tags: ["XML", "XSD", "E-File", "Altova XMLSpy"],
    caseStudy: {
      context:
        "E-file is where tax software meets government systems. Returns are packaged as XML and must validate against federal and state XSD schemas before transmission — any mismatch blocks the return from filing correctly.",
      contribute: [
        "Validate XML output against federal and state XSD schemas using Altova XMLSpy",
        "Verify IRS MeF e-file compliance ahead of production releases",
        "Investigate and help resolve schema validation failures",
        "Support multi-state ATS testing tied to e-file readiness",
      ],
      approach: [
        { title: "Understand", description: "Read the jurisdiction's schema and business-rule documentation before touching data." },
        { title: "Validate", description: "Run returns through schema and business-rule validation using Altova XMLSpy." },
        { title: "Investigate", description: "Trace validation failures back to the specific field or rule causing them." },
        { title: "Document", description: "Record failure patterns so similar issues resolve faster next time." },
      ],
      tools: ["Altova XMLSpy", "XML", "XSD", "ATS"],
    },
  },
  {
    slug: "this-portfolio",
    n: "03",
    category: "PORTFOLIO ENGINEERING",
    badge: "PERSONAL PROJECT",
    badgeType: "personal",
    title: "This Portfolio",
    summary:
      "Designed and engineered as a product exercise in itself — Next.js, TypeScript, and Tailwind CSS, with all content driven by structured data.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

// ------------------------------------------------------------
// HOW I CONTRIBUTE
// ------------------------------------------------------------
export const contributeIntro = {
  eyebrowNum: "04",
  eyebrow: "METHOD",
  headline: "How I Contribute",
};

export const contributeSteps = [
  { n: "01", title: "Understand", description: "Understand tax requirements, business rules, and compliance requirements." },
  { n: "02", title: "Translate", description: "Translate business and tax requirements into technical specifications." },
  { n: "03", title: "Validate", description: "Validate mappings, calculations, forms, and compliance outputs." },
  { n: "04", title: "Document", description: "Track defects and outcomes clearly so nothing is lost between handoffs." },
  { n: "05", title: "Improve", description: "Feed recurring issues back into the process to prevent repeat work." },
];

export const enterpriseScale = {
  label: "ENTERPRISE SCALE",
  flow: ["TAX RULES", "DATA", "CALCULATIONS", "FORMS", "E-FILE", "COMPLIANCE"],
};

// ------------------------------------------------------------
// WHERE I'M GOING
// ------------------------------------------------------------
export const directionIntro = {
  eyebrowNum: "05",
  eyebrow: "DIRECTION",
  headline: "Where I'm Going",
  sub: "Building deeper expertise in tax technology, with software engineering as a deliberate, honest second track.",
};

export const directionStages = [
  {
    n: "01",
    title: "Tax Technology",
    description: "Deepening specialization across forms, e-file, schema, and compliance engineering — now into the Intuit production season at PwC.",
    status: "PROFESSIONAL EXPERTISE",
    statusType: "expertise" as const,
  },
  {
    n: "02",
    title: "Software Engineering",
    description: "Growing engineering fundamentals through real projects — starting with this portfolio, built end-to-end in Next.js and TypeScript.",
    status: "CURRENTLY DEVELOPING",
    statusType: "developing" as const,
  },
];

export const directionFlow = ["U.S. TAX", "TAX SOFTWARE", "TAX TECHNOLOGY", "SOFTWARE ENGINEERING"];

// ------------------------------------------------------------
// ABOUT
// ------------------------------------------------------------
export const aboutIntro = {
  eyebrowNum: "06",
  eyebrow: "ABOUT",
  headline: "The person behind the pipeline.",
};

export const about = {
  paragraphs: [
    "I'm Bhanu Prasad Pochannapeta — a Tax Technology professional who started in U.S. taxation and kept moving toward the technology side of the tax world.",
    "Today, as an Associate in Tax Technology at PwC India on the Intuit engagement, I work where tax rules meet software: forms, schemas, calculations, e-file and print compliance, and the QA that keeps all of it accurate.",
    "My direction is deliberate — building real engineering fundamentals alongside the tax domain expertise I already have, one honest project at a time.",
  ],
  bullets: [
    "Close to 5 years of U.S. tax experience",
    "Tax software and QA / compliance background",
    "Currently in a Tax Technology role at PwC India — Intuit engagement",
    "MBA in Finance (2025)",
  ],
  photoCaption: { name: "BHANU PRASAD POCHANNAPETA", company: "PWC INDIA" },
  education: {
    label: "EDUCATION",
    degree: "MBA — Finance",
    year: "2025",
    note: "A business foundation that keeps the technology work anchored to financial and compliance reality.",
  },
  narrative: {
    label: "CAREER NARRATIVE",
    text: "A Tax Technology professional building toward software engineering — one honest, real project at a time.",
  },
};

// ------------------------------------------------------------
// RESUME CTA
// ------------------------------------------------------------
export const resumeCta = {
  label: "RESUME",
  headline: "Want the detailed version?",
  sub: "Explore my experience, technical skills, and professional background in a concise resume.",
  viewLabel: "View Resume",
  downloadLabel: "Download Resume",
  href: asset("/resume.pdf"),
};

// ------------------------------------------------------------
// CONTACT
// ------------------------------------------------------------
export const contactIntro = {
  eyebrowNum: "07",
  eyebrow: "CONTACT",
  headline: "Let's build something useful.",
  sub: "Open to conversations around Tax Technology, automation, AI, and technology-driven tax solutions.",
};

export const contactForm = {
  label: "SEND A MESSAGE",
  nameLabel: "NAME",
  namePlaceholder: "Your name",
  emailLabel: "EMAIL",
  emailPlaceholder: "you@company.com",
  messageLabel: "MESSAGE",
  messagePlaceholder: "A role, a project, a conversation...",
  submitLabel: "Send Message",
};

export const contactLinks = [
  { label: "LinkedIn", value: site.linkedin, href: site.linkedinUrl, icon: "linkedin" as const },
  { label: "GitHub", value: site.github, href: site.githubUrl, icon: "github" as const },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "mail" as const },
];

export const footer = {
  copyright: `© ${site.year} ${site.fullName}`,
  tagline: "TAX TECHNOLOGY · AUTOMATION · AI",
};
