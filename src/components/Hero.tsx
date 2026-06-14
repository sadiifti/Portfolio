"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <img 
          src="./profile.jpeg"
          alt="Md. Sadi Profile" 
          width="160" 
          height="160" 
          className="rounded-full shadow-lg mb-8 border-4 border-background object-cover w-32 h-32 md:w-40 md:h-40" 
        />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m <span className="text-primary">Md. Sadi</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Graduate in Electronics Information Engineering & Tech Enthusiast.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          I am passionate about problem-solving and modern web development. With a strong background in technology, I enjoy exploring how engineering concepts can be applied to solve real-world problems and building high-performance applications.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:mdsadi95@outlook.com"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </a>
          <a
            href="https://sadiifti.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/sadiifti"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
