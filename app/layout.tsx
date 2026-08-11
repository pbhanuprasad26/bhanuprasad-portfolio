import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhanu Prasad Pochannapeta | Tax Technology & Automation",
  description:
    "Tax Technology professional specializing in U.S. tax compliance, tax software, automation, and emerging AI-driven solutions.",
  openGraph: {
    title: "Bhanu Prasad Pochannapeta | Tax Technology & Automation",
    description:
      "Tax Technology professional specializing in U.S. tax compliance, tax software, automation, and emerging AI-driven solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Prasad Pochannapeta | Tax Technology & Automation",
    description:
      "Tax Technology professional specializing in U.S. tax compliance, tax software, automation, and emerging AI-driven solutions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', t);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
