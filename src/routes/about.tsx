import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Xevotech Technologies" },
      {
        name: "description",
        content:
          "Xevotech blends engineering, AI, and chartered accountancy under one trusted partner.",
      },
      { property: "og:title", content: "About — Xevotech Technologies" },
      { property: "og:description", content: "A legacy of innovation and trust." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Our Story"
            title="A Legacy of |Innovation & Trust|"
            description="Founded by engineers and chartered accountants who believed great businesses deserve both — flawless software and flawless compliance."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Our Mission", d: "Empower enterprises to build, scale, and stay compliant on a single trusted platform." },
              { t: "Our Vision", d: "Be the most reliable engineering + advisory partner for the next decade of digital business." },
              { t: "Our Values", d: "Craftsmanship, transparency, and outcomes — measured in client success, not hours billed." },
            ].map((c, i) => (
              <GlassCard key={c.t} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-brand">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}