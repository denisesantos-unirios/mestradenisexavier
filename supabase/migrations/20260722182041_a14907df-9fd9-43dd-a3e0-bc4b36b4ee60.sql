
DROP POLICY IF EXISTS "Qualquer um pode ver sessões" ON public.nuvem_sessoes;
CREATE POLICY "Sessões ativas visíveis a todos"
  ON public.nuvem_sessoes FOR SELECT
  TO anon, authenticated
  USING (ativa = true OR auth.uid() = criado_por);

DROP POLICY IF EXISTS "Public can read question images" ON storage.objects;
CREATE POLICY "Professors can read question images"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'question-images' AND public.has_role(auth.uid(), 'professor'));

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
