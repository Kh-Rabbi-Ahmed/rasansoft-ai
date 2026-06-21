import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// PLACEHOLDER OPENINGS: Replace with real roles and details.
const openings = [
  { title: "Frontend Engineer", type: "Full-time", location: "Dhaka / Remote" },
  { title: "Product Designer", type: "Contract", location: "Remote" },
  { title: "DevOps Engineer", type: "Full-time", location: "Dhaka / Hybrid" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 py-16 dark:bg-slate-950">
        <section className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Join Rasansoft</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We&apos;re building thoughtful software with a small, focused team. If you care about product quality,
            delivery discipline, and learning fast, we&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-4">
            {openings.map((role) => (
              <article
                key={role.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{role.title}</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {role.type} • {role.location}
                </p>
                {/* PLACEHOLDER EMAIL: Replace with real hiring inbox. */}
                <Link
                  href="mailto:careers@rasansoft.example"
                  className="mt-4 inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
                >
                  Apply
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
