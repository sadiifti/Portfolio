"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageTranslator } from "@/components/LanguageTranslator";
import { CvDownloadButton } from "@/components/CvDownloadButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#hero" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Interactive Demo", href: "#interactive-demo" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-nav shadow-lg shadow-black/10 dark:shadow-black/30" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo / Personal Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            MS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-wide text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
              Md Sadi
            </span>
            <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Researcher &amp; COO
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-200/50 dark:bg-slate-900/60 border border-slate-300/60 dark:border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-3 py-1.5 rounded-full transition-colors hover:bg-slate-300/40 dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Translator + Theme Toggle + CV */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageTranslator />
          <ThemeToggle />

          <div className="hidden sm:block">
            <CvDownloadButton />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-3 pb-6 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-2">
              <CvDownloadButton mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
