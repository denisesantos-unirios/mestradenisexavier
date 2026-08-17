import { useState } from "react";
import {
  Boxes,
  Package,
  Component,
  Layers,
  Users,
  MessageSquare,
  Activity,
  GitBranch,
  Lightbulb,
  CheckCircle2,
  Target,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DiagramaInfo {
  id: string;
  nome: string;
  categoria: "Estrutural" | "Comportamental";
  icone: typeof Boxes;
  pergunta: string;
  objetivo: string[];
  utilidade: string[];
  exemplo: string;
  foco: string;
}

const diagramas: DiagramaInfo[] = [
  {
    id: "classes",
    nome: "Diagrama de Classes",
    categoria: "Estrutural",
    icone: Boxes,
    pergunta: "Quais são as classes do sistema e como elas se relacionam?",
    objetivo: [
      "Representar a estrutura estática do software.",
      "Mostrar classes, atributos e operações.",
      "Exibir relacionamentos: herança, associação, agregação e composição.",
      "Indicar multiplicidades como 1, 0..1 ou 1..*.",
    ],
    utilidade: [
      "Projetar a estrutura do sistema e orientar a implementação.",
      "Identificar responsabilidades e dependências entre entidades.",
    ],
    exemplo:
      "Um sistema de vendas pode ter as classes Cliente, Pedido e Produto. Um Cliente realiza vários Pedidos, e cada Pedido contém vários Produtos.",
    foco: "Estrutura do sistema",
  },
  {
    id: "objetos",
    nome: "Diagrama de Objetos",
    categoria: "Estrutural",
    icone: Package,
    pergunta: "Como estão as instâncias das classes em um determinado momento?",
    objetivo: [
      "Apresentar uma fotografia do sistema em um instante específico.",
      "Mostrar objetos concretos e seus valores atuais.",
      "Diferenciar-se do diagrama de classes, que exibe modelos gerais.",
    ],
    utilidade: [
      "Demonstrar exemplos de funcionamento do sistema.",
      "Validar relacionamentos entre objetos.",
      "Explicar cenários específicos.",
      "Facilitar o entendimento de estruturas complexas.",
    ],
    exemplo:
      "cliente1:Cliente, com nome 'Ana'; pedido25:Pedido, com valor de R$ 150; e o objeto cliente1 associado ao objeto pedido25.",
    foco: "Instâncias em um momento",
  },
  {
    id: "componentes",
    nome: "Diagrama de Componentes",
    categoria: "Estrutural",
    icone: Component,
    pergunta: "Em quais módulos o software está dividido e como esses módulos se conectam?",
    objetivo: [
      "Representar os principais componentes físicos ou lógicos do sistema.",
      "Exibir dependências entre componentes.",
      "Aplicar a serviços, módulos, bibliotecas, APIs, bancos de dados e aplicações externas.",
    ],
    utilidade: [
      "Visualizar a arquitetura do software.",
      "Identificar dependências entre módulos.",
      "Separar responsabilidades.",
      "Planejar integração entre sistemas.",
      "Apoiar decisões de manutenção e implantação.",
    ],
    exemplo:
      "Interface Web, Serviço de Autenticação, Serviço de Pedidos, Banco de Dados e Serviço de Pagamentos, com as setas de comunicação entre eles.",
    foco: "Arquitetura modular",
  },
  {
    id: "pacotes",
    nome: "Diagrama de Pacotes",
    categoria: "Estrutural",
    icone: Layers,
    pergunta: "Como o sistema está organizado em grupos lógicos e camadas?",
    objetivo: [
      "Organizar elementos do sistema em pacotes.",
      "Representar agrupamentos relacionados e dependências.",
      "Aplicar a camadas, domínios de negócio, módulos funcionais e subsistemas.",
    ],
    utilidade: [
      "Organizar sistemas grandes.",
      "Reduzir a complexidade visual.",
      "Demonstrar a arquitetura em camadas.",
      "Evidenciar dependências.",
      "Evitar dependências indevidas entre módulos.",
    ],
    exemplo:
      "Apresentação, Aplicação, Domínio, Infraestrutura e Persistência. A camada de Apresentação depende da Aplicação, mas não acessa diretamente a Persistência.",
    foco: "Organização lógica",
  },
  {
    id: "casos-de-uso",
    nome: "Diagrama de Casos de Uso",
    categoria: "Comportamental",
    icone: Users,
    pergunta: "Quem utiliza o sistema e quais objetivos essa pessoa ou sistema externo deseja alcançar?",
    objetivo: [
      "Representar as funcionalidades do sistema do ponto de vista dos usuários.",
      "Apresentar atores, casos de uso e limites do sistema.",
      "Exibir relações de inclusão e extensão.",
    ],
    utilidade: [
      "Levantar e validar requisitos funcionais.",
      "Definir o escopo do sistema.",
      "Entender as necessidades dos usuários.",
      "Facilitar a comunicação com clientes e partes interessadas.",
      "Servir como base para testes e desenvolvimento.",
    ],
    exemplo:
      "O ator Cliente pode realizar: Criar conta, Consultar produtos, Realizar pedido e Acompanhar entrega.",
    foco: "Requisitos e usuários",
  },
  {
    id: "sequencia",
    nome: "Diagrama de Sequência",
    categoria: "Comportamental",
    icone: MessageSquare,
    pergunta: "Em que ordem os objetos trocam mensagens para realizar uma tarefa?",
    objetivo: [
      "Mostrar a interação entre atores, objetos e sistemas ao longo do tempo.",
      "Evidenciar quem inicia a interação, as mensagens trocadas e a ordem das operações.",
      "Representar respostas, condições, repetições e chamadas síncronas ou assíncronas.",
    ],
    utilidade: [
      "Detalhar a execução de um caso de uso.",
      "Compreender o comportamento de uma funcionalidade.",
      "Identificar responsabilidades.",
      "Definir interfaces e chamadas entre serviços.",
      "Encontrar possíveis falhas no fluxo de comunicação.",
    ],
    exemplo:
      "No login: o usuário informa e-mail e senha; a interface envia os dados ao serviço de autenticação; o serviço consulta o banco; o banco retorna os dados; o serviço valida as credenciais e informa o resultado.",
    foco: "Interações no tempo",
  },
  {
    id: "atividades",
    nome: "Diagrama de Atividades",
    categoria: "Comportamental",
    icone: Activity,
    pergunta: "Qual é o fluxo de trabalho de um processo e onde existem decisões ou atividades paralelas?",
    objetivo: [
      "Representar o fluxo de atividades, decisões, caminhos alternativos e processos paralelos.",
      "Mostrar início, fim, atividades, decisões, condições, repetições e responsáveis.",
    ],
    utilidade: [
      "Modelar processos de negócio.",
      "Descrever fluxos operacionais.",
      "Documentar algoritmos.",
      "Identificar gargalos.",
      "Explicar caminhos alternativos.",
      "Representar atividades executadas em paralelo.",
    ],
    exemplo:
      "Processo de compra: Selecionar produtos → Informar endereço → Escolher forma de pagamento → Verificar pagamento. Se aprovado, confirmar pedido; se recusado, solicitar outra forma de pagamento; enviar para entrega.",
    foco: "Fluxos de trabalho",
  },
  {
    id: "estados",
    nome: "Diagrama de Máquina de Estados",
    categoria: "Comportamental",
    icone: GitBranch,
    pergunta: "Por quais estados um objeto passa durante seu ciclo de vida?",
    objetivo: [
      "Representar as mudanças de estado de um objeto em resposta a eventos ou condições.",
      "Mostrar estados possíveis, eventos que provocam mudanças, transições e ações executadas.",
    ],
    utilidade: [
      "Modelar objetos cujo comportamento muda ao longo do tempo.",
      "Definir regras de negócio.",
      "Controlar alterações de status.",
      "Evitar transições inválidas.",
      "Especificar sistemas reativos.",
      "Apoiar a implementação e os testes.",
    ],
    exemplo:
      "Um pedido pode passar por: Criado → Aguardando pagamento → Pago → Em preparação → Enviado → Entregue. Também pode seguir para Cancelado a partir de Aguardando pagamento.",
    foco: "Ciclo de vida",
  },
];

const resumoTable = [
  { diagrama: "Classes", foco: "Estrutura do sistema", pergunta: "Quais classes existem e como se relacionam?" },
  { diagrama: "Objetos", foco: "Instâncias em um momento", pergunta: "Como os objetos estão configurados agora?" },
  { diagrama: "Componentes", foco: "Arquitetura modular", pergunta: "Quais módulos existem e como se conectam?" },
  { diagrama: "Pacotes", foco: "Organização lógica", pergunta: "Como o sistema está agrupado e dividido em camadas?" },
  { diagrama: "Casos de Uso", foco: "Requisitos e usuários", pergunta: "Quem usa o sistema e para qual finalidade?" },
  { diagrama: "Sequência", foco: "Interações no tempo", pergunta: "Em que ordem as mensagens são trocadas?" },
  { diagrama: "Atividades", foco: "Fluxos de trabalho", pergunta: "Como um processo acontece, incluindo decisões e paralelismo?" },
  { diagrama: "Máquina de Estados", foco: "Ciclo de vida", pergunta: "Como um objeto muda de estado ao longo do tempo?" },
];

const DiagramaCard = ({ diagrama }: { diagrama: DiagramaInfo }) => {
  const [expandido, setExpandido] = useState(false);
  const Icon = diagrama.icone;
  const isEstrutural = diagrama.categoria === "Estrutural";

  return (
    <Card className="overflow-hidden border-border bg-card hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-3 rounded-xl shrink-0 ${
                isEstrutural ? "bg-blue-500/10 text-blue-500" : "bg-violet-500/10 text-violet-500"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-foreground">{diagrama.nome}</h3>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    isEstrutural
                      ? "border-blue-500/30 text-blue-500 bg-blue-500/5"
                      : "border-violet-500/30 text-violet-500 bg-violet-500/5"
                  }`}
                >
                  {diagrama.categoria}
                </Badge>
              </div>
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5" />
                {diagrama.pergunta}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-secondary/30 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-orange-500" />
                Objetivo
              </h4>
              <ul className="space-y-1.5">
                {diagrama.objetivo.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                Exemplo
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{diagrama.exemplo}</p>
            </div>

            {expandido && (
              <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/10">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Utilidade
                </h4>
                <ul className="space-y-1.5">
                  {diagrama.utilidade.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setExpandido(!expandido)}
          className="w-full py-3 px-6 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border-t border-border"
        >
          {expandido ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Recolher utilidade
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Ver utilidade
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
};

const UtilidadeDiagramasSection = () => {
  return (
    <section id="utilidade-diagramas" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              Quando usar cada diagrama
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diagramas UML e sua Utilidade
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Cada diagrama responde a uma pergunta específica sobre o sistema. Conhecer essa utilidade
              ajuda a escolher o diagrama certo para cada problema de modelagem.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
          {diagramas.map((diagrama) => (
            <StaggerItem key={diagrama.id}>
              <DiagramaCard diagrama={diagrama} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" />
                Resumo Comparativo
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Em conjunto, esses diagramas permitem analisar o sistema sob diferentes perspectivas:
                estrutura, organização, requisitos, interações, processos e comportamento ao longo do tempo.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 text-foreground">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Diagrama</th>
                    <th className="text-left px-4 py-3 font-semibold">Principal foco</th>
                    <th className="text-left px-4 py-3 font-semibold">Pergunta central</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {resumoTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-secondary/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{row.diagrama}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.foco}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.pergunta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UtilidadeDiagramasSection;
