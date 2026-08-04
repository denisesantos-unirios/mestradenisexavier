
-- nuvem_sessoes: acesso aberto
DROP POLICY IF EXISTS "Professores criam sessões" ON public.nuvem_sessoes;
DROP POLICY IF EXISTS "Professores editam sessões" ON public.nuvem_sessoes;
DROP POLICY IF EXISTS "Professores excluem sessões" ON public.nuvem_sessoes;
DROP POLICY IF EXISTS "Sessões ativas visíveis a todos" ON public.nuvem_sessoes;
CREATE POLICY "Sessões públicas leitura" ON public.nuvem_sessoes FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Sessões públicas criação" ON public.nuvem_sessoes FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Sessões públicas edição" ON public.nuvem_sessoes FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Sessões públicas exclusão" ON public.nuvem_sessoes FOR DELETE TO anon, authenticated USING (true);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.nuvem_sessoes TO anon, authenticated;
GRANT ALL ON public.nuvem_sessoes TO service_role;

-- nuvem_palavras: exclusão aberta
DROP POLICY IF EXISTS "Professores gerenciam palavras" ON public.nuvem_palavras;
CREATE POLICY "Palavras exclusão aberta" ON public.nuvem_palavras FOR DELETE TO anon, authenticated USING (true);
GRANT SELECT, INSERT, DELETE ON public.nuvem_palavras TO anon, authenticated;
GRANT ALL ON public.nuvem_palavras TO service_role;

-- ferramentas_dados: acesso aberto
ALTER TABLE public.ferramentas_dados ALTER COLUMN user_id DROP NOT NULL;
DROP POLICY IF EXISTS "Professores gerenciam seus dados de ferramentas" ON public.ferramentas_dados;
CREATE POLICY "Ferramentas acesso aberto" ON public.ferramentas_dados FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ferramentas_dados TO anon, authenticated;
GRANT ALL ON public.ferramentas_dados TO service_role;
