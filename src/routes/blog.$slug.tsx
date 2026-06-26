import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";

type Post = { title: string; category: string; date: string; read: string; body: string[] };
const POSTS: Record<string, Post> = {
  "agentic-ai-enterprise": {
    title: "Agentic AI is rewriting enterprise workflows",
    category: "AI", date: "Jun 02, 2026", read: "7 min",
    body: [
      "For two decades, enterprise software meant forms, queues, and dashboards stitched together by humans. Agentic AI breaks that pattern.",
      "An agent is a model with tools, memory, and a goal. Give it access to your CRM, your warehouse, and a billing API, and a routine that used to take an analyst a week — reconciling accounts, drafting follow-ups, escalating exceptions — collapses into a single prompt.",
      "The hard part is no longer the model. It is the surrounding system: evaluation, observability, guardrails, and the human checkpoints that keep the agent inside the corridor you authorized.",
      "At Xevotech we ship agentic systems in 6–10 week sprints. The pattern is consistent: scope one process, instrument it, deploy a co-pilot, then let the human gradually hand over control as confidence climbs.",
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = POSTS[params.slug];
    if (!post) {
      return { post: { title: params.slug.replace(/-/g, " "), category: "Insights", date: "2026", read: "5 min",
        body: ["This article is being prepared. Please check back shortly."] } };
    }
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — Xevotech Blog` },
      { name: "description", content: loaderData?.post.body[0] ?? "Xevotech Blog" },
    ],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Article not found</div>,
  errorComponent: () => <div className="p-20 text-center">Something went wrong.</div>,
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
            <Tag className="h-3 w-3" /> {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.read} read</span>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 hover:border-brand hover:text-brand">
              <Share2 className="h-3.5 w-3.5" /> Share
            </button>
          </div>
          <div className="mt-8 aspect-[2/1] w-full rounded-2xl bg-gradient-to-br from-brand/30 via-accent/20 to-brand-deep/30 grid-bg" />
          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
            {post.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          <GlassCard className="mt-12" tilt={false}>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold">Ready to apply this to your business?</h3>
                <p className="text-sm text-muted-foreground">Book a 30-min consultation with our engineering team.</p>
              </div>
              <Button asChild variant="brand"><Link to="/contact">Get in touch</Link></Button>
            </div>
          </GlassCard>
        </div>
      </article>
    </SiteLayout>
  );
}