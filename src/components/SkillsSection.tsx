"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Zap, Layers, Network, Award, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  description: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Deep Learning & AI Research",
    icon: Cpu,
    description: "Architecting transformer attention, multi-lead physiological signal models, and computer vision detectors.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "YOLOv9",
      "ANNs & LSTMs",
      "DWT (Wavelet)",
      "TabNet",
      "SMOTE Preprocessing",
      "KNN & Clustering"
    ],
    color: "border-cyan-500/30 text-cyan-400"
  },
  {
    title: "Computer Vision & Signal Processing",
    icon: Network,
    description: "Real-time edge inference, multilingual optical character recognition, and multi-channel ECG telemetry.",
    skills: [
      "Real-Time Object Detection",
      "Multilingual OCR Pipelines",
      "12-Lead Biomedical ECG",
      "Digital Signal Processing (DSP)",
      "Wavelet Decomposition",
      "Feature Embeddings"
    ],
    color: "border-indigo-500/30 text-indigo-400"
  },
  {
    title: "Cybersecurity & Industrial IoT",
    icon: Shield,
    description: "Defending critical municipal infrastructure, SCADA systems, and Industry 5.0 telemetry networks.",
    skills: [
      "IEEE 1451 Standards",
      "Industrial IoT (IIoT)",
      "Adversarial Attack Vectors",
      "Infrastructure Defense",
      "Certified Forensic Analyst",
      "Network Protocol Security"
    ],
    color: "border-sky-500/30 text-sky-400"
  },
  {
    title: "FinTech, APIs & Product Management",
    icon: Zap,
    description: "Designing enterprise payment gateways, client SDKs, and cross-functional agile roadmaps.",
    skills: [
      "Mobile Payment Gateways",
      "REST & WebSocket APIs",
      "Client SDK Architecture",
      "High-Throughput Pipelines",
      "Technical Roadmapping",
      "Cross-Border Compliance"
    ],
    color: "border-emerald-500/30 text-emerald-400"
  },
  {
    title: "Full-Stack Software Engineering",
    icon: Terminal,
    description: "Building production-grade web applications and high-performance algorithms.",
    skills: [
      "Python",
      "C / C++",
      "TypeScript & JavaScript",
      "Next.js & React",
      "Tailwind CSS",
      "Data Structures & Algorithms",
      "Git & CI/CD Pipelines"
    ],
    color: "border-amber-500/30 text-amber-400"
  },
  {
    title: "CleanTech & Telecom Infrastructure",
    icon: Layers,
    description: "Large-scale lithium battery storage (BESS), solar EPC, and nationwide FTTH fiber deployments.",
    skills: [
      "Lithium Storage (BESS)",
      "Industrial Rooftop Solar",
      "FTTH Fiber Optic Modernization",
      "System Verification",
      "Alibaba Cloud Whale Cloud MOTN",
      "Hardware-Software Testing"
    ],
    color: "border-rose-500/30 text-rose-400"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
          <Terminal className="h-3.5 w-3.5" /> Technical Competence Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skills, Frameworks &amp; Domain Expertise
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
          A rare blend of machine learning research rigour, enterprise software engineering, and mission-critical hardware deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border ${cat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-cyan-600 dark:hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
