"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Mail, Phone, ExternalLink, Sparkles, Building, Globe } from "lucide-react";

export function LeadershipAwards() {
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

  return (
    <section id="leadership" className="py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education & Honors Column */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <GraduationCap className="h-3.5 w-3.5" /> Academic Pedigree
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Education &amp; Honors
          </h2>

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 mb-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  B.Sc. in Electronics Information Engineering
                </h3>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  Nanjing University of Posts and Telecommunications (NJUPT)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Nanjing, China &bull; Aug 2016 – May 2020
                </p>
              </div>
              <span className="text-xs font-mono bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 px-2.5 py-1 rounded-md">
                Graduated
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                <strong className="text-slate-900 dark:text-white font-mono">B.Sc. Thesis: </strong>
                Internet Traffic Classification Based on Nearest Neighbors (KNN)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-mono">Key Coursework: </strong>
                Network Information Theory, Electronic Circuits &amp; Systems, Signal &amp; Information Processing, Machine Learning Algorithms, Data Structures &amp; Predictive Modeling.
              </p>
            </div>
          </div>

          {/* Honors Cards */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Best Young Talent Award &bull; Alibaba Cloud
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Conferred in February 2020 for engineering delivery and technical leadership on the MOTN FTTH modernization program.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Nanjing Municipal Government International Students Scholarship
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Awarded by Jiangsu &amp; Nanjing Governments (2016) in recognition of outstanding academic merit and research aptitude.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Academic References Column */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3 font-semibold">
            <Users className="h-3.5 w-3.5" /> Service &amp; Mentorship
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Leadership &amp; Faculty References
          </h2>

          {/* Leadership Activities */}
          <div className="glass-card rounded-2xl p-6 mb-6 border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Leadership &amp; Academic Service
            </h3>
            <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Vice President | International Students Union (ISU), NJUPT: </strong>
                  Managed administrative operations, international cross-cultural symposia, and budget allocation for the university student body.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Co-Team Leader &amp; Member | Science &amp; Tech / C3 Coding Club: </strong>
                  Conducted hands-on programming bootcamps and algorithmic problem-solving workshops.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Delegate | UNESCO IKCEST International Symposium (Deqing, China): </strong>
                  Participated in high-level engineering forums addressing global knowledge systems, digital innovation, and big data governance.
                </div>
              </li>
            </ul>
          </div>

          {/* Academic References */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Faculty Endorsements (NJUPT)
            </h3>
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{ref.name}</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">{ref.role} &bull; {ref.institution}</p>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 shrink-0">
                  <a href={`mailto:${ref.email}`} className="hover:underline flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {ref.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
