import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Heart, Hospital, Landmark, MapPin, Package, Plane, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", desc: "EMR, telemedicine, patient engagement." },
  { icon: Landmark, name: "Banking & Finance", desc: "Core systems, KYC, lending platforms." },
  { icon: ShieldCheck, name: "Insurance", desc: "Claims automation, underwriting AI." },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Headless commerce, omnichannel." },
  { icon: Package, name: "Manufacturing", desc: "MES, IoT, predictive maintenance." },
  { icon: Truck, name: "Logistics", desc: "TMS, route optimization, tracking." },
  { icon: Hospital, name: "Education", desc: "LMS, assessment, learning AI." },
  { icon: MapPin, name: "Real Estate", desc: "Property tech, virtual tours, CRM." },
  { icon: Plane, name: "Hospitality & Travel", desc: "Booking engines, guest apps." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Xevotech Technologies" },
      { name: "description", content: "Industry-specific software, AI, and advisory across nine verticals." },
      { property: "og:title", content: "Industries — Xevotech" },
      { property: "og:description", content: "Domain depth across healthcare, finance, retail, and more." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Industries"
            title="Domain Depth, |Engineering Speed|"
            description="Pre-built accelerators and proven playbooks across nine verticals."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((s, i) => (
              <GlassCard key={s.name} delay={i * 0.05}>
                <s.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}