import Link from "next/link";

// PLACEHOLDER DATA: Replace these projects with real portfolio entries.
const projects = [
  {
    name: "FleetOps Dashboard",
    description: "A logistics operations platform for route planning, dispatch visibility, and reporting.",
    tags: ["Next.js", "Maps API", "Analytics"],
  },
  {
    name: "HealthBridge Portal",
    description: "A secure patient scheduling and communication portal for distributed care teams.",
    tags: ["React", "Node.js", "Role-based Access"],
  },
  {
    name: "RetailPulse Insights",
    description: "A real-time inventory and sales intelligence dashboard for multi-store retailers.",
    tags: ["PostgreSQL", "Data Pipelines", "Dashboard"],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Selected Work</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="#" className="mt-6 inline-block text-sm font-semibold text-amber-600 hover:text-amber-500">
                View project →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm font-semibold text-slate-700 dark:text-slate-300">25+ projects delivered</p>
      </div>
    </section>
  );
}
