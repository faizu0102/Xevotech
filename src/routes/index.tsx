import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Calculator,
  Calendar,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  Heart,
  Hospital,
  Landmark,
  Layers,
  MapPin,
  Network,
  Package,
  PieChart,
  Plane,
  Quote,
  Receipt,
  Send,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { IntroOverlay } from "@/components/site/IntroOverlay";
import { HeroLogo } from "@/components/site/HeroLogo";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xevotech Technologies — Engineering Digital Excellence" },
      {
        name: "description",
        content:
          "Xevotech Technologies delivers world-class software, AI, cloud, digital transformation, and chartered accountancy services. Innovating tomorrow, today.",
      },
      { property: "og:title", content: "Xevotech Technologies — Engineering Digital Excellence" },
      {
        property: "og:description",
        content:
          "Software, AI, Cloud, Digital Transformation, and CA Services for ambitious enterprises.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const itServices = [
  { icon: Globe, name: "Website Development" },
  { icon: Layers, name: "Web Applications" },
  { icon: Smartphone, name: "Mobile App Development" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Code2, name: "React & Next.js" },
  { icon: Server, name: "Node.js & APIs" },
  { icon: Wrench, name: "Custom Software" },
  { icon: Database, name: "CRM & ERP" },
  { icon: Network, name: "API Integration" },
  { icon: Package, name: "SaaS Development" },
  { icon: Cloud, name: "Cloud Solutions" },
  { icon: Workflow, name: "DevOps Services" },
  { icon: Sparkles, name: "UI / UX Design" },
  { icon: Brain, name: "AI & Machine Learning" },
  { icon: Bot, name: "Generative & Agentic AI" },
  { icon: PieChart, name: "Data Analytics" },
  { icon: Zap, name: "Business Automation" },
  { icon: ShieldCheck, name: "QA & Testing" },
];

const caServices = [
  "GST Registration",
  "GST Filing",
  "Income Tax Returns",
  "Company Registration",
  "LLP Registration",
  "Private Limited Setup",
  "Startup Registration",
  "ROC Compliance",
  "TDS Filing",
  "Accounting & Bookkeeping",
  "Payroll Management",
  "Tax Planning",
  "Audit Services",
  "Financial Consulting",
  "MSME Registration",
  "Trademark Registration",
  "Business Licenses",
  "Virtual CFO",
];

const aiServices = [
  { icon: Bot, name: "AI Chatbots", desc: "Conversational agents tuned to your domain." },
  { icon: Sparkles, name: "Generative AI", desc: "Content, code, and creative pipelines." },
  { icon: Cpu, name: "AI Agents", desc: "Autonomous task-completing workflows." },
  { icon: FileText, name: "RAG Systems", desc: "Grounded answers over your private data." },
  { icon: Brain, name: "Document AI", desc: "Extract, classify, summarize at scale." },
  { icon: PieChart, name: "Predictive Analytics", desc: "Forecasts that drive decisions." },
];

const cloudServices = [
  { icon: Cloud, name: "AWS" },
  { icon: Cloud, name: "Azure" },
  { icon: Cloud, name: "Google Cloud" },
  { icon: Package, name: "Docker" },
  { icon: Server, name: "Kubernetes" },
  { icon: Workflow, name: "CI / CD" },
  { icon: Shield, name: "Security" },
  { icon: Network, name: "Monitoring" },
];

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
  { icon: Landmark, name: "Banking" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Package, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Hospital, name: "Education" },
  { icon: MapPin, name: "Real Estate" },
  { icon: Plane, name: "Hospitality" },
  { icon: Plane, name: "Travel" },
];

const portfolio = [
  { cat: "SaaS", title: "FlowDesk CRM", desc: "Multi-tenant sales platform with AI insights." },
  { cat: "Fintech", title: "PayLane", desc: "Cross-border payments with real-time FX." },
  { cat: "Healthcare", title: "MediTrack", desc: "Patient records & telemedicine suite." },
  { cat: "AI", title: "Lexis Agent", desc: "RAG-powered legal research assistant." },
  { cat: "ERP", title: "Orbit ERP", desc: "Manufacturing operations & supply chain." },
  { cat: "Mobile", title: "ShopPulse", desc: "Native retail companion app." },
];

const testimonials = [
  {
    name: "Anika Mehta",
    role: "CTO, FinEdge",
    quote:
      "Xevotech rebuilt our trading platform from the ground up. Latency dropped 70% and our team finally ships weekly.",
  },
  {
    name: "Rohan Iyer",
    role: "Founder, MediTrack",
    quote:
      "The AI document pipeline they delivered processes 40,000 records a day with zero manual intervention.",
  },
  {
    name: "Priya Sharma",
    role: "Director, RetailWave",
    quote:
      "From GST filing to a full e-commerce launch — a single trusted partner. Rare and refreshing.",
  },
];

const team = [
  { name: "Namaldar Pavan", role: "CEO & Founder" },
  { name: "Adinath Babanrao Kadam", role: "Head Chartered Accountant" },
  { name: "Vinish", role: "Chief Technology Officer (CTO)" },
];

function Index() {
  return (
    <SiteLayout>
      <IntroOverlay />
      <Hero />
      <TrustMarquee />
      <Stats />
      <About />
      <ITServices />
      <CAServices />
      <AISection />
      <CloudSection />
      <Industries />
      <Portfolio />
      <ReviewsSection />
      <Team />
      <Contact />
    </SiteLayout>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-12 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Innovating Tomorrow, Today
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Engineering{" "}
            <span className="text-gradient-brand">Digital Excellence</span>
            <br />
            Through Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            We help businesses scale through Software Development, AI Solutions, Cloud
            Transformation, Tax Compliance, and Professional CA Services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">
                <Calendar className="mr-1 h-4 w-4" /> Book Consultation
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              <span className="ml-2">Trusted by 250+ enterprises</span>
            </div>
            <span>•</span>
            <span>ISO certified</span>
            <span>•</span>
            <span>24/7 support</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
        >
          <HeroLogo />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── TRUST MARQUEE ─────────────── */
function TrustMarquee() {
  return (
    <section className="border-y border-border/40 bg-background/40 backdrop-blur">
      <Marquee
        items={[
          "AWS Partner",
          "Microsoft Azure",
          "Google Cloud",
          "ISO 27001",
          "GST Registered",
          "ICAI Member Firm",
          "Stripe Verified",
          "OpenAI Build",
          "MongoDB Partner",
          "Vercel Pro",
        ]}
      />
    </section>
  );
}

/* ─────────────── STATS ─────────────── */
function Stats() {
  const stats = [
    { v: 95, s: "%", l: "Client Retention" },
    { v: 250, s: "+", l: "Global Clients" },
    { v: 7200, s: "+", l: "Professionals" },
    { v: 25, s: "+", l: "Years Combined Experience" },
  ];
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Track Record"
          title="Numbers that |Earn Trust|"
          description="A legacy of consistent delivery, deep partnerships, and measurable outcomes for ambitious teams worldwide."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <GlassCard key={s.l} delay={i * 0.08} className="p-8 text-center">
              <div className="font-display text-5xl font-bold text-gradient-brand md:text-6xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  const milestones = [
    { y: "2019", t: "Founded with a vision to merge engineering and accounting." },
    { y: "2021", t: "Crossed 50 enterprise clients across 12 countries." },
    { y: "2023", t: "Launched AI Center of Excellence." },
    { y: "2025", t: "Recognized partner for cloud, AI, and compliance." },
  ];
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Us"
          title="A Legacy of |Innovation & Trust|"
          description="Xevotech blends deep technology expertise with chartered accountancy and business advisory — one partner for building, scaling, and complying."
        />
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <GlassCard className="p-8" tilt={false}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { i: Code2, t: "Technology Expertise" },
                { i: Calculator, t: "Tax & CA Services" },
                { i: Brain, t: "AI Innovation" },
                { i: Sparkles, t: "Startup Advisory" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="glass rounded-xl p-4">
                  <Icon className="h-7 w-7 text-brand" />
                  <div className="mt-2 text-sm font-medium">{t}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Engineers, designers, data scientists, and chartered accountants under one roof.
              Our cross-functional pods ship production-grade systems, then keep them compliant,
              audited, and growing.
            </p>
          </GlassCard>

          <div className="relative">
            <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand via-accent to-transparent" />
            <ul className="space-y-6">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.y}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-brand/40 bg-background text-[10px] font-bold text-brand">
                    ●
                  </span>
                  <div className="font-display text-2xl font-bold text-brand">{m.y}</div>
                  <div className="text-sm text-muted-foreground">{m.t}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── IT SERVICES ─────────────── */
function ITServices() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="IT Services"
          title="Build, Ship, |Scale.|"
          description="A full-spectrum technology stack — from product design and engineering to cloud, AI, and quality assurance."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {itServices.map((s, i) => (
            <GlassCard key={s.name} delay={(i % 8) * 0.05} className="p-5">
              <div className="flex items-center gap-3">
                <div className="glass flex h-10 w-10 items-center justify-center rounded-xl text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">{s.name}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CA SERVICES ─────────────── */
function CAServices() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="CA Services"
          title="Chartered Accountancy, |Reimagined.|"
          description="Tax, audit, compliance, and advisory delivered with the same engineering rigor as our software."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {caServices.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.04 }}
              whileHover={{ y: -6, rotateY: 8, rotateX: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
              className="glass relative flex aspect-square flex-col items-center justify-center rounded-2xl p-4 text-center transition-shadow hover:shadow-2xl hover:shadow-brand/30"
            >
              <Receipt className="mb-2 h-6 w-6 text-brand" />
              <div className="text-xs font-medium leading-tight">{c}</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 to-accent/0 opacity-0 transition-opacity hover:opacity-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── AI SECTION ─────────────── */
function AISection() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="AI & Automation"
          title="Intelligence That |Compounds|"
          description="From chatbots to autonomous agents — production AI, not demos."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Neural network viz */}
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-12 rounded-full bg-brand/15 blur-3xl animate-pulse-glow" />
            <svg viewBox="0 0 400 400" className="relative h-full w-full">
              <defs>
                <radialGradient id="node">
                  <stop offset="0%" stopColor="oklch(0.85 0.18 225)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.20 250 / 0)" />
                </radialGradient>
              </defs>
              {/* Layers */}
              {[80, 200, 320].map((x, layer) => {
                const count = layer === 1 ? 5 : 3;
                return Array.from({ length: count }).map((_, j) => {
                  const y = 80 + ((400 - 160) / (count - 1)) * j;
                  return (
                    <g key={`${x}-${j}`}>
                      <circle cx={x} cy={y} r="22" fill="url(#node)" />
                      <circle cx={x} cy={y} r="6" fill="oklch(0.85 0.18 225)">
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur={`${2 + j * 0.3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                });
              })}
              {/* Connections L1 -> L2 */}
              {Array.from({ length: 3 }).map((_, i) =>
                Array.from({ length: 5 }).map((_, j) => (
                  <line
                    key={`a-${i}-${j}`}
                    x1="80"
                    y1={80 + 120 * i}
                    x2="200"
                    y2={80 + 60 * j}
                    stroke="oklch(0.78 0.16 230 / 0.25)"
                    strokeWidth="0.8"
                  />
                )),
              )}
              {Array.from({ length: 5 }).map((_, i) =>
                Array.from({ length: 3 }).map((_, j) => (
                  <line
                    key={`b-${i}-${j}`}
                    x1="200"
                    y1={80 + 60 * i}
                    x2="320"
                    y2={80 + 120 * j}
                    stroke="oklch(0.78 0.16 230 / 0.25)"
                    strokeWidth="0.8"
                  />
                )),
              )}
            </svg>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiServices.map((s, i) => (
              <GlassCard key={s.name} delay={i * 0.06}>
                <s.icon className="h-7 w-7 text-brand" />
                <h3 className="mt-3 text-base font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CLOUD ─────────────── */
function CloudSection() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Cloud & DevOps"
          title="Infrastructure That |Just Runs|"
          description="Architected, automated, observed — across AWS, Azure, and Google Cloud."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cloudServices.map((c, i) => (
            <GlassCard key={c.name} delay={i * 0.05} className="text-center">
              <c.icon className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-3 text-sm font-medium">{c.name}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── INDUSTRIES ─────────────── */
function Industries() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Industries"
          title="Domain Depth, |Engineering Speed|"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ rotateY: 12, scale: 1.04 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
              className="glass flex items-center gap-3 rounded-2xl p-4 transition-shadow hover:shadow-xl hover:shadow-brand/20"
            >
              <div className="glass flex h-10 w-10 items-center justify-center rounded-lg text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium">{it.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PORTFOLIO ─────────────── */
function Portfolio() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Built With |Xevotech|"
          description="Selected work across SaaS, Fintech, Healthcare, ERP, and AI."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <GlassCard key={p.title} delay={i * 0.06} className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 gradient-brand opacity-80" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-3xl font-bold text-background/90">
                    {p.title.split(" ")[0]}
                  </div>
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
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */
function Testimonials() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Testimonials" title="What Clients |Say|" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.08}>
              <Quote className="h-7 w-7 text-brand" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TEAM ─────────────── */
function Team() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Leadership" title="The People |Behind the Build|" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <GlassCard key={m.name} delay={i * 0.06} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full gradient-brand text-3xl font-bold text-primary-foreground animate-float-slow">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 text-base font-semibold">{m.name}</h3>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
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
                    className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none ring-brand/40 transition-all focus:border-brand focus:ring-2"
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
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/40"
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" variant="brand" size="xl" className="w-full sm:w-auto">
                  Send Message <Send className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </form>
          </GlassCard>

          <div className="space-y-4 lg:col-span-2">
            <GlassCard tilt={false}>
              <div className="relative mx-auto flex aspect-square w-full max-w-[260px] items-center justify-center">
                <div className="absolute inset-6 rounded-full bg-brand/20 blur-2xl animate-pulse-glow" />
                <div className="absolute inset-0 animate-ring-spin">
                  <svg viewBox="0 0 200 200" className="h-full w-full">
                    <circle cx="100" cy="100" r="92" fill="none" stroke="oklch(0.78 0.16 230 / 0.4)" strokeWidth="0.4" />
                    <ellipse cx="100" cy="100" rx="92" ry="32" fill="none" stroke="oklch(0.78 0.16 230 / 0.35)" strokeWidth="0.4" />
                    <ellipse cx="100" cy="100" rx="92" ry="56" fill="none" stroke="oklch(0.78 0.16 230 / 0.25)" strokeWidth="0.4" />
                    <ellipse cx="100" cy="100" rx="32" ry="92" fill="none" stroke="oklch(0.78 0.16 230 / 0.35)" strokeWidth="0.4" />
                  </svg>
                </div>
                <Globe className="relative h-16 w-16 text-brand animate-float-y" />
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Serving clients across 25+ countries
              </div>
            </GlassCard>
            <GlassCard tilt={false}>
              <div className="flex items-center gap-3">
                <div className="glass flex h-10 w-10 items-center justify-center rounded-lg text-brand">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Book a strategy call</div>
                  <div className="text-xs text-muted-foreground">30 min · Free · Calendly</div>
                </div>
              </div>
              <Button asChild variant="outlineBrand" className="mt-4 w-full">
                <a href="https://calendly.com/" target="_blank" rel="noreferrer">
                  Open Calendar
                </a>
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
