"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, Sparkles } from "lucide-react";

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
        scrolled ? "py-3 glass-nav shadow-lg shadow-black/20" : "py-5 bg-transparent"
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
            <span className="font-semibold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              Md Sadi
            </span>
            <span className="text-[11px] text-cyan-400/80 font-mono flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Researcher & COO
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full transition-colors hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="./Sadi_CV.pdf"
            download="Md_Sadi_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <a
                href="./Sadi_CV.pdf"
                download="Md_Sadi_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-semibold text-slate-950 shadow-md"
              >
                <Download className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
