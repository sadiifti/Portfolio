"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Mail, ExternalLink, Sparkles, Building, Globe, BookOpen, CheckCircle2, Languages } from "lucide-react";

export function LeadershipAwards() {
  const educationHistory = [
    {
      degree: "B.Sc. in Electronics Information Engineering",
      institution: "Nanjing University of Posts and Telecommunications (NJUPT)",
      location: "Nanjing, China",
      period: "Sep 2016 – Jun 2020",
      badge: "Bachelor's Degree",
      badgeColor: "bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800/60 font-semibold",
      thesis: "Internet Traffic Classification Based on Nearest Neighbors (KNN)",
      coursework: "Network Information Theory, Electronic Circuits & Systems, Signal & Information Processing, Machine Learning, Digital Signal Processing (DSP), Embedded Systems, IoT, C/Python.",
      honor: "Nanjing Municipal Government International Students Scholarship recipient",
      website: "https://www.njupt.edu.cn/en/"
    },
    {
      degree: "Chinese Language & Cross-Cultural Program",
      institution: "Huzhou University (湖州师范学院)",
      location: "Zhejiang, China",
      period: "2015 – 2016",
      badge: "Language Immersion",
      badgeColor: "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800/60 font-semibold",
      coursework: "Intensive full-time Mandarin Chinese linguistic proficiency, technical terminology, oral communication, and Chinese socio-cultural immersion preceding engineering degree.",
      website: "http://english.zjhu.edu.cn/"
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Notre Dame College",
      location: "Dhaka, Bangladesh",
      period: "Jan 2011 – Jan 2013",
      badge: "College / HSC",
      badgeColor: "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800/60 font-semibold",
      coursework: "Natural Sciences, Higher Mathematics, Physics, Chemistry & Statistics. Graduated from premier science college in Bangladesh.",
      website: "https://ndc.edu.bd/"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Mymensingh Zilla School",
      location: "Mymensingh, Bangladesh",
      period: "Jan 2003 – Dec 2010",
      badge: "School / SSC",
      badgeColor: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800/60 font-semibold",
      coursework: "Natural Sciences & Pure Mathematics. Historic government secondary institution founded in 1853.",
      website: "http://www.mzs.edu.bd/"
    }
  ];

  const references = [
    {
      name: "Dr. Xiao Jian",
      role: "Deputy Dean, College of Integrated Circuit Science and Engineering",
      institution: "Nanjing University of Posts and Telecommunications",
      email: "xiaoj@njupt.edu.cn",
      phone: "(+86) 13951983176"
    },
    {
      name: "Dr. Yulong Deng",
      role: "Faculty of Computer Science",
      institution: "Nanjing University of Posts and Telecommunications",
      email: "dyl@njupt.edu.cn",
      phone: "(+86) 13801588232"
    },
    {
      name: "Dr. Xiaodong Bai",
      role: "Associate Professor (Formerly NJUPT)",
      institution: "Hainan University",
      email: "xiaodongbai@hainanu.edu.cn",
      phone: "(+86) 66278203"
    }
  ];

  const awards = [
    {
      title: "Best Young Talent Award",
      organization: "Alibaba Cloud / Whale Cloud",
      date: "Feb 2020",
      description: "Conferred for engineering excellence, system verification diligence, and technical leadership on the MOTN telecom modernization program.",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Nanjing Municipal Government International Students Scholarship",
      organization: "Jiangsu & Nanjing Governments",
      date: "Sep 2016",
      description: "Conferred in recognition of outstanding academic merit in university entrance examinations and strong scientific research aptitude.",
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "ZSmart BSS Product & Telecom Architecture Certification",
      organization: "Alibaba Cloud",
      date: "Jan 2020",
      description: "Specialized enterprise certification in Business Support Systems (BSS), optical network routing, and telecom billing orchestration.",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    }
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Academic Journey Column (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <GraduationCap className="h-3.5 w-3.5" /> Academic Pedigree
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Education Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            From foundational scientific schooling in Bangladesh to intensive Chinese language immersion in Huzhou and undergraduate engineering at NJUPT.
          </p>

          {/* Timeline of all education stages */}
          <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 space-y-8 mb-12">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8">
                {/* Timeline node bullet */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 bg-cyan-500 shadow-sm shadow-cyan-500/50" />

                <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-sm">
                  {/* Top badges & dates */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${edu.badgeColor}`}>
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                    <p className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                      {edu.institution}
                    </p>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {edu.location}
                    </span>
                    {edu.website && (
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline ml-1 font-mono"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Visit</span>
                      </a>
                    )}
                  </div>

                  {/* Thesis (if applicable) */}
                  {edu.thesis && (
                    <div className="p-2.5 rounded-lg bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-xs text-cyan-900 dark:text-cyan-200 mb-3">
                      <strong className="font-mono text-[11px] uppercase tracking-wider text-cyan-700 dark:text-cyan-400 block mb-0.5">
                        Bachelor&apos;s Engineering Thesis
                      </strong>
                      <span>{edu.thesis}</span>
                    </div>
                  )}

                  {/* Details / Coursework */}
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {edu.coursework}
                  </p>

                  {/* Specific honor badge */}
                  {edu.honor && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 font-mono font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span>{edu.honor}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Honors & Scholarships Sub-block */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span>Academic Scholarships &amp; Honors</span>
            </h3>
            <div className="space-y-3">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5"
                >
                  <div className={`p-2 rounded-lg border shrink-0 ${award.color}`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {award.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mt-0.5">
                      {award.organization}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Faculty References Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <Users className="h-3.5 w-3.5" /> Service &amp; Mentorship
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Leadership &amp; Faculty
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Elected representative roles, international engineering symposiums, and faculty recommendations.
          </p>

          {/* Leadership Activities Card */}
          <div className="glass-card rounded-2xl p-6 mb-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-cyan-500" />
              <span>International Leadership &amp; Service</span>
            </h3>
            <ul className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    Vice President | International Students Union (ISU), NJUPT
                  </strong>
                  <span className="text-slate-600 dark:text-slate-300 mt-0.5 block leading-relaxed">
                    Elected to direct administrative operations, bridge communications between university deans and international cohorts, and manage event budgets.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    Co-Team Leader | Science &amp; Tech / C3 Coding Club, NJUPT
                  </strong>
                  <span className="text-slate-600 dark:text-slate-300 mt-0.5 block leading-relaxed">
                    Conducted hands-on programming bootcamps, algorithm study groups, and hackathons in Python and C/C++.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    Delegate | UNESCO IKCEST International Symposium (Deqing, China)
                  </strong>
                  <span className="text-slate-600 dark:text-slate-300 mt-0.5 block leading-relaxed">
                    Represented international engineers at high-level forums addressing knowledge sharing, digital innovation, and big data governance under UNESCO auspices (Oct 2018).
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Academic References */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-500" />
              <span>Academic Recommendation Faculty</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
              Faculty supervisors from Nanjing University of Posts &amp; Telecommunications:
            </p>
            <div className="space-y-3">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-2 hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{ref.name}</h4>
                    <p className="text-[11px] text-cyan-700 dark:text-cyan-400 font-medium">{ref.role}</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{ref.institution}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    <a href={`mailto:${ref.email}`} className="text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                      <Mail className="h-3 w-3" /> {ref.email}
                    </a>
                    <span>&bull;</span>
                    <span>{ref.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
