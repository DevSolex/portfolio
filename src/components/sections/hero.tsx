import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-16">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Backend-Focused Full-Stack Engineer
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Samaila Solomon Monday
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I build APIs and backend systems, work with databases and integrations,
            and handle the frontend when a product needs it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/90"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:bg-surface"
            >
              Contact Me
            </Link>
            <Link
              href="/Samaila-Solomon-Monday-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:bg-surface"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/dev-solex.jpeg"
              alt="Portrait of Samaila Solomon Monday"
              fill
              sizes="(max-width: 768px) 90vw, 384px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
