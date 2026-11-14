"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, Copy, Check, FileText, Sparkles, Filter, Layers, ArrowUpRight } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  year: string;
  venue: string;
  category: "medical" | "vision" | "security" | "environmental";
  categoryLabel: string;
  authors: string;
  sadiRole: string;
  abstract: string;
  metrics: { label: string; value: string }[];
  framework: string[];
  link?: string;
  bibtex: string;
}

const publications: Publication[] = [
  {
    id: "pacer-2026",
    title: "Early Diagnosis of Congenital Heart Disease Using Transformer-Based Deep Learning on Electrocardiogram Signals",
    year: "2026",
    venue: "Preprint / In Press (2026)",
    category: "medical",
    categoryLabel: "Medical AI & Transformers",
    authors: "Md Saifur Rahman, Junaid Zaman, Md Sadi Iftia Khairul, Md Rakibul Islam, Yihong Zhang",
    sadiRole: "Co-Author & Framework Architecture",
    abstract: "Engineered PACER, an innovative hybrid CNN-Transformer-DWT-TabNet diagnostic architecture for 12-lead pediatric ECG classification. Effectively captures long-range temporal dependencies and high-frequency wavelets across extensive clinical cohorts.",
    metrics: [
      { label: "Accuracy", value: "90.93%" },
      { label: "ROC-AUC", value: "0.95" },
      { label: "Clinical Dataset", value: "10,344 ECGs" }
    ],
    framework: ["12-Lead ECG", "DWT Wavelet", "CNN Extractor", "Transformer Attention", "TabNet"],
    link: "https://github.com/sadiifti",
    bibtex: `@article{rahman2026early,
  title={Early Diagnosis of Congenital Heart Disease Using Transformer-Based Deep Learning on Electrocardiogram Signals},
  author={Rahman, Md Saifur and Zaman, Junaid and Khairul, Md Sadi Iftia and Islam, Md Rakibul and Zhang, Yihong},
  journal={arXiv / Biomedical Signal Processing},
  year={2026}
}`
  },
  {
    id: "mdpi-water-2026",
    title: "Smart Cities and Cyberattacks in Communication Networks: A Case Study of Water Treatment Plants",
    year: "2026",
    venue: "MDPI Smart Cities & Communication Networks",
    category: "security",
    categoryLabel: "Cybersecurity & IIoT",
    authors: "AKM Ahasan Habib, Sadia Parvin Sanchita, Tanvir Mahmud, Md Sadi Iftia Khairul, Mohammad Kamrul Hasan, AFM Zainul Abadin, Thomas M.T. Lei",
    sadiRole: "Co-Author & Network Modeling",
    abstract: "Comprehensive vulnerability review of municipal Industrial IoT networks under Industry 5.0 and IEEE 1451 standards. Modeled adversarial attack vectors, physical-cyber telemetry injection, and robust defense frameworks.",
    metrics: [
      { label: "Standards", value: "IEEE 1451" },
      { label: "Paradigm", value: "Industry 5.0" },
      { label: "Domain", value: "IIoT Water Infra" }
    ],
    framework: ["IEEE 1451", "SCADA / IIoT", "Adversarial Modeling", "Defense Protocols"],
    link: "https://www.mdpi.com/3042-4720/2/2/7",
    bibtex: `@article{habib2026smart,
  title={Smart Cities and Cyberattacks in Communication Networks: A Case Study of Water Treatment Plants},
  author={Habib, AKM Ahasan and Sanchita, Sadia Parvin and Mahmud, Tanvir and Khairul, Md Sadi Iftia and Hasan, Mohammad Kamrul and Abadin, AFM Zainul and Lei, Thomas MT},
  journal={MDPI Smart Cities},
  volume={2},
  number={2},
  pages={7},
  year={2026},
  publisher={MDPI},
  doi={10.3390/smartcities3042-4720/2/2/7}
}`
  },
  {
    id: "yolov9-traffic-2025",
    title: "Real-Time Vehicle License Plate Detection and Recognition Using YOLOv9 and OCR Framework in Urban Traffic",
    year: "2025",
    venue: "IEEE Conference Proceedings",
    category: "vision",
    categoryLabel: "Computer Vision & OCR",
    authors: "Md Sadi Iftia Khairul, A. F. M. Zainul Abadin, Mohammad Kamrul Hasan, Sohag Sarker",
    sadiRole: "Lead Author & Deep Learning Pipeline",
    abstract: "Developed a real-time multilingual (Bangla/English) optical character recognition and license plate localization system leveraging state-of-the-art YOLOv9 with custom post-processing pipelines for high-density smart traffic surveillance.",
    metrics: [
      { label: "Detection F1", value: "0.99" },
      { label: "Inference Speed", value: ">35 FPS" },
      { label: "Languages", value: "Bangla & English" }
    ],
    framework: ["YOLOv9", "Custom OCR Pipeline", "Edge Inference", "Multilingual Character Reg"],
    link: "https://ieeexplore.ieee.org/document/11546179",
    bibtex: `@inproceedings{khairul2025realtime,
  title={Real-Time Vehicle License Plate Detection and Recognition Using YOLOv9 and OCR Framework in Urban Traffic},
  author={Khairul, Md Sadi Iftia and Abadin, A. F. M. Zainul and Hasan, Mohammad Kamrul and Sarker, Sohag},
  booktitle={IEEE International Conference on Intelligent Transportation Systems},
  year={2025},
  publisher={IEEE}
}`
  },
  {
    id: "air-pollution-2024",
    title: "Air Pollution Prediction and Classification with a Hybrid ANN-LSTM Model in Modern Cities: A Comparative Study",
    year: "2024",
    venue: "IEEE Xplore Digital Library",
    category: "environmental",
    categoryLabel: "Predictive AI & Time-Series",
    authors: "Md Sadi Iftia Khairul et al.",
    sadiRole: "Author & Model Optimization",
    abstract: "Engineered a hybrid Artificial Neural Network and Long Short-Term Memory (ANN-LSTM) recurrent network trained on over 60,000 meteorological and pollutant observations to forecast PM2.5 and AQI indices with high temporal fidelity.",
    metrics: [
      { label: "Accuracy", value: "94.87%" },
      { label: "Training Data", value: "60,000+ Obs" },
      { label: "Target", value: "PM2.5 / AQI" }
    ],
    framework: ["ANN", "LSTM Recurrent Cells", "Time-Series Decomposition", "SMOTE"],
    link: "https://ieeexplore.ieee.org/abstract/document/10916206",
    bibtex: `@inproceedings{khairul2024airpollution,
  title={Air Pollution Prediction and Classification with a Hybrid ANN-LSTM Model in Modern Cities: A Comparative Study},
  author={Khairul, Md Sadi Iftia and others},
  booktitle={IEEE Conference on Urban Informatics and AI},
  year={2024},
  publisher={IEEE}
}`
  }
];

export function Publications() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedBibtex, setSelectedBibtex] = useState<{ title: string; bibtex: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "all", label: "All Papers" },
    { id: "medical", label: "Medical AI" },
    { id: "vision", label: "Computer Vision & OCR" },
    { id: "security", label: "Cybersecurity & IIoT" },
    { id: "environmental", label: "Environmental AI" }
  ];

  const filtered = activeCategory === "all"
    ? publications
    : publications.filter((p) => p.category === activeCategory);

  const handleCopyBibtex = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="research" className="py-20 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <BookOpen className="h-3.5 w-3.5" /> Peer-Reviewed Research &amp; Innovations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Publications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Advancing deep learning architectures across medical diagnostics, intelligent transportation, critical infrastructure defense, and environmental forecasting.
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

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((pub) => (
          <motion.article
            key={pub.id}
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
          >
            <div>
              {/* Card Header badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                  {pub.venue}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {pub.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-xs text-slate-400 mb-3 font-mono leading-relaxed">
                {pub.authors}
              </p>

              {/* Abstract */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {pub.abstract}
              </p>

              {/* Framework Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {pub.framework.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-5">
                {pub.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs sm:text-sm font-extrabold text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedBibtex({ title: pub.title, bibtex: pub.bibtex })}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Cite (BibTeX)</span>
                </button>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Paper</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* BibTeX Modal */}
      <AnimatePresence>
        {selectedBibtex && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="h-4 w-4 text-cyan-400" /> BibTeX Citation
                </h4>
                <button
                  onClick={() => setSelectedBibtex(null)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
                >
                  Close
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-3 font-medium line-clamp-1">
                {selectedBibtex.title}
              </p>

              <div className="relative">
                <pre className="text-xs font-mono bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto max-h-60 leading-relaxed">
                  {selectedBibtex.bibtex}
                </pre>
                <button
                  onClick={() => handleCopyBibtex(selectedBibtex.bibtex)}
                  className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold shadow hover:bg-cyan-400 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
