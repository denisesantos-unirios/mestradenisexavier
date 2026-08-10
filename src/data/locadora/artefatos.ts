// Artefatos do estudo de caso "Sistema de Locadora de Veículos" (ES II — Aula 4)
// usados para popular as Ferramentas do portal.

export const TAG = "[Locadora de Veículos]";

export type RF = { codigo: string; titulo: string; descricao: string; epico: string; prioridade: "Must" | "Should" | "Could"; estimativa: number };
export type RNF = { codigo: string; categoria: string; texto: string; metrica: string };

export const REQUISITOS_FUNCIONAIS: RF[] = [
  { codigo: "RF01", titulo: "Cadastrar clientes", descricao: "Permitir cadastrar, editar e excluir clientes com nome, CPF, CNH, contato e endereço.", epico: "Gestão de Clientes", prioridade: "Must", estimativa: 5 },
  { codigo: "RF02", titulo: "Validar CNH do cliente", descricao: "Validar número, categoria e validade da CNH antes de permitir a locação.", epico: "Gestão de Clientes", prioridade: "Must", estimativa: 3 },
  { codigo: "RF03", titulo: "Consultar histórico de locações", descricao: "Exibir todas as locações do cliente com datas, veículos, valores e ocorrências.", epico: "Gestão de Clientes", prioridade: "Should", estimativa: 3 },
  { codigo: "RF04", titulo: "Cadastrar frota de veículos", descricao: "Registrar placa, modelo, categoria, ano, quilometragem e valor da diária.", epico: "Gestão de Veículos", prioridade: "Must", estimativa: 5 },
  { codigo: "RF05", titulo: "Controlar manutenções", descricao: "Registrar manutenções preventivas e corretivas, bloqueando o veículo enquanto estiver na oficina.", epico: "Gestão de Veículos", prioridade: "Should", estimativa: 5 },
  { codigo: "RF06", titulo: "Consultar disponibilidade de veículos", descricao: "Buscar veículos livres por categoria e período desejado.", epico: "Gestão de Veículos", prioridade: "Must", estimativa: 5 },
  { codigo: "RF07", titulo: "Registrar nova locação", descricao: "Vincular cliente e veículo a um contrato com período, valores e assinatura.", epico: "Gestão de Locações", prioridade: "Must", estimativa: 8 },
  { codigo: "RF08", titulo: "Calcular valor com base em diárias", descricao: "Calcular o total considerando diárias, categoria, seguros e descontos.", epico: "Gestão de Locações", prioridade: "Must", estimativa: 5 },
  { codigo: "RF09", titulo: "Registrar devolução", descricao: "Registrar data/hora da devolução, quilometragem, nível de combustível e avarias.", epico: "Gestão de Locações", prioridade: "Must", estimativa: 5 },
  { codigo: "RF10", titulo: "Calcular multa por atraso", descricao: "Aplicar multa automática quando a devolução ocorrer após a data prevista.", epico: "Gestão de Locações", prioridade: "Should", estimativa: 3 },
  { codigo: "RF11", titulo: "Emitir recibo de pagamento", descricao: "Gerar recibo em PDF com dados do contrato, valores e forma de pagamento.", epico: "Financeiro", prioridade: "Should", estimativa: 3 },
  { codigo: "RF12", titulo: "Gerar relatório de faturamento", descricao: "Consolidar faturamento por período, categoria de veículo e filial.", epico: "Financeiro", prioridade: "Could", estimativa: 5 },
];

export const REQUISITOS_NAO_FUNCIONAIS: RNF[] = [
  { codigo: "RNF01", categoria: "Desempenho", texto: "O sistema deve responder às consultas de disponibilidade em até 3 segundos.", metrica: "Tempo de resposta ≤ 3s no percentil 95" },
  { codigo: "RNF02", categoria: "Disponibilidade", texto: "O sistema deve operar 24/7 com uptime mínimo de 99%.", metrica: "Uptime mensal ≥ 99%" },
  { codigo: "RNF03", categoria: "Segurança", texto: "Senhas devem ser armazenadas com hash criptográfico (SHA-256 + salt).", metrica: "0 senhas em texto plano na base" },
  { codigo: "RNF04", categoria: "Segurança", texto: "Apenas usuários com perfil gerente podem excluir registros.", metrica: "100% das exclusões auditadas por perfil" },
  { codigo: "RNF05", categoria: "Usabilidade", texto: "O atendente deve concluir o registro de uma locação em até 5 minutos.", metrica: "Tempo médio de tarefa ≤ 5 min (teste com 5 usuários)" },
  { codigo: "RNF06", categoria: "Portabilidade", texto: "O sistema deve funcionar em Chrome, Firefox e Edge (2 últimas versões).", metrica: "Suite de testes verde nos 3 navegadores" },
  { codigo: "RNF07", categoria: "Manutenibilidade", texto: "O código deve manter cobertura de testes automatizados de 80%.", metrica: "Cobertura ≥ 80% no pipeline" },
  { codigo: "RNF08", categoria: "Escalabilidade", texto: "O sistema deve suportar 100 usuários simultâneos sem degradação.", metrica: "Teste de carga com 100 usuários e p95 ≤ 3s" },
];

export type PersonaSeed = {
  nome: string; idade: string; cargo: string; contexto: string; bio: string; nivelTecnologia: string;
  objetivos: string[]; frustracoes: string[]; citacao: string;
};

export const PERSONAS: PersonaSeed[] = [
  {
    nome: "Marina Alves", idade: "27", cargo: "Atendente de balcão",
    contexto: "Ensino médio completo, 2 anos na locadora. Usa o sistema 8h/dia em pé, atendendo fila.",
    bio: "Atende cerca de 30 clientes por dia e precisa fechar contratos rápido, sem erros de cadastro.",
    nivelTecnologia: "Intermediário",
    objetivos: [
      "consultar veículos disponíveis por categoria e período em poucos cliques",
      "registrar a locação completa em menos de 5 minutos",
      "emitir o recibo do cliente sem sair da tela do contrato",
    ],
    frustracoes: ["Planilhas desatualizadas que mostram veículos já alugados", "Ter que redigitar dados do cliente a cada nova locação"],
    citacao: "Se a fila cresce, eu preciso de menos telas e mais atalhos.",
  },
  {
    nome: "Roberto Lima", idade: "45", cargo: "Gerente da filial",
    contexto: "Acompanha resultados pelo notebook e pelo celular, em reuniões semanais com a diretoria.",
    bio: "Responsável por faturamento, ocupação da frota e negociação com clientes corporativos.",
    nivelTecnologia: "Básico",
    objetivos: [
      "acompanhar o faturamento por período e categoria de veículo",
      "identificar veículos ociosos ou parados em manutenção",
      "autorizar exclusões e descontos com registro de auditoria",
    ],
    frustracoes: ["Relatórios montados manualmente no fim do mês", "Falta de visibilidade sobre atrasos e multas"],
    citacao: "Sem número confiável eu não consigo decidir onde investir na frota.",
  },
  {
    nome: "Carla Souza", idade: "34", cargo: "Cliente corporativa",
    contexto: "Aluga veículos para a equipe comercial da empresa, geralmente com pouca antecedência.",
    bio: "Precisa de agilidade na retirada e comprovantes organizados para prestação de contas.",
    nivelTecnologia: "Avançado",
    objetivos: [
      "reservar um veículo da categoria adequada com antecedência mínima",
      "receber o recibo digital logo após o pagamento",
      "consultar o histórico de locações da empresa",
    ],
    frustracoes: ["Descobrir no balcão que o veículo reservado não está disponível", "Perder recibos em papel"],
    citacao: "Quero retirar o carro e seguir viagem — o resto tem que estar resolvido antes.",
  },
  {
    nome: "Jorge Pinto", idade: "52", cargo: "Mecânico responsável pela frota",
    contexto: "Trabalha na oficina, usa tablet com as mãos sujas de graxa; internet instável no galpão.",
    bio: "Controla revisões preventivas por quilometragem e libera veículos para locação.",
    nivelTecnologia: "Básico",
    objetivos: [
      "registrar a entrada e a saída de um veículo em manutenção",
      "bloquear a locação de veículos com revisão vencida",
      "ver os alertas de quilometragem da frota",
    ],
    frustracoes: ["Veículo alugado sem revisão em dia", "Formulários longos e letras pequenas no tablet"],
    citacao: "Carro sem revisão não sai do pátio — o sistema tem que respeitar isso.",
  },
];

export type HUSeed = { persona: string; acao: string; beneficio: string; prioridade: "Must" | "Should" | "Could"; estimativa: number; criterios: string[] };

export const HISTORIAS: HUSeed[] = [
  {
    persona: "Marina Alves (Atendente)", acao: "consultar veículos disponíveis por categoria e período",
    beneficio: "oferecer opções ao cliente sem sair do balcão", prioridade: "Must", estimativa: 5,
    criterios: [
      "Dado que existem veículos livres no período, Quando eu filtrar por categoria 'SUV' e datas 10/03 a 12/03, Então devo ver apenas SUVs sem reserva nesse intervalo.",
      "Dado que não há veículos disponíveis, Quando eu realizar a busca, Então o sistema deve exibir 'Nenhum veículo disponível' e sugerir categorias alternativas.",
      "Dado um veículo em manutenção, Quando eu consultar disponibilidade, Então ele não deve aparecer na lista.",
    ],
  },
  {
    persona: "Marina Alves (Atendente)", acao: "cadastrar um novo cliente com validação de CNH",
    beneficio: "garantir que apenas condutores habilitados aluguem veículos", prioridade: "Must", estimativa: 5,
    criterios: [
      "Dado um CPF já cadastrado, Quando eu salvar, Então o sistema deve impedir a duplicidade.",
      "Dada uma CNH vencida, Quando eu confirmar o cadastro, Então o sistema deve bloquear a locação e exibir o motivo.",
      "Dada uma CNH de categoria incompatível com o veículo, Quando eu registrar a locação, Então o sistema deve alertar o atendente.",
    ],
  },
  {
    persona: "Marina Alves (Atendente)", acao: "registrar uma nova locação vinculando cliente e veículo",
    beneficio: "formalizar o contrato e liberar a retirada do veículo", prioridade: "Must", estimativa: 8,
    criterios: [
      "Dado cliente e veículo válidos, Quando eu confirmar o contrato, Então o veículo passa a 'Locado' e o contrato recebe número único.",
      "Dado um período informado, Quando eu confirmar, Então o valor total é calculado por diárias e exibido antes do aceite.",
      "Dado um contrato criado, Quando eu finalizar, Então o recibo pode ser emitido em PDF.",
    ],
  },
  {
    persona: "Marina Alves (Atendente)", acao: "registrar a devolução do veículo com quilometragem e avarias",
    beneficio: "encerrar o contrato com o estado real do veículo", prioridade: "Must", estimativa: 5,
    criterios: [
      "Dado um contrato ativo, Quando eu registrar a devolução, Então o veículo volta para 'Disponível' (ou 'Manutenção' se houver avaria).",
      "Dada uma devolução após a data prevista, Quando eu confirmar, Então a multa por atraso é calculada automaticamente.",
      "Dada uma avaria registrada com foto, Quando eu salvar, Então a evidência fica anexada ao contrato.",
    ],
  },
  {
    persona: "Roberto Lima (Gerente)", acao: "gerar relatório de faturamento por período e categoria",
    beneficio: "decidir onde investir na renovação da frota", prioridade: "Should", estimativa: 5,
    criterios: [
      "Dado um intervalo de datas, Quando eu gerar o relatório, Então vejo receita total, por categoria e taxa de ocupação.",
      "Dado o relatório exibido, Quando eu exportar, Então recebo um arquivo em PDF/CSV.",
    ],
  },
  {
    persona: "Roberto Lima (Gerente)", acao: "restringir a exclusão de registros ao perfil gerente",
    beneficio: "proteger os dados históricos da locadora", prioridade: "Must", estimativa: 3,
    criterios: [
      "Dado um usuário atendente, Quando ele tentar excluir um contrato, Então a ação deve ser negada.",
      "Dada uma exclusão feita por gerente, Quando concluída, Então deve ficar registrada em log de auditoria.",
    ],
  },
  {
    persona: "Carla Souza (Cliente corporativa)", acao: "reservar um veículo on-line com antecedência",
    beneficio: "garantir o carro para a equipe comercial na data da viagem", prioridade: "Should", estimativa: 8,
    criterios: [
      "Dada uma reserva confirmada, Quando eu chegar à loja, Então o veículo deve estar bloqueado para outros clientes.",
      "Dada uma reserva, Quando ela for confirmada, Então recebo e-mail com número, período e valor estimado.",
    ],
  },
  {
    persona: "Jorge Pinto (Mecânico)", acao: "registrar entrada e saída de veículos em manutenção",
    beneficio: "impedir que carros sem revisão sejam alugados", prioridade: "Should", estimativa: 5,
    criterios: [
      "Dado um veículo enviado à oficina, Quando eu registrar a entrada, Então ele fica indisponível para locação.",
      "Dada uma revisão concluída, Quando eu registrar a saída, Então o veículo volta a 'Disponível'.",
      "Dada a quilometragem acima do limite de revisão, Quando o veículo for consultado, Então o sistema deve alertar.",
    ],
  },
];

export type CasoUsoSeed = {
  codigo: string; nome: string; ator: string; atoresSecundarios: string; objetivo: string;
  prioridade: "Alta" | "Média" | "Baixa"; pre: string; pos: string;
  fluxo: string[]; alternativos: { nome: string; passos: string[] }[]; regras: string;
};

export const CASOS_DE_USO: CasoUsoSeed[] = [
  {
    codigo: "UC01", nome: "Cadastrar cliente", ator: "Atendente", atoresSecundarios: "Cliente",
    objetivo: "Registrar os dados do cliente e validar a CNH antes de permitir locações (RF01, RF02).",
    prioridade: "Alta", pre: "Atendente autenticado no sistema.", pos: "Cliente cadastrado e apto (ou bloqueado) para locação.",
    fluxo: [
      "Atendente seleciona 'Novo cliente'",
      "Sistema exibe o formulário de cadastro",
      "Atendente informa nome, CPF, CNH, contato e endereço",
      "Sistema valida CPF único e a validade/categoria da CNH",
      "Atendente confirma o cadastro",
      "Sistema grava o cliente e exibe mensagem de sucesso",
    ],
    alternativos: [
      { nome: "A1 — CPF já cadastrado", passos: ["Sistema informa a duplicidade", "Oferece abrir o cadastro existente"] },
      { nome: "A2 — CNH vencida ou categoria incompatível", passos: ["Sistema marca o cliente como impedido de locar", "Registra o motivo do bloqueio"] },
    ],
    regras: "RN01: cliente com CNH vencida não pode locar. RN02: CPF é chave única.",
  },
  {
    codigo: "UC02", nome: "Consultar disponibilidade de veículos", ator: "Atendente", atoresSecundarios: "Cliente",
    objetivo: "Localizar veículos livres por categoria e período (RF06).",
    prioridade: "Alta", pre: "Frota cadastrada no sistema.", pos: "Lista de veículos disponíveis exibida.",
    fluxo: [
      "Atendente acessa 'Disponibilidade'",
      "Atendente informa categoria e período desejado",
      "Sistema consulta contratos, reservas e manutenções do período",
      "Sistema exibe os veículos livres com valor da diária",
    ],
    alternativos: [
      { nome: "A1 — Nenhum veículo disponível", passos: ["Sistema exibe aviso", "Sugere categorias ou datas alternativas"] },
      { nome: "A2 — Veículo em manutenção", passos: ["Sistema omite o veículo da lista", "Mantém o registro no painel da oficina"] },
    ],
    regras: "RN03: veículo em manutenção ou locado nunca aparece como disponível. RNF01: resposta em até 3s.",
  },
  {
    codigo: "UC03", nome: "Registrar locação", ator: "Atendente", atoresSecundarios: "Cliente, Gerente",
    objetivo: "Formalizar o contrato de locação entre cliente e veículo (RF07, RF08).",
    prioridade: "Alta", pre: "Cliente apto e veículo disponível no período.", pos: "Contrato criado e veículo com status 'Locado'.",
    fluxo: [
      "Atendente seleciona o cliente",
      "Atendente escolhe o veículo disponível e o período",
      "Sistema calcula o valor total por diárias, seguros e descontos",
      "Atendente confirma a forma de pagamento",
      "Sistema gera o contrato com número único e altera o status do veículo",
      "Sistema disponibiliza o recibo para impressão/envio",
    ],
    alternativos: [
      { nome: "A1 — Cliente com pendência financeira", passos: ["Sistema bloqueia a locação", "Solicita autorização do gerente"] },
      { nome: "A2 — Veículo reservado por outro cliente", passos: ["Sistema informa o conflito", "Retorna à seleção de veículos"] },
    ],
    regras: "RN04: desconto acima de 10% exige aprovação do gerente. RNF05: contrato concluído em até 5 min.",
  },
  {
    codigo: "UC04", nome: "Registrar devolução", ator: "Atendente", atoresSecundarios: "Cliente, Mecânico",
    objetivo: "Encerrar o contrato registrando quilometragem, combustível e avarias (RF09, RF10).",
    prioridade: "Alta", pre: "Existir contrato de locação ativo.", pos: "Contrato encerrado e veículo liberado ou enviado à manutenção.",
    fluxo: [
      "Atendente localiza o contrato ativo pelo número ou pelo cliente",
      "Atendente informa data/hora, quilometragem e nível de combustível",
      "Sistema compara com a data prevista e calcula multa por atraso, se houver",
      "Atendente registra avarias com fotos, se existirem",
      "Sistema encerra o contrato e atualiza o status do veículo",
    ],
    alternativos: [
      { nome: "A1 — Devolução em atraso", passos: ["Sistema calcula a multa conforme tabela", "Acrescenta o valor ao acerto final"] },
      { nome: "A2 — Veículo com avaria", passos: ["Sistema envia o veículo para 'Manutenção'", "Notifica o mecânico responsável"] },
    ],
    regras: "RN05: multa de 1 diária por dia de atraso. RN06: avaria gera ordem de manutenção automática.",
  },
  {
    codigo: "UC05", nome: "Controlar manutenção da frota", ator: "Mecânico", atoresSecundarios: "Gerente",
    objetivo: "Registrar manutenções e impedir a locação de veículos irregulares (RF05).",
    prioridade: "Média", pre: "Veículo cadastrado na frota.", pos: "Histórico de manutenção atualizado e disponibilidade ajustada.",
    fluxo: [
      "Mecânico seleciona o veículo",
      "Mecânico registra o tipo de manutenção (preventiva/corretiva) e a data de entrada",
      "Sistema marca o veículo como indisponível",
      "Mecânico registra serviços, custo e data de saída",
      "Sistema devolve o veículo ao status 'Disponível'",
    ],
    alternativos: [
      { nome: "A1 — Veículo com contrato ativo", passos: ["Sistema impede a entrada em manutenção", "Sugere aguardar a devolução"] },
      { nome: "A2 — Quilometragem acima do limite de revisão", passos: ["Sistema gera alerta de revisão obrigatória", "Bloqueia novas locações"] },
    ],
    regras: "RN07: veículo com revisão vencida não pode ser locado.",
  },
  {
    codigo: "UC06", nome: "Gerar relatório de faturamento", ator: "Gerente", atoresSecundarios: "Diretoria",
    objetivo: "Consolidar receita por período, categoria e filial (RF12).",
    prioridade: "Média", pre: "Contratos encerrados no período.", pos: "Relatório exibido e exportado.",
    fluxo: [
      "Gerente acessa 'Relatórios'",
      "Gerente informa o período e os filtros de categoria/filial",
      "Sistema consolida contratos, multas e descontos",
      "Sistema exibe totais, gráficos e taxa de ocupação",
      "Gerente exporta em PDF ou CSV",
    ],
    alternativos: [
      { nome: "A1 — Nenhum contrato no período", passos: ["Sistema exibe relatório vazio com o aviso correspondente"] },
    ],
    regras: "RNF04: apenas o perfil gerente acessa dados financeiros consolidados.",
  },
  {
    codigo: "UC07", nome: "Emitir recibo de pagamento", ator: "Atendente", atoresSecundarios: "Cliente",
    objetivo: "Formalizar o pagamento da locação em documento (RF11).",
    prioridade: "Baixa", pre: "Contrato com pagamento registrado.", pos: "Recibo gerado em PDF e enviado ao cliente.",
    fluxo: [
      "Atendente abre o contrato pago",
      "Atendente aciona 'Emitir recibo'",
      "Sistema gera o PDF com dados do contrato, valores e forma de pagamento",
      "Sistema envia por e-mail e disponibiliza para impressão",
    ],
    alternativos: [
      { nome: "A1 — Pagamento não confirmado", passos: ["Sistema impede a emissão", "Solicita a confirmação do pagamento"] },
    ],
    regras: "RN08: recibo só é emitido após confirmação do pagamento.",
  },
  {
    codigo: "UC08", nome: "Consultar histórico do cliente", ator: "Atendente", atoresSecundarios: "Gerente",
    objetivo: "Verificar locações anteriores, atrasos e avarias do cliente (RF03).",
    prioridade: "Média", pre: "Cliente cadastrado com locações registradas.", pos: "Histórico exibido para apoiar a decisão de locação.",
    fluxo: [
      "Atendente busca o cliente por nome ou CPF",
      "Sistema apresenta a ficha do cliente",
      "Atendente abre a aba 'Histórico'",
      "Sistema lista contratos, valores, atrasos e avarias",
    ],
    alternativos: [
      { nome: "A1 — Cliente sem histórico", passos: ["Sistema informa que não há locações registradas"] },
      { nome: "A2 — Cliente com restrição", passos: ["Sistema destaca o alerta de pendência", "Exige autorização do gerente para nova locação"] },
    ],
    regras: "RN09: cliente com 3 atrasos no ano exige aprovação do gerente.",
  },
];

export type StakeholderSeed = { nome: string; papel: string; poder: number; interesse: number; atitude: "Apoiador" | "Neutro" | "Resistente"; necessidades: string; estrategia: string };

export const STAKEHOLDERS: StakeholderSeed[] = [
  { nome: "Roberto Lima", papel: "Gerente da filial", poder: 5, interesse: 5, atitude: "Apoiador", necessidades: "Relatórios confiáveis de faturamento e ocupação da frota.", estrategia: "Gerenciar de perto: validar protótipos e indicadores a cada sprint." },
  { nome: "Marina Alves", papel: "Atendente de balcão", poder: 2, interesse: 5, atitude: "Apoiador", necessidades: "Fluxo de locação rápido e sem retrabalho.", estrategia: "Manter informada: testes de usabilidade e feedback semanal." },
  { nome: "Jorge Pinto", papel: "Mecânico / frota", poder: 3, interesse: 4, atitude: "Neutro", necessidades: "Bloqueio de veículos sem revisão e registro simples no tablet.", estrategia: "Envolver na definição das regras de manutenção." },
  { nome: "Diretoria", papel: "Patrocinador", poder: 5, interesse: 3, atitude: "Neutro", necessidades: "Retorno do investimento e redução de perdas.", estrategia: "Manter satisfeita: relatório executivo mensal." },
  { nome: "Carla Souza", papel: "Cliente corporativa", poder: 3, interesse: 4, atitude: "Apoiador", necessidades: "Reserva antecipada e comprovantes digitais.", estrategia: "Manter informada: piloto com clientes corporativos." },
  { nome: "Contabilidade", papel: "Área financeira", poder: 3, interesse: 3, atitude: "Resistente", necessidades: "Integração com o sistema fiscal atual.", estrategia: "Negociar escopo de integração desde a primeira release." },
];
