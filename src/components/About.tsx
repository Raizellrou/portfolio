"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">
            About
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-8">
            A bit about me
          </h3>

          <div className="space-y-4 text-muted leading-relaxed text-lg">
            <p>
              I&apos;m a fourth-year Computer Science student passionate about
              building software that solves real problems. I enjoy working across
              the full stack — from crafting intuitive user interfaces to
              designing robust backend systems.
            </p>
            <p>
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
