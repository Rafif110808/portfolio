"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal } from "@/data/portfolio";

const stats = [
  { label: "Tech Stack", value: "10+" },
  { label: "Projects", value: "6+" },
  { label: "Experience", value: "1 Year" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800 bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="About Me" subtitle="Who I am and what I do" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base leading-8 text-zinc-400">
              {personal.description}
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              Currently{" "}
              {personal.available
                ? "looking for internship opportunities."
                : "not available."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-center"
              >
                <p className="text-2xl font-bold text-blue-400">{s.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
