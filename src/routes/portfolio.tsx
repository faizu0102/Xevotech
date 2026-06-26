import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { ChevronRight } from "lucide-react";

const work = [
  { cat: "SaaS", title: "FlowDesk CRM", desc: "Multi-tenant sales platform with AI insights." },
  { cat: "Fintech", title: "PayLane", desc: "Cross-border payments with real-time FX." },
  { cat: "Healthcare", title: "MediTrack", desc: "EMR and telemedicine suite." },
  { cat: "AI", title: "Lexis Agent", desc: "RAG-powered legal research assistant." },
  { cat: "ERP", title: "Orbit ERP", desc: "Manufacturing operations & supply chain." },
  { cat: "Mobile", title: "ShopPulse", desc: "Native retail companion app." },
  { cat: "Enterprise", title: "GridOps", desc: "Energy operations dashboard." },
  { cat: "Web App", title: "LearnLoop", desc: "Adaptive learning platform." },
  { cat: "Fintech", title: "TaxBridge", desc: "Automated GST filing portal." },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Xevotech Technologies" },
      { name: "description", content: "Selected work across SaaS, Fintech, Healthcare, ERP, and AI." },
      { property: "og:title", content: "Portfolio — Xevotech" },
      { property: "og:description", content: "Products and platforms we have built." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="Built With |Xevotech|"
            description="A small selection from our shipped work."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {work.map((p, i) => (
              <GlassCard key={p.title} delay={(i % 6) * 0.05} className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 gradient-brand opacity-80" />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-background/90">
                    {p.title.split(" ")[0]}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-brand">{p.cat}</div>
                  <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-brand">
                    View case <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}