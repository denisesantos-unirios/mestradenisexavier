// Fases pré-definidas do edital do Projeto Interdisciplinar 2026.2
// Disciplinas: BD (Banco de Dados), ES II (Engenharia de Software II), LP II (Linguagem de Programação II)

export type FaseTemplate = {
  fase_num: number;
  descricao: string;
  data_limite: string; // ISO YYYY-MM-DD
  pontos_max: number;
};

export const DISCIPLINAS_EDITAL = ["BD", "ES II", "LP II"] as const;
export type DisciplinaEdital = (typeof DISCIPLINAS_EDITAL)[number];

export const FASES_POR_DISCIPLINA: Record<DisciplinaEdital, FaseTemplate[]> = {
  "BD": [
    { fase_num: 1, descricao: "Modelo Conceitual (MER) + Dicionário de Dados", data_limite: "2026-09-14", pontos_max: 2.0 },
    { fase_num: 2, descricao: "Modelo Lógico + Normalização (3FN)", data_limite: "2026-10-05", pontos_max: 2.0 },
    { fase_num: 3, descricao: "Modelo Físico (script SQL) + Cargas de teste", data_limite: "2026-10-26", pontos_max: 2.0 },
    { fase_num: 4, descricao: "Consultas SQL, Views, Procedures e Triggers", data_limite: "2026-11-16", pontos_max: 2.0 },
    { fase_num: 5, descricao: "Apresentação final e integração com o sistema", data_limite: "2026-12-07", pontos_max: 2.0 },
  ],
  "ES II": [
    { fase_num: 1, descricao: "Documento de Visão + Backlog inicial (Histórias de Usuário)", data_limite: "2026-09-14", pontos_max: 2.0 },
    { fase_num: 2, descricao: "Diagramas UML (Casos de Uso, Classes, Sequência)", data_limite: "2026-10-05", pontos_max: 2.0 },
    { fase_num: 3, descricao: "Sprint 1 — Entrega incremental + Sprint Review", data_limite: "2026-10-26", pontos_max: 2.0 },
    { fase_num: 4, descricao: "Sprint 2 + Testes (unitários e aceitação)", data_limite: "2026-11-16", pontos_max: 2.0 },
    { fase_num: 5, descricao: "Sprint 3 + Retrospectiva e apresentação final", data_limite: "2026-12-07", pontos_max: 2.0 },
  ],
  "LP II": [
    { fase_num: 1, descricao: "Arquitetura da aplicação + protótipo navegável", data_limite: "2026-09-14", pontos_max: 2.0 },
    { fase_num: 2, descricao: "Camada de dados + autenticação de usuários", data_limite: "2026-10-05", pontos_max: 2.0 },
    { fase_num: 3, descricao: "Módulos funcionais principais (CRUD)", data_limite: "2026-10-26", pontos_max: 2.0 },
    { fase_num: 4, descricao: "Integração com BD e refino de UI/UX", data_limite: "2026-11-16", pontos_max: 2.0 },
    { fase_num: 5, descricao: "Deploy + documentação técnica + demo final", data_limite: "2026-12-07", pontos_max: 2.0 },
  ],
};

export function gerarFasesIniciais(disciplinas: string[]) {
  const fases: Array<FaseTemplate & { disciplina: string }> = [];
  disciplinas.forEach((d) => {
    const tpl = FASES_POR_DISCIPLINA[d as DisciplinaEdital];
    if (tpl) tpl.forEach((f) => fases.push({ ...f, disciplina: d }));
  });
  return fases;
}
