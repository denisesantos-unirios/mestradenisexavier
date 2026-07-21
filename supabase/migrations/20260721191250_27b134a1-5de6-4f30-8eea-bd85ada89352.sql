
CREATE TABLE public.nuvem_sessoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  pergunta TEXT,
  ativa BOOLEAN NOT NULL DEFAULT true,
  criado_por UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.nuvem_palavras (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sessao_id UUID NOT NULL REFERENCES public.nuvem_sessoes(id) ON DELETE CASCADE,
  palavra TEXT NOT NULL,
  participante TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_nuvem_palavras_sessao ON public.nuvem_palavras(sessao_id);

GRANT SELECT ON public.nuvem_sessoes TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.nuvem_sessoes TO authenticated;
GRANT ALL ON public.nuvem_sessoes TO service_role;

GRANT SELECT, INSERT ON public.nuvem_palavras TO anon, authenticated;
GRANT UPDATE, DELETE ON public.nuvem_palavras TO authenticated;
GRANT ALL ON public.nuvem_palavras TO service_role;

ALTER TABLE public.nuvem_sessoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nuvem_palavras ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode ver sessões" ON public.nuvem_sessoes FOR SELECT USING (true);
CREATE POLICY "Professores criam sessões" ON public.nuvem_sessoes FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'professor'));
CREATE POLICY "Professores editam sessões" ON public.nuvem_sessoes FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'professor'));
CREATE POLICY "Professores excluem sessões" ON public.nuvem_sessoes FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'professor'));

CREATE POLICY "Qualquer um pode ver palavras" ON public.nuvem_palavras FOR SELECT USING (true);
CREATE POLICY "Qualquer um pode enviar palavras em sessão ativa" ON public.nuvem_palavras FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.nuvem_sessoes s WHERE s.id = sessao_id AND s.ativa = true)
);
CREATE POLICY "Professores gerenciam palavras" ON public.nuvem_palavras FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER update_nuvem_sessoes_updated_at BEFORE UPDATE ON public.nuvem_sessoes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER PUBLICATION supabase_realtime ADD TABLE public.nuvem_palavras;
ALTER TABLE public.nuvem_palavras REPLICA IDENTITY FULL;
