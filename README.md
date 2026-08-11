# Bhanu Prasad — Portfolio V2

Next.js 15 + TypeScript + Tailwind CSS v4. Dark theme only for now (light theme is a planned second pass — see notes below).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

Almost everything text-related lives in one file:

```
data/content.ts
```

Update experience, skills, projects, About copy, etc. there — components read from it, so you rarely need to touch component files just to change wording.

## Replace assets

- `public/profile.jpg` — About section photo
- `public/resume.pdf` — linked from the hero and the Resume CTA section

## Project structure

```
app/
  layout.tsx              root layout + metadata (title, OG tags)
  page.tsx                assembles all homepage sections
  globals.css             color tokens, fonts, animations
  case-studies/[slug]/    project case study pages (statically generated)
components/               one component per section
data/content.ts           all site copy + structured data
public/                   resume.pdf, profile.jpg
```

## Deploy to GitHub Pages

A workflow is already set up at `.github/workflows/deploy.yml`. Steps:

1. Push this repo to GitHub
2. Repo Settings → Pages → Source → "GitHub Actions"
3. Push to `main` — the workflow builds and deploys automatically

The site is statically exported (`output: "export"` in `next.config.ts`), so it works on GitHub Pages with no server.

## Known follow-ups / not done yet

- **Theme toggle**: the sun icon in the nav is currently a placeholder (not wired up). Colors are already CSS variables in `globals.css`, so adding a light theme later means defining a second variable set and a toggle — not a rebuild.
- **PwC experience copy**: intentionally kept brief since the role just started (season begins the day after this was built). Update `currentRole.description` and `currentRole.tags` in `data/content.ts` once real contribution areas exist — probably in a few months.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link (no backend). Fine for now; swap in a form service (Formspree, Resend, etc.) later if wanted.
- **Projects**: only 3 real ones listed on purpose — nothing fabricated. Add more via the `projects` array in `data/content.ts` as real work exists (Python/AI projects were deliberately left out until there's something real to show).
