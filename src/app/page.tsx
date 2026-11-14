import { Navbar } from "@/components/Navbar";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { Publications } from "@/components/Publications";
import { Experience } from "@/components/Experience";
import { InteractiveWidgets } from "@/components/InteractiveWidgets";
import { SkillsSection } from "@/components/SkillsSection";
import { LeadershipAwards } from "@/components/LeadershipAwards";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Interactive Neural Canvas */}
      <NeuralCanvas />

      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-grow container mx-auto px-6 max-w-6xl relative z-10">
        <Hero />
        <ImpactMetrics />
        <Publications />
        <Experience />
        <InteractiveWidgets />
        <SkillsSection />
        <LeadershipAwards />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
