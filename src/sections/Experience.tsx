"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border-subtle bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Experience" subtitle="My journey so far" />

        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-border-subtle max-md:hidden" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-0 md:pl-8"
              >
                <div className="absolute left-0 top-2 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block" />

                <div className="rounded-lg border border-border-subtle bg-background p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                    </div>
                    <span className="text-xs text-foreground/50">{exp.period}</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-foreground/60">
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface border border-border-subtle px-2 py-0.5 text-xs text-foreground/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
