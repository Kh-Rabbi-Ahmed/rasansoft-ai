import Link from "next/link";
import { Globe, Link2, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Let&apos;s build together</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Tell us what you&apos;re building. We&apos;ll help define scope, architecture, and a clear path to launch.
          </p>

          {/* PLACEHOLDER LINKS: Replace with real handles and URLs. */}
          <div className="mt-6 space-y-3">
            <Link href="mailto:hello@rasansoft.example" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 dark:text-slate-300">
              <Mail className="h-4 w-4" aria-hidden="true" /> hello@rasansoft.example
            </Link>
            <Link href="https://www.linkedin.com/company/rasansoft-placeholder" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 dark:text-slate-300">
              <Globe className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </Link>
            <Link href="https://github.com/rasansoft-placeholder" className="flex items-center gap-2 text-slate-700 hover:text-amber-500 dark:text-slate-300">
              <Link2 className="h-4 w-4" aria-hidden="true" /> GitHub
            </Link>
          </div>
        </div>

        <form className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-amber-300 focus:ring dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-amber-300 focus:ring dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-amber-300 focus:ring dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Tell us about your project"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-amber-500 px-5 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
