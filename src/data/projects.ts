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
      "A WhatsApp-first merchant platform. Merchants can receive payments via WhatsApp, manage payment links, track sales records, and onboard customers through a conversational interface.",
    contribution:
      "Built and own this project. Implemented merchant onboarding, payment link generation, Paystack payment processing and webhook handling, bank account resolution, sales record tracking, and the WhatsApp Cloud API integration.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Paystack",
      "WhatsApp Cloud API",
    ],
    repo: "https://github.com/DevSolex/ConFam",
    live: "https://con-fam.vercel.app/",
  },
  {
    name: "Vintique",
    description:
      "An e-commerce application for browsing and purchasing vintage and second-hand products, with user authentication, product listings, cart management, and order processing.",
    contribution:
      "Worked on the backend: API endpoints for products, cart, and orders; database models and migrations; authentication and authorization; Cloudinary integration for product image uploads; and payment-related integration.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "REST APIs", "Cloudinary"],
    repo: "https://github.com/Cohort-IV-Web2-Advance/vintique",
    live: "https://vintique-one.vercel.app/",
  },
  {
    name: "Nex Innovations",
    description:
      "A Next.js web application for Nex Innovations, a technology company. Includes a public-facing site with service pages, team information, and a contact flow backed by email delivery.",
    contribution:
      "Worked on the Next.js application, API route integration, database and deployment configuration fixes, and email-related functionality using a third-party email service.",
    technologies: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
    repo: "https://github.com/DevSolex/NexInnovation",
    live: "https://nex-innovation.vercel.app/",
  },
  {
    name: "Build Planner",
    description:
      "A business-planning tool with a guided multi-step questionnaire. Users answer structured questions about their business idea and receive a formatted plan preview based on their answers.",
    contribution:
      "Implemented the guided questionnaire flow and the structured plan preview that assembles user answers into a readable output.",
    technologies: ["TypeScript", "Next.js", "React"],
    repo: "https://github.com/elcareem/build-planner",
    live: "https://build-planner-sandy.vercel.app/",
  },
];
