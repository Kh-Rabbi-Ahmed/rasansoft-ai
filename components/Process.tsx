const steps = ["Discover", "Design", "Build", "Launch & Support"];

export default function Process() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">How we work</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Step {index + 1}</span>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
