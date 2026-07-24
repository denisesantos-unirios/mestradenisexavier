import type { CaseStudy } from "./cases";

export type CasoUsoGerado = {
  id: string;
  codigo: string;
  nome: string;
  ator: string;
  atoresSecundarios: string;
  objetivo: string;
  prioridade: "Alta" | "Média" | "Baixa";
  preCondicoes: string;
  posCondicoes: string;
  fluxoPrincipal: { id: string; texto: string }[];
  fluxosAlternativos: { id: string; nome: string; passos: { id: string; texto: string }[] }[];
  regras: string;
  criadoEm: string;
};

// Ator principal por estudo de caso
const ATORES: Record<string, { principal: string; secundarios: string }> = {
  "patrimonio-mobiliario": { principal: "Responsável pelo Setor", secundarios: "Administrador de Patrimônio" },
  "cemiterio-jardim-saudade": { principal: "Atendente do Cemitério", secundarios: "Administrador" },
  "casa-detencao": { principal: "Agente Penitenciário", secundarios: "Diretor da Casa" },
  "lotacao-buscape": { principal: "Operador de Frota", secundarios: "Motorista, Mecânico" },
  "extintores-incendio": { principal: "Técnico de Segurança", secundarios: "Fabricante, Revendedor" },
  "agrobom-revendedora": { principal: "Vendedor", secundarios: "Comprador, Cliente, Fornecedor" },
  "papgp-projetos-pesquisa": { principal: "Coordenador de Projeto", secundarios: "Professor, Aluno, Fomentadora" },
  "fazenda-feliz-grao": { principal: "Responsável Técnico Agrícola", secundarios: "Aplicador" },
  "locadora-carrobom": { principal: "Atendente da Locadora", secundarios: "Cliente, Filial de Destino" },
};

const uid = () => Math.random().toString(36).slice(2, 10);

const inferirFluxo = (rf: { titulo: string; descricao: string }, ator: string): string[] => {
  const t = rf.titulo.toLowerCase();
  const acao = rf.titulo.replace(/^(Cadastrar|Registrar|Consultar|Alocar|Vincular|Gerar|Realizar|Transferir|Aplicar|Remanejar|Submeter|Iniciar|Alertar|Atender|Processar|Devolução) ?/i, "");
  if (t.startsWith("cadastrar") || t.startsWith("registrar proprietário") || t.startsWith("cadastrar cliente")) {
    return [
      `${ator} acessa a opção "${rf.titulo}"`,
      `Sistema exibe formulário de cadastro`,
      `${ator} preenche os campos obrigatórios de ${acao || "registro"}`,
      `${ator} confirma o cadastro`,
      `Sistema valida os dados`,
      `Sistema persiste o registro e exibe mensagem de sucesso`,
    ];
  }
  if (t.startsWith("registrar")) {
    return [
      `${ator} acessa "${rf.titulo}"`,
      `Sistema exibe formulário com dados relacionados`,
      `${ator} informa os dados do evento e confirma`,
      `Sistema valida regras de negócio`,
      `Sistema grava o registro e retorna comprovante`,
    ];
  }
  if (t.startsWith("consultar") || t.startsWith("relatório") || t.startsWith("alertar")) {
    return [
      `${ator} acessa "${rf.titulo}"`,
      `${ator} informa filtros (período/local/tipo)`,
      `Sistema consulta base de dados`,
      `Sistema apresenta resultado em tela e permite exportação`,
    ];
  }
  if (t.startsWith("alocar") || t.startsWith("vincular") || t.startsWith("transferir") || t.startsWith("remanejar") || t.startsWith("devolução") || t.startsWith("iniciar")) {
    return [
      `${ator} seleciona o item de origem`,
      `Sistema exibe destinos disponíveis`,
      `${ator} escolhe o destino e confirma`,
      `Sistema valida disponibilidade/compatibilidade`,
      `Sistema atualiza vínculo e mantém histórico`,
    ];
  }
  if (t.startsWith("aplicar")) {
    return [
      `${ator} inicia registro da aplicação`,
      `Sistema lista áreas/culturas ativas`,
      `${ator} informa produto, dosagem e responsável`,
      `Sistema valida compatibilidade e grava a aplicação`,
    ];
  }
  return [
    `${ator} solicita a operação "${rf.titulo}"`,
    `Sistema apresenta a interface adequada`,
    `${ator} informa os dados necessários`,
    `Sistema valida e persiste`,
    `Sistema retorna confirmação`,
  ];
};

const inferirAlternativos = (rf: { titulo: string; descricao: string }) => {
  const t = rf.titulo.toLowerCase();
  const flows: { nome: string; passos: string[] }[] = [
    { nome: "A1 — Dados inválidos ou obrigatórios ausentes", passos: ["Sistema exibe mensagem indicando o campo inválido", "Fluxo retorna ao passo de preenchimento"] },
  ];
  if (t.startsWith("alocar") || t.startsWith("transferir") || t.startsWith("remanejar") || t.startsWith("registrar visita") || t.startsWith("registrar enterro")) {
    flows.push({ nome: "A2 — Destino/vaga indisponível", passos: ["Sistema informa que a capacidade foi atingida", "Sugere alternativa ou cancela a operação"] });
  }
  if (t.startsWith("atender") || t.startsWith("registrar pedido")) {
    flows.push({ nome: "A2 — Estoque insuficiente", passos: ["Sistema oferece atendimento parcial", "Gera solicitação de compra para o saldo"] });
  }
  if (t.startsWith("aplicar")) {
    flows.push({ nome: "A2 — Agrotóxico incompatível", passos: ["Sistema bloqueia o registro", "Sugere produtos compatíveis com a praga/cultura"] });
  }
  return flows;
};

const inferirPre = (rf: { titulo: string }) => {
  const t = rf.titulo.toLowerCase();
  if (t.startsWith("cadastrar")) return "Ator autenticado com perfil autorizado.";
  if (t.startsWith("registrar") || t.startsWith("alocar") || t.startsWith("vincular")) return "Entidades relacionadas previamente cadastradas.";
  if (t.startsWith("consultar") || t.startsWith("relatório")) return "Base de dados populada.";
  return "Ator autenticado.";
};

const inferirPos = (rf: { titulo: string }) => {
  const t = rf.titulo.toLowerCase();
  if (t.startsWith("consultar") || t.startsWith("relatório") || t.startsWith("alertar")) return "Resultado exibido / exportado.";
  return "Registro persistido e disponível para consulta / auditoria.";
};

export const buildCasosUso = (cs: CaseStudy): CasoUsoGerado[] => {
  const ator = ATORES[cs.slug]?.principal ?? "Usuário do Sistema";
  const secundarios = ATORES[cs.slug]?.secundarios ?? "";
  return cs.requisitosFuncionais.map((rf, idx) => {
    const codigo = `UC${String(idx + 1).padStart(2, "0")}`;
    const passos = inferirFluxo(rf, ator);
    const alt = inferirAlternativos(rf);
    return {
      id: `${cs.slug}-${codigo}`,
      codigo,
      nome: rf.titulo,
      ator,
      atoresSecundarios: secundarios,
      objetivo: rf.descricao,
      prioridade: idx < 2 ? "Alta" : idx < 4 ? "Média" : "Baixa",
      preCondicoes: inferirPre(rf),
      posCondicoes: inferirPos(rf),
      fluxoPrincipal: passos.map((p) => ({ id: uid(), texto: p })),
      fluxosAlternativos: alt.map((f) => ({
        id: uid(),
        nome: f.nome,
        passos: f.passos.map((p) => ({ id: uid(), texto: p })),
      })),
      regras: "Aplicar validações do domínio conforme mini-mundo.",
      criadoEm: new Date().toISOString(),
    };
  });
};

export const getAtorPrincipal = (slug: string) => ATORES[slug]?.principal ?? "Usuário do Sistema";
