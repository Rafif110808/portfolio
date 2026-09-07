"use client";

import {
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const techStack: Tech[] = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#EF4223" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

function TechItem({ name, icon: Icon, color }: Tech) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border-subtle bg-surface px-6 py-4 mx-3">
      <Icon size={28} color={color} />
      <span className="whitespace-nowrap font-mono text-sm font-semibold text-foreground">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const loopItems = [...techStack, ...techStack];

  return (
    <section id="skills" className="border-t border-border-subtle bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="mt-2 text-foreground/60">Teknologi yang saya pakai.</p>
          <div className="mt-4 h-px w-12 bg-accent/50" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee">
          {loopItems.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
