"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={spring}
        >
          <h2 className="text-xs font-mono font-medium text-accent mb-2 tracking-widest uppercase">
            About
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-8">
            A bit about me
          </h3>

          <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
            <p>
              I&apos;m a fourth-year Information Technology student passionate about
              building software that solves real problems. I enjoy working across
              the full stack — from crafting intuitive user interfaces to
              designing robust backend systems.
            </p>
            <p className="border-l-2 border-accent pl-4">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or working on
              side projects that challenge me to grow as a developer.
            </p>
            <p>
              I&apos;m currently looking for opportunities where I can
              contribute to meaningful products and continue learning from
              talented teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
