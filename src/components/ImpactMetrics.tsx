"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Cpu, BarChart3, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    value: "90.93%",
    label: "PACER ECG Accuracy",
    detail: "0.95 ROC-AUC on 10,344 records",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Zap,
    value: ">35 FPS",
    label: "Real-Time YOLOv9",
    detail: "0.99 detection F1-score",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: BarChart3,
    value: "94.87%",
    label: "ANN-LSTM Air Quality",
    detail: "60,000+ samples predictive model",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: ShieldCheck,
    value: "MDPI '26",
    label: "Smart Cities & IIoT",
    detail: "IEEE 1451 & Industry 5.0 defense",
    color: "from-sky-400 to-cyan-500"
  }
];

export function ImpactMetrics() {
  return (
    <section className="py-6 my-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Benchmark
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {item.detail}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
