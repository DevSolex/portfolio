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
            I focus on backend development and API design, building database-backed
            applications with attention to authentication, authorization, and
            integrations. When needed, I handle frontend integration to connect
            those systems to a working product.
          </p>
          <p className="mt-4 text-muted">
            My work involves designing schemas, building REST APIs, wiring payment
            and third-party integrations, and keeping the pieces between services
            consistent and testable.
          </p>
        </div>
      </div>
    </section>
  );
}
