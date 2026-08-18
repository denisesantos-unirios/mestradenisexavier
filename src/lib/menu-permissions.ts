// Catálogo de menus/submenus usado pela Gestão de Usuários e pelo controle de acesso.
// Cada menu tem a chave "menu:<id>"; cada submenu, a chave "sub:<path>".

export interface MenuPermissionItem {
  key: string;
  label: string;
  path: string;
}

export interface MenuPermissionGroup {
  id: string;
  key: string;
  label: string;
  path?: string;
  items: MenuPermissionItem[];
}

const g = (
  id: string,
  label: string,
  items: [string, string][],
  path?: string
): MenuPermissionGroup => ({
  id,
  key: `menu:${id}`,
  label,
  path,
  items: items.map(([label, p]) => ({ key: `sub:${p}`, label, path: p })),
});

export const MENU_PERMISSIONS: MenuPermissionGroup[] = [
  g("home", "Início", [], "/"),
  g("engenharia-software-1", "Engenharia de Software I", [
    ["Aula 1 - Apresentação da Disciplina", "/engenharia-software-1/aula-1"],
    ["Aula 2 - Análise de Sistemas + Processos", "/engenharia-software-1/aula-2"],
    ["Aula 3 - Metodologias Ágeis", "/engenharia-software-1/aula-3"],
    ["Aula 4 - Engenharia de Requisitos", "/engenharia-software-1/aula-4"],
    ["Aula 5 - ES Assistida por IA", "/engenharia-software-1/aula-5"],
    ["Aula 6 - Modelagem Conceitual", "/engenharia-software-1/aula-6"],
  ]),
  g("engenharia-software-2", "Engenharia de Software II", [
    ["Aula 1 - Apresentação da Disciplina", "/engenharia-software-2/aula-1"],
    ["Aula 2 - Introdução à ES e Processos", "/engenharia-software-2/aula-2"],
    ["Aula 3 - JITT: Engenharia de Requisitos", "/engenharia-software-2/aula-3"],
    ["Aula 4 - Engenharia de Requisitos", "/engenharia-software-2/aula-4"],
    ["Aula 5 - Requisitos: Fundamentos", "/engenharia-software-2/aula-4-fundamentos"],
    ["Aula 6 - PBL Fase 1: Mini-Mundo", "/engenharia-software-2/aula-5"],
    ["Aula 7 - JITT: Técnicas de Elicitação", "/engenharia-software-2/aula-6"],
    ["Aula 8 - Elicitação: Prática", "/engenharia-software-2/aula-7"],
    ["Aula 9 - Documentação de Requisitos", "/engenharia-software-2/aula-8"],
    ["Aula 10 - Validação de Requisitos", "/engenharia-software-2/aula-9"],
    ["Aula 11 - JITT: Entrega Fase 2", "/engenharia-software-2/aula-10"],
    ["Aula 12 - Introdução à UML", "/engenharia-software-2/aula-11"],
    ["Aula 13 - Casos de Uso: Fundamentos", "/engenharia-software-2/aula-12"],
    ["Aula 14 - JITT: Especificação UC", "/engenharia-software-2/aula-13"],
    ["Aula 15 - Workshop: Diagrama UC", "/engenharia-software-2/aula-14"],
    ["Aula 16 - Entrega Fase 3: Casos de Uso", "/engenharia-software-2/aula-15"],
    ["Aula 17 - User Stories & Kanban", "/engenharia-software-2/aula-16"],
    ["Aula 18 - Diagrama de Classes", "/engenharia-software-2/aula-17"],
    ["Aula 19 - Diagrama de Atividades", "/engenharia-software-2/aula-18"],
  ]),
  g("projetos-interface", "Projetos de Interface", [
    ["Aula 1 - Apresentação da Disciplina", "/projetos-interface/aula-1"],
    ["Aula 2 - Design de Interação", "/projetos-interface/aula-2"],
    ["Aula 3 - Conceitualizando a Interação", "/projetos-interface/aula-3"],
    ["Aula 4 - Requisitos de Usabilidade", "/projetos-interface/aula-4"],
    ["Aula 5 - Coleta de Informações", "/projetos-interface/aula-5"],
    ["Aula 6 - Como Interfaces Afetam Pessoas", "/projetos-interface/aula-6"],
    ["Aula 7 - Análise de Tarefas e Fluxos", "/projetos-interface/aula-7"],
    ["Aula 8 - Introdução à UX", "/projetos-interface/aula-8"],
    ["Aula 9 - Princípios de UX", "/projetos-interface/aula-9"],
    ["Aula 10 - Acessibilidade: Fundamentos", "/projetos-interface/aula-10"],
    ["Aula 11 - Acessibilidade na Prática", "/projetos-interface/aula-11"],
    ["Aula 12 - Revisão Geral da Etapa 1", "/projetos-interface/aula-12"],
    ["Aula 13 - Entrega da Fase 1", "/projetos-interface/aula-13"],
    ["Aula 14 - Design Centrado no Usuário", "/projetos-interface/aula-14"],
    ["Aula 15 - Ideação e Brainstorming", "/projetos-interface/aula-15"],
    ["Aula 16 - Fundamentos de Prototipação", "/projetos-interface/aula-16"],
    ["Aula 17 - Prototipação de Papel", "/projetos-interface/aula-17"],
    ["Aula 18 - Introdução ao Figma", "/projetos-interface/aula-18"],
    ["Aula 19 - Componentes e Fluxos", "/projetos-interface/aula-19"],
    ["Aula 20 - Framework DECIDE", "/projetos-interface/aula-20"],
  ]),
  g("engenharia-software-ead", "ES EAD", [
    ["Aula 1 - Conceitos da engenharia de software", "/engenharia-software-ead/aula-1"],
    ["Aula 2 - Melhorias de processos de Software", "/engenharia-software-ead/aula-2"],
    ["Aula 3 - Ciclos, Metodologia Ágil e Scrum", "/engenharia-software-ead/aula-3"],
    ["Aula 4 - Métodos ágeis", "/engenharia-software-ead/aula-4"],
    ["Aula 5 - Projeto de banco de dados", "/engenharia-software-ead/aula-11"],
    ["Aula 6 - Modelagem ágil", "/engenharia-software-ead/aula-9"],
    ["Aula 7 - Requisitos de software", "/engenharia-software-ead/aula-5"],
    ["Aula 8 - Técnicas de elicitação", "/engenharia-software-ead/aula-6"],
    ["Aula 9 - Diagrama de Casos de Uso", "/engenharia-software-ead/aula-7"],
    ["Aula 10 - Revisão Final", "/engenharia-software-ead/aula-10"],
    ["Aula 11 - Estudo de Caso: E-Commerce", "/engenharia-software-ead/aula-8"],
  ]),
  g("gestao-projetos", "Gestão de Projetos", [
    ["Aula 1 - Ágeis, Scrum & Kanban (ENADE)", "/gestao-projetos/aula-1"],
    ["Aula 2 - Metodologias Ágeis e ENADE", "/gestao-projetos/aula-2"],
  ]),
  g("enade", "ENADE", [
    ["Visão Geral e Eixos ENADE 2026", "/enade"],
    ["Aula 1 - UML e Casos de Uso", "/enade/uml-casos-de-uso"],
    ["Aula 2 - Diagrama de Classes e Multiplicidade", "/enade/diagrama-de-classes"],
    ["Aula 3 - Qualidade de Processo e Produto", "/enade/qualidade-processo-produto"],
    ["Aula 4 - CMMI-Dev e MPS-SW", "/enade/cmmi-dev-mps-sw"],
    ["Aula 5 - Níveis de Maturidade do CMMI", "/enade/niveis-maturidade-cmmi"],
    ["Aula 6 - Projeto versus Operação", "/enade/projeto-versus-operacao"],
    ["Aula 7 - Gerência de Projetos", "/enade/gerencia-de-projetos"],
  ]),
  g("protocolos", "Protocolos", [
    ["Framework DECIDE", "/protocolos/framework-decide"],
    ["Sistema de Experimentos", "/protocolos/sistema"],
    ["Gerenciar Equipes", "/protocolos/equipes"],
    ["Gerenciar Projetos", "/protocolos/projetos"],
    ["Gerenciar Experimentos", "/protocolos/experimentos"],
    ["Projeto Interdisciplinar", "/protocolos/interdisciplinares"],
  ]),
  g("ferramentas", "Ferramentas", [
    ["Histórias de Usuário", "/ferramentas/historias-usuario"],
    ["Backlog", "/ferramentas/backlog"],
    ["Kanban", "/ferramentas/kanban"],
    ["Planejamento de Sprint", "/ferramentas/sprint-planning"],
    ["Casos de Uso", "/ferramentas/casos-de-uso"],
    ["Mapa de Stakeholders", "/ferramentas/stakeholders"],
    ["Personas", "/ferramentas/personas"],
    ["Jornada do Usuário", "/ferramentas/jornada-usuario"],
    ["Casos de Teste", "/ferramentas/casos-de-teste"],
    ["Registro de Bugs", "/ferramentas/bugs"],
    ["Avaliação Heurística", "/ferramentas/avaliacao-heuristica"],
    ["Checklist de Acessibilidade", "/ferramentas/acessibilidade"],
    ["Wireframes", "/ferramentas/wireframes"],
    ["Nuvem de Palavras", "/nuvem"],
  ]),
  g("avancado", "Recursos Avançados", [
    ["Editor UML", "/avancado/editor-uml"],
    ["Imagem → Diagrama de Classes", "/avancado/imagem-para-uml"],
    ["Planning Poker", "/avancado/planning-poker"],
    ["Gráficos de Burndown", "/avancado/burndown"],
    ["Galeria de Protótipos", "/avancado/prototipos"],
    ["Integração com Versionamento", "/avancado/versionamento"],
    ["Simuladores de Decisões", "/avancado/simuladores"],
    ["Recomendações Personalizadas", "/avancado/recomendacoes"],
    ["Badges e Trilhas de Competências", "/avancado/competencias"],
  ]),
];

export const ALL_MENU_KEYS: string[] = MENU_PERMISSIONS.flatMap((m) => [
  m.key,
  ...m.items.map((i) => i.key),
]);

export const menuKey = (id: string) => `menu:${id}`;
export const subKey = (path: string) => `sub:${path}`;

export const DISCIPLINAS = [
  "Engenharia de Software I",
  "Engenharia de Software II",
  "Projetos de Interface",
  "Engenharia de Software EAD",
  "Gestão de Projetos",
  "Outra",
];
