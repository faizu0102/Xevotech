import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const studies = [
  { slug: "fintech-ai-underwriting", industry: "FinTech", title: "AI underwriting cuts loan decisions from 6 days to 4 minutes", metric: "98.4%", metricLabel: "auto-approved", stack: ["LLM", "RAG", "AWS"], color: "from-brand/30 to-accent/20" },
  { slug: "d2c-headless-commerce", industry: "Retail", title: "Headless commerce rebuild lifts conversion by 38%", metric: "+38%", metricLabel: "conversion", stack: ["Next.js", "Shopify", "Algolia"], color: "from-accent/30 to-brand-deep/20" },
  { slug: "logistics-route-optimization", industry: "Logistics", title: "Route optimization saves a fleet $2.1M / year", metric: "$2.1M", metricLabel: "annual savings", stack: ["Python", "OR-Tools", "GCP"], color: "from-brand-deep/30 to-brand/20" },
  { slug: "healthtech-patient-portal", industry: "HealthTech", title: "HIPAA-compliant patient portal scaled to 1.2M users", metric: "1.2M", metricLabel: "active users", stack: ["React Native", "Node", "Postgres"], color: "from-brand/30 to-brand-deep/20" },
  { slug: "edtech-ai-tutor", industry: "EdTech", title: "AI tutor lifts course completion by 71%", metric: "+71%", metricLabel: "completion", stack: ["OpenAI", "LangChain", "Vercel"], color: "from-accent/30 to-brand/20" },
  { slug: "saas-analytics-rebuild", industry: "SaaS", title: "Analytics rebuild cuts query latency 14×", metric: "14×", metricLabel: "faster", stack: ["ClickHouse", "dbt", "AWS"], color: "from-brand/30 to-accent/30" },
];
const industries = ["All", "FinTech", "Retail", "Logistics", "HealthTech", "EdTech", "SaaS"];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Xevotech Technologies" },
      { name: "description", content: "Detailed success stories from our enterprise and startup clients." },
      { property: "og:title", content: "Case Studies — Xevotech" },
      { property: "og:description", content: "Real outcomes from AI, software, and digital transformation projects." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? studies : studies.filter((s) => s.industry === filter);

  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Case Studies"
            title="Outcomes That |Move The Needle|"
            description="Hand-picked engagements with measurable results. Click any to read the full story."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Users, n: "180+", l: "Clients shipped" },
              { icon: TrendingUp, n: "$240M+", l: "Revenue impact" },
              { icon: Zap, n: "5.2×", l: "Avg. velocity gain" },
            ].map((s) => (
              <GlassCard key={s.l} tilt={false} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-brand" />
                <div className="mt-3 text-3xl font-bold text-gradient-brand">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {industries.map((i) => (
              <button
                key={i}
                onClick={() => setFilter(i)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  filter === i ? "bg-brand text-primary-foreground" : "border border-border/60 text-muted-foreground hover:bg-brand/10 hover:text-brand"
                }`}
              >
                {i}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {list.map((s, i) => (
              <GlassCard key={s.slug} delay={(i % 4) * 0.05} className="overflow-hidden">
                <div className={`relative -m-6 mb-4 aspect-[2/1] bg-gradient-to-br ${s.color} grid-bg`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl font-bold text-gradient-brand md:text-6xl">{s.metric}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.metricLabel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand/15 px-2 py-0.5 font-medium text-brand">{s.industry}</span>
                  {s.stack.map((t) => (
                    <span key={t} className="text-muted-foreground">· {t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug md:text-xl">{s.title}</h3>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: s.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
                >
                  Read case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">Become the next case study</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}