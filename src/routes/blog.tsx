import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Search, Tag } from "lucide-react";

const posts = [
  { slug: "agentic-ai-enterprise", title: "Agentic AI is rewriting enterprise workflows", category: "AI", date: "Jun 02, 2026", read: "7 min", excerpt: "How autonomous agents are collapsing multi-step business processes into single prompts." },
  { slug: "rag-production", title: "Shipping RAG systems that survive production", category: "AI", date: "May 22, 2026", read: "9 min", excerpt: "Eval harnesses, citation guarantees, and the retrieval patterns that actually scale." },
  { slug: "nextjs-vs-tanstack", title: "Choosing between Next.js and TanStack Start in 2026", category: "Web", date: "May 14, 2026", read: "6 min", excerpt: "A pragmatic breakdown of router models, SSR, and DX for new product teams." },
  { slug: "cloud-cost-playbook", title: "The cloud cost playbook for Series-A startups", category: "Cloud", date: "Apr 30, 2026", read: "8 min", excerpt: "Slashing AWS bills by 40% without sacrificing reliability or velocity." },
  { slug: "seo-2026-trends", title: "SEO in the age of generative search", category: "Marketing", date: "Apr 18, 2026", read: "5 min", excerpt: "What changes when ChatGPT and Perplexity drive a third of your discovery." },
  { slug: "mobile-rn-vs-native", title: "React Native vs. Native in 2026", category: "Mobile", date: "Apr 04, 2026", read: "6 min", excerpt: "Performance, hiring, and time-to-market: when each stack wins." },
  { slug: "soc2-startup", title: "SOC 2 for a 20-person startup, in 90 days", category: "Security", date: "Mar 22, 2026", read: "10 min", excerpt: "The pragmatic checklist we use with every client we onboard." },
  { slug: "bi-stack-2026", title: "A modern BI stack you won't regret", category: "Data", date: "Mar 09, 2026", read: "7 min", excerpt: "Warehouse, transformation, semantic layer, and the BI tool that finally fits." },
  { slug: "design-system-roi", title: "Design systems: measuring the real ROI", category: "Design", date: "Feb 21, 2026", read: "5 min", excerpt: "How we benchmark velocity gains 6 months after rollout." },
];

const categories = ["All", "AI", "Web", "Mobile", "Cloud", "Marketing", "Security", "Data", "Design"];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Xevotech Technologies" },
      { name: "description", content: "Engineering, AI, cloud, and growth insights from the Xevotech team." },
      { property: "og:title", content: "Blog — Xevotech" },
      { property: "og:description", content: "Deep dives on AI, software, and digital transformation." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () =>
      posts.filter(
        (p) =>
          (cat === "All" || p.category === cat) &&
          (q === "" || p.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );
  const featured = posts[0];

  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Blog & Insights"
            title="Ideas From The |Build Room|"
            description="Field notes on shipping AI, modern software, and growth — written by the engineers and operators behind it."
          />

          <GlassCard className="mt-14 lg:p-8" tilt={false}>
            <div className="grid gap-6 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-2">
                <div className="aspect-[5/3] w-full rounded-xl bg-gradient-to-br from-brand/30 via-accent/20 to-brand-deep/30 grid-bg" />
              </div>
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
                  <Tag className="h-3 w-3" /> Featured · {featured.category}
                </span>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">{featured.title}</h3>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{featured.date}</span>
                  <span>{featured.read} read</span>
                </div>
                <Button asChild variant="brand" className="mt-5">
                  <Link to="/blog/$slug" params={{ slug: featured.slug }}>Read article <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </GlassCard>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-full border border-border/60 bg-background/40 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    cat === c ? "bg-brand text-primary-foreground" : "border border-border/60 text-muted-foreground hover:bg-brand/10 hover:text-brand"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <GlassCard key={p.slug} delay={(i % 6) * 0.04}>
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-brand/25 via-accent/15 to-brand-deep/25 grid-bg" />
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand/15 px-2 py-0.5 font-medium text-brand">{p.category}</span>
                  <span className="text-muted-foreground">{p.date} · {p.read}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full py-16 text-center text-muted-foreground">No articles match your search.</div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}