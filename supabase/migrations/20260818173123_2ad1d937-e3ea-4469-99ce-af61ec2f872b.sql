CREATE TABLE public.pi_configuracoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  semestre text NOT NULL,
  disciplinas text[] NOT NULL DEFAULT '{}',
  edital_ref text,
  descricao text,
  ativa boolean NOT NULL DEFAULT true,
  criado_por uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.pi_configuracoes TO authenticated;
GRANT ALL ON public.pi_configuracoes TO service_role;

ALTER TABLE public.pi_configuracoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Professores gerenciam configuracoes PI"
ON public.pi_configuracoes FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'professor'))
WITH CHECK (public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER trg_pi_configuracoes_updated_at
BEFORE UPDATE ON public.pi_configuracoes
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.pi_config_fases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  config_id uuid NOT NULL REFERENCES public.pi_configuracoes(id) ON DELETE CASCADE,
  disciplina text NOT NULL,
  fase_num integer NOT NULL,
  descricao text NOT NULL,
  data_limite date,
  pontos_max numeric NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.pi_config_fases TO authenticated;
GRANT ALL ON public.pi_config_fases TO service_role;

ALTER TABLE public.pi_config_fases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Professores gerenciam fases da config PI"
ON public.pi_config_fases FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'professor'))
WITH CHECK (public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER trg_pi_config_fases_updated_at
BEFORE UPDATE ON public.pi_config_fases
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_pi_config_fases_config ON public.pi_config_fases(config_id);

ALTER TABLE public.projetos_interdisciplinares
  ADD COLUMN config_id uuid REFERENCES public.pi_configuracoes(id) ON DELETE SET NULL,
  ADD COLUMN semestre text;

CREATE INDEX idx_projetos_interdisc_config ON public.projetos_interdisciplinares(config_id);