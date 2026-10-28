import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://portfolio-beta-nine-77.vercel.app";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaila Solomon Monday | Backend-Focused Full-Stack Engineer",
    description:
      "Backend-focused full-stack engineer building APIs, database-backed applications, authentication, and integrations.",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
