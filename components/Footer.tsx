import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Rasan<span className="text-amber-500">soft</span>
          </Link>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            We build, design, and ship — end to end.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">Navigate</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#work">Work</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">Connect</h3>
          {/* PLACEHOLDER LINKS: Replace with real channels. */}
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link href="mailto:hello@rasansoft.example">Email</Link></li>
            <li><Link href="https://www.linkedin.com/company/rasansoft-placeholder">LinkedIn</Link></li>
            <li><Link href="https://github.com/rasansoft-placeholder">GitHub</Link></li>
            <li><Link href="https://facebook.com/rasansoft-placeholder">Facebook</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
          {/* PLACEHOLDER ADDRESS: Replace with real office details. */}
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">House 00, Road 00, Dhaka, Bangladesh</p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-slate-500 sm:px-6 dark:text-slate-400">
        © {year} Rasansoft. All rights reserved.
      </p>
    </footer>
  );
}
