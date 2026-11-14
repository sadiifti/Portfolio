"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Globe, Cpu, CheckCircle2, Calendar, MapPin, ExternalLink, Zap } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  link?: string;
  location: string;
  period: string;
  badge: string;
  badgeColor: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Board Member & Chief Operating Officer (COO)",
    company: "GLan Green Electric Power Energy Co., Ltd.",
    link: "https://glanbd.com",
    location: "Dhaka, Bangladesh",
    period: "Sep 2026 – Present",
    badge: "Executive Leadership & CleanTech",
    badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/60",
    highlights: [
      "Directing nationwide commercial expansion, multi-MW rooftop solar installations, and lithium-ion battery energy storage systems (BESS).",
      "Overseeing daily operations, EPC procurement, regulatory compliance, and strategic tier-1 industrial partnerships.",
      "Leading technical and commercial deployment of industrial-grade clean energy power hardware."
    ],
    skills: ["CleanTech", "Lithium Storage (BESS)", "Industrial Solar", "Executive Strategy", "Operations"]
  },
  {
    role: "Co-Founder / Partner",
    company: "Call Well",
    location: "Remote / Global",
    period: "Aug 2026 – Present",
    badge: "Agentic AI & Startup",
    badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-800/60",
    highlights: [
      "Co-founded an agentic AI voice company delivering autonomous conversational agents for enterprise client support and outreach.",
      "Architected low-latency streaming speech-to-text, LLM agentic reasoning, and natural voice synthesis pipelines.",
      "Orchestrated robust REST/WebSocket API workflows integrating client CRMs and telecommunication PBX systems."
    ],
    skills: ["Agentic AI", "Conversational Voice AI", "API Architecture", "WebSockets", "LLMs"]
  },
  {
    role: "Product Manager",
    company: "SwiftPass Technology Co., Ltd.",
    location: "Shenzhen, China",
    period: "Jul 2024 – Present",
    badge: "FinTech & Payment Gateways",
    badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-800/60",
    highlights: [
      "Leading product roadmap and technical architecture for cross-border mobile payment gateways, SDKs, and enterprise REST APIs.",
      "Coordinating cross-functional engineering and security teams to implement high-throughput transaction protocols and PCI-compliant pipelines.",
      "Translating complex financial regulatory requirements into scalable international digital wallet products."
    ],
    skills: ["Payment Gateways", "REST APIs & SDKs", "FinTech Architecture", "Cross-Functional Agile"]
  },
  {
    role: "Overseas Sales & Development Engineer",
    company: "Shenzhen Eran Technology Co., Ltd.",
    location: "Shenzhen, China",
    period: "Dec 2023 – Jul 2024",
    badge: "Solutions Engineering",
    badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
    highlights: [
      "Evaluated complex client engineering requirements across international territories, tailoring hardware and software solutions.",
      "Managed client technical roadmaps and bridged communication between global clients and domestic R&D departments."
    ],
    skills: ["Technical Consulting", "Hardware-Software Integration", "Global Business"]
  },
  {
    role: "International Project Delivery Engineer",
    company: "Whale Cloud Technology Co., Ltd. (Alibaba Cloud)",
    location: "Nanjing, China",
    period: "Oct 2019 – Dec 2022",
    badge: "Alibaba Cloud / Telecom",
    badgeColor: "bg-sky-950/80 text-sky-300 border-sky-800/60",
    highlights: [
      "Delivered telecommunications modernization infrastructure under the MOTN (Modernization of Telecommunications Network) project for Bangladesh Telecommunications Company Limited (BTCL).",
      "Spearheaded optical fiber FTTH deployment testing, multi-tier system verification, and network optimization.",
      "Awarded 'Best Young Talent' at Alibaba Cloud (Feb 2020) for outstanding delivery and engineering diligence."
    ],
    skills: ["FTTH Fiber Optics", "Telecom Infrastructure", "System Verification", "BTCL MOTN"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
          <Briefcase className="h-3.5 w-3.5" /> Track Record of Execution
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Professional Leadership &amp; Industry Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
          From founding agentic AI voice platforms and steering multi-MW clean energy companies as COO, to architecting FinTech payment gateways and delivering national telecom infrastructure.
        </p>
      </div>

      <div className="relative border-l border-slate-300 dark:border-slate-800/80 ml-3 md:ml-6 space-y-12">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative pl-6 md:pl-10"
          >
            {/* Timeline bullet node */}
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-cyan-500 shadow-md shadow-cyan-500/50" />

            <div className="glass-card rounded-2xl p-6 md:p-7 hover:border-cyan-500/30 transition-all duration-300">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400 dark:text-slate-500" /> {item.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                      {item.company}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-500 inline-flex items-center gap-1 text-xs"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 w-fit">
                  <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-2.5 mb-5 text-sm text-slate-700 dark:text-slate-300">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
