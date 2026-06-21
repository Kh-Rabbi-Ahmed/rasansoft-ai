import { CloudCog, Code2, Lightbulb, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Robust web apps, dashboards, and internal platforms built around your workflows.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Paintbrush,
    title: "Website & Product Design",
    description: "User-centered interfaces and design systems that make complex products feel simple.",
    tags: ["Figma", "UX Research", "Design Systems"],
  },
  {
    icon: CloudCog,
    title: "Deployment & Infrastructure",
    description: "Cloud architecture, CI/CD pipelines, and observability for stable deployments.",
    tags: ["Docker", "Kubernetes", "AWS"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description: "Practical architecture and delivery guidance to reduce risk and accelerate roadmap goals.",
    tags: ["Code Review", "Architecture", "Roadmapping"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className="h-6 w-6 text-amber-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
