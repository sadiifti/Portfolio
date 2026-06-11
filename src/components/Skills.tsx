"use client";

import { motion } from "framer-motion";

const skills = [
  "C Programming",
  "Python",
  "JavaScript",
  "Full Stack Web Development",
  "React & Next.js",
  "CyberSecurity Forensics",
  "Digital Signal Processing",
  "IoT & Embedded Systems"
];

const publications = [
  {
    title: "Smart Cities and Cyberattacks in Communication Networks: A Case Study of Water Treatment Plants",
    date: "Forthcoming",
    description: "Md. Sadi Iftia Khairul, et al."
  },
  {
    title: "Real-Time Vehicle License Plate Detection and Recognition Using YOLOv9 and OCR Framework in Urban Traffic",
    date: "2025",
    description: "Md. Sadi Iftia Khairul, A. F. M. Zainul Abadin, Mohammad Kamrul Hasan, Sohag Sarker."
  },
  {
    title: "Air pollution prediction and classification with a hybrid ANN-LSTM model in modern cities: a comparative study",
    date: "2024",
    description: "Mohammad Ariful Islam Rafi, Moshiur Rahman Sohan, Golam Jilany Rayhan, Md Sadi Iftia Khairul, et al."
  }
];

export function Skills() {
  return (
    <section className="py-20" id="skills-projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium border shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-8 mt-16">Education</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Bachelor of Science in Electronic Information Engineering</h3>
              <p className="text-muted-foreground">Nanjing University of Posts and Telecommunications (09/2016 – 06/2020)</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Publications & Projects</h2>
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="group relative border rounded-xl p-6 hover:shadow-md transition-all bg-card text-card-foreground">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">{pub.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">{pub.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
