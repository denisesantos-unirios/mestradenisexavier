ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS permissions text[] NOT NULL DEFAULT ARRAY['framework-decide','equipes','projetos','experimentos']::text[];

-- Allow each user to read their own profile (already exists likely, but ensure)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='profiles' AND policyname='Users can read own profile'
  ) THEN
    CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = user_id);
  END IF;
END $$;