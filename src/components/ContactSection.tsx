"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Download, ExternalLink, MessageSquare, Send } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 max-w-4xl mx-auto relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="h-3.5 w-3.5" /> Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Whether you are discussing doctoral research opportunities, agentic AI voice integrations, clean energy ventures, or international product consulting—my inbox is always open.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                <span className="text-sm font-semibold text-white">mdsadi95@outlook.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <a
                href="mailto:mdsadi95@outlook.com"
                className="flex-1 text-center py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard("mdsadi95@outlook.com", "email")}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Phone / WeChat Card */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Phone / WeChat</span>
                <span className="text-sm font-semibold text-white">(+86) 15192827047</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <a
                href="tel:+8615192827047"
                className="flex-1 text-center py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors"
              >
                Call
              </a>
              <button
                onClick={() => copyToClipboard("(+86) 15192827047", "phone")}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy Number"
              >
                {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-800/80 text-center">
          <a
            href="./Sadi_CV.pdf"
            download="Md_Sadi_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-500/40 hover:text-white transition-all"
          >
            <Download className="h-4 w-4 text-cyan-400" />
            <span>Download Official CV (PDF)</span>
          </a>
          <span className="text-xs text-slate-500 font-mono hidden sm:inline">&bull;</span>
          <span className="text-xs text-slate-400 font-mono">
            Locations: Shenzhen, China &bull; Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </section>
  );
}
