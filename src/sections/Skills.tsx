"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "backend" as const, label: "Backend" },
  { key: "frontend" as const, label: "Frontend" },
  { key: "database" as const, label: "Database" },
  { key: "tools" as const, label: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800 bg-zinc-900/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="mb-4 text-sm font-semibold text-zinc-300">
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {catSkills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-zinc-300">
                          <span className="text-base">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-xs text-zinc-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.1 + idx * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
