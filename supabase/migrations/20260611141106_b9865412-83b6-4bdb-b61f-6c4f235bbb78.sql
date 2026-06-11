ALTER TABLE public.experimentos
  ADD COLUMN IF NOT EXISTS tecnicas jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS tcle jsonb NOT NULL DEFAULT '{}'::jsonb;