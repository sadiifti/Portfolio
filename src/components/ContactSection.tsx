"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Download, ExternalLink, MessageSquare, Send } from "lucide-react";
import { CvDownloadButton } from "@/components/CvDownloadButton";

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <MessageSquare className="h-3.5 w-3.5" /> Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Whether you are discussing doctoral research opportunities, agentic AI voice integrations, clean energy ventures, or international product consulting—my channels are always open.
          </p>
        </div>

        {/* Contact Cards Grid (4 Cards: Outlook, Gmail, WhatsApp, Phone/WeChat) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {/* Email 1: Outlook (Primary) */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 block font-semibold">Primary Academic &amp; Research</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">mdsadi95@outlook.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="mailto:mdsadi95@outlook.com"
                className="flex-1 text-center py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-sm"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard("mdsadi95@outlook.com", "email1")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy Email"
              >
                {copiedKey === "email1" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Email 2: Gmail (Personal / Direct) */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-rose-500/40 transition-colors shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-rose-700 dark:text-rose-400 block font-semibold">Direct Email (Gmail)</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">ifteferdous@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="mailto:ifteferdous@gmail.com"
                className="flex-1 text-center py-2 rounded-lg bg-rose-500 text-white font-semibold text-xs hover:bg-rose-400 transition-colors shadow-sm"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard("ifteferdous@gmail.com", "email2")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy Email"
              >
                {copiedKey === "email2" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <WhatsappIcon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 block font-semibold">WhatsApp Direct</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">+881631416070</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="https://wa.me/881631416070"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition-colors shadow-sm"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={() => copyToClipboard("+881631416070", "whatsapp")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy WhatsApp"
              >
                {copiedKey === "whatsapp" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Phone / WeChat Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400 block font-semibold">Phone / WeChat (China)</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">(+86) 15192827047</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="tel:+8615192827047"
                className="flex-1 text-center py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors shadow-sm"
              >
                Call
              </a>
              <button
                onClick={() => copyToClipboard("(+86) 15192827047", "phone")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy Number"
              >
                {copiedKey === "phone" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar with smart regional CV Download */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-center">
          <CvDownloadButton />
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">&bull;</span>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Locations: Shenzhen, China &bull; Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </section>
  );
}
