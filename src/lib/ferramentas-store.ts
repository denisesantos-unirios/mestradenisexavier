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
