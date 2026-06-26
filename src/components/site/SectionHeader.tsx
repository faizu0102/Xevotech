import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        {title.split("|").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gradient-brand">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}