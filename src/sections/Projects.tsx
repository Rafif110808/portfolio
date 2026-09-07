"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border-subtle bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Projects"
          subtitle="Beberapa project yang pernah saya kerjakan"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} featured={i === 0} />
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
            className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-all hover:border-foreground/20 hover:text-foreground"
          >
            Lihat Semua Project &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
