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
const education = [
  {
    degree: "Bachelor of Science in Electronic Information Engineering",
    institution: "Nanjing University of Posts and Telecommunications",
    date: "09/2016 – 06/2020",
  },
  {
    degree: "Chinese Language Program",
    institution: "Huzhou University, Zhejiang, China",
    date: "2025 - 2026",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Notre Dame College, Dhaka, Bangladesh",
    date: "01/2011 – 01/2013",
    field: "Natural sciences, mathematics and statistics",
    website: "https://ndc.edu.bd/",
    websiteLabel: "ndc.edu.bd"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Mymensingh Zilla School",
    date: "01/2003 – 12/2010",
    field: "Natural sciences, mathematics and statistics",
    website: "http://www.mzs.edu.bd/",
    websiteLabel: "mzs.edu.bd"
  }
];

const awards = [
  {
    title: "Nanjing Municipal Government International Students Scholarship – Jiangsu Government – Nanjing Government",
    date: "09/09/2016",
    description: "Received the Nanjing Municipal Scholarship for outstanding performance in the university entrance examination, recognizing academic merit and strong academic potential."
  },
  {
    title: "Best Young Talent – Alibaba Cloud",
    date: "10/02/2020"
  },
  {
    title: "ZSmart BSS Product Training – Alibaba Cloud",
    date: "17/01/2020"
  }
];

const publications = [
  {
    title: "Smart Cities and Cyberattacks in Communication Networks: A Case Study of Water Treatment Plants",
    date: "Published",
    description: "Md. Sadi Iftia Khairul, et al.",
    link: "https://www.mdpi.com/3042-4720/2/2/7"
  },
  {
    title: "Real-Time Vehicle License Plate Detection and Recognition Using YOLOv9 and OCR Framework in Urban Traffic",
    date: "2025",
    description: "Md. Sadi Iftia Khairul, A. F. M. Zainul Abadin, Mohammad Kamrul Hasan, Sohag Sarker.",
    link: "https://ieeexplore.ieee.org/document/11546179"
  },
  {
    title: "Air pollution prediction and classification with a hybrid ANN-LSTM model in modern cities: a comparative study",
    date: "2024",
    description: "Mohammad Ariful Islam Rafi, Moshiur Rahman Sohan, Golam Jilany Rayhan, Md Sadi Iftia Khairul, et al.",
    link: "https://ieeexplore.ieee.org/abstract/document/10916206"
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
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-xl font-semibold leading-snug">{edu.degree}</h3>
                  <p className="text-muted-foreground leading-relaxed">{edu.institution} <span className="inline-block ml-1 opacity-80">({edu.date})</span></p>
                  {edu.field && <p className="text-sm text-muted-foreground leading-relaxed">Field of study: {edu.field}</p>}
                  {edu.website && (
                    <a href={edu.website} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-block mt-1">
                      {edu.websiteLabel}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight mb-8 mt-16">Honours and Awards</h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="space-y-2 border-l-2 border-muted pl-4 py-1">
                  <h3 className="text-xl font-semibold leading-snug">{award.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium bg-muted w-fit px-2 py-0.5 rounded-md">{award.date}</p>
                  {award.description && <p className="text-muted-foreground leading-relaxed mt-2 text-sm">{award.description}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Publications & Projects</h2>
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="group relative border rounded-xl p-6 hover:shadow-md transition-all bg-card text-card-foreground">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors hover:underline">
                        {pub.title}
                      </a>
                    ) : (
                      <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">{pub.title}</h3>
                    )}
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
