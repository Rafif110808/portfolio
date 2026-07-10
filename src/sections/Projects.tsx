"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800 bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Projects" subtitle="Things I&apos;ve built" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-sm text-blue-400">
                ~
              </div>

              <h3 className="font-semibold text-zinc-100">{p.title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-3 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-blue-400"
                  >
                    Source
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-blue-400"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
