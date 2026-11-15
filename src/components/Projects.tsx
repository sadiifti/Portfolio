"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Shield, Cpu, Zap, Globe, Sparkles, Terminal, Layers, Image as ImageIcon, X } from "lucide-react";

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
  image: string;
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
    badge: "Open Source",
    image: "./projects/vigilante-scanner.jpg"
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
    badge: "Startup Product",
    image: "./projects/call-well.jpg"
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
    badge: "FinTech AI",
    image: "./projects/fintech-ai-agent.jpg"
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
    badge: "Cyber Defense",
    image: "./projects/ai-phishing-detector.jpg"
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
    badge: "Agentic AI",
    image: "./projects/b2b-lead-agent.jpg"
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
    badge: "Full-Stack",
    image: "./projects/django-crm.jpg"
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
    badge: "Web App",
    image: "./projects/pickpindrop.jpg"
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
    badge: "Academic Thesis",
    image: "./projects/knn-traffic.jpg"
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <Code2 className="h-3.5 w-3.5" /> Code &amp; Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Open Source
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
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
                  : "bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
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
            className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
          >
            <div>
              {/* Visual Project Preview Image */}
              <div 
                onClick={() => setPreviewImage({ src: proj.image, title: proj.title })}
                className="relative w-full h-44 sm:h-48 overflow-hidden rounded-xl mb-4 bg-slate-950 border border-slate-200 dark:border-slate-800/80 cursor-zoom-in group/img shadow-md"
              >
                <img
                  src={proj.image}
                  alt={`${proj.title} Preview`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Category tag overlay */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/80 text-cyan-300 border border-slate-700/80 backdrop-blur-md font-semibold">
                    {proj.badge}
                  </span>
                </div>

                {/* Click to Zoom indicator */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-700/80 text-[10px] font-mono text-slate-300 backdrop-blur-md flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <ImageIcon className="h-3 w-3 text-cyan-400" />
                  <span>Zoom</span>
                </div>
              </div>

              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-semibold text-cyan-700 dark:text-cyan-400">
                  {proj.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Key Highlights */}
              <ul className="space-y-1.5 mb-5 text-[11px] text-slate-600 dark:text-slate-400">
                {proj.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-1.5 leading-normal">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">&rsaquo;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                {proj.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800/60">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono font-medium"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Internal / Proprietary</span>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
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

      {/* Expanded Figure Modal Lightbox */}
      <AnimatePresence>
        {previewImage && (
          <div 
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-semibold">{previewImage.title} &bull; Architecture Preview</span>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-3 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
