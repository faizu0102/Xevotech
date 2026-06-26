import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Bot, Brain, Cloud, Code2, Database, Globe, Layers, Network, Package,
  Server, ShieldCheck, Smartphone, Sparkles, Workflow, Wrench, Zap, PieChart, ShoppingBag,
} from "lucide-react";

const services = [
  { icon: Globe, name: "Website Development", desc: "Marketing and corporate sites that perform." },
  { icon: Layers, name: "Web Applications", desc: "Complex SPAs and B2B platforms." },
  { icon: Smartphone, name: "Mobile Apps", desc: "iOS, Android, React Native." },
  { icon: ShoppingBag, name: "E-commerce", desc: "Shopify, custom, headless commerce." },
  { icon: Code2, name: "React & Next.js", desc: "Modern front-end stacks." },
  { icon: Server, name: "Node.js & APIs", desc: "Scalable backends and microservices." },
  { icon: Wrench, name: "Custom Software", desc: "Bespoke systems for unique workflows." },
  { icon: Database, name: "CRM & ERP", desc: "Salesforce, HubSpot, custom ERPs." },
  { icon: Network, name: "API Integration", desc: "Connect every system end-to-end." },
  { icon: Package, name: "SaaS Development", desc: "Multi-tenant products built to scale." },
  { icon: Cloud, name: "Cloud Solutions", desc: "AWS, Azure, GCP architecture." },
  { icon: Workflow, name: "DevOps", desc: "CI/CD, IaC, observability." },
  { icon: Sparkles, name: "UI / UX Design", desc: "Research-led product design." },
  { icon: Brain, name: "AI & ML", desc: "Models trained on your data." },
  { icon: Bot, name: "Generative & Agentic AI", desc: "LLMs, RAG, autonomous agents." },
  { icon: PieChart, name: "Data Analytics", desc: "Warehouses, dashboards, BI." },
  { icon: Zap, name: "Business Automation", desc: "n8n, Make, custom RPA." },
  { icon: ShieldCheck, name: "QA & Testing", desc: "Manual, automation, performance." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Xevotech Technologies" },
      { name: "description", content: "Software development, AI, cloud, DevOps, design, and QA — end-to-end." },
      { property: "og:title", content: "IT Services — Xevotech" },
      { property: "og:description", content: "Full-stack engineering services for ambitious enterprises." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="IT Services"
            title="Engineering Across |The Full Stack|"
            description="From product strategy to production. Pick a discipline or compose a cross-functional pod."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <GlassCard key={s.name} delay={(i % 6) * 0.05}>
                <s.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}