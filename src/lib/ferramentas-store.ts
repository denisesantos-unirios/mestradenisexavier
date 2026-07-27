// Armazenamento local compartilhado entre as ferramentas ágeis/UX do portal.

export const FKEYS = {
  historias: "ferramentas_historias_usuario",
  backlog: "ferramentas_backlog",
  kanban: "ferramentas_kanban",
  sprint: "ferramentas_sprint_planning",
  casosUso: "ferramentas_casos_uso",
  stakeholders: "ferramentas_stakeholders",
  personas: "ferramentas_personas",
  jornadas: "ferramentas_jornadas",
  casosTeste: "ferramentas_casos_teste",
  bugs: "ferramentas_bugs",
  heuristicas: "ferramentas_heuristicas",
  acessibilidade: "ferramentas_acessibilidade",
  wireframes: "ferramentas_wireframes",
  uml: "ferramentas_uml",
  poker: "ferramentas_planning_poker",
  burndown: "ferramentas_burndown",
  prototipos: "ferramentas_prototipos",
  versionamento: "ferramentas_versionamento",
  simuladores: "ferramentas_simuladores",
  badges: "ferramentas_badges",
} as const;


export const uid = () => Math.random().toString(36).slice(2, 10);

export function readLS<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeLS(key: string, val: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {
    /* ignore */
  }
}

export function prependLS<T>(key: string, itens: T[]) {
  const atuais = readLS<T[]>(key, []);
  writeLS(key, [...itens, ...atuais]);
}

/** Cria um bug a partir de qualquer ferramenta (teste, heurística, acessibilidade). */
export type BugSeed = {
  titulo: string;
  descricao?: string;
  severidade?: "Crítica" | "Alta" | "Média" | "Baixa";
  origem?: string;
};

export function enviarParaBugs(seeds: BugSeed[]) {
  prependLS(
    FKEYS.bugs,
    seeds.map((s) => ({
      id: uid(),
      titulo: s.titulo,
      descricao: s.descricao ?? "",
      passos: "",
      esperado: "",
      obtido: "",
      severidade: s.severidade ?? "Média",
      prioridade: "Média",
      status: "Aberto",
      ambiente: "",
      responsavel: "",
      origem: s.origem ?? "Manual",
      criadoEm: new Date().toISOString(),
    })),
  );
}

/** Cria itens de backlog a partir de qualquer ferramenta. */
export function enviarParaBacklog(itens: { titulo: string; descricao?: string; epico?: string; prioridade?: string }[]) {
  prependLS(
    FKEYS.backlog,
    itens.map((i) => ({
      id: uid(),
      titulo: i.titulo,
      descricao: i.descricao ?? "",
      epico: i.epico ?? "Qualidade & UX",
      prioridade: i.prioridade ?? "Should",
      estimativa: 3,
      status: "Novo",
      valor: 3,
      criadoEm: new Date().toISOString(),
    })),
  );
}

export function baixarMd(nome: string, conteudo: string) {
  const blob = new Blob([conteudo], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nome;
  a.click();
  URL.revokeObjectURL(url);
}

/* ---------------- Competências / progresso (Fase 3) ---------------- */

export type Competencia = {
  id: string;
  nome: string;
  descricao: string;
  chaves: string[]; // chaves do localStorage que alimentam a competência
  meta: number; // quantidade de artefatos para 100%
  trilha: string;
  conteudos: { titulo: string; path: string }[];
};

export const COMPETENCIAS: Competencia[] = [
  {
    id: "requisitos", nome: "Engenharia de Requisitos",
    descricao: "Elicitar, escrever e priorizar requisitos e histórias.",
    chaves: [FKEYS.historias, FKEYS.backlog], meta: 10, trilha: "Análise",
    conteudos: [
      { titulo: "ES I — Aula 4: Engenharia de Requisitos", path: "/engenharia-software-1/aula-4" },
      { titulo: "ES EAD — Aula 6: Elicitação de Requisitos", path: "/engenharia-software-ead/aula-6" },
    ],
  },
  {
    id: "modelagem", nome: "Modelagem & UML",
    descricao: "Representar o sistema em casos de uso e diagramas.",
    chaves: [FKEYS.casosUso, FKEYS.uml], meta: 8, trilha: "Projeto",
    conteudos: [
      { titulo: "ES I — Aula 6: Modelagem Conceitual", path: "/engenharia-software-1/aula-6" },
      { titulo: "Editor UML", path: "/avancado/editor-uml" },
    ],
  },
  {
    id: "agil", nome: "Práticas Ágeis",
    descricao: "Planejar sprints, estimar e acompanhar entregas.",
    chaves: [FKEYS.sprint, FKEYS.kanban, FKEYS.poker, FKEYS.burndown], meta: 8, trilha: "Processo",
    conteudos: [
      { titulo: "ES EAD — Aula 3: Visão Ágil", path: "/engenharia-software-ead/aula-3" },
      { titulo: "Planning Poker", path: "/avancado/planning-poker" },
    ],
  },
  {
    id: "ux", nome: "UX & Interface",
    descricao: "Personas, jornadas, wireframes e protótipos.",
    chaves: [FKEYS.personas, FKEYS.jornadas, FKEYS.stakeholders, FKEYS.wireframes, FKEYS.prototipos], meta: 10, trilha: "Experiência",
    conteudos: [
      { titulo: "Projetos de Interface — Aula 1", path: "/projetos-interface/aula-1" },
      { titulo: "Wireframes", path: "/ferramentas/wireframes" },
    ],
  },
  {
    id: "qualidade", nome: "Qualidade & Testes",
    descricao: "Casos de teste, bugs, heurísticas e acessibilidade.",
    chaves: [FKEYS.casosTeste, FKEYS.bugs, FKEYS.heuristicas, FKEYS.acessibilidade], meta: 10, trilha: "Qualidade",
    conteudos: [
      { titulo: "Casos de Teste", path: "/ferramentas/casos-de-teste" },
      { titulo: "Avaliação Heurística", path: "/ferramentas/avaliacao-heuristica" },
    ],
  },
  {
    id: "engenharia", nome: "Engenharia & Versionamento",
    descricao: "Organizar repositórios, branches e decisões técnicas.",
    chaves: [FKEYS.versionamento, FKEYS.simuladores], meta: 6, trilha: "Engenharia",
    conteudos: [
      { titulo: "Integração com Versionamento", path: "/avancado/versionamento" },
      { titulo: "Simuladores de Decisões", path: "/avancado/simuladores" },
    ],
  },
];

export function contarArtefatos(chaves: string[]) {
  return chaves.reduce((acc, k) => acc + readLS<unknown[]>(k, []).length, 0);
}

export type ProgressoCompetencia = Competencia & { total: number; percentual: number; nivel: string };

export function calcularProgresso(): ProgressoCompetencia[] {
  return COMPETENCIAS.map((c) => {
    const total = contarArtefatos(c.chaves);
    const percentual = Math.min(100, Math.round((total / c.meta) * 100));
    const nivel = percentual >= 100 ? "Avançado" : percentual >= 60 ? "Intermediário" : percentual >= 25 ? "Iniciante" : "Explorador";
    return { ...c, total, percentual, nivel };
  });
}
