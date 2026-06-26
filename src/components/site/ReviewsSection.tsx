import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { Quote, Star, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { SectionHeader } from "./SectionHeader";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import {
  listApprovedReviews,
  submitReview,
  type Review,
} from "@/lib/reviews.functions";

function Stars({
  value,
  onChange,
  size = 16,
  interactive = false,
}: {
  value: number;
  onChange?: (n: number) => void;
  size?: number;
  interactive?: boolean;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  return (
    <div
      className="flex items-center gap-1"
      onMouseLeave={() => interactive && setHover(0)}
      role={interactive ? "radiogroup" : undefined}
      aria-label="Rating"
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!interactive}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onMouseEnter={() => interactive && setHover(n)}
          onClick={() => interactive && onChange?.(n)}
          className={`transition-transform ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
        >
          <Star
            style={{ width: size, height: size }}
            className={n <= active ? "fill-brand text-brand" : "text-muted-foreground/40"}
          />
        </button>
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export function ReviewsSection() {
  const fetchReviews = useServerFn(listApprovedReviews);
  const sendReview = useServerFn(submitReview);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchReviews();
      setReviews(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (trimmedName.length < 1 || trimmedName.length > 100) {
      toast.error("Please enter your name (up to 100 characters).");
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error("Please choose a rating from 1 to 5 stars.");
      return;
    }
    if (trimmedComment.length < 3 || trimmedComment.length > 2000) {
      toast.error("Review must be between 3 and 2000 characters.");
      return;
    }
    try {
      setSubmitting(true);
      await sendReview({ data: { name: trimmedName, rating, comment: trimmedComment } });
      toast.success("Thanks! Your review was submitted and is awaiting approval.");
      setName("");
      setRating(0);
      setComment("");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't submit your review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="What Clients |Say About Us|"
          description="Real feedback from teams we've partnered with. Add yours below."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Reviews list */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="glass h-44 animate-pulse rounded-2xl"
                    aria-hidden
                  />
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <GlassCard tilt={false} className="text-center">
                <Quote className="mx-auto h-8 w-8 text-brand" />
                <p className="mt-3 text-sm text-muted-foreground">
                  No reviews yet — be the first to share your experience.
                </p>
              </GlassCard>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {reviews.map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                    className="glass group relative overflow-hidden rounded-2xl p-5 transition-shadow hover:shadow-xl hover:shadow-brand/20"
                  >
                    <div className="flex items-start justify-between">
                      <Quote className="h-6 w-6 text-brand/70" />
                      <Stars value={r.rating} />
                    </div>
                    <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-foreground/90">
                      "{r.comment}"
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-brand text-xs font-bold text-primary-foreground">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold">{r.name}</div>
                        <div className="text-[11px] text-muted-foreground">
                          {formatDate(r.created_at)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Submit form */}
          <GlassCard tilt={false} className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold">Share your experience</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Reviews appear after a quick approval.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <label className="block text-sm">
                <span className="text-muted-foreground">Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/40"
                />
              </label>
              <div className="text-sm">
                <span className="text-muted-foreground">Rating</span>
                <div className="mt-2">
                <Stars value={rating} onChange={setRating} interactive size={28} />
                </div>
              </div>
              <label className="block text-sm">
                <span className="text-muted-foreground">Your review</span>
                <textarea
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={2000}
                  required
                  className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/40"
                />
                <span className="mt-1 block text-right text-[11px] text-muted-foreground">
                  {comment.length}/2000
                </span>
              </label>
              <Button
                type="submit"
                variant="brand"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    Submit Review <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}