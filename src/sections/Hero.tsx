"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {personal.availableText}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-display text-6xl font-black tracking-tighter text-foreground md:text-8xl">
            {personal.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-2xl font-medium tracking-tight text-foreground/60 md:text-3xl">
            <span className="text-accent">{personal.role.split(" ")[0]}</span>{" "}
            {personal.role.split(" ").slice(1).join(" ")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-7 text-foreground/60">
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90">
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-border-subtle bg-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-all hover:border-foreground/20 hover:text-foreground"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex animate-bounce flex-col items-center gap-2 text-xs text-foreground/40">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
