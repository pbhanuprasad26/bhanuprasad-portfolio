// GitHub Pages serves this site from a sub-path (e.g. /bhanuprasad-portfolio),
// not the domain root. Next.js's `basePath` config handles this automatically
// for <Link> and <Image>, but plain <a href="/resume.pdf"> tags need it added
// manually — this helper does that consistently wherever a raw asset path is used.

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
