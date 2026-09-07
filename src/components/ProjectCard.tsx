"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import TechBadge from "@/components/TechBadge";

type Props = {
  project: Project;
  index: number;
  featured?: boolean;
};

export default function ProjectCard({ project, index, featured = false }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`group block overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/10 hover:shadow-xl hover:shadow-accent/5 ${featured ? "h-full" : ""}`}
      >
        <div className={`w-full overflow-hidden bg-border-subtle ${featured ? "aspect-[16/9]" : "aspect-video"}`}>
          <img
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className={featured ? "p-6" : "p-5"}>
          <h3 className={`font-semibold text-foreground transition-colors group-hover:text-accent ${featured ? "text-xl" : "text-lg"}`}>
            {project.title}
          </h3>

          <p className={`mt-2 text-sm leading-6 text-foreground/60 ${featured ? "line-clamp-3" : "line-clamp-2"}`}>
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-border-subtle pt-4 text-sm text-foreground/50 transition-colors group-hover:text-accent">
            <span>View Project &rarr;</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
