import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case Study: ${params.slug.replace(/-/g, " ")} — Xevotech` },
      { name: "description", content: "Detailed case study from Xevotech Technologies." },
    ],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Case study not found</div>,
  errorComponent: () => <div className="p-20 text-center">Something went wrong.</div>,
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  return (
    <SiteLayout>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <span className="mt-6 inline-flex rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">Case Study</span>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A deep dive into the discovery, architecture, and outcomes of this engagement.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {[
              { l: "Duration", v: "14 weeks" },
              { l: "Team", v: "8 engineers" },
              { l: "Stack", v: "Modern web" },
              { l: "Outcome", v: "+38% KPI" },
            ].map((s) => (
              <GlassCard key={s.l} tilt={false} className="text-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                <div className="mt-1 text-xl font-semibold">{s.v}</div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 aspect-[2/1] w-full rounded-2xl bg-gradient-to-br from-brand/30 via-accent/20 to-brand-deep/30 grid-bg" />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { h: "Challenge", p: "The client needed to modernize a decade-old monolith without disrupting daily operations or losing institutional knowledge." },
              { h: "Solution", p: "We ran a 4-week discovery, then shipped a phased strangler-fig migration with feature flags and parallel write paths." },
              { h: "Outcome", p: "Improved core metrics by double digits, halved infra cost, and gave the team a foundation they can extend for years." },
            ].map((b) => (
              <GlassCard key={b.h} tilt={false}>
                <h3 className="text-lg font-semibold text-brand">{b.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-12" tilt={false}>
            <h3 className="text-lg font-semibold">What we delivered</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Discovery & architecture", "Cloud infrastructure", "Application rebuild", "QA automation", "Observability stack", "Team enablement"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {x}
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="mt-12 text-center">
            <Button asChild variant="brand" size="xl"><Link to="/contact">Start your engagement</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}