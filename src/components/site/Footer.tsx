import { Link } from "@tanstack/react-router";
import { Facebook, Github, Instagram, Linkedin, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { LogoImage } from "./Logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/40 bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <LogoImage className="h-14 w-14 animate-float-slow" />
              <div>
                <div className="font-display text-2xl font-bold">
                  <span className="text-foreground">XEVO</span>
                  <span className="text-brand">TECH</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Technologies Pvt Ltd
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineering digital excellence across software, AI, cloud, and chartered
              accountancy. Innovating tomorrow, today.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass mt-6 flex max-w-sm items-center gap-2 rounded-full p-1.5"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" variant="brand" size="sm" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </div>

          <FooterCol
            title="Company"
            links={[
              { l: "About", to: "/about" },
              { l: "Portfolio", to: "/portfolio" },
              { l: "Careers", to: "/careers" },
              { l: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { l: "IT Solutions", to: "/services" },
              { l: "AI & ML", to: "/services" },
              { l: "Cloud & DevOps", to: "/services" },
              { l: "CA Services", to: "/ca-services" },
            ]}
          />
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a href="tel:+917013438613" className="transition-colors hover:text-brand">
                  +91 70134 38613
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/917013438613"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  WhatsApp +91 70134 38613
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a href="tel:+919860849327" className="transition-colors hover:text-brand">
                  +91 98608 49327
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Github, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-brand/15 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Xevotech Technologies Pvt Ltd. All rights reserved.</p>
          <p>Innovating tomorrow, today.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((x) => (
          <li key={x.l}>
            <Link to={x.to} className="text-muted-foreground transition-colors hover:text-brand">
              {x.l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}