import { motion } from "framer-motion";
import { LogoImage } from "./Logo";

export function HeroLogo() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-brand/25 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-16 rounded-full bg-accent/25 blur-2xl animate-pulse-glow [animation-delay:1s]" />

      <svg className="absolute inset-0 h-full w-full animate-ring-spin" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="92" stroke="url(#ringA)" strokeWidth="0.6" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="78" stroke="url(#ringA)" strokeWidth="0.4" strokeDasharray="1 4" />
        <defs>
          <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.18 225)" />
            <stop offset="100%" stopColor="oklch(0.55 0.20 250)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] animate-ring-spin [animation-direction:reverse] [animation-duration:24s]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="96" stroke="oklch(0.78 0.16 230 / 0.4)" strokeWidth="0.5" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 100 + Math.cos(a) * 96;
          const y = 100 + Math.sin(a) * 96;
          return <circle key={i} cx={x} cy={y} r="1.6" fill="oklch(0.85 0.18 225)" />;
        })}
      </svg>

      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const r = 38 + (i % 3) * 6;
        const x = 50 + Math.cos(a) * r;
        const y = 50 + Math.sin(a) * r;
        return (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-glow shadow-[0_0_8px_oklch(0.85_0.18_225)]"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: 3 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.12 }}
          />
        );
      })}

      <motion.div
        className="glass-strong relative z-10 flex aspect-square w-[55%] items-center justify-center rounded-3xl p-6 animate-float-y"
        whileHover={{ scale: 1.05, rotateY: 8, rotateX: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-accent/15" />
        <LogoImage className="relative z-10 h-full w-full" />
      </motion.div>
    </div>
  );
}