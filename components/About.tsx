import { Handshake, Layers3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Full Lifecycle",
    description: "From product strategy and UX to launch, monitoring, and iteration.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Stack",
    description: "We use proven, current technologies that stay maintainable over time.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description: "We stay close after release with support, optimization, and guidance.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About Rasansoft</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          We help teams move from concept to reliable production software with clear communication,
          practical execution, and a strong focus on measurable business outcomes.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className="h-6 w-6 text-amber-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
