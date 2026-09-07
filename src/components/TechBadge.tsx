type Props = {
  label: string;
};

export default function TechBadge({ label }: Props) {
  return (
    <span className="rounded-md border border-border-subtle bg-surface px-2.5 py-1 text-xs text-foreground/60 transition-colors group-hover:border-accent/30 group-hover:text-accent">
      {label}
    </span>
  );
}
