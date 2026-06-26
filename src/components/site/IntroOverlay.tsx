import { useEffect, useState } from "react";
import { LogoImage } from "./Logo";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative flex flex-col items-center gap-4 animate-intro">
        <div className="absolute -inset-16 rounded-full bg-brand/30 blur-3xl" />
        <LogoImage className="relative h-28 w-28" />
        <div className="relative font-display text-xs uppercase tracking-[0.5em] text-brand">
          Xevotech
        </div>
      </div>
    </div>
  );
}