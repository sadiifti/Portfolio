"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Product Manager",
    company: "SWIFTPLUS TECHNOLOGY COMPANY LIMITED",
    location: "Shenzhen, China",
    date: "07/2024 – Current",
    responsibilities: [
      "Define and execute the product vision, strategy, and roadmap for mobile payment solutions.",
      "Identify market trends and customer needs to drive innovation and competitive advantage.",
      "Oversee the design, development, and enhancement of payment gateway services, mobile payment solutions, SDKs, and APIs.",
      "Collaborate with engineering teams to ensure seamless integration of payment solutions into mobile apps and websites."
    ]
  },
  {
    role: "Overseas Sales & Development Engineer",
    company: "SHENZHEN ERAN TECHNOLOGY COMPANY LTD",
    location: "Shenzhen, China",
    date: "12/2023 – 07/2024",
    responsibilities: [
      "Target potential customers in assigned overseas territory and assess their needs to determine product fit.",
      "Build trust and rapport with potential clients through frequent communication and becoming a trusted advisor.",
      "Work with clients to find mutually beneficial agreements on pricing, contracts, and other terms to secure sales."
    ]
  },
  {
    role: "International Project Delivery Engineer",
    company: "WHALE CLOUD TECHNOLOGY COMPANY LTD., ALIBABA CLOUD",
    location: "Nanjing, China",
    date: "10/2019 – 12/2022",
    responsibilities: [
      "Worked at the MOTN (Modernization of Digital Telecommunications Network) project of BTCL, bringing optical fiber FTTH-based technology to Bangladesh.",
      "Completed and installed the software and hardware parts and tested them several times.",
      "Project successfully launched by the government."
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">Work Experience</h2>
        <div className="space-y-12 border-l border-muted pl-6 md:pl-8 ml-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[33px] md:-left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="text-muted-foreground font-medium">{exp.company}</div>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </div>
              </div>
              <ul className="list-disc space-y-2 text-muted-foreground ml-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
