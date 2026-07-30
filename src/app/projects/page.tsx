import Link from "next/link";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <nav className="mb-8 text-sm text-zinc-600">
          <Link href="/" className="transition-colors hover:text-zinc-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-400">Projects</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
          All Projects
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Berikut adalah project-project yang pernah saya kerjakan / kontribusi.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
