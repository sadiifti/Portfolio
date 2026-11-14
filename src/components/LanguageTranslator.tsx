"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh-CN", label: "中文 (Chinese)", flag: "🇨🇳" },
  { code: "bn", label: "বাংলা (Bengali)", flag: "🇧🇩" },
  { code: "ar", label: "العربية (Arabic)", flag: "🇸🇦" },
  { code: "fr", label: "Français (French)", flag: "🇫🇷" },
  { code: "de", label: "Deutsch (German)", flag: "🇩🇪" },
  { code: "ja", label: "日本語 (Japanese)", flag: "🇯🇵" },
  { code: "es", label: "Español (Spanish)", flag: "🇪🇸" },
];

export function LanguageTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check existing cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    }

    // Initialize Google Translate Script safely
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    if (langCode === "en") {
      // Clear cookie and reload to restore original English text
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
      window.location.reload();
      return;
    }

    // Set google translate cookie
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;

    // Trigger select change if iframe/element is rendered
    const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  const selectedLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden element where Google script initializes */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-500 transition-all shadow-sm"
        aria-label="Translate Website"
        title="Translate Website"
      >
        <Globe className="h-3.5 w-3.5 text-cyan-500" />
        <span className="hidden sm:inline font-mono text-[11px]">{selectedLanguage.label.split(" ")[0]}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            Select Language
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left ${
                  currentLang === lang.code
                    ? "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {currentLang === lang.code && <Check className="h-3.5 w-3.5 text-cyan-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
