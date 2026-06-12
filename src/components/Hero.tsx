"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: 0 }}
          className="text-xs font-mono font-medium text-accent mb-4 tracking-widest uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.15 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Charles Erick S. Ramos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
          className="text-lg md:text-xl text-muted mb-10 leading-relaxed font-light"
        >
          An Aspiring developer building clean, useful software.
          <br />
          Turning ideas into elegant digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.45 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer"
          >
            View My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-border hover:border-foreground/20 transition-colors cursor-pointer"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
