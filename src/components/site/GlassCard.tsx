import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  delay = 0,
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={tilt ? { y: -6, rotateX: 4, rotateY: -4, scale: 1.02 } : { y: -4 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-2xl hover:shadow-brand/20 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/0 via-transparent to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}