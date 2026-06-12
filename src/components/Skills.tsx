"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const skillCategories = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={spring}
        >
          <h2 className="text-xs font-mono font-medium text-accent mb-2 tracking-widest uppercase">
            Skills
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            Tech I work with
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <h4 className="text-sm font-mono font-semibold text-muted mb-3 uppercase tracking-wide">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
