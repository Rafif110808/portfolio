"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { personal, navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background/90 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-tight text-foreground"
        >
          {personal.name}<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 text-sm text-foreground/60 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle bg-surface text-foreground/70 transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 md:hidden ml-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-foreground/60 transition-all ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block h-px w-5 bg-foreground/60 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground/60 transition-all ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border-subtle bg-background"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-foreground/60 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
