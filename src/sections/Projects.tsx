"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import TechBadge from "@/components/TechBadge";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800 bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Projects"
          subtitle="Beberapa project yang pernah saya kerjakan"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                  <img
                    src={p.images[0] || "/placeholder.svg"}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-4 text-sm text-zinc-600 transition-colors group-hover:text-blue-400">
                    <span>View Project &rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:text-white"
          >
            Lihat Semua Project &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
