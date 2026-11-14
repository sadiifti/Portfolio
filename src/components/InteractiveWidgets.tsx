"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2, Play, Pause, Sparkles, Activity, Cpu, ArrowRight, Shield, RefreshCw } from "lucide-react";

export function InteractiveWidgets() {
  const [activeTab, setActiveTab] = useState<"callwell" | "pacer">("callwell");

  // Call Well Simulator State
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const scenarios = [
    {
      title: "Inbound Enterprise Customer Support",
      caller: "Customer: 'Hi, I need to update my corporate subscription and confirm our API billing tier.'",
      agent: "Call Well Agent: 'Hello! I can certainly assist you with that. I've located your enterprise account. Would you like to transition to the High-Volume Tier for lower per-minute latency?'",
      tool: "Executing CRM Tool: lookupAccount(company_id='ENT-9842')",
      latency: "284ms",
      confidence: "99.4%"
    },
    {
      title: "Automated Calendar & Lead Booking",
      caller: "Client: 'Can we book a 30-minute technical evaluation for next Tuesday at 3 PM Beijing time?'",
      agent: "Call Well Agent: 'Tuesday at 3:00 PM CST is available. I have reserved the slot and sent a Google Meet invite to your verified address.'",
      tool: "Executing Calendar Tool: createMeeting(time='15:00 CST', type='Tech Evaluation')",
      latency: "312ms",
      confidence: "99.8%"
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % 4);
      }, 2400);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // PACER Architecture Interactive Explorer
  const [selectedPacerStage, setSelectedPacerStage] = useState<number>(0);

  const pacerStages = [
    {
      name: "1. 12-Lead Pediatric ECG",
      subtitle: "10,344 Clinical Records",
      description: "Standard 12-lead pediatric electrocardiogram signals captured across multiple demographic cohorts with varying baseline congenital abnormalities.",
      tech: "Raw Voltage Time-Series (I, II, III, aVR, aVL, aVF, V1-V6)",
      metric: "10,344 Patient Cohort"
    },
    {
      name: "2. DWT Wavelet Decomposition",
      subtitle: "Frequency-Time Extraction",
      description: "Applies Discrete Wavelet Transform (DWT) to separate high-frequency pathological murmurs from low-frequency baseline cardiac rhythms.",
      tech: "Symlet / Daubechies Wavelets (Sub-band coefficients)",
      metric: "Multi-Resolution Subbands"
    },
    {
      name: "3. Multi-Scale CNN Extractor",
      subtitle: "Morphological Pattern Recognition",
      description: "Extracts local spatial and morphological features across QRS complexes, P waves, and ST segments across all 12 synchronized leads.",
      tech: "1D Residual Dilated Convolutions",
      metric: "Spatial Feature Vector"
    },
    {
      name: "4. Multi-Head Transformer",
      subtitle: "Long-Range Temporal Attention",
      description: "Self-attention mechanism models temporal dependencies between non-adjacent cardiac cycles to capture subtle intermittent arrhythmias.",
      tech: "Multi-Head Self-Attention + Positional Encodings",
      metric: "Global Temporal Receptive Field"
    },
    {
      name: "5. TabNet Clinical Fusion",
      subtitle: "Classification & Diagnostic Output",
      description: "Fuses learned deep embeddings with tabular clinical metadata (age, weight, hemodynamic indicators) for final congenital diagnosis.",
      tech: "Attentive Tabular Masking + Softmax Classification",
      metric: "90.93% Accuracy / 0.95 ROC-AUC"
    }
  ];

  return (
    <section id="interactive-demo" className="py-20 relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
          <Sparkles className="h-3.5 w-3.5" /> Interactive Architectural Demonstrations
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore AI Engines in Action
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Interact with live architecture simulations representing my startup product engineering and deep learning research.
        </p>

        {/* Tab Toggle */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-6 shadow-inner">
          <button
            onClick={() => setActiveTab("callwell")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "callwell"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Mic className="h-4 w-4" />
            <span>Call Well AI Voice Engine</span>
          </button>
          <button
            onClick={() => setActiveTab("pacer")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "pacer"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>PACER ECG Transformer</span>
          </button>
        </div>
      </div>

      {/* CALL WELL WIDGET */}
      {activeTab === "callwell" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Live Agentic Dialog Pipeline
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Call Well: Sub-300ms Voice Agent Architecture
              </h3>
            </div>

            {/* Scenario selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveScenario(0); setCurrentStep(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeScenario === 0
                    ? "bg-slate-800 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                Support Scenario
              </button>
              <button
                onClick={() => { setActiveScenario(1); setCurrentStep(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeScenario === 1
                    ? "bg-slate-800 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                Scheduling Scenario
              </button>
            </div>
          </div>

          {/* Voice Wave Visualizer Simulation */}
          <div className="my-8 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
                </button>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {isPlaying ? "Simulating Live Audio Stream..." : "Click Play to Stream AI Voice Simulation"}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    WebSocket Full-Duplex Audio &bull; Latency: {scenarios[activeScenario].latency}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                  Confidence: {scenarios[activeScenario].confidence}
                </span>
              </div>
            </div>

            {/* Dynamic Sound Wave Bars */}
            <div className="h-16 flex items-center justify-center gap-1.5 px-4 overflow-hidden">
              {[40, 65, 30, 85, 95, 45, 60, 75, 90, 50, 70, 80, 45, 90, 60, 35, 75, 85, 50, 65, 80, 30, 60, 95, 40, 70, 85, 50].map(
                (h, idx) => (
                  <span
                    key={idx}
                    style={{
                      height: isPlaying ? `${Math.max(12, (h * ((idx % 3) + 1)) % 100)}%` : "16%",
                      transition: "height 0.25s ease-in-out"
                    }}
                    className={`w-1.5 rounded-full ${
                      isPlaying
                        ? "bg-gradient-to-t from-cyan-500 to-indigo-400 shadow-sm shadow-cyan-400/50"
                        : "bg-slate-800"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Conversation Dialogue Flow */}
          <div className="space-y-4 font-mono text-xs">
            {/* User Speech */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                Inbound Streaming Audio &bull; STT Whisper
              </span>
              <p className="text-slate-200">{scenarios[activeScenario].caller}</p>
            </div>

            {/* Agentic Reasoning / Tool Call */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Cpu className="h-3.5 w-3.5" />
                <span className="uppercase tracking-wider text-[10px]">
                  Agentic Function Execution &bull; Zero-Shot Tool Selection
                </span>
              </div>
              <p className="text-cyan-200">{scenarios[activeScenario].tool}</p>
            </div>

            {/* Synthesized Response */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/40">
              <span className="text-indigo-300 uppercase tracking-wider text-[10px] block mb-1">
                Voice Synthesis Output &bull; Ultra Low-Latency Neural TTS
              </span>
              <p className="text-slate-100">{scenarios[activeScenario].agent}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* PACER WIDGET */}
      {activeTab === "pacer" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800/80 gap-3 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Activity className="h-4 w-4" /> 2026 Research Benchmark
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                PACER: Pediatric Congenital Heart Disease Pipeline
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 text-xs font-mono font-bold">
                90.93% ACCURACY
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 text-xs font-mono font-bold">
                0.95 ROC-AUC
              </span>
            </div>
          </div>

          {/* Pipeline Interactive Stages Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-8">
            {pacerStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPacerStage(idx)}
                className={`p-3.5 rounded-xl text-left transition-all border ${
                  selectedPacerStage === idx
                    ? "bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1">
                  Stage 0{idx + 1}
                </div>
                <div className="text-xs font-bold truncate">
                  {stage.name.split(". ")[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Stage Details Card */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {pacerStages[selectedPacerStage].name}
                </h4>
                <p className="text-xs text-cyan-400 font-mono">
                  {pacerStages[selectedPacerStage].subtitle}
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 w-fit">
                {pacerStages[selectedPacerStage].metric}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {pacerStages[selectedPacerStage].description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Methodology: </span>
                <span className="text-cyan-300">{pacerStages[selectedPacerStage].tech}</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span>Integrated inside PACER Model</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
