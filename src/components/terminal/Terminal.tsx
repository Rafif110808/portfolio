"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  personal,
  skills,
  projects,
  experiences,
  socialLinks,
} from "@/data/portfolio";
import type { ReactNode } from "react";

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
  "  neofetch          show portfolio system info",
  "  projects          list featured projects",
  "  skills            show tech stack",
  "  social            show social links",
  "  sudo              try it ;)",
  "  whoami / about    about me",
  "",
  "  Tip: press ↑/↓ for command history",
  "",
];

const bannerLines = [
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
  const filled = Math.round(level / 10);
  const empty = 10 - filled;
  return "[" + "\u2588".repeat(filled) + "\u2591".repeat(empty) + "]";
}

let uid = 0;
function nextId() {
  uid += 1;
  return `t${uid}`;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [booted, setBooted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const addLine = useCallback((el: ReactNode) => {
    const id = nextId();
    setLines((prev) => [...prev, { element: el, key: id }]);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(
      () =>
        addLine(<div className="text-green-400">[  &#10004;  ] Loaded portfolio modules</div>),
      200
    );
    const t2 = setTimeout(
      () =>
        addLine(
          <div className="text-green-400">[  &#10004;  ] Initialized shell environment</div>
        ),
      300
    );
    const t3 = setTimeout(
      () => addLine(<div className="text-green-400">[  &#10004;  ] Ready.</div>),
      400
    );
    const t4 = setTimeout(() => {
      bannerLines.forEach((l) =>
        addLine(<div className="text-cyan-300">{l}</div>)
      );
      setBooted(true);
    }, 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [addLine]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      addLine(
        <div>
          <span className="text-green-400">{PROMPT}</span>{" "}
          <span>{trimmed}</span>
        </div>
      );

      setHistory((prev) => [...prev, trimmed]);

      const parts = trimmed.split(/\s+/);
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      const output: (string | ReactNode)[] = [];

      switch (command) {
        case "help": {
          helpText.forEach((l) => output.push(l));
          break;
        }

        case "banner": {
          bannerLines.forEach((l) => output.push(l));
          break;
        }

        case "about":
        case "whoami": {
          output.push("");
          output.push(`  Name:        ${personal.name}`);
          output.push(`  Role:        ${personal.role}`);
          output.push(`  Location:    ${personal.location}`);
          output.push(
            `  Status:      ${personal.available ? "Open for opportunities" : "Not available"}`
          );
          output.push(`  Description: ${personal.description}`);
          output.push("");
          break;
        }

        case "skills": {
          output.push("");
          output.push("  SKILLS:");
          output.push("");
          skills.forEach((s) => {
            output.push(
              `  ${s.icon}  ${s.name.padEnd(20)} ${bar(s.level)} ${s.level}%`
            );
          });
          output.push("");
          break;
        }

        case "projects": {
          output.push("");
          output.push("  PROJECTS:");
          output.push("");
          projects.forEach((p) => {
            output.push(`  \u250C ${p.title}`);
            output.push(`  \u2502 ${p.description}`);
            output.push(`  \u2502 Tech: ${p.tech.join(", ")}`);
            if (p.github) output.push(`  \u2502 GitHub: ${p.github}`);
            if (p.demo) output.push(`  \u2502 Demo:  ${p.demo}`);
            output.push(`  \u2514${"\u2500".repeat(40)}`);
            output.push("");
          });
          break;
        }

        case "experience":
        case "exp": {
          output.push("");
          output.push("  EXPERIENCE:");
          output.push("");
          experiences.forEach((e) => {
            output.push(`  \u250C ${e.role} @ ${e.company}`);
            output.push(`  \u2502 Period: ${e.period}`);
            output.push(`  \u2502 ${e.description}`);
            output.push(`  \u2502 Tech: ${e.tech.join(", ")}`);
            output.push(`  \u2514${"\u2500".repeat(40)}`);
            output.push("");
          });
          break;
        }

        case "contact":
        case "email": {
          output.push("");
          output.push(`  Email: ${personal.email}`);
          output.push(`  Resume: ${personal.resumeUrl}`);
          output.push("");
          break;
        }

        case "social": {
          output.push("");
          output.push("  SOCIAL LINKS:");
          output.push("");
          socialLinks.forEach((l) => {
            output.push(`  \u2022 ${l.name}: ${l.url}`);
          });
          output.push("");
          break;
        }

        case "github": {
          output.push("");
          const gh = socialLinks.find((l) => l.icon === "github");
          output.push(`  ${gh ? gh.url : "https://github.com"}`);
          output.push("");
          break;
        }

        case "ls":
        case "sections": {
          output.push("");
          output.push("  Sections:");
          output.push("    about      - Personal information");
          output.push("    skills     - Tech stack & proficiency");
          output.push("    projects   - Featured projects");
          output.push("    experience - Work experience");
          output.push("    contact    - Get in touch");
          output.push("    social     - Social media links");
          output.push("");
          break;
        }

        case "neofetch": {
          output.push("");
          output.push(`  ${personal.name}@portfolio`);
          output.push("  " + "\u2500".repeat(30));
          output.push(`  OS:        Portfolio OS v1.0`);
          output.push(`  Host:      ${personal.name}.dev`);
          output.push(`  Kernel:    Next.js 16`);
          output.push(
            `  Uptime:    ${Math.floor(Date.now() / 1000 / 60)} minutes`
          );
          output.push(`  Shell:     bash 5.2`);
          output.push(`  Role:      ${personal.role}`);
          output.push(`  Location:  ${personal.location}`);
          output.push(
            `  Status:    ${personal.available ? "Open for opportunities" : "Not available"}`
          );
          output.push("");
          break;
        }

        case "date": {
          output.push("");
          output.push(`  ${new Date().toLocaleString()}`);
          output.push("");
          break;
        }

        case "echo": {
          output.push("");
          output.push(`  ${args.join(" ")}`);
          output.push("");
          break;
        }

        case "sudo": {
          output.push("");
          output.push("  Permission denied. Nice try, script kiddie.");
          output.push("  (But seriously, feel free to look around!)");
          output.push("");
          break;
        }

        case "clear": {
          setLines([]);
          return;
        }

        default: {
          output.push("");
          output.push(
            `  Command not found: ${command}. Type 'help' for available commands.`
          );
          output.push("");
        }
      }

      output.forEach((o) =>
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIdx =
        historyIdx === -1
          ? history.length - 1
          : Math.max(0, historyIdx - 1);
      setHistoryIdx(newIdx);
      setInput(history[newIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const newIdx = historyIdx + 1;
      if (newIdx >= history.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (!input.trim()) {
        setInput("help");
        return;
      }
      const cmds = [
        "about", "banner", "clear", "contact", "date", "echo",
        "experience", "github", "help", "ls", "neofetch",
        "projects", "skills", "social", "sudo", "whoami",
      ];
      const match = cmds.find((c) => c.startsWith(input.trim().toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-black p-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl shadow-blue-500/5">
        <div className="flex items-center gap-2 border-b border-zinc-700 bg-[#2d2d2d] px-4 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-3 text-xs text-zinc-400">
            {personal.name.toLowerCase()} — bash — 80×24
          </span>
        </div>

        <div className="h-[32rem] overflow-y-auto p-4 font-mono text-sm leading-6 text-zinc-200 scrollbar-thin md:h-[36rem]">
          {lines.map((l) => (
            <div key={l.key}>{l.element}</div>
          ))}

          {booted && (
            <div className="mt-1 flex items-center">
              <span className="text-green-400">{PROMPT}</span>
              <span className="relative ml-2 flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-full bg-transparent text-zinc-200 outline-none caret-transparent"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center">
                  <span className="text-zinc-200">{input}</span>
                  <span className="ml-[1px] inline-block h-5 w-2 animate-pulse bg-zinc-200" />
                </span>
              </span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
