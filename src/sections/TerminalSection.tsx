"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  personal,
  skills,
  projects,
  experiences,
  socialLinks,
} from "@/data/portfolio";

type Line = { element: ReactNode; key: string };

const PROMPT = `guest@${personal.name.toLowerCase()}:~$`;

const helpText = [
  "",
  "  Available commands:",
  "",
  "  about / whoami    show personal info",
  "  banner            display the banner",
  "  clear             clear terminal",
  "  contact / email   contact information",
  "  date              show current date and time",
  "  echo              repeat a message",
  "  experience / exp  work experience",
  "  github            open GitHub profile",
  "  help              show this help",
  "  ls / sections     list all sections",
  "  projects          list featured projects",
  "  skills            show tech stack",
  "  social            show social links",
  "  sudo              try it ;)",
  "  whoami / about    about me",
  "",
  "  Tip: press ↑/↓ for command history, Tab for autocomplete",
  "",
];

const banner = [
  "",
  "  ╔══════════════════════════════════════╗",
  "  ║                                      ║",
  `  ║     ${personal.name.toUpperCase()} - Backend Developer     ║`,
  "  ║                                      ║",
  "  ╚══════════════════════════════════════╝",
  "",
  `  Welcome to ${personal.name}'s interactive portfolio terminal.`,
  "  Type `help` to see available commands.",
  "",
];

function bar(level: number) {
  const f = Math.round(level / 10);
  return "[" + "\u2588".repeat(f) + "\u2591".repeat(10 - f) + "]";
}

let uid = 0;
function id() {
  uid += 1;
  return `t${uid}`;
}

export default function TerminalSection() {
  const [lines, setLines] = useState<Line[]>([
    {
      element: (
        <div>
          <span className="text-green-400">{PROMPT}</span>{" "}
          <span>
            Welcome to the interactive terminal! Type <span className="text-yellow-400">help</span>{" "}
            to see available commands.
          </span>
        </div>
      ),
      key: id(),
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const addLine = useCallback((el: ReactNode) => {
    const k = id();
    setLines((prev) => [...prev, { element: el, key: k }]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    const t = setTimeout(
      () =>
        addLine(
          <div className="text-green-400/70">[  OK  ] Terminal ready. Type `help` to begin.</div>
        ),
      300
    );
    return () => clearTimeout(t);
  }, [addLine]);

  const exec = useCallback(
    (cmd: string) => {
      const t = cmd.trim();
      if (!t) return;

      addLine(
        <div>
          <span className="text-green-400">{PROMPT}</span>{" "}
          <span>{t}</span>
        </div>
      );

      setHistory((prev) => [...prev, t]);
      setHistIdx(-1);

      const parts = t.split(/\s+/);
      const c = parts[0].toLowerCase();
      const args = parts.slice(1);
      const out: (string | ReactNode)[] = [];

      switch (c) {
        case "help":
          helpText.forEach((l) => out.push(l));
          break;
        case "banner":
          banner.forEach((l) => out.push(l));
          break;
        case "about":
        case "whoami":
          out.push("");
          out.push(`  Name:        ${personal.name}`);
          out.push(`  Role:        ${personal.role}`);
          out.push(`  Location:    ${personal.location}`);
          out.push(`  Status:      ${personal.available ? "Open for opportunities" : "N/A"}`);
          out.push(`  Description: ${personal.description}`);
          out.push("");
          break;
        case "skills":
          out.push("");
          skills.forEach((s) => out.push(`  ${s.icon}  ${s.name.padEnd(18)} ${bar(s.level)} ${s.level}%`));
          out.push("");
          break;
        case "projects":
          out.push("");
          projects.forEach((p) => {
            out.push(`  ─ ${p.title}`);
            out.push(`    ${p.description.substring(0, 70)}...`);
            out.push(`    Tech: ${p.tech.join(", ")}`);
            out.push("");
          });
          break;
        case "experience":
        case "exp":
          out.push("");
          experiences.forEach((e) => {
            out.push(`  ─ ${e.role} @ ${e.company} (${e.period})`);
            out.push(`    ${e.description.substring(0, 70)}...`);
            out.push("");
          });
          break;
        case "contact":
        case "email":
          out.push("");
          out.push(`  Email: ${personal.email}`);
          out.push("");
          break;
        case "social":
          out.push("");
          socialLinks.forEach((l) => out.push(`  • ${l.name}: ${l.url}`));
          out.push("");
          break;
        case "github":
          out.push("");
          const gh = socialLinks.find((l) => l.icon === "github");
          out.push(`  ${gh ? gh.url : "https://github.com"}`);
          out.push("");
          break;
        case "ls":
        case "sections":
          out.push("");
          out.push("  about      - Personal information");
          out.push("  skills     - Tech stack");
          out.push("  projects   - Featured projects");
          out.push("  experience - Work experience");
          out.push("  contact    - Get in touch");
          out.push("  social     - Social links");
          out.push("");
          break;
        case "neofetch":
          out.push("");
          out.push(`  ${personal.name}@portfolio`);
          out.push(`  ${"─".repeat(26)}`);
          out.push(`  OS:      Portfolio OS v1.0`);
          out.push(`  Shell:   bash 5.2`);
          out.push(`  Role:    ${personal.role}`);
          out.push(`  Status:  ${personal.available ? "Open" : "N/A"}`);
          out.push("");
          break;
        case "date":
          out.push("");
          out.push(`  ${new Date().toLocaleString()}`);
          out.push("");
          break;
        case "echo":
          out.push("");
          out.push(`  ${args.join(" ")}`);
          out.push("");
          break;
        case "sudo":
          out.push("");
          out.push("  Permission denied.");
          out.push("");
          break;
        case "clear":
          setLines([]);
          return;
        default:
          out.push("");
          out.push(`  Command not found: ${c}. Type 'help'.`);
          out.push("");
      }

      out.forEach((o) =>
        addLine(
          typeof o === "string" ? (
            <div className="whitespace-pre text-zinc-300">{o}</div>
          ) : (
            o
          )
        )
      );
    },
    [addLine]
  );

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      exec(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const i = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(i);
      setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const i = histIdx + 1;
      if (i >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(i);
        setInput(history[i]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const cmds = [
        "about", "banner", "clear", "contact", "date", "echo",
        "experience", "github", "help", "ls", "neofetch",
        "projects", "skills", "social", "sudo", "whoami",
      ];
      const m = cmds.find((c) => c.startsWith(input.trim().toLowerCase()));
      if (m) setInput(m);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <section id="terminal" className="border-t border-zinc-800 bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Interactive Terminal
          </h2>
          <p className="mt-2 text-zinc-500">
            Explore my portfolio through the command line
          </p>
          <div className="mt-4 h-px w-12 bg-blue-500/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => inputRef.current?.focus()}
          className="overflow-hidden rounded-xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-zinc-700 bg-[#2d2d2d] px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 font-mono text-[10px] text-zinc-500">
              {personal.name.toLowerCase()} — interactive
            </span>
          </div>

          <div className="h-72 overflow-y-auto p-4 font-mono text-xs leading-6 text-zinc-200 scrollbar-thin md:h-80">
            {lines.map((l) => (
              <div key={l.key}>{l.element}</div>
            ))}

            <div className="mt-0.5 flex items-center">
              <span className="text-green-400 shrink-0">{PROMPT}</span>
              <span className="relative ml-1.5 flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  autoFocus
                  className="w-full bg-transparent text-zinc-200 outline-none caret-transparent"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center">
                  <span className="text-zinc-200">{input}</span>
                  <span className="ml-[1px] inline-block h-4 w-[2px] animate-pulse bg-green-400" />
                </span>
              </span>
            </div>

            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
