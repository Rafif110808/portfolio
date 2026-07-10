type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-500">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-12 bg-blue-500/50" />
    </div>
  );
}
