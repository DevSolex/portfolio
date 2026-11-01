import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://solex-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samaila Solomon Monday | Backend-Focused Full-Stack Engineer",
    template: "%s | Samaila Solomon Monday",
  },
  description:
    "Backend-focused full-stack engineer building APIs, database-backed applications, authentication, and integrations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Samaila Solomon Monday | Backend-Focused Full-Stack Engineer",
    description:
      "Backend-focused full-stack engineer building APIs, database-backed applications, authentication, and integrations.",
    siteName: "Samaila Solomon Monday",
    images: [
      {
        url: `${siteUrl}/images/dev-solex.jpeg`,
        width: 810,
        height: 1080,
        alt: "Samaila Solomon Monday",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Samaila Solomon Monday | Backend-Focused Full-Stack Engineer",
    description:
      "Backend-focused full-stack engineer building APIs, database-backed applications, authentication, and integrations.",
    images: [`${siteUrl}/images/dev-solex.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
