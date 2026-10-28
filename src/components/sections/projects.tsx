import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Featured work
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-lg border border-border p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Live
                  </Link>
                ) : null}
              </div>
              <p className="mt-3 text-muted">{project.description}</p>
              <p className="mt-4 text-sm text-foreground/90">
                {project.contribution}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Source
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
