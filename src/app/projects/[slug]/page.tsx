import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import ProjectGallery from "@/components/ProjectGallery";
import TechBadge from "@/components/TechBadge";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 pt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <nav className="mb-8 text-sm text-zinc-600">
          <Link href="/" className="transition-colors hover:text-zinc-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/projects"
            className="transition-colors hover:text-zinc-400"
          >
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-400">{project.title}</span>
        </nav>

        <section>
          <ProjectGallery images={project.images} title={project.title} />
        </section>

        <section className="mt-10">
          <h1 className="text-3xl font-bold text-zinc-100 md:text-4xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
              >
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:text-white"
              >
                Source Code
              </a>
            )}
          </div>
        </section>

        <section className="mt-16 space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">Overview</h2>
            <p className="mt-3 leading-7 text-zinc-400">{project.overview}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100">Features</h2>
            <ul className="mt-3 space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100">
              Technology Used
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100">Challenges</h2>
            <p className="mt-3 leading-7 text-zinc-400">{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-100">
              Future Improvement
            </h2>
            <p className="mt-3 leading-7 text-zinc-400">
              {project.futureImprovements}
            </p>
          </div>
        </section>

        <div className="mt-16 border-t border-zinc-800 pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
