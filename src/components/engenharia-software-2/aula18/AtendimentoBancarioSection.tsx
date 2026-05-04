import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, AlertTriangle, CheckCircle2, Layers } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const cenario = `Um cliente deseja fazer um depósito no banco. Ao chegar, depara-se com uma fila e aguarda até chegar a sua vez. Quando o atendente o chama, ele diz que quer fazer o depósito, entrega o cheque e informa a conta de destino. O atendente confere o cheque e despacha para compensação. O setor de compensação verifica o saldo da conta do emissor e, se houver saldo, efetua a transferência e arquiva o cheque.`;

const evolucao = [
  {
    titulo: "EX 01 — Ações",
    desc: "Identifique os passos relevantes do processo (verbos no infinitivo).",
    chart: `flowchart TD
  A[Fazer Depósito]
  B[Aguardar]
  C[Ser Atendido]
  D[Conferir Cheque]
  E[Despachar Cheque]
  F[Conferir Saldo da Conta]
  G[Efetuar Transferência]`,
  },
  {
    titulo: "EX 02 — Transições",
    desc: "Encadeie as ações respeitando a ordem do processo.",
    chart: `flowchart TD
  A[Aguardar] --> B[Ser Atendido]
  B --> C[Conferir Cheque]
  C --> D[Despachar Cheque]
  D --> E[Conferir Saldo]
  E --> F[Efetuar Transferência]`,
  },
  {
    titulo: "EX 03 — Início e Fim",
    desc: "Marque os pontos inicial (●) e final (⊗) da atividade.",
    chart: `flowchart TD
  S((●)) --> A[Aguardar]
  A --> B[Ser Atendido]
  B --> C[Conferir Cheque]
  C --> D[Despachar Cheque]
  D --> E[Conferir Saldo]
  E --> F[Efetuar Transferência]
  F --> Fim(((⊗)))`,
  },
  {
    titulo: "EX 04 — Eventos, Decisões e Convergências",
    desc: "Eventos disparam ações; decisões (SE) ramificam o fluxo; convergências (OU) unem caminhos alternativos.",
    chart: `flowchart TD
  S((●)) --> P{É cliente preferencial?}
  P -->|Sim| M((Merge))
  P -->|Não| A[Aguardar]
  A --> E{{Evento: Próximo}}
  E -->|"~Você"| A
  E -->|"Você"| M
  M --> SA[Ser Atendido]
  SA --> CC[Conferir Cheque]
  CC --> DC[Despachar Cheque]
  DC --> CS[Conferir Saldo]
  CS --> ET[Efetuar Transferência]
  ET --> Fim(((⊗)))`,
  },
  {
    titulo: "EX 05 — Bifurcação e Sincronização",
    desc: "Bifurcação (Fork): ações concorrentes. Sincronização (Join): só prossegue após ambas terminarem.",
    chart: `flowchart TD
  S((●)) --> A[Aguardar]
  A --> B[Ser Atendido]
  B --> Fork[/"━━ Fork ━━"/]
  Fork --> CC[Conferir Cheque]
  Fork --> PD[Pegar Dados do Depositante]
  CC --> Join[/"━━ Join ━━"/]
  PD --> Join
  Join --> DC[Despachar Cheque]
  DC --> CS[Conferir Saldo]
  CS --> ET[Efetuar Transferência]
  ET --> Fim(((⊗)))`,
  },
];

const diagramaCompleto = `flowchart TD
  subgraph Cliente
    direction TB
    S((●)) --> AG[Aguardar]
  end
  subgraph Atendente
    direction TB
    AT[Atender] --> CC[Conferir Cheque]
    CC --> Fork[/"━ Fork ━"/]
    Fork --> PD[Pegar Dados do Depositante]
    PD --> Join[/"━ Join ━"/]
    Fork --> Join
    Join --> DC[Despachar Cheque]
  end
  subgraph SetorCompensacao["Setor de Compensação"]
    direction TB
    CS[Conferir Saldo] --> SD{Tem saldo?}
    SD -->|Sim| ET[Efetuar Transferência]
    SD -->|Não| RJ[Rejeitar Operação]
    ET --> AR[Arquivar Cheque]
  end
  AG --> AT
  DC --> CS
  AR --> Fim(((⊗)))
  RJ --> Fim`;

const inconsistencias = [
  {
    titulo: "Concorrência ou Decisão?",
    problema: "Usar um losango (decisão) onde deveria existir um Fork (paralelismo) — ou vice-versa.",
    regra: "Decisão = caminhos alternativos exclusivos (SE). Fork = caminhos simultâneos (E paralelo).",
  },
  {
    titulo: "Ovo ou a Galinha?",
    problema: "Loop infinito ou dependência circular sem condição de saída.",
    regra: "Todo ciclo precisa de uma decisão com guarda que permita encerrar o fluxo.",
  },
  {
    titulo: "Múltiplos pontos iniciais",
    problema: "Mais de um nó inicial no mesmo diagrama.",
    regra: "Uma atividade tem APENAS UM ponto inicial — mas pode ter vários pontos finais.",
  },
  {
    titulo: "Fork sem Join correspondente",
    problema: "Bifurcar 3 fluxos e sincronizar apenas 2 — o terceiro fica órfão.",
    regra: "Toda barra de Fork deve ter uma barra de Join compatível para sincronizar todas as ramificações.",
  },
];

const AtendimentoBancarioSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Caso Clássico
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Atendimento Bancário
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Construção incremental do diagrama: das ações isoladas até o modelo completo
              com raias, decisões e paralelismo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp">
          <Card className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 border-blue-400/30 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold text-foreground">Cenário do Negócio</h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{cenario}</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {evolucao.map((ex, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 0.05}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-orange-400/40 text-orange-400">
                      {String(i + 1).padStart(2, "0")}
                    </Badge>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{ex.titulo}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{ex.desc}</p>
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={ex.chart} />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp">
          <Card className="bg-card/50 border-blue-400/40 backdrop-blur-sm mb-12">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Diagrama Completo com Raias (Swimlanes)
                </h3>
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Cliente → Atendente → Setor de Compensação. Cada raia mostra o responsável
                pela ação, com decisão de saldo e fluxos paralelos no atendimento.
              </p>
              <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                <MermaidDiagram chart={diagramaCompleto} />
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-3">
              Atenção
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Inconsistências Comuns
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Erros recorrentes na especificação de processos de negócio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {inconsistencias.map((item, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 0.05}>
              <Card className="bg-card/50 border-red-400/20 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <h4 className="font-bold text-foreground">{item.titulo}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="text-red-400 font-semibold">Problema:</span> {item.problema}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-400 font-semibold">Regra:</span> {item.regra}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp">
          <Card className="bg-card/30 border-border/50 mt-12">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-2">📌 Observações Finais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Uma atividade tem <strong className="text-foreground">apenas um início</strong>, mas pode ter <strong className="text-foreground">vários marcadores de término</strong>.</li>
                <li>• Um sistema é composto por vários processos — modele <strong className="text-foreground">um diagrama por procedimento</strong> do negócio.</li>
                <li>• Ações complexas podem ser <strong className="text-foreground">detalhadas em novos diagramas</strong> de atividade (decomposição hierárquica).</li>
                <li>• Exemplos no banco: Atender Cliente, Gerenciar Investimentos, Débito Automático, Avaliar Empréstimos, Realizar Cobranças.</li>
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtendimentoBancarioSection;
