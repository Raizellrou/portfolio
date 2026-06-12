"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const projects = [
  {
    title: "Block 23 System",
    description:
      "Built for a local gym that was relying on spreadsheets to manage their business. They could track sales and memberships, but keeping up with inventory and expenses was a constant struggle. I worked closely with them to build a system that brought everything together in one place.",
    tags: ["React", "TailwindCSS", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
    isPrivate: true,
  },
  {
    title: "Cognisphere",
    description:
      "A brief description of your second project. Highlight the technical challenges you overcame.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    isPrivate: false,
  },
  {
    title: "Project Three",
    description:
      "A brief description of your third project. What did you learn from building it?",
    tags: ["Python", "FastAPI", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
    isPrivate: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={spring}
        >
          <h2 className="text-xs font-mono font-medium text-accent mb-2 tracking-widest uppercase">
            Projects
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            Things I&apos;ve built
          </h3>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-accent/20 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-subtle text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              {!project.isPrivate && (
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors cursor-pointer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 3h7v7M13 3L6 10" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors cursor-pointer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M8 1C4.13 1 1 4.13 1 8c0 3.1 2 5.7 4.8 6.6.35.07.48-.15.48-.34V13c-1.95.42-2.37-.94-2.37-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.08.73 1.08.73.63 1.07 1.64.76 2.04.58.06-.46.24-.76.44-.94-1.56-.18-3.2-.78-3.2-3.47 0-.77.28-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72a6.7 6.7 0 013.5 0c1.34-.9 1.93-.72 1.93-.72.38.97.14 1.7.07 1.87.45.5.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34C13 13.7 15 11.1 15 8c0-3.87-3.13-7-7-7z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
