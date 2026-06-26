import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Landmark, Receipt, ShieldCheck, TrendingUp } from "lucide-react";

const groups = [
  {
    icon: Receipt,
    title: "Tax & GST",
    items: ["GST Registration", "GST Filing", "Income Tax Returns", "TDS Filing", "Tax Planning"],
  },
  {
    icon: Landmark,
    title: "Company Setup",
    items: ["Private Limited", "LLP Registration", "Startup Registration", "MSME Registration", "Trademark"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    items: ["ROC Compliance", "Audit Services", "Statutory Audits", "Internal Audits", "Business Licenses"],
  },
  {
    icon: FileText,
    title: "Accounting",
    items: ["Bookkeeping", "Payroll Management", "Financial Reporting", "Reconciliation", "Outsourced Accounting"],
  },
  {
    icon: TrendingUp,
    title: "Advisory",
    items: ["Virtual CFO", "Financial Consulting", "Fundraising Advisory", "Valuation", "Due Diligence"],
  },
  {
    icon: Calculator,
    title: "Other Services",
    items: ["FEMA Advisory", "Transfer Pricing", "Wealth Planning", "Estate Planning", "NRI Services"],
  },
];

export const Route = createFileRoute("/ca-services")({
  head: () => ({
    meta: [
      { title: "CA Services — Xevotech Technologies" },
      { name: "description", content: "Tax, GST, audit, compliance and advisory by qualified chartered accountants." },
      { property: "og:title", content: "CA Services — Xevotech" },
      { property: "og:description", content: "Chartered accountancy with engineering-grade rigor." },
    ],
    links: [{ rel: "canonical", href: "/ca-services" }],
  }),
  component: CAPage,
});

function CAPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="CA Services"
            title="Compliance, |Done Right.|"
            description="A full-service CA practice integrated with our tech team — file faster, audit cleaner, grow faster."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <GlassCard key={g.title} delay={i * 0.06}>
                <div className="flex items-center gap-3">
                  <div className="glass flex h-11 w-11 items-center justify-center rounded-xl text-brand">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">Talk to a CA</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}