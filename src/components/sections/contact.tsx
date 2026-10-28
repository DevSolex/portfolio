import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          For opportunities or questions, reach out directly by email or through
          the links below.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Email</p>
            <Link
              href="mailto:devsolex6@gmail.com"
              className="mt-3 inline-block text-lg transition-colors hover:text-muted"
            >
              devsolex6@gmail.com
            </Link>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted">
              Phone
            </p>
            <Link
              href="tel:07086303302"
              className="mt-3 inline-block transition-colors hover:text-muted"
            >
              07086303302
            </Link>
          </div>
          <div className="rounded-lg border border-border p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Links</p>
            <div className="mt-4 flex flex-col gap-3 text-muted">
              <Link
                href="https://github.com/DevSolex"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/samaila-solomon-monday/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href="https://x.com/DevSolex"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
