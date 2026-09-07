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
    <main className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <nav className="mb-8 text-sm text-foreground/50">
          <Link href="/" className="transition-colors hover:text-foreground/70">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground/70"
          >
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/70">{project.title}</span>
        </nav>

        <section>
          <ProjectGallery images={project.images} title={project.title} />
        </section>

        <section className="mt-10">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
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
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90"
              >
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border-subtle bg-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-all hover:border-foreground/20 hover:text-foreground"
              >
                Source Code
              </a>
            )}
          </div>
        </section>

        <section className="mt-16 space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3 leading-7 text-foreground/60">{project.overview}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Features</h2>
            <ul className="mt-3 space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/60">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Technology Used
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border-subtle bg-surface px-3 py-1.5 text-sm text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Challenges</h2>
            <p className="mt-3 leading-7 text-foreground/60">{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Future Improvement
            </h2>
            <p className="mt-3 leading-7 text-foreground/60">
              {project.futureImprovements}
            </p>
          </div>
        </section>

        <div className="mt-16 border-t border-border-subtle pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
