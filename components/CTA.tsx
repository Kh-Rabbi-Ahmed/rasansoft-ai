import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-center shadow-xl dark:bg-slate-800 sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">Have a project in mind?</h2>
          <p className="mt-3 text-slate-300">Let’s shape it into software that performs from day one.</p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </section>
  );
}
