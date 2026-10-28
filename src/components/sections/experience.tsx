const experiences = [
  {
    role: "Full-Stack Engineer Intern",
    company: "Blockfuse Labs",
    period: "July 2026–Present",
    points: [
      "Working on full-stack features with a focus on practical integration between frontend and backend.",
    ],
  },
  {
    role: "Backend Engineer Intern",
    company: "TrueMinds Innovation",
    period: "2025–2026",
    points: [
      "Built and maintained backend APIs for internal systems.",
      "Worked with database models, authentication, and application workflows.",
      "Handled assignment workflows, submissions, grading, and feedback where needed.",
      "Integrated backend services with frontend applications.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h2>
        <div className="mt-10 space-y-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="rounded-lg border border-border p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-muted">{exp.company}</p>
                </div>
                <p className="text-sm text-muted">{exp.period}</p>
              </div>
              <ul className="mt-6 space-y-3 text-muted">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted/60" />
                    <span>{point}</span>
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
