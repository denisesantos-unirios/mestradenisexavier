CREATE TABLE public.ferramentas_dados (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  chave text NOT NULL,
  dados jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, chave)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.ferramentas_dados TO authenticated;
GRANT ALL ON public.ferramentas_dados TO service_role;

ALTER TABLE public.ferramentas_dados ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Professores gerenciam seus dados de ferramentas"
ON public.ferramentas_dados
FOR ALL
TO authenticated
USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'professor'::app_role))
WITH CHECK (auth.uid() = user_id AND public.has_role(auth.uid(), 'professor'::app_role));

CREATE TRIGGER update_ferramentas_dados_updated_at
BEFORE UPDATE ON public.ferramentas_dados
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();