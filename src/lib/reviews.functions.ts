import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitSchema = z.object({
  name: z.string().trim().min(1).max(100),
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().min(3).max(2000),
});

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export const listApprovedReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("reviews")
    .select("id,name,rating,comment,status,created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(60);
  if (error) throw new Error(error.message);
  return (data ?? []) as Review[];
});

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("reviews").insert({
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      status: "pending",
    });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

// NOTE: Admin endpoints below are not auth-gated yet (matches current open /admin page).
// Add `requireSupabaseAuth` + role check once admin auth is wired up.
export const listAllReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("reviews")
    .select("id,name,rating,comment,status,created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) throw new Error(error.message);
  return (data ?? []) as Review[];
});

export const setReviewStatus = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["pending", "approved", "rejected"]),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("reviews")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const deleteReview = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("reviews").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });