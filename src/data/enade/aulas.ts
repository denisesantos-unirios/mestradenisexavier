export interface EnadeAfirmacao {
  id: string;
  texto: string;
  correta: boolean;
  comentario: string;
}

export interface EnadeAula {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  origem: string;
  eixo: string;
  objetivos: string[];
  conceitos: { termo: string; definicao: string }[];
  enunciado: string;
  afirmacoes?: EnadeAfirmacao[];
  gabarito: string;
  gabaritoJustificativa: string;
  roteiro: { etapa: string; tempo: string; descricao: string }[];
  exemplos: { titulo: string; descricao: string }[];
  armadilhas: string[];
  exercicios: string[];
}

export const enadeEixos: { eixo: string; conteudos: string }[] = [
  { eixo: "Engenharia de requisitos", conteudos: "Levantamento, análise e representação de requisitos" },
  { eixo: "UML", conteudos: "Casos de uso, classes, associação, herança e multiplicidade" },
  { eixo: "Modelagem", conteudos: "Abstração, estruturação, reutilização e representação de sistemas" },
  { eixo: "Qualidade de software", conteudos: "Qualidade de processo, qualidade de produto, revisões e métricas" },
  { eixo: "Processos de software", conteudos: "Padronização, monitoramento, institucionalização e melhoria contínua" },
  { eixo: "Modelos de maturidade", conteudos: "CMMI-Dev, MPS-SW e níveis de maturidade" },
  { eixo: "Gerência de projetos", conteudos: "Termo de abertura, EAP, responsabilidades, prazos e entregas" },
  { eixo: "Projeto versus operação", conteudos: "Temporariedade, resultado único e atividades recorrentes" },
  { eixo: "Raciocínio aplicado", conteudos: "Análise de afirmações, interpretação de modelos e identificação de conceitos" },
];

export const enadeAulas: EnadeAula[] = [
  {
    slug: "uml-casos-de-uso",
    numero: 1,
    titulo: "UML e Modelagem de Casos de Uso",
    subtitulo: "Atores, generalização, include e extend",
    origem: "ENADE 2021 — Questão discursiva 5",
    eixo: "UML / Engenharia de requisitos",
    objetivos: [
      "Identificar atores e casos de uso a partir de um enunciado textual.",
      "Aplicar generalização entre atores para representar atividades comuns.",
      "Diferenciar os relacionamentos «include» e «extend».",
      "Elaborar um diagrama de casos de uso completo e coerente com os requisitos.",
    ],
    conceitos: [
      { termo: "Ator", definicao: "Papel externo que interage com o sistema (pessoa, sistema ou dispositivo). Não é um cargo, é um papel." },
      { termo: "Caso de uso", definicao: "Sequência de interações que entrega valor observável a um ator." },
      { termo: "Generalização de ator", definicao: "Um ator especializado herda todos os casos de uso do ator geral e acrescenta os seus próprios." },
      { termo: "«include»", definicao: "Comportamento obrigatório e reutilizável, sempre executado pelo caso de uso base." },
      { termo: "«extend»", definicao: "Comportamento opcional, executado apenas quando uma condição de extensão é satisfeita." },
    ],
    enunciado:
      "Uma empresa desenvolve um sistema de vendas. Atendentes e gerentes realizam as mesmas atividades operacionais; os gerentes acumulam ainda funcionalidades exclusivas. Pede-se o relacionamento UML adequado e a elaboração do diagrama de casos de uso, identificando atores, casos de uso e relacionamentos.",
    gabarito: "Questão discursiva — sem alternativa objetiva",
    gabaritoJustificativa:
      "O relacionamento solicitado é a generalização entre atores: o ator Gerente herda de Atendente, reaproveitando todos os casos de uso comuns e acrescentando apenas os exclusivos. Funcionalidades obrigatórias comuns entram como «include»; comportamentos condicionais entram como «extend».",
    roteiro: [
      { etapa: "Aquecimento", tempo: "10 min", descricao: "Leitura do enunciado em duplas e destaque dos substantivos (candidatos a atores) e verbos (candidatos a casos de uso)." },
      { etapa: "Conceitos", tempo: "20 min", descricao: "Exposição de generalização, «include» e «extend» com contraexemplos de uso incorreto." },
      { etapa: "Modelagem guiada", tempo: "30 min", descricao: "Construção coletiva do diagrama no quadro/Editor UML da plataforma." },
      { etapa: "Prática", tempo: "20 min", descricao: "Grupos modelam uma variação do cenário (venda on-line com entrega)." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Correção cruzada entre grupos e checklist de erros comuns." },
    ],
    exemplos: [
      { titulo: "Generalização", descricao: "Gerente → Atendente: o gerente realiza tudo que o atendente faz e ainda 'Cancelar venda' e 'Emitir relatório gerencial'." },
      { titulo: "«include»", descricao: "'Processar venda' inclui obrigatoriamente 'Emitir nota fiscal' após a confirmação do pagamento." },
      { titulo: "«extend»", descricao: "'Solicitar entrega' estende 'Processar venda' apenas quando o produto não pode ser retirado na loja." },
      { titulo: "Especialização de caso de uso", descricao: "'Realizar pagamento à vista' e 'Realizar pagamento a prazo' como especializações de 'Realizar pagamento'." },
    ],
    armadilhas: [
      "Confundir ator com cargo da empresa — o que importa é o papel diante do sistema.",
      "Usar «extend» para comportamento que sempre acontece (deveria ser «include»).",
      "Desenhar o mesmo caso de uso duplicado para dois atores em vez de usar generalização.",
      "Modelar passos de tela (login, clicar em botão) como casos de uso.",
    ],
    exercicios: [
      "Redesenhe o diagrama de vendas incluindo o ator 'Sistema de Pagamento' como ator secundário.",
      "Justifique em até 5 linhas por que 'Emitir nota fiscal' é «include» e 'Solicitar entrega' é «extend».",
      "Modele um sistema de biblioteca com atores Aluno e Bibliotecário usando generalização.",
    ],
  },
  {
    slug: "diagrama-de-classes",
    numero: 2,
    titulo: "Diagrama de Classes e Multiplicidade",
    subtitulo: "Associação, herança, classes abstratas e leitura de modelos",
    origem: "ENADE 2021 — Questão 9",
    eixo: "UML / Modelagem",
    objetivos: [
      "Interpretar um diagrama de classes sem extrapolar informações não representadas.",
      "Diferenciar associação de herança.",
      "Ler multiplicidades 1..1, 0..n e 1..n corretamente.",
      "Reconhecer quando uma classe é (ou não é) abstrata no modelo.",
    ],
    conceitos: [
      { termo: "Associação", definicao: "Ligação estrutural entre instâncias de duas classes; lê-se com verbo e multiplicidade nas duas pontas." },
      { termo: "Generalização/Herança", definicao: "Relação 'é um tipo de' entre superclasse e subclasses." },
      { termo: "Multiplicidade", definicao: "Quantidade de instâncias participantes: 1..1 (exatamente uma), 0..n (nenhuma ou muitas), 1..n (pelo menos uma)." },
      { termo: "Classe abstrata", definicao: "Classe que não pode ser instanciada; em UML é indicada por nome em itálico ou estereótipo {abstract}." },
    ],
    enunciado:
      "Diagrama com as classes Segurado e Seguro, sendo Seguro superclasse de Residencial, Automotivo e Vida. Entre Segurado e Seguro há uma associação com multiplicidade 0..n do lado de Seguro. Analise as afirmações sobre superclasse, associação, classes abstratas e multiplicidade.",
    afirmacoes: [
      { id: "I", texto: "Seguro é superclasse em uma hierarquia de herança múltipla.", correta: false, comentario: "Incorreta. Seguro é superclasse, mas a hierarquia é simples: cada subclasse herda de um único pai." },
      { id: "II", texto: "A ligação entre Segurado e Seguro é uma associação.", correta: true, comentario: "Correta. Não há triângulo de generalização entre elas — é uma associação estrutural." },
      { id: "III", texto: "As subclasses Residencial, Automotivo e Vida são abstratas.", correta: false, comentario: "Incorreta. O diagrama não traz itálico nem {abstract}; concluir isso é extrapolar o modelo." },
      { id: "IV", texto: "A multiplicidade 0..n permite que um segurado adquira várias apólices.", correta: true, comentario: "Correta. 0..n significa nenhuma ou muitas instâncias de Seguro por Segurado." },
    ],
    gabarito: "C — II e IV",
    gabaritoJustificativa:
      "Somente as afirmações II (associação) e IV (multiplicidade 0..n) são sustentadas pelo diagrama. I confunde hierarquia simples com herança múltipla e III extrapola informação inexistente no modelo.",
    roteiro: [
      { etapa: "Leitura do modelo", tempo: "15 min", descricao: "Projeção do diagrama e leitura em voz alta de cada relação, ponta a ponta." },
      { etapa: "Conceitos", tempo: "20 min", descricao: "Associação x herança x agregação/composição; notação de multiplicidade." },
      { etapa: "Análise das afirmações", tempo: "25 min", descricao: "Julgamento coletivo item a item, exigindo evidência gráfica para cada resposta." },
      { etapa: "Prática", tempo: "20 min", descricao: "Construção de um diagrama de classes para um cenário de locadora no Editor UML." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Síntese: 'o que o modelo não diz também é resposta'." },
    ],
    exemplos: [
      { titulo: "Leitura correta", descricao: "Segurado 1..1 —— possui —— 0..n Seguro: um segurado possui de zero a muitas apólices." },
      { titulo: "Herança", descricao: "Residencial é um tipo de Seguro; herda atributos como número da apólice e vigência." },
      { titulo: "Extrapolação indevida", descricao: "Supor regras de negócio (ex.: 'todo segurado deve ter ao menos um seguro') não expressas na multiplicidade." },
    ],
    armadilhas: [
      "Trocar associação por herança ao ver duas classes ligadas.",
      "Assumir abstração sem notação explícita.",
      "Ler 0..n como 'obrigatoriamente vários'.",
      "Ignorar a leitura nos dois sentidos da associação.",
    ],
    exercicios: [
      "Reescreva as quatro afirmações tornando corretas as que estavam erradas.",
      "Acrescente ao diagrama a classe Apolice com multiplicidade adequada e justifique.",
      "Modele um sistema bancário com Conta (abstrata), ContaCorrente e ContaPoupanca.",
    ],
  },
  {
    slug: "qualidade-processo-produto",
    numero: 3,
    titulo: "Qualidade de Processo e de Produto",
    subtitulo: "Padrões, revisões, monitoramento e métricas",
    origem: "ENADE 2021 — Questão 13",
    eixo: "Qualidade de software",
    objetivos: [
      "Relacionar qualidade de processo com qualidade de produto.",
      "Diferenciar prevenção e correção de defeitos.",
      "Reconhecer o papel de padrões, revisões técnicas e inspeções.",
      "Selecionar métricas de processo e de produto adequadas.",
    ],
    conceitos: [
      { termo: "Qualidade de processo", definicao: "Grau em que o processo definido é adequado, seguido e melhorado ao longo do tempo." },
      { termo: "Qualidade de produto", definicao: "Atributos internos (manutenibilidade, acoplamento) e externos (confiabilidade, usabilidade, desempenho) do software entregue." },
      { termo: "Revisão técnica", definicao: "Exame sistemático de artefatos por pares para detectar defeitos cedo, antes do teste." },
      { termo: "Métrica de processo", definicao: "Indicadores como esforço, prazo, densidade de defeitos por fase e retrabalho." },
      { termo: "Melhoria contínua", definicao: "Ciclo permanente de medir, analisar causas e ajustar o processo (PDCA/DMAIC)." },
    ],
    enunciado:
      "A questão discute a relação entre a qualidade do processo de desenvolvimento e a qualidade do produto, considerando experiência dos desenvolvedores, novas tecnologias, pressão por prazos, padrões, monitoramento, métricas e melhoria contínua.",
    afirmacoes: [
      { id: "I", texto: "A melhoria contínua do processo contribui para a redução de defeitos no produto.", correta: true, comentario: "Correta. Processos melhores previnem a introdução de defeitos, reduzindo retrabalho." },
      { id: "II", texto: "Padrões de processo e revisões são importantes para controlar a qualidade.", correta: true, comentario: "Correta. Padrões dão previsibilidade e revisões antecipam a detecção de defeitos." },
      { id: "III", texto: "O monitoramento verifica se os padrões estão sendo seguidos.", correta: true, comentario: "Correta. Monitorar é comparar a execução real com o processo definido." },
      { id: "IV", texto: "Definir processos e métricas é responsabilidade exclusiva do gerente de projetos.", correta: false, comentario: "Incorreta. É responsabilidade organizacional (qualidade/EPG), com participação da equipe — não exclusiva do gerente." },
    ],
    gabarito: "D — I, II e III",
    gabaritoJustificativa:
      "As três primeiras afirmações descrevem corretamente o vínculo entre processo e produto. A IV erra ao atribuir exclusividade ao gerente de projetos.",
    roteiro: [
      { etapa: "Provocação", tempo: "10 min", descricao: "'Dá para ter produto bom com processo ruim?' — debate rápido." },
      { etapa: "Conceitos", tempo: "25 min", descricao: "Qualidade interna x externa; prevenção x correção; revisões e inspeções." },
      { etapa: "Métricas", tempo: "20 min", descricao: "Escolha de métricas para um projeto real: defeitos, esforço, prazo, retrabalho." },
      { etapa: "Questão comentada", tempo: "20 min", descricao: "Análise das quatro afirmações com justificativa escrita." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Mapa mental de garantia da qualidade." },
    ],
    exemplos: [
      { titulo: "Prevenção", descricao: "Checklist de revisão de requisitos evita ambiguidade que geraria defeito em produção." },
      { titulo: "Correção", descricao: "Bug encontrado pelo cliente custa muito mais que o mesmo bug achado na revisão." },
      { titulo: "Métrica combinada", descricao: "Densidade de defeitos por ponto de função (produto) x percentual de retrabalho por sprint (processo)." },
    ],
    armadilhas: [
      "Confundir garantia da qualidade (processo) com controle da qualidade (produto/teste).",
      "Atribuir a uma única pessoa a responsabilidade pelo processo.",
      "Achar que mais testes substituem melhoria de processo.",
    ],
    exercicios: [
      "Proponha três métricas de processo e três de produto para um sistema hospitalar.",
      "Escreva um roteiro de revisão técnica para documento de requisitos.",
      "Explique por que a afirmação IV é incorreta.",
    ],
  },
  {
    slug: "cmmi-dev-mps-sw",
    numero: 4,
    titulo: "CMMI-Dev e MPS-SW",
    subtitulo: "Modelos de maturidade e melhoria de processos",
    origem: "ENADE 2021 — Questão 14",
    eixo: "Modelos de maturidade",
    objetivos: [
      "Comparar CMMI-Dev e MPS-SW quanto a estrutura e níveis.",
      "Associar maturidade a institucionalização, medição e previsibilidade.",
      "Relacionar melhoria de processo ao planejamento estratégico da organização.",
    ],
    conceitos: [
      { termo: "CMMI-Dev", definicao: "Modelo internacional com 5 níveis de maturidade (Inicial, Gerenciado, Definido, Gerenciado Quantitativamente, Em Otimização)." },
      { termo: "MPS-SW", definicao: "Modelo brasileiro (MPS.BR) com 7 níveis, de G (Parcialmente Gerenciado) até A (Em Otimização), com evolução mais gradual." },
      { termo: "Institucionalização", definicao: "Processo incorporado à cultura: executado do mesmo modo mesmo com troca de pessoas." },
      { termo: "Alinhamento estratégico", definicao: "A melhoria de processo deve responder aos objetivos de negócio da organização." },
    ],
    enunciado:
      "A questão compara CMMI-Dev e MPS-SW quanto a níveis de maturidade, evolução da capacidade organizacional e relação entre maturidade e resultados da organização.",
    afirmacoes: [
      { id: "I", texto: "Ambos trabalham com níveis de maturidade, e o MPS-SW possui quantidade maior de níveis.", correta: true, comentario: "Correta. CMMI-Dev tem 5 níveis; MPS-SW tem 7 (G, F, E, D, C, B, A)." },
      { id: "II", texto: "A implementação dos processos independe do planejamento estratégico da organização.", correta: false, comentario: "Incorreta. A melhoria deve estar alinhada ao planejamento estratégico para gerar valor." },
      { id: "III", texto: "Níveis mais altos indicam maior capacidade de institucionalização e aplicação dos processos.", correta: true, comentario: "Correta. Maturidade alta significa processos definidos, medidos, controlados e melhorados." },
    ],
    gabarito: "C — I e III, apenas",
    gabaritoJustificativa:
      "I e III descrevem corretamente a lógica dos modelos de maturidade. II nega o alinhamento estratégico, que é premissa da melhoria de processos.",
    roteiro: [
      { etapa: "Contexto", tempo: "10 min", descricao: "Por que o Brasil criou o MPS.BR: custo e granularidade para PMEs." },
      { etapa: "Estrutura dos modelos", tempo: "25 min", descricao: "Comparação lado a lado dos níveis CMMI x MPS-SW." },
      { etapa: "Estudo de caso", tempo: "25 min", descricao: "Diagnóstico de uma fábrica de software fictícia e indicação do nível atual." },
      { etapa: "Questão comentada", tempo: "15 min", descricao: "Julgamento das afirmações I, II e III." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Maturidade ≠ qualidade técnica do código." },
    ],
    exemplos: [
      { titulo: "Correspondência", descricao: "MPS-SW nível G/F ≈ CMMI nível 2 (Gerenciado); MPS-SW E/D/C ≈ CMMI 3 (Definido); B ≈ 4; A ≈ 5." },
      { titulo: "Institucionalização", descricao: "Equipe nova entra e executa o mesmo processo, com os mesmos artefatos e revisões." },
      { titulo: "Alinhamento", descricao: "Meta de negócio 'reduzir time-to-market 20%' orienta quais processos melhorar primeiro." },
    ],
    armadilhas: [
      "Tratar maturidade como sinônimo de qualidade do produto.",
      "Achar que MPS-SW é apenas uma 'tradução' do CMMI.",
      "Ignorar que certificação sem prática institucionalizada é fachada.",
    ],
    exercicios: [
      "Monte uma tabela de equivalência entre níveis CMMI e MPS-SW.",
      "Escolha uma empresa fictícia e planeje a evolução de G para C do MPS-SW.",
      "Explique a diferença entre capacidade de processo e maturidade organizacional.",
    ],
  },
  {
    slug: "niveis-maturidade-cmmi",
    numero: 5,
    titulo: "Níveis de Maturidade do CMMI",
    subtitulo: "Identificando o nível Definido",
    origem: "ENADE 2021 — Questão 18",
    eixo: "Processos de software / Maturidade",
    objetivos: [
      "Caracterizar cada um dos cinco níveis do CMMI por estágios.",
      "Identificar o nível a partir da descrição de uma organização.",
      "Diferenciar processo gerenciado, definido e gerenciado quantitativamente.",
    ],
    conceitos: [
      { termo: "Nível 1 — Inicial", definicao: "Processos imprevisíveis, reativos, dependentes de heróis." },
      { termo: "Nível 2 — Gerenciado", definicao: "Projetos planejados e acompanhados; disciplina por projeto, não organizacional." },
      { termo: "Nível 3 — Definido", definicao: "Processos padronizados na organização, documentados, apoiados por métodos e ferramentas." },
      { termo: "Nível 4 — Gerenciado Quantitativamente", definicao: "Processos medidos e controlados estatisticamente por dados." },
      { termo: "Nível 5 — Em Otimização", definicao: "Melhoria contínua baseada em análise causal e inovação." },
    ],
    enunciado:
      "Uma organização possui processos bem caracterizados, descritos por padrões e apoiados por ferramentas e métodos estabelecidos. Identifique o nível de maturidade correspondente no CMMI por estágios.",
    gabarito: "B — Definido (nível 3)",
    gabaritoJustificativa:
      "Padronização organizacional, descrição documentada e apoio de métodos e ferramentas caracterizam o nível Definido. Não há menção a controle estatístico (nível 4) nem a inovação sistemática (nível 5).",
    roteiro: [
      { etapa: "Diagnóstico rápido", tempo: "10 min", descricao: "Cada aluno descreve o 'nível' do processo do seu estágio/trabalho." },
      { etapa: "Os 5 níveis", tempo: "25 min", descricao: "Apresentação com palavras-chave discriminantes de cada nível." },
      { etapa: "Classificação", tempo: "25 min", descricao: "Seis descrições de empresas para classificar em grupos." },
      { etapa: "Questão comentada", tempo: "10 min", descricao: "Resolução da questão 18 com identificação das pistas textuais." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Tabela-resumo de palavras-chave por nível." },
    ],
    exemplos: [
      { titulo: "Pista do nível 2", descricao: "'Cada projeto tem plano e acompanhamento' — mas cada um faz do seu jeito." },
      { titulo: "Pista do nível 3", descricao: "'Padrão organizacional', 'processo documentado', 'ferramentas estabelecidas'." },
      { titulo: "Pista do nível 4", descricao: "'Limites de controle', 'baseline quantitativa', 'previsão estatística'." },
    ],
    armadilhas: [
      "Confundir 'processo planejado por projeto' (nível 2) com 'padrão organizacional' (nível 3).",
      "Marcar nível 5 sempre que aparecer a palavra 'melhoria'.",
      "Esquecer que os níveis são cumulativos.",
    ],
    exercicios: [
      "Escreva uma descrição de empresa para cada um dos cinco níveis.",
      "Liste três palavras-chave discriminantes por nível.",
      "Explique por que o cenário da questão não é nível 4.",
    ],
  },
  {
    slug: "projeto-versus-operacao",
    numero: 6,
    titulo: "Projeto versus Operação",
    subtitulo: "Temporariedade e resultado único (PMBOK)",
    origem: "ENADE 2021 — Questão 15",
    eixo: "Gerência de projetos",
    objetivos: [
      "Aplicar a definição de projeto do PMBOK.",
      "Distinguir projeto de operação continuada em contextos de software.",
      "Classificar atividades típicas de TI como projeto ou operação.",
    ],
    conceitos: [
      { termo: "Projeto", definicao: "Esforço temporário empreendido para criar um produto, serviço ou resultado único." },
      { termo: "Temporariedade", definicao: "Início e fim definidos — não significa curta duração." },
      { termo: "Resultado único", definicao: "A entrega possui características que a distinguem de entregas anteriores." },
      { termo: "Operação", definicao: "Atividade contínua e repetitiva que mantém o negócio funcionando." },
    ],
    enunciado:
      "Com base na definição do PMBOK de que projeto é um esforço temporário destinado a criar um produto, serviço ou resultado único, analise as afirmações.",
    afirmacoes: [
      { id: "I", texto: "Criar um produto único pode constituir um projeto.", correta: true, comentario: "Correta. É o caso clássico: desenvolver um novo sistema." },
      { id: "II", texto: "Criar um serviço ou capacidade única também pode constituir um projeto.", correta: true, comentario: "Correta. Implantar uma nova capacidade de atendimento digital, por exemplo." },
      { id: "III", texto: "A operação repetitiva de um software caracteriza um projeto.", correta: false, comentario: "Incorreta. Execução rotineira e contínua é operação, não projeto." },
      { id: "IV", texto: "Uma combinação única de produtos, serviços ou resultados pode constituir um projeto.", correta: true, comentario: "Correta. O PMBOK admite explicitamente essa combinação." },
    ],
    gabarito: "D — I, II e IV",
    gabaritoJustificativa:
      "Apenas a III contraria a definição, pois descreve atividade contínua e repetitiva (operação).",
    roteiro: [
      { etapa: "Classificação relâmpago", tempo: "10 min", descricao: "Doze atividades de TI para classificar em projeto ou operação." },
      { etapa: "Conceitos", tempo: "20 min", descricao: "Definição do PMBOK, temporariedade e unicidade." },
      { etapa: "Fronteiras", tempo: "25 min", descricao: "Casos ambíguos: manutenção evolutiva, sustentação, migração de versão." },
      { etapa: "Questão comentada", tempo: "15 min", descricao: "Análise das afirmações I a IV." },
      { etapa: "Fechamento", tempo: "10 min", descricao: "Quadro comparativo projeto x operação." },
    ],
    exemplos: [
      { titulo: "Projeto", descricao: "Desenvolver o novo portal do aluno; implantar prontuário eletrônico em um hospital." },
      { titulo: "Operação", descricao: "Rodar o backup diário; atender chamados de suporte nível 1." },
      { titulo: "Fronteira", descricao: "Manutenção corretiva rotineira = operação; evolução significativa do produto = novo projeto ou fase." },
    ],
    armadilhas: [
      "Achar que projeto é sempre curto.",
      "Classificar sustentação contínua como projeto por envolver equipe técnica.",
      "Ignorar que um mesmo software gera projetos (evoluções) e operação (uso diário).",
    ],
    exercicios: [
      "Classifique dez atividades do seu estágio em projeto ou operação, justificando.",
      "Descreva um caso em que a manutenção vira projeto.",
      "Reescreva a afirmação III tornando-a correta.",
    ],
  },
  {
    slug: "gerencia-de-projetos",
    numero: 7,
    titulo: "Gerência de Projetos de Software",
    subtitulo: "Termo de abertura, EAP e matriz de responsabilidades",
    origem: "ENADE 2021 — Questão 22",
    eixo: "Gerência de projetos",
    objetivos: [
      "Reconhecer o conteúdo e a função do termo de abertura.",
      "Diferenciar EAP (entregas) de matriz de responsabilidades (pessoas).",
      "Discutir a atuação do gerente na composição e no acompanhamento da equipe.",
      "Relacionar artefatos preditivos com práticas equivalentes em métodos ágeis.",
    ],
    conceitos: [
      { termo: "Termo de abertura (TAP)", definicao: "Documento que autoriza formalmente o projeto, define partes interessadas, limites, premissas e orçamento inicial." },
      { termo: "EAP", definicao: "Decomposição hierárquica das entregas em pacotes de trabalho — organiza escopo, não pessoas." },
      { termo: "Matriz de responsabilidades (RACI)", definicao: "Relaciona participantes, entregas e atribuições (Responsável, Aprovador, Consultado, Informado)." },
      { termo: "Controle de mudanças", definicao: "Processo formal de avaliação e aprovação de alterações de escopo, prazo ou custo." },
    ],
    enunciado:
      "A questão aborda o papel da gerência de projetos em atividades de desenvolvimento e implantação de software e hardware, considerando termo de abertura, EAP, responsabilidades e atuação do gerente.",
    afirmacoes: [
      { id: "I", texto: "O termo de abertura pode estabelecer partes interessadas, limites e orçamento.", correta: true, comentario: "Correta. São conteúdos típicos do TAP." },
      { id: "II", texto: "A EAP é o instrumento responsável por definir as responsabilidades da equipe.", correta: false, comentario: "Incorreta. A EAP organiza entregas e pacotes de trabalho; responsabilidades ficam na matriz RACI." },
      { id: "III", texto: "O gerente pode promover mudanças na equipe quando necessário ao andamento do projeto.", correta: true, comentario: "Correta. Faz parte da gestão de recursos humanos do projeto." },
      { id: "IV", texto: "A matriz de responsabilidades relaciona participantes, entregas e atribuições.", correta: true, comentario: "Correta. É exatamente a função da RACI." },
    ],
    gabarito: "E — I, III e IV",
    gabaritoJustificativa:
      "Somente a II é incorreta, por atribuir à EAP um papel que pertence à matriz de responsabilidades.",
    roteiro: [
      { etapa: "Abertura", tempo: "10 min", descricao: "Leitura de um TAP real resumido e identificação dos elementos." },
      { etapa: "EAP na prática", tempo: "25 min", descricao: "Construção da EAP de um projeto de implantação de sistema, até pacotes de trabalho." },
      { etapa: "RACI", tempo: "20 min", descricao: "Preenchimento da matriz para as entregas da EAP." },
      { etapa: "Preditivo x ágil", tempo: "15 min", descricao: "Equivalências: escopo, prioridades, riscos e acompanhamento em Scrum." },
      { etapa: "Questão comentada", tempo: "10 min", descricao: "Julgamento das afirmações I a IV." },
    ],
    exemplos: [
      { titulo: "TAP", descricao: "Projeto 'Portal do Aluno': patrocinador, objetivo, marcos, orçamento de R$ 300 mil e limites (não inclui app mobile)." },
      { titulo: "EAP", descricao: "1. Gerenciamento • 2. Requisitos • 3. Design • 4. Construção • 5. Testes • 6. Implantação — cada um com pacotes." },
      { titulo: "RACI", descricao: "Entrega 'Documento de Requisitos': Analista (R), Gerente (A), Usuário-chave (C), Diretoria (I)." },
    ],
    armadilhas: [
      "Confundir EAP com cronograma ou com organograma.",
      "Achar que o TAP detalha o escopo — ele delimita, o detalhamento vem depois.",
      "Supor que em projetos ágeis não existem escopo, riscos e responsabilidades.",
    ],
    exercicios: [
      "Elabore o TAP de um projeto de implantação de prontuário eletrônico.",
      "Construa a EAP até o terceiro nível e a RACI correspondente.",
      "Compare EAP e Product Backlog: semelhanças e diferenças.",
    ],
  },
];

export const getEnadeAula = (slug?: string) => enadeAulas.find((a) => a.slug === slug);
