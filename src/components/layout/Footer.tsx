import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-zinc-600 md:flex-row">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
