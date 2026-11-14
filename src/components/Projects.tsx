"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Shield, Cpu, Zap, Globe, Sparkles, Terminal, Layers } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

interface ProjectItem {
  title: string;
  category: "agents" | "security" | "fintech" | "web";
  categoryLabel: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github?: string;
  demoUrl?: string;
  badge: string;
}

const projects: ProjectItem[] = [
  {
    title: "Vigilante Security Scanner",
    category: "security",
    categoryLabel: "Cybersecurity & Tooling",
    description: "A modular Python-based penetration testing and reconnaissance scanner combining active port probing, service fingerprinting, and automated vulnerability checking.",
    highlights: [
      "Multi-threaded socket port scanner with customizable probe payloads.",
      "Integrated CVE database lookup for identified open services.",
      "Lightweight CLI output with structured JSON audit reporting."
    ],
    techStack: ["Python", "Sockets", "CVE API", "Multi-Threading", "Reconnaissance"],
    github: "https://github.com/sadiifti/vigilante-scanner",
    badge: "Open Source"
  },
  {
    title: "Call Well Conversational Voice Engine",
    category: "agents",
    categoryLabel: "Autonomous AI Agents",
    description: "Sub-300ms conversational agentic voice platform featuring streaming STT, zero-shot tool reasoning, and low-latency neural TTS synthesis.",
    highlights: [
      "Full-duplex WebSocket audio streaming pipeline.",
      "Autonomous tool calling for live CRM sync and calendar bookings.",
      "Production-ready failover and telecommunication PBX integration."
    ],
    techStack: ["Agentic AI", "WebSockets", "Whisper STT", "Neural TTS", "FastAPI"],
    demoUrl: "#interactive-demo",
    badge: "Startup Product"
  },
  {
    title: "FinTech Transaction Intelligence Agent",
    category: "fintech",
    categoryLabel: "FinTech & APIs",
    description: "Autonomous financial intelligence agent designed for cross-border payment gateway monitoring, automated refund triage, and anomaly transaction detection.",
    highlights: [
      "Semantic query parsing for international merchant transaction logs.",
      "Real-time settlement status verification and dispute mitigation.",
      "Secure REST API connectors for merchant wallet integration."
    ],
    techStack: ["Python", "LangChain", "Payment Gateways", "REST APIs", "Vector DB"],
    github: "https://github.com/sadiifti/fintech-ai-agent",
    badge: "FinTech AI"
  },
  {
    title: "AI Phishing & Threat Detector",
    category: "security",
    categoryLabel: "Cybersecurity & Machine Learning",
    description: "Machine learning classifier detecting zero-day phishing URLs, adversarial spoofing attempts, and suspicious SSL/WHOIS heuristics.",
    highlights: [
      "Extracted 25+ lexical and host-based domain reputation features.",
      "High-precision classification preventing credential-harvesting threats.",
      "Fast inference pipeline suitable for real-time edge proxy filtering."
    ],
    techStack: ["PyTorch", "Scikit-Learn", "Feature Engineering", "URL Parsing"],
    github: "https://github.com/sadiifti/ai-phishing-detector",
    badge: "Cyber Defense"
  },
  {
    title: "B2B Lead Intelligence & Enrichment Agent",
    category: "agents",
    categoryLabel: "Autonomous AI Agents",
    description: "Autonomous multi-agent system that crawls prospect websites, identifies company technology stacks, locates decision-makers, and drafts personalized outreach.",
    highlights: [
      "Automated web headless extraction with rate-limit evasion.",
      "LLM-driven company profiling and ICP (Ideal Customer Profile) scoring.",
      "Automated webhook synchronization to outreach CRMs."
    ],
    techStack: ["Python", "Playwright", "LLM Orchestration", "AsyncIO", "Enrichment"],
    github: "https://github.com/sadiifti/b2b-lead-intelligence-agent",
    badge: "Agentic AI"
  },
  {
    title: "Django Enterprise CRM Platform",
    category: "web",
    categoryLabel: "Full-Stack Web Development",
    description: "Enterprise customer relationship management system featuring hierarchical role-based access control, sales telemetry, and automated invoice tracking.",
    highlights: [
      "Robust relational database schema with PostgreSQL optimization.",
      "User authentication, dynamic permissions, and lead pipeline tracking.",
      "Responsive analytics dashboards with real-time conversion rates."
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/sadiifti/Django-CRM",
    badge: "Full-Stack"
  },
  {
    title: "PickPinDrop Logistics & Geolocation",
    category: "web",
    categoryLabel: "Full-Stack & Mapping",
    description: "Interactive geolocation web application designed for on-demand package dropoff, route calculation, and real-time pin clustering.",
    highlights: [
      "Interactive map coordinates with dynamic reverse geocoding.",
      "Optimized distance routing using geospatial APIs.",
      "Mobile-friendly interface for couriers and recipients."
    ],
    techStack: ["JavaScript", "Leaflet", "OpenStreetMap API", "Node.js", "Express"],
    github: "https://github.com/sadiifti/pickpindrop",
    badge: "Web App"
  },
  {
    title: "KNN Internet Traffic Classification Engine",
    category: "fintech",
    categoryLabel: "Network ML / B.Sc. Thesis",
    description: "Machine learning classifier for high-throughput Internet packet classification using K-Nearest Neighbors (KNN) algorithms on real-world packet flow data.",
    highlights: [
      "Achieved high classification accuracy on diverse network protocol flows.",
      "Investigated feature extraction from statistical packet headers.",
      "Completed as Bachelor's Engineering Thesis at NJUPT."
    ],
    techStack: ["Python", "KNN", "PCAP Analysis", "Scikit-learn", "Network Info"],
    badge: "Academic Thesis"
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "agents", label: "AI & Autonomous Agents" },
    { id: "security", label: "Cybersecurity & Tools" },
    { id: "fintech", label: "FinTech & Systems" },
    { id: "web", label: "Full-Stack Apps" }
  ];

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Code2 className="h-3.5 w-3.5" /> Code &amp; Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Open Source
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
            A curation of my agentic AI tools, cybersecurity scanners, FinTech pipelines, and full-stack applications from GitHub and industry deployments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                  {proj.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {proj.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Key Highlights */}
              <ul className="space-y-1.5 mb-5 text-[11px] text-slate-400">
                {proj.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-1.5 leading-normal">
                    <span className="text-cyan-400 font-bold">&rsaquo;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800/80">
                {proj.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500">Internal / Proprietary</span>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Try Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
