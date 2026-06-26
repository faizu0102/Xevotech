import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { Calendar, Globe, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Xevotech Technologies" },
      { name: "description", content: "Get in touch with Xevotech — software, AI, cloud, and CA services." },
      { property: "og:title", content: "Contact — Xevotech" },
      { property: "og:description", content: "Tell us about your project. We respond within one business day." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Build |Something Great|"
            description="Tell us about your project. We respond within one business day."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            <GlassCard className="lg:col-span-3" tilt={false}>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
                {[
                  { l: "Name", t: "text" },
                  { l: "Email", t: "email" },
                  { l: "Phone", t: "tel" },
                  { l: "Company", t: "text" },
                ].map((f) => (
                  <label key={f.l} className="text-sm">
                    <span className="text-muted-foreground">{f.l}</span>
                    <input
                      type={f.t}
                      required
                      className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/40"
                    />
                  </label>
                ))}
                <label className="text-sm sm:col-span-2">
                  <span className="text-muted-foreground">Service Interested In</span>
                  <select className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-brand">
                    <option>Software Development</option>
                    <option>AI Solutions</option>
                    <option>Cloud & DevOps</option>
                    <option>CA Services</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="text-sm sm:col-span-2">
                  <span className="text-muted-foreground">Message</span>
                  <textarea
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/40"
                  />
                </label>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="brand" size="xl">
                    Send Message <Send className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </GlassCard>

            <div className="space-y-4 lg:col-span-2">
              <GlassCard tilt={false}>
                <h3 className="text-base font-semibold">Reach us</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand" />
                    <a href="tel:+917013438613" className="transition-colors hover:text-brand">
                      +91 70134 38613
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
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
                    <Phone className="h-4 w-4 text-brand" />
                    <a href="tel:+919860849327" className="transition-colors hover:text-brand">
                      +91 98608 49327
                    </a>
                  </li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> India · Remote-first</li>
                </ul>
              </GlassCard>
              <GlassCard tilt={false}>
                <div className="relative mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center">
                  <div className="absolute inset-6 rounded-full bg-brand/20 blur-2xl animate-pulse-glow" />
                  <Globe className="h-16 w-16 text-brand animate-float-y" />
                </div>
              </GlassCard>
              <GlassCard tilt={false}>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-brand" />
                  <div>
                    <div className="text-sm font-semibold">Book a 30-min call</div>
                    <div className="text-xs text-muted-foreground">Free strategy session</div>
                  </div>
                </div>
                <Button asChild variant="outlineBrand" className="mt-4 w-full">
                  <a href="https://calendly.com/" target="_blank" rel="noreferrer">Open Calendar</a>
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}