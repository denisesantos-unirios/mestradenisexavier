
-- Projetos interdisciplinares
CREATE TABLE public.projetos_interdisciplinares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  tema TEXT,
  mini_mundo TEXT,
  disciplinas TEXT[] NOT NULL DEFAULT '{}',
  edital_ref TEXT,
  status TEXT NOT NULL DEFAULT 'proposto',
  criado_por UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projetos_interdisciplinares TO authenticated;
GRANT ALL ON public.projetos_interdisciplinares TO service_role;
ALTER TABLE public.projetos_interdisciplinares ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam projetos interdisc" ON public.projetos_interdisciplinares
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Membros (alunos)
CREATE TABLE public.projeto_membros (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES public.projetos_interdisciplinares(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  email TEXT,
  matricula TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projeto_membros TO authenticated;
GRANT ALL ON public.projeto_membros TO service_role;
ALTER TABLE public.projeto_membros ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam membros" ON public.projeto_membros
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Professores vinculados
CREATE TABLE public.projeto_professores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES public.projetos_interdisciplinares(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  disciplina TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(projeto_id, user_id, disciplina)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projeto_professores TO authenticated;
GRANT ALL ON public.projeto_professores TO service_role;
ALTER TABLE public.projeto_professores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam vinculos" ON public.projeto_professores
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Fases (cronograma)
CREATE TABLE public.projeto_fases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES public.projetos_interdisciplinares(id) ON DELETE CASCADE,
  disciplina TEXT NOT NULL,
  fase_num INT NOT NULL,
  descricao TEXT NOT NULL,
  data_limite DATE,
  pontos_max NUMERIC DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pendente',
  nota NUMERIC,
  feedback TEXT,
  entregavel_url TEXT,
  avaliado_por UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projeto_fases TO authenticated;
GRANT ALL ON public.projeto_fases TO service_role;
ALTER TABLE public.projeto_fases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam fases" ON public.projeto_fases
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Avaliação por pares
CREATE TABLE public.projeto_avaliacoes_pares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES public.projetos_interdisciplinares(id) ON DELETE CASCADE,
  fase_id UUID REFERENCES public.projeto_fases(id) ON DELETE CASCADE,
  avaliador_membro_id UUID NOT NULL REFERENCES public.projeto_membros(id) ON DELETE CASCADE,
  avaliado_membro_id UUID NOT NULL REFERENCES public.projeto_membros(id) ON DELETE CASCADE,
  pontos NUMERIC NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projeto_avaliacoes_pares TO authenticated;
GRANT ALL ON public.projeto_avaliacoes_pares TO service_role;
ALTER TABLE public.projeto_avaliacoes_pares ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam pares" ON public.projeto_avaliacoes_pares
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Documentos
CREATE TABLE public.projeto_documentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES public.projetos_interdisciplinares(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  url TEXT NOT NULL,
  tipo TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projeto_documentos TO authenticated;
GRANT ALL ON public.projeto_documentos TO service_role;
ALTER TABLE public.projeto_documentos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Professores gerenciam documentos" ON public.projeto_documentos
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'professor'))
  WITH CHECK (public.has_role(auth.uid(), 'professor'));

-- Triggers updated_at
CREATE TRIGGER upd_projetos_interdisc BEFORE UPDATE ON public.projetos_interdisciplinares
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER upd_projeto_fases BEFORE UPDATE ON public.projeto_fases
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
