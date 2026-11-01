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
      "A WhatsApp-first payment platform for informal merchants in Nigeria and Ghana. Merchants type commands in a ConFam WhatsApp thread to generate payment links, receive funds via Paystack, and track every sale in an append-only ledger.",
    contribution:
      "Built and own this project end to end. Implemented the WhatsApp Cloud API message routing and command handling, Paystack webhook processing with HMAC-SHA512 signature verification, payment link creation and expiry, bank account resolution and subaccount onboarding, the append-only ledger with PostgreSQL-enforced insert-only rules, and a 48-hour cooling-off window for payout account changes.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Paystack",
      "WhatsApp Cloud API",
      "Docker",
    ],
    repo: "https://github.com/DevSolex/ConFam",
    live: "https://con-fam.vercel.app/",
  },
  {
    name: "Vintique",
    description:
      "An e-commerce application for vintage and second-hand clothing. Users can browse products, manage a cart, check out with Paystack, and track orders. Admins manage inventory and user accounts.",
    contribution:
      "Worked on the backend: REST API routes for products, cart, orders, and payments; SQLAlchemy models and Alembic migrations; JWT authentication with bcrypt password hashing; Cloudinary integration for product image uploads with validation and soft-delete cleanup; and the Paystack webhook handler for post-payment stock deduction.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Paystack",
      "Cloudinary",
      "Docker",
    ],
    repo: "https://github.com/Cohort-IV-Web2-Advance/vintique",
    live: "https://vintique-one.vercel.app/",
  },
  {
    name: "Nex Innovations",
    description:
      "A full-stack web application for a branding and print studio. The public site covers services, portfolio, pricing, and a custom T-shirt ordering flow. An admin dashboard handles orders, enquiries, products, and portfolio items.",
    contribution:
      "Worked across the stack in a TypeScript monorepo. Contributed to the Express API and Prisma database layer, email delivery with Resend for OTP-based guest checkout and admin verification, Cloudinary image upload integration, and deployment configuration fixes for Render and Supabase.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Resend",
      "Cloudinary",
      "Paystack",
    ],
    repo: "https://github.com/DevSolex/NexInnovation",
    live: "https://nex-innovation.vercel.app/",
  },
  {
    name: "Build Planner",
    description:
      "An AI-powered business plan generator. Users answer a guided questionnaire and receive a structured business plan covering executive summary, market analysis, competitive landscape, and SWOT. Plans can be edited and exported to PDF.",
    contribution:
      "Implemented the guided questionnaire flow and the plan preview, which assembles user answers into a structured output. The project is a TypeScript monorepo with a Next.js frontend and an Express backend that calls the Anthropic API to generate plan sections.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "Anthropic API",
    ],
    repo: "https://github.com/elcareem/build-planner",
    live: "https://build-planner-sandy.vercel.app/",
  },
];
