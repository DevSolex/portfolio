const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication", "Authorization", "API integrations"],
  },
  {
    title: "Databases and data access",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "SQLAlchemy"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Tools and infrastructure",
    items: ["Git", "GitHub", "Docker", "Linux", "CI/CD fundamentals", "Deployment tools"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Practical toolkit
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-border p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
