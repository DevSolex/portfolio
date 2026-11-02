export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Focused on reliable backend work
          </h2>
          <p className="mt-6 text-lg text-muted">
            Most of my time goes into backend work: designing schemas, building
            REST APIs, handling authentication, and wiring payment and messaging
            integrations. I care about understanding why a system is built a
            certain way, not just making it run.
          </p>
          <p className="mt-4 text-muted">
            I have built systems with Python, FastAPI, Node.js, and TypeScript,
            using PostgreSQL as the primary database in most projects. I work with
            the frontend side when a product needs it, and I try to keep the
            boundary between services clear and the code straightforward to follow.
          </p>
        </div>
      </div>
    </section>
  );
}
