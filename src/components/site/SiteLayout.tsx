import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-deep/20 blur-[140px]" />
      </div>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}