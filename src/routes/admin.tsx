import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { LogoWordmark } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import {
  BarChart3, Briefcase, FileText, Home, Image as ImageIcon, LayoutDashboard, LogOut,
  Mail, MessageSquare, Search, Settings, Star, Users, Bell, Plus, TrendingUp,
  ArrowUpRight, ArrowDownRight, Filter, MoreHorizontal, Eye, Edit, Trash2, Check, X,
} from "lucide-react";
import {
  listAllReviews,
  setReviewStatus,
  deleteReview,
  type Review,
} from "@/lib/reviews.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Xevotech" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminDashboard,
});

type Section =
  | "dashboard" | "services" | "blogs" | "careers" | "portfolio"
  | "testimonials" | "leads" | "users" | "analytics" | "settings";

const navItems: { id: Section; label: string; icon: any }[] = [
  { id: "dashboard", label: "Overview", icon: LayoutDashboard },
  { id: "leads", label: "Leads", icon: Mail },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "portfolio", label: "Portfolio", icon: ImageIcon },
  { id: "blogs", label: "Blogs", icon: FileText },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "careers", label: "Careers", icon: Users },
  { id: "users", label: "Users", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

function AdminDashboard() {
  const [section, setSection] = useState<Section>("dashboard");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[140px]" />
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border/40 bg-background/40 p-4 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="px-1 py-2"><LogoWordmark /></div>
          <nav className="mt-6 flex-1 space-y-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => setSection(n.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  section === n.id ? "bg-brand/15 text-brand" : "text-muted-foreground hover:bg-brand/5 hover:text-foreground"
                }`}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 space-y-1 border-t border-border/40 pt-4">
            <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-brand/5 hover:text-foreground">
              <Home className="h-4 w-4" /> View site
            </Link>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/40 bg-background/70 px-6 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <select
                value={section}
                onChange={(e) => setSection(e.target.value as Section)}
                className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-sm lg:hidden"
              >
                {navItems.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
              </select>
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input placeholder="Search…" className="w-64 rounded-full border border-border/60 bg-background/40 py-1.5 pl-9 pr-3 text-sm outline-none focus:border-brand" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative rounded-full p-2 text-muted-foreground hover:bg-brand/10 hover:text-brand" aria-label="Notifications">
                <Bell className="h-4 w-4" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
              </button>
              <div className="ml-2 flex items-center gap-2 rounded-full border border-border/60 px-2 py-1 pr-3 text-sm">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand to-accent text-xs font-bold text-primary-foreground">AX</div>
                <span className="hidden sm:inline">Admin</span>
              </div>
            </div>
          </header>

          <main className="p-6 lg:p-8">
            {section === "dashboard" && <Overview />}
            {section === "leads" && <Leads />}
            {section === "services" && <ResourceTable title="Services" rows={mockServices} columns={["Name", "Category", "Status"]} />}
            {section === "portfolio" && <ResourceTable title="Portfolio Projects" rows={mockPortfolio} columns={["Title", "Industry", "Year"]} />}
            {section === "blogs" && <ResourceTable title="Blog Posts" rows={mockBlogs} columns={["Title", "Category", "Published"]} />}
            {section === "testimonials" && <Testimonials />}
            {section === "careers" && <ResourceTable title="Job Openings" rows={mockJobs} columns={["Role", "Department", "Location"]} />}
            {section === "users" && <ResourceTable title="Users" rows={mockUsers} columns={["Name", "Role", "Status"]} />}
            {section === "analytics" && <Analytics />}
            {section === "settings" && <SettingsPane />}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------- Shared bits ---------- */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border/40 bg-card/40 p-5 backdrop-blur-md ${className}`}>{children}</div>;
}
function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

/* ---------- Overview ---------- */
function Overview() {
  const stats = [
    { l: "Total Leads", v: "1,284", d: "+12.4%", up: true, icon: Mail },
    { l: "Conversions", v: "186", d: "+8.1%", up: true, icon: TrendingUp },
    { l: "Active Projects", v: "47", d: "-2.0%", up: false, icon: Briefcase },
    { l: "Site Visitors", v: "92.3K", d: "+18.7%", up: true, icon: Eye },
  ];
  return (
    <>
      <PageHeader title="Overview" subtitle="What's happening across Xevotech this week." action={
        <Button variant="brand"><Plus className="h-4 w-4" />New campaign</Button>
      } />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.l}>
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">{s.l}</span>
              <s.icon className="h-4 w-4 text-brand" />
            </div>
            <div className="mt-3 text-3xl font-bold">{s.v}</div>
            <div className={`mt-1 inline-flex items-center gap-1 text-xs ${s.up ? "text-emerald-400" : "text-destructive"}`}>
              {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />} {s.d}
              <span className="text-muted-foreground">vs last week</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Leads & Conversions</h3>
            <select className="rounded-lg border border-border/60 bg-background/60 px-2 py-1 text-xs">
              <option>Last 30 days</option><option>Last 90 days</option>
            </select>
          </div>
          <Sparkline />
        </Card>
        <Card>
          <h3 className="font-semibold">Top Sources</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { l: "Organic Search", v: 42 }, { l: "Direct", v: 23 },
              { l: "LinkedIn", v: 18 }, { l: "Referral", v: 11 }, { l: "Email", v: 6 },
            ].map((r) => (
              <li key={r.l}>
                <div className="flex items-center justify-between text-xs"><span>{r.l}</span><span className="text-muted-foreground">{r.v}%</span></div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent" style={{ width: `${r.v * 2}%`, maxWidth: "100%" }} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Recent Leads</h3>
            <button className="text-xs text-brand hover:underline">View all</button>
          </div>
          <ul className="mt-4 divide-y divide-border/40">
            {mockLeads.slice(0, 5).map((l) => (
              <li key={l.email} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <div className="font-medium">{l.name}</div>
                  <div className="text-xs text-muted-foreground">{l.email} · {l.service}</div>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  l.status === "Hot" ? "bg-destructive/15 text-destructive"
                  : l.status === "Warm" ? "bg-yellow-500/15 text-yellow-400"
                  : "bg-brand/15 text-brand"
                }`}>{l.status}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="font-semibold">Activity Feed</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { i: MessageSquare, t: "New chatbot conversation from WhatsApp", time: "2m" },
              { i: Mail, t: "Lead form submitted — Riya Sharma", time: "12m" },
              { i: FileText, t: "Blog post 'Agentic AI' published", time: "1h" },
              { i: Star, t: "New testimonial received (5 stars)", time: "3h" },
              { i: Briefcase, t: "Project status updated: HealthTech v2", time: "6h" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15 text-brand"><a.i className="h-3.5 w-3.5" /></div>
                <div className="flex-1"><div>{a.t}</div><div className="text-xs text-muted-foreground">{a.time} ago</div></div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

function Sparkline() {
  const data = [12, 18, 14, 22, 28, 24, 32, 30, 38, 42, 36, 48, 52, 46, 58, 64, 60, 72, 68, 80];
  const max = Math.max(...data);
  const w = 600, h = 160, step = w / (data.length - 1);
  const points = data.map((d, i) => `${i * step},${h - (d / max) * (h - 20) - 10}`).join(" ");
  return (
    <div className="mt-4 -mb-2">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-40 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,${h} ${points} ${w},${h}`} fill="url(#sparkFill)" />
        <polyline points={points} fill="none" stroke="oklch(0.78 0.16 230)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ---------- Leads ---------- */
const mockLeads = [
  { name: "Riya Sharma", email: "riya@growthlab.io", service: "AI Chatbot", status: "Hot", date: "Today" },
  { name: "Daniel Chen", email: "daniel@acmehealth.com", service: "Mobile App", status: "Warm", date: "Today" },
  { name: "Priya Patel", email: "priya@finsync.in", service: "Cloud Migration", status: "New", date: "Yesterday" },
  { name: "Marcus Reed", email: "marcus@retailx.co", service: "E-commerce", status: "Hot", date: "Yesterday" },
  { name: "Aarav Singh", email: "aarav@edunext.com", service: "Web App", status: "Warm", date: "2d ago" },
  { name: "Sophie Müller", email: "sophie@logflow.eu", service: "Automation", status: "New", date: "3d ago" },
];
function Leads() {
  return (
    <>
      <PageHeader title="Leads" subtitle="All inbound inquiries from your website and WhatsApp."
        action={<div className="flex gap-2"><Button variant="outline"><Filter className="h-4 w-4" />Filter</Button><Button variant="brand"><Plus className="h-4 w-4" />New lead</Button></div>}
      />
      <Card className="overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead className="border-b border-border/40 bg-background/40 text-xs uppercase tracking-widest text-muted-foreground">
            <tr>{["Name", "Email", "Service", "Status", "Date", ""].map((h) => <th key={h} className="px-5 py-3 text-left font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {mockLeads.map((l) => (
              <tr key={l.email} className="border-b border-border/30 last:border-0 hover:bg-brand/5">
                <td className="px-5 py-3 font-medium">{l.name}</td>
                <td className="px-5 py-3 text-muted-foreground">{l.email}</td>
                <td className="px-5 py-3">{l.service}</td>
                <td className="px-5 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    l.status === "Hot" ? "bg-destructive/15 text-destructive"
                    : l.status === "Warm" ? "bg-yellow-500/15 text-yellow-400"
                    : "bg-brand/15 text-brand"
                  }`}>{l.status}</span>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{l.date}</td>
                <td className="px-5 py-3 text-right">
                  <div className="inline-flex gap-1 text-muted-foreground">
                    <button className="rounded p-1 hover:bg-brand/10 hover:text-brand"><Eye className="h-3.5 w-3.5" /></button>
                    <button className="rounded p-1 hover:bg-brand/10 hover:text-brand"><Edit className="h-3.5 w-3.5" /></button>
                    <button className="rounded p-1 hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}

/* ---------- Generic resource table ---------- */
const mockServices = [
  ["AI Chatbots", "AI & Automation", "Active"],
  ["Workflow Automation", "AI & Automation", "Active"],
  ["Web Development", "Software", "Active"],
  ["Mobile Apps", "Software", "Active"],
  ["AWS Migration", "Cloud", "Draft"],
  ["SEO", "Marketing", "Active"],
];
const mockPortfolio = [
  ["FinSync AI", "FinTech", "2026"],
  ["HealthOne", "HealthTech", "2025"],
  ["RouteIQ", "Logistics", "2025"],
  ["ShopForge", "Retail", "2024"],
];
const mockBlogs = [
  ["Agentic AI is rewriting workflows", "AI", "Jun 02, 2026"],
  ["Shipping RAG to production", "AI", "May 22, 2026"],
  ["Next.js vs TanStack Start", "Web", "May 14, 2026"],
];
const mockJobs = [
  ["Senior React Engineer", "Engineering", "Remote, India"],
  ["AI/ML Engineer", "AI", "Hybrid, Bengaluru"],
  ["Product Designer", "Design", "Remote"],
];
const mockUsers = [
  ["Ankit Verma", "Admin", "Active"],
  ["Rhea Joshi", "Editor", "Active"],
  ["Karan Mehta", "Author", "Invited"],
];
function ResourceTable({ title, rows, columns }: { title: string; rows: string[][]; columns: string[] }) {
  return (
    <>
      <PageHeader title={title} action={<Button variant="brand"><Plus className="h-4 w-4" />Add new</Button>} />
      <Card className="overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead className="border-b border-border/40 bg-background/40 text-xs uppercase tracking-widest text-muted-foreground">
            <tr>{[...columns, ""].map((h) => <th key={h} className="px-5 py-3 text-left font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-brand/5">
                {row.map((c, j) => (
                  <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>{c}</td>
                ))}
                <td className="px-5 py-3 text-right text-muted-foreground"><MoreHorizontal className="ml-auto h-4 w-4" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const fetchAll = useServerFn(listAllReviews);
  const updateStatus = useServerFn(setReviewStatus);
  const removeReview = useServerFn(deleteReview);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");

  const load = async () => {
    try {
      setLoading(true);
      setReviews(await fetchAll());
    } catch (e) {
      console.error(e);
      toast.error("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.status === filter);
  const pendingCount = reviews.filter((r) => r.status === "pending").length;

  const handleStatus = async (id: string, status: "approved" | "rejected" | "pending") => {
    try {
      await updateStatus({ data: { id, status } });
      setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      toast.success(`Review ${status}.`);
    } catch {
      toast.error("Could not update review.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this review permanently?")) return;
    try {
      await removeReview({ data: { id } });
      setReviews((prev) => prev.filter((r) => r.id !== id));
      toast.success("Review deleted.");
    } catch {
      toast.error("Could not delete review.");
    }
  };

  return (
    <>
      <PageHeader
        title="Customer Reviews"
        subtitle={pendingCount > 0 ? `${pendingCount} pending approval` : "All caught up"}
        action={
          <div className="flex flex-wrap gap-1 rounded-lg border border-border/60 bg-background/60 p-1">
            {(["pending", "approved", "rejected", "all"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-md px-3 py-1.5 text-xs capitalize transition-colors ${
                  filter === s
                    ? "bg-brand text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        }
      />
      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Card key={i}><div className="h-32 animate-pulse rounded-lg bg-muted/40" /></Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <Card><p className="text-sm text-muted-foreground">No reviews in this view.</p></Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((r) => (
            <Card key={r.id}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex text-brand">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                    r.status === "approved"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : r.status === "rejected"
                        ? "bg-destructive/15 text-destructive"
                        : "bg-amber-500/15 text-amber-400"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <p className="mt-3 line-clamp-5 text-sm leading-relaxed">"{r.comment}"</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold">{r.name}</span>
                <span className="text-muted-foreground">
                  {new Date(r.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.status !== "approved" && (
                  <Button size="sm" variant="brand" onClick={() => handleStatus(r.id, "approved")}>
                    <Check className="h-3.5 w-3.5" /> Approve
                  </Button>
                )}
                {r.status !== "rejected" && (
                  <Button size="sm" variant="outline" onClick={() => handleStatus(r.id, "rejected")}>
                    <X className="h-3.5 w-3.5" /> Reject
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => handleDelete(r.id)}>
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------- Analytics ---------- */
function Analytics() {
  return (
    <>
      <PageHeader title="Analytics" subtitle="Website & marketing performance" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { l: "Page Views", v: "284K" }, { l: "Avg. Session", v: "3m 42s" },
          { l: "Bounce Rate", v: "38.2%" }, { l: "SEO Score", v: "98/100" },
        ].map((s) => (
          <Card key={s.l}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            <div className="mt-2 text-2xl font-bold">{s.v}</div>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <h3 className="font-semibold">Traffic over time</h3>
        <Sparkline />
      </Card>
    </>
  );
}

/* ---------- Settings ---------- */
function SettingsPane() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Site configuration and integrations" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold">Brand</h3>
          <div className="mt-4 space-y-3 text-sm">
            <label className="block"><span className="text-muted-foreground">Site title</span>
              <input defaultValue="Xevotech Technologies" className="mt-1 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2 outline-none focus:border-brand" />
            </label>
            <label className="block"><span className="text-muted-foreground">Tagline</span>
              <input defaultValue="Innovating Tomorrow" className="mt-1 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2 outline-none focus:border-brand" />
            </label>
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold">Integrations</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["Google Analytics", "Connected"], ["Google Search Console", "Connected"],
              ["WhatsApp Business API", "Connected"], ["Calendly", "Not connected"],
              ["Gmail SMTP", "Connected"], ["Facebook Pixel", "Not connected"],
            ].map(([n, s]) => (
              <li key={n} className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2">
                <span>{n}</span>
                <span className={`text-xs ${s === "Connected" ? "text-emerald-400" : "text-muted-foreground"}`}>{s}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}