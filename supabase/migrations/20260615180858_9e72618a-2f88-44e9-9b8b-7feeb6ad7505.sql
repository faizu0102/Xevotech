
CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 100),
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment text NOT NULL CHECK (char_length(trim(comment)) BETWEEN 3 AND 2000),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved reviews are public"
  ON public.reviews FOR SELECT
  USING (status = 'approved');

CREATE POLICY "Anyone can submit a pending review"
  ON public.reviews FOR INSERT
  WITH CHECK (status = 'pending');

CREATE INDEX reviews_status_created_idx ON public.reviews (status, created_at DESC);
