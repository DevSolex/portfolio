export type Project = {
  name: string;
  description: string;
  contribution: string;
  technologies: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "ConFam",
    description:
      "A WhatsApp-first merchant platform for managing payment workflows and sales records.",
    contribution:
      "Worked on merchant onboarding, payment links, bank resolution, sales records, and integrations with Paystack and the WhatsApp Cloud API where applicable.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Paystack",
      "WhatsApp Cloud API",
    ],
    repo: "https://github.com/DevSolex",
  },
  {
    name: "Vintique",
    description: "An e-commerce application for browsing and purchasing products.",
    contribution:
      "Contributed to backend APIs, product management, database operations, and payment verification.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    repo: "https://github.com/DevSolex",
    live: "https://vintique-one.vercel.app/",
  },
  {
    name: "Nex Innovations",
    description: "A website with a supporting API.",
    contribution:
      "Worked on the Next.js application, API integration, database and deployment fixes, and email-related functionality.",
    technologies: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
    repo: "https://github.com/DevSolex",
  },
  {
    name: "Build Planner",
    description:
      "A business-planning application with a guided questionnaire and structured plan preview.",
    contribution:
      "Implemented the guided flow and structured plan preview based on the codebase's actual features.",
    technologies: ["TypeScript", "Next.js", "React"],
    repo: "https://github.com/DevSolex",
  },
];
