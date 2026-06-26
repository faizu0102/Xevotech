import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const roles = [
  { title: "Senior Full-Stack Engineer", loc: "Remote / India", team: "Engineering" },
  { title: "AI Engineer (LLM / RAG)", loc: "Remote", team: "AI" },
  { title: "Cloud Architect (AWS)", loc: "Bengaluru", team: "Cloud" },
  { title: "Chartered Accountant", loc: "Mumbai", team: "CA Practice" },
  { title: "Product Designer", loc: "Remote", team: "Design" },
  { title: "DevOps Engineer", loc: "Remote", team: "Platform" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Xevotech Technologies" },
      { name: "description", content: "Join Xevotech — engineers, AI researchers, and chartered accountants." },
      { property: "og:title", content: "Careers — Xevotech" },
      { property: "og:description", content: "We are hiring across engineering, AI, cloud, and CA." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Careers"
            title="Build the |Future With Us|"
            description="We hire generous craftspeople who care about outcomes. Remote-friendly. Outcome-driven."
          />
          <div className="mt-14 space-y-3">
            {roles.map((r, i) => (
              <GlassCard key={r.title} delay={i * 0.04} tilt={false} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{r.team}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.loc}</span>
                  </div>
                </div>
                <Button asChild variant="outlineBrand" size="sm">
                  <Link to="/contact">
                    Apply <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}