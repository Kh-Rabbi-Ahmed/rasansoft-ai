import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          Based in Dhaka, Bangladesh
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          We build software that <span className="text-amber-500">works</span>.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Rasansoft is a full-stack software agency delivering custom software, polished product design,
          and reliable deployment workflows from idea to launch.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg"
          >
            Start a project
          </Link>
          <Link
            href="/#work"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            See our work
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 shadow-xl dark:border-slate-700">
        <div className="absolute -top-20 -right-14 h-48 w-48 rounded-full bg-amber-500/40 blur-3xl" />
        <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative space-y-4">
          <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm text-slate-200">Feature Delivery</p>
            <p className="mt-1 text-2xl font-bold text-white">98% On-time</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur transition hover:-translate-y-0.5">
              <p className="text-xs uppercase text-slate-300">Build Pipeline</p>
              <p className="mt-2 text-lg font-semibold">Automated</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur transition hover:-translate-y-0.5">
              <p className="text-xs uppercase text-slate-300">Infrastructure</p>
              <p className="mt-2 text-lg font-semibold">Scalable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
