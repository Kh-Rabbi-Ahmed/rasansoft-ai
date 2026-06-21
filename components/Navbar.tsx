"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } catch {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Rasan<span className="text-amber-500">soft</span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 transition-colors hover:text-amber-500 dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:text-slate-200"
          >
            <Moon size={18} className="block dark:hidden" />
            <Sun size={18} className="hidden dark:block" />
          </button>
          <Link
            href="/#contact"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-md"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
