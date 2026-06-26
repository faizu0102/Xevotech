import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import { LogoWordmark } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/ca-services", label: "CA Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="shrink-0">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.slice(0, 9).map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-brand/10 hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-muted-foreground hover:bg-brand/10 hover:text-brand"
          >
            <Search className="h-4 w-4" />
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full p-2 text-muted-foreground hover:bg-brand/10 hover:text-brand"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button asChild variant="brand" size="sm">
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>

        <button
          className="rounded-full p-2 xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-strong border-t border-border/40 xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {links.map((l, i) => (
              <Link
                key={i}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-brand/10 hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="brand" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}