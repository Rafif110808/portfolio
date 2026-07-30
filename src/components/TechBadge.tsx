type Props = {
  label: string;
};

export default function TechBadge({ label }: Props) {
  return (
    <span className="rounded-md border border-zinc-700/50 bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-400 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400">
      {label}
    </span>
  );
}
