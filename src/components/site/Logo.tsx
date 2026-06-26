import logoAsset from "@/assets/xevotech-logo.asset.json";

export function LogoImage({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Xevotech Technologies"
      className={className + " object-contain"}
      style={{ filter: "drop-shadow(0 0 18px oklch(0.78 0.16 230 / 0.55))" }}
    />
  );
}

export function LogoWordmark() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage className="h-10 w-10" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-wider">
          <span className="text-foreground">XEVO</span>
          <span className="text-brand">TECH</span>
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Innovating Tomorrow
        </span>
      </div>
    </div>
  );
}