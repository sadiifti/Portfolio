"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, ExternalLink, Sparkles, MapPin, Award, CheckCircle } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const roles = [
  "Deep Learning & Medical AI Researcher",
  "Co-Founder @ Call Well (Agentic AI Voice)",
  "Chief Operating Officer (COO) @ GLan Green Energy",
  "FinTech Product Manager @ SwiftPass",
  "Alibaba Cloud Best Young Talent Awardee"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-slate-900/80 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium mb-8 backdrop-blur-md glow-pill">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span>Open for AI Research &amp; Global Executive Collaborations</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Content Info */}
          <div className="lg:col-span-8 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                Md Sadi
              </span>
            </h1>

            <p className="text-sm sm:text-base font-mono text-slate-600 dark:text-slate-400 mb-4 tracking-wide">
              Md Sadi Iftia Khairul Ferdous Bhuiyan
            </p>

            {/* Dynamic Rotating Role */}
            <div className="h-10 mb-6 flex items-center">
              <span className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                <span className="text-cyan-600 dark:text-cyan-400">&gt; </span>
                <span className="text-slate-900 dark:text-slate-100 transition-all duration-300">
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Pioneering biomedical and vision architectures (<strong className="text-slate-900 dark:text-white font-medium">PACER 90.93% ECG Transformer</strong>, <strong className="text-slate-900 dark:text-white font-medium">YOLOv9 &gt;35 FPS</strong>) while building real-world enterprise infrastructure. Serving as <strong className="text-slate-900 dark:text-white font-medium">COO at GLan Green Energy</strong>, <strong className="text-slate-900 dark:text-white font-medium">Co-Founder at Call Well</strong>, and formerly leading telecom network modernization for BTCL with <strong className="text-slate-900 dark:text-white font-medium">Alibaba Cloud</strong>.
            </p>

            {/* Location & Alma Mater tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-8 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" /> Shenzhen, China &bull; Dhaka, Bangladesh
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Award className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> B.Sc. Electronics Info Eng, NJUPT
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Research Papers
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-6 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-white active:scale-[0.98]"
              >
                <Mail className="mr-2 h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                Contact Me
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://www.linkedin.com/in/mdsadiiftia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://github.com/sadiifti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/8800016314167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-sm"
                  aria-label="WhatsApp Direct"
                  title="WhatsApp: +8800016314167"
                >
                  <WhatsappIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card & Avatar */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated glowing border gradient */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl w-64 h-80 sm:w-72 sm:h-96">
                  <img
                    src="./profile.jpeg"
                    alt="Md Sadi Iftia"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle glass overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-sm">Md Sadi Iftia</p>
                        <p className="text-[11px] text-cyan-400">Researcher &amp; Founder</p>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                        <CheckCircle className="h-3 w-3 text-emerald-400" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
