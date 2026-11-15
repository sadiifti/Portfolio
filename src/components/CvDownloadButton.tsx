"use client";

import { useState, useEffect, useRef } from "react";
import { Download, ChevronDown, Check, Globe, FileText, Sparkles } from "lucide-react";

interface CvOption {
  id: "us" | "europass";
  name: "US & Academic Format" | "Europass Standard Format";
  filename: string;
  badge: string;
  flag: string;
  description: string;
  pages: string;
}

const cvOptions: CvOption[] = [
  {
    id: "us",
    name: "US & Academic Format",
    filename: "./Md_Sadi_CV_US_Academic.pdf",
    badge: "US / Canada & Top PhD Programs",
    flag: "🇺🇸",
    description: "Standard US academic & tech CV (Research, Publications, Systems).",
    pages: "3 Pages (2026/27 Edition)"
  },
  {
    id: "europass",
    name: "Europass Standard Format",
    filename: "./Md_Sadi_CV_Europass.pdf",
    badge: "Europe & International Standard",
    flag: "🇪🇺",
    description: "Official European template with academic references & full background.",
    pages: "4 Pages with References"
  }
];

export function CvDownloadButton({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<"us" | "europass">("europass");
  const [detectedRegion, setDetectedRegion] = useState<string>("Detecting region...");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Instant client-side timezone check
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const isUS = tz.startsWith("America/") || tz.includes("US") || tz.includes("Honolulu");
      
      if (isUS) {
        setSelectedFormat("us");
        setDetectedRegion("USA / Americas detected");
      } else {
        setSelectedFormat("europass");
        setDetectedRegion("Europe & Global detected");
      }
    } catch {
      setSelectedFormat("europass");
      setDetectedRegion("Default: Europass");
    }

    // 2. Non-blocking IP check for fine-grained country detection
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          if (data.country_code === "US") {
            setSelectedFormat("us");
            setDetectedRegion("United States (Auto-routed)");
          } else {
            setSelectedFormat("europass");
            setDetectedRegion(`${data.country_name || "International"} (Auto-routed Europass)`);
          }
        }
      })
      .catch(() => {
        // Silently keep timezone fallback
      });

    // Close menu on click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCV = cvOptions.find((o) => o.id === selectedFormat) || cvOptions[0];

  const handleDownload = (option: CvOption) => {
    setSelectedFormat(option.id);
    setIsOpen(false);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = option.filename;
    link.download = `Md_Sadi_${option.id === "us" ? "CV_US_Academic" : "CV_Europass"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (mobile) {
    return (
      <div className="w-full space-y-2">
        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between px-1">
          <span className="flex items-center gap-1">
            <Globe className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
            {detectedRegion}
          </span>
          <span className="text-[10px] text-cyan-600 dark:text-cyan-400">Select Format:</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {cvOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleDownload(opt)}
              className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                selectedFormat === opt.id
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-md font-bold"
                  : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>{opt.flag}</span>
              <span>{opt.id === "us" ? "US Format" : "Europass"}</span>
              <Download className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      <div className="inline-flex rounded-full shadow-md shadow-cyan-500/20 group">
        {/* Primary Download Button (Direct click downloads detected region) */}
        <button
          onClick={() => handleDownload(activeCV)}
          title={`Download ${activeCV.name} (${detectedRegion})`}
          className="inline-flex items-center gap-2 rounded-l-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.01] active:scale-[0.98]"
        >
          <Download className="h-3.5 w-3.5" />
          <span className="flex items-center gap-1.5 font-bold">
            <span>Download CV</span>
            <span className="text-[10px] font-mono opacity-90 px-1.5 py-0.2 rounded-full bg-slate-950/20 text-slate-950 font-bold">
              {activeCV.id === "us" ? "US" : "EU"}
            </span>
          </span>
        </button>

        {/* Dropdown Toggle Pill */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select CV Format"
          className="inline-flex items-center justify-center rounded-r-full border-l border-cyan-400/40 bg-blue-600 px-2.5 py-2 text-slate-950 hover:bg-blue-500 transition-all"
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                Regional Auto-Routing
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
              Detected: <strong className="text-cyan-700 dark:text-cyan-400">{detectedRegion}</strong>
            </p>
          </div>

          <div className="p-1 space-y-1">
            {cvOptions.map((opt) => {
              const isSelected = selectedFormat === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleDownload(opt)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 ${
                    isSelected
                      ? "bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-300 dark:border-cyan-800/80"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent"
                  }`}
                >
                  <span className="text-xl mt-0.5">{opt.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {opt.name}
                      </p>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                          <Check className="h-3 w-3" /> Auto
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      {opt.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {opt.pages}
                      </span>
                      <span>&bull;</span>
                      <span className="text-cyan-700 dark:text-cyan-400 font-medium">Click to download</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="px-3 py-1.5 mt-1 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 text-center font-mono">
            Both formats updated for 2026/2027 recruitment cycles
          </div>
        </div>
      )}
    </div>
  );
}
