import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:bg-surface"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
