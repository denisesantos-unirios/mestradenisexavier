
-- EQUIPES
CREATE TABLE public.equipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL,
  nome TEXT NOT NULL,
  periodo TEXT,
  semestre TEXT,
  descricao TEXT,
  alunos JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.equipes TO authenticated;
GRANT ALL ON public.equipes TO service_role;
ALTER TABLE public.equipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can manage own equipes" ON public.equipes
  FOR ALL TO authenticated
  USING (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'))
  WITH CHECK (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER trg_equipes_updated_at BEFORE UPDATE ON public.equipes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PROJETOS
CREATE TABLE public.projetos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL,
  equipe_id UUID NOT NULL REFERENCES public.equipes(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  descricao TEXT,
  software_avaliado TEXT,
  url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projetos TO authenticated;
GRANT ALL ON public.projetos TO service_role;
ALTER TABLE public.projetos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can manage own projetos" ON public.projetos
  FOR ALL TO authenticated
  USING (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'))
  WITH CHECK (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER trg_projetos_updated_at BEFORE UPDATE ON public.projetos
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- EXPERIMENTOS (Protocolo DECIDE)
CREATE TABLE public.experimentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL,
  projeto_id UUID NOT NULL REFERENCES public.projetos(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  data_aplicacao DATE,
  objetivo TEXT,
  hipoteses JSONB NOT NULL DEFAULT '[]'::jsonb,
  questoes JSONB NOT NULL DEFAULT '[]'::jsonb,
  metricas JSONB NOT NULL DEFAULT '[]'::jsonb,
  personas JSONB NOT NULL DEFAULT '[]'::jsonb,
  tarefas JSONB NOT NULL DEFAULT '[]'::jsonb,
  resultados JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.experimentos TO authenticated;
GRANT ALL ON public.experimentos TO service_role;
ALTER TABLE public.experimentos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can manage own experimentos" ON public.experimentos
  FOR ALL TO authenticated
  USING (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'))
  WITH CHECK (auth.uid() = created_by OR public.has_role(auth.uid(), 'professor'));

CREATE TRIGGER trg_experimentos_updated_at BEFORE UPDATE ON public.experimentos
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
