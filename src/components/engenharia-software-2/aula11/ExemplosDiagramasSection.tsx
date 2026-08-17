import { useState } from "react";
import { Boxes, Package, Component, Layers, Users, MessageSquare, Activity, GitBranch, Image as ImageIcon } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Exemplo = {
  id: string;
  nome: string;
  categoria: "Estrutural" | "Comportamental";
  icone: typeof Boxes;
  pergunta: string;
  leitura: string;
  chart: string;
};

const exemplos: Exemplo[] = [
  {
    id: "classes",
    nome: "Classes",
    categoria: "Estrutural",
    icone: Boxes,
    pergunta: "Quais classes existem e como se relacionam?",
    leitura:
      "Cada caixa tem nome, atributos e operações. As linhas mostram associações com multiplicidade (1, 0..*).",
    chart: `classDiagram
  class Cliente {
    -String cpf
    -String nome
    -String email
    +cadastrar()
    +validarCNH() bool
  }
  class Reserva {
    -int numero
    -Date dataInicio
    -Date dataFim
    +calcularValor() double
    +cancelar()
  }
  class Veiculo {
    -String placa
    -String modelo
    -double diaria
    +estaDisponivel() bool
  }
  class Pagamento {
    -double valor
    -String forma
    +aprovar()
  }
  Cliente "1" --> "0..*" Reserva : faz
  Reserva "1" --> "1" Veiculo : reserva
  Reserva "1" --> "1" Pagamento : gera`,
  },
  {
    id: "objetos",
    nome: "Objetos",
    categoria: "Estrutural",
    icone: Package,
    pergunta: "Como as instâncias estão em um instante específico?",
    leitura:
      "Nomes sublinhados no formato objeto:Classe, com valores reais nos atributos — é uma 'foto' do sistema.",
    chart: `classDiagram
  class ana_Cliente["ana : Cliente"] {
    cpf = 123.456.789-00
    nome = Ana Souza
  }
  class r1001_Reserva["r1001 : Reserva"] {
    numero = 1001
    dataInicio = 10/09/2026
    dataFim = 14/09/2026
  }
  class carro_Veiculo["ABC1D23 : Veiculo"] {
    modelo = Onix 1.0
    diaria = 149.90
  }
  ana_Cliente --> r1001_Reserva
  r1001_Reserva --> carro_Veiculo`,
  },
  {
    id: "componentes",
    nome: "Componentes",
    categoria: "Estrutural",
    icone: Component,
    pergunta: "Em quais módulos o software é dividido e como se conectam?",
    leitura:
      "Cada bloco é um componente implantável; as setas indicam dependências e interfaces consumidas.",
    chart: `flowchart LR
  subgraph Front["Aplicação Web"]
    UI[Interface de Reservas]
  end
  subgraph Back["Servidor de Aplicação"]
    API[API REST de Locação]
    REG[Módulo de Regras de Negócio]
    PAG[Módulo de Pagamento]
  end
  subgraph Ext["Serviços Externos"]
    GTW[Gateway de Pagamento]
    DET[Consulta CNH / Detran]
  end
  DB[(Banco de Dados)]
  UI -->|HTTPS/JSON| API
  API --> REG
  REG --> DB
  REG --> PAG
  PAG --> GTW
  REG --> DET`,
  },
  {
    id: "pacotes",
    nome: "Pacotes",
    categoria: "Estrutural",
    icone: Layers,
    pergunta: "Como o sistema é organizado em camadas e agrupamentos lógicos?",
    leitura:
      "Cada pacote agrupa classes afins; as setas tracejadas mostram dependência entre camadas (sempre para baixo).",
    chart: `flowchart TD
  A["«package» apresentacao"] --> B["«package» aplicacao"]
  B --> C["«package» dominio"]
  B --> D["«package» servicos.externos"]
  C --> E["«package» persistencia"]
  E --> F["«package» infraestrutura"]`,
  },
  {
    id: "casos-de-uso",
    nome: "Casos de Uso",
    categoria: "Comportamental",
    icone: Users,
    pergunta: "Quem usa o sistema e para quê?",
    leitura:
      "Bonecos são atores, elipses são casos de uso. «include» é obrigatório; «extend» é opcional.",
    chart: `flowchart LR
  Cliente(["👤 Cliente"])
  Atendente(["👤 Atendente"])
  Gateway(["⚙️ Gateway de Pagamento"])
  subgraph Sistema["Sistema de Locadora de Veículos"]
    UC1(("Reservar Veículo"))
    UC2(("Consultar Disponibilidade"))
    UC3(("Efetuar Pagamento"))
    UC4(("Registrar Devolução"))
    UC5(("Aplicar Multa por Atraso"))
  end
  Cliente --- UC1
  Cliente --- UC2
  Atendente --- UC4
  UC1 -.->|"«include»"| UC2
  UC1 -.->|"«include»"| UC3
  UC4 -.->|"«extend»"| UC5
  UC3 --- Gateway`,
  },
  {
    id: "sequencia",
    nome: "Sequência",
    categoria: "Comportamental",
    icone: MessageSquare,
    pergunta: "Em que ordem os objetos trocam mensagens?",
    leitura:
      "Linhas de vida na vertical, mensagens na horizontal e tempo de cima para baixo. Setas tracejadas são retornos.",
    chart: `sequenceDiagram
  actor C as Cliente
  participant UI as Tela de Reserva
  participant S as ServicoReserva
  participant V as RepositorioVeiculo
  participant P as GatewayPagamento
  C->>UI: informa datas e modelo
  UI->>S: reservar(cliente, periodo, modelo)
  S->>V: buscarDisponiveis(periodo, modelo)
  V-->>S: lista de veículos
  alt Há veículo disponível
    S->>P: autorizar(valor)
    P-->>S: autorizado (cod. transação)
    S-->>UI: reserva confirmada (nº 1001)
    UI-->>C: exibe comprovante
  else Nenhum disponível
    S-->>UI: sem disponibilidade
    UI-->>C: sugere outras datas
  end`,
  },
  {
    id: "atividades",
    nome: "Atividades",
    categoria: "Comportamental",
    icone: Activity,
    pergunta: "Qual é o fluxo de trabalho, com decisões e paralelismo?",
    leitura:
      "Nó inicial (●), ações em retângulos, losangos para decisões com guardas e nó final (⊗).",
    chart: `flowchart TD
  S((●)) --> A[Selecionar período e categoria]
  A --> B[Consultar disponibilidade]
  B --> C{Veículo disponível?}
  C -->|Não| A
  C -->|Sim| D[Validar CNH do cliente]
  D --> E{CNH válida?}
  E -->|Não| X[Exibir impedimento]
  E -->|Sim| F[Calcular valor da locação]
  F --> G[Processar pagamento]
  G --> H{Pagamento aprovado?}
  H -->|Não| G
  H -->|Sim| I[Emitir contrato e comprovante]
  I --> Fim(((⊗)))
  X --> Fim`,
  },
  {
    id: "estados",
    nome: "Máquina de Estados",
    categoria: "Comportamental",
    icone: GitBranch,
    pergunta: "Por quais estados um objeto passa ao longo do tempo?",
    leitura:
      "Cada caixa é um estado do objeto Reserva; as setas são eventos/transições que mudam esse estado.",
    chart: `stateDiagram-v2
  [*] --> Solicitada
  Solicitada --> Confirmada : pagamento aprovado
  Solicitada --> Cancelada : cliente desiste
  Solicitada --> Recusada : pagamento negado
  Confirmada --> EmAndamento : retirada do veículo
  EmAndamento --> Finalizada : devolução no prazo
  EmAndamento --> EmAtraso : prazo excedido
  EmAtraso --> Finalizada : devolução + multa
  Cancelada --> [*]
  Recusada --> [*]
  Finalizada --> [*]`,
  },
];

const ExemplosDiagramasSection = () => {
  const [ativo, setAtivo] = useState(exemplos[0].id);
  const atual = exemplos.find((e) => e.id === ativo) ?? exemplos[0];

  return (
    <section id="exemplos-diagramas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
              <ImageIcon className="w-4 h-4" />
              Galeria de Exemplos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exemplos Visuais de Cada Diagrama
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todos os exemplos usam o mesmo estudo de caso — o Sistema de Locadora de Veículos —
              para você comparar como cada diagrama enxerga o mesmo sistema.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {exemplos.map((e) => (
              <button
                key={e.id}
                onClick={() => setAtivo(e.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  ativo === e.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                <e.icone className="w-4 h-4" />
                {e.nome}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  Diagrama de {atual.nome}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {atual.categoria}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                <strong className="text-foreground">Responde:</strong> {atual.pergunta}
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <MermaidDiagram chart={atual.chart} id={`ex-${atual.id}`} />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong className="text-foreground">Como ler:</strong> {atual.leitura}
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {exemplos.map((e) => (
              <button
                key={e.id}
                onClick={() => setAtivo(e.id)}
                className="text-left p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <e.icone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{e.nome}</p>
                    <p className="text-xs text-muted-foreground">{e.pergunta}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExemplosDiagramasSection;
