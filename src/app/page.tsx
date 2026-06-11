import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow container mx-auto px-6 max-w-5xl">
        <Hero />
        <div className="h-px w-full bg-border" />
        <Experience />
        <div className="h-px w-full bg-border" />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
