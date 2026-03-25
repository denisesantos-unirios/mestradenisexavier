
ALTER TABLE public.questions ADD COLUMN IF NOT EXISTS image_url text;

INSERT INTO storage.buckets (id, name, public)
VALUES ('question-images', 'question-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Professors can upload question images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'question-images'
  AND public.has_role(auth.uid(), 'professor'::app_role)
);

CREATE POLICY "Public can read question images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'question-images');

CREATE POLICY "Professors can delete question images"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'question-images'
  AND public.has_role(auth.uid(), 'professor'::app_role)
);
