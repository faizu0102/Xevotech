export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-6">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="glass flex items-center gap-2 rounded-full px-5 py-2 text-sm text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}