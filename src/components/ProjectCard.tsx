"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import TechBadge from "@/components/TechBadge";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-500/5"
      >
        <div className="aspect-video w-full overflow-hidden bg-zinc-800">
          <img
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500 line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-4 text-sm text-zinc-600 transition-colors group-hover:text-blue-400">
            <span>View Project &rarr;</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
