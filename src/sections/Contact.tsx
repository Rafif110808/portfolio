"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal, socialLinks } from "@/data/portfolio";

const linkIcons: Record<string, string> = {
  github: "💻",
  linkedin: "🔗",
  mail: "📧",
};

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800 bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Contact" subtitle="Let&apos;s work together" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="text-base text-zinc-400">
            I&apos;m currently looking for internship opportunities. Feel free
            to reach out!
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-zinc-700 hover:text-white"
              >
                <span>{linkIcons[link.icon] || "🔗"}</span>
                {link.name}
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-600">
            or send an email to{" "}
            <a
              href={`mailto:${personal.email}`}
              className="text-blue-400 underline underline-offset-4 transition-colors hover:text-cyan-400"
            >
              {personal.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
