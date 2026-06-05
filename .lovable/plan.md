## Gerenciamento de Experimentos (Protocolos)

Novo submódulo dentro do menu **Protocolos** para que equipes da disciplina **Projetos de Interface** apliquem o **Framework DECIDE** de forma estruturada, gerando dados de usabilidade (eficácia, eficiência e satisfação) com tabelas e gráficos.

### Estrutura de Navegação

No menu **Protocolos** adicionar entradas:
- Framework DECIDE (já existe)
- **Gerenciar Equipes**
- **Gerenciar Projetos**
- **Gerenciar Experimentos**

### Modelo de Dados (Lovable Cloud)

```text
equipes
  ├── nome, periodo (ex: 2026.1), semestre, descricao
  └── alunos: jsonb [{nome, matricula, email}]

projetos
  ├── nome, descricao, software_avaliado, url
  └── equipe_id → equipes

experimentos (protocolo DECIDE completo)
  ├── projeto_id → projetos
  ├── titulo, data_aplicacao
  ├── objetivo (D - Determine goals)
  ├── hipoteses (jsonb [])
  ├── questoes (jsonb [])
  ├── metricas (jsonb [{nome, tipo: eficácia|eficiência|satisfação, formula}])
  ├── personas (jsonb [{nome, perfil, contexto, objetivos}])
  ├── tarefas (jsonb [{id, descricao, criterio_sucesso, tempo_esperado}])
  └── resultados (jsonb [{participante, tarefa_id, sucesso, tempo_seg, erros, sus_score, observacoes}])
```

RLS: todas as tabelas restritas a usuários autenticados (qualquer aluno/professor logado pode criar e gerenciar seus dados; professor com role tem acesso total).

### Páginas e Rotas

| Rota | Página |
|---|---|
| `/protocolos/equipes` | Lista + CRUD de equipes (modal com formulário, gerenciamento de alunos inline) |
| `/protocolos/equipes/:id` | Detalhe da equipe + projetos vinculados |
| `/protocolos/projetos` | Lista + CRUD de projetos, seletor de equipe |
| `/protocolos/projetos/:id` | Detalhe do projeto + experimentos vinculados |
| `/protocolos/experimentos` | Lista de todos os experimentos com filtros (equipe/projeto) |
| `/protocolos/experimentos/novo` | Wizard DECIDE em abas: Objetivo → Hipóteses → Questões → Métricas → Personas → Tarefas |
| `/protocolos/experimentos/:id` | Visão consolidada do protocolo + aba **Coleta de Resultados** + aba **Análise** |

### Coleta e Análise de Resultados

- **Coleta**: tabela editável por participante × tarefa com colunas: Sucesso (sim/não), Tempo (s), Nº de Erros, SUS (0-100), Observações.
- **Tabelas geradas por tarefa**:
  - Taxa de sucesso (%), Tempo médio (s), Desvio padrão, Nº médio de erros.
- **Gráficos** (recharts, já no projeto):
  - Barras: taxa de sucesso por tarefa (eficácia).
  - Barras: tempo médio por tarefa (eficiência).
  - Linha/radar: SUS médio e satisfação por participante.
  - Pizza: distribuição de sucesso/falha global.
- Botão **Exportar PDF** reusando `PdfExportButton` existente.

### Componentes Novos

- `src/components/protocolos/gerenciamento/EquipeForm.tsx`, `EquipeCard.tsx`
- `src/components/protocolos/gerenciamento/ProjetoForm.tsx`, `ProjetoCard.tsx`
- `src/components/protocolos/gerenciamento/ExperimentoWizard.tsx` (multi-step com Tabs shadcn)
- `src/components/protocolos/gerenciamento/ColetaResultados.tsx` (data grid editável)
- `src/components/protocolos/gerenciamento/AnaliseResultados.tsx` (tabelas + gráficos)
- Páginas correspondentes em `src/pages/protocolos/gerenciamento/`

### Atualizações no MainNavigation

Submenu **Protocolos** passa a ter:
- Framework DECIDE - Experimentos de Usabilidade
- Gerenciar Equipes
- Gerenciar Projetos
- Gerenciar Experimentos

### Decisões pendentes (rápido)

1. **Acesso**: qualquer usuário autenticado pode criar equipes/projetos/experimentos, ou apenas o professor (denise.santos)? Sugiro: qualquer autenticado, com professor podendo ver tudo.
2. **Login dos alunos**: alunos das equipes precisam logar para preencher resultados, ou o professor/líder lança os dados? Sugiro: dados lançados por quem está logado (sem cadastro individual de aluno como usuário) — alunos ficam como metadados na equipe.

Se concordar com os dois defaults acima, sigo direto na implementação.
