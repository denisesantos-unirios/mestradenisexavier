import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Boxes, FileText, AlertTriangle, BarChart3, Search, Filter } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const hus = [
  {
    id: "HU01",
    icon: Boxes,
    titulo: "Cadastro de Departamentos e Setores",
    ator: "Administrador do Sistema",
    chart: `flowchart TD
  S((●)) --> M[Exibir menu Departamentos/Setores]
  M --> D{Operação?}
  D -->|Cadastrar| C1[Inserir sigla 3 letras]
  C1 --> C2{Sigla única?}
  C2 -->|Não| C1
  C2 -->|Sim| C3[Inserir nome]
  C3 --> C4[Salvar no banco]
  C4 --> OK[Exibir sucesso]
  D -->|Editar| E1[Listar itens]
  E1 --> E2[Selecionar item]
  E2 --> E3[Atualizar dados]
  E3 --> E4[Salvar alterações]
  E4 --> OK
  D -->|Excluir| X1[Listar itens]
  X1 --> X2[Selecionar item]
  X2 --> X3{Confirmar?}
  X3 -->|Não| M
  X3 -->|Sim| X4[Remover do banco]
  X4 --> OK
  OK --> F(((⊗)))`,
  },
  {
    id: "HU02",
    icon: Boxes,
    titulo: "Cadastro de Bens Móveis",
    ator: "Usuário do Setor de Patrimônio",
    chart: `flowchart TD
  S((●)) --> A[Exibir formulário de bem móvel]
  A --> B[Preencher número 6 dígitos, descrição, data, valor]
  B --> C[Selecionar setor responsável]
  C --> D{Dados válidos?}
  D -->|Não| B
  D -->|Sim| E[Salvar no banco]
  E --> F[Exibir mensagem de sucesso]
  F --> Fim(((⊗)))`,
  },
  {
    id: "HU03",
    icon: AlertTriangle,
    titulo: "Registro de Ocorrências",
    ator: "Usuário do Setor de Patrimônio",
    chart: `flowchart TD
  S((●)) --> A[Selecionar Registrar Ocorrência]
  A --> B[Escolher bem móvel por número]
  B --> C[Preencher data e descrição]
  C --> D[Selecionar tipo de dano]
  D --> Fork[/"━━ Fork ━━"/]
  Fork --> G1[Gerar número automático]
  Fork --> G2[Registrar timestamp]
  G1 --> Join[/"━━ Join ━━"/]
  G2 --> Join
  Join --> E[Salvar ocorrência no banco]
  E --> F[Exibir confirmação]
  F --> Fim(((⊗)))`,
  },
  {
    id: "HU04",
    icon: FileText,
    titulo: "Cadastro de Tipos de Danos",
    ator: "Administrador do Sistema",
    chart: `flowchart TD
  S((●)) --> A[Acessar Tipos de Danos]
  A --> D{Operação?}
  D -->|Cadastrar| C1[Inserir descrição]
  C1 --> C2[Salvar]
  C2 --> OK[Exibir confirmação]
  D -->|Editar| E1[Listar tipos]
  E1 --> E2[Selecionar tipo]
  E2 --> E3[Alterar descrição]
  E3 --> E4[Salvar]
  E4 --> OK
  D -->|Excluir| X1[Listar tipos]
  X1 --> X2[Selecionar]
  X2 --> X3{Confirmar exclusão?}
  X3 -->|Não| A
  X3 -->|Sim| X4[Remover do banco]
  X4 --> OK
  OK --> F(((⊗)))`,
  },
  {
    id: "HU05",
    icon: BarChart3,
    titulo: "Relatório de Bens por Departamento/Setor",
    ator: "Gestor",
    chart: `flowchart TD
  S((●)) --> A[Acessar Relatórios de Bens]
  A --> B[Selecionar filtros: depto/setor]
  B --> C[Consultar banco]
  C --> D[Exibir tabela: bem, setor, data, valor]
  D --> E{Ação?}
  E -->|Exportar| X[Gerar arquivo]
  E -->|Imprimir| P[Enviar para impressora]
  E -->|Sair| Fim(((⊗)))
  X --> Fim
  P --> Fim`,
  },
  {
    id: "HU06",
    icon: Search,
    titulo: "Consulta de Ocorrências por Bem Móvel",
    ator: "Usuário ou Gestor",
    chart: `flowchart TD
  S((●)) --> A[Acessar Histórico de Ocorrências]
  A --> B[Digitar número do bem móvel]
  B --> C[Buscar no banco]
  C --> D{Encontrou ocorrências?}
  D -->|Não| N[Exibir mensagem vazia]
  D -->|Sim| L[Exibir lista: tipo, descrição, data]
  L --> O{Ordenar por data?}
  O -->|Sim| L2[Reordenar lista]
  O -->|Não| Fim(((⊗)))
  L2 --> Fim
  N --> Fim`,
  },
  {
    id: "HU07",
    icon: Filter,
    titulo: "Consulta de Ocorrências por Tipo de Dano",
    ator: "Usuário ou Gestor",
    chart: `flowchart TD
  S((●)) --> A[Acessar Ocorrências por Tipo de Dano]
  A --> B[Selecionar tipo de dano]
  B --> F{Filtrar por setor?}
  F -->|Sim| F1[Selecionar setor]
  F -->|Não| C[Buscar dados]
  F1 --> C
  C --> D[Exibir: data, setor, bem afetado]
  D --> Fim(((⊗)))`,
  },
];

const EstudoCasoSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
              Estudo de Caso
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sistema de Gestão de Patrimônio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sete histórias de usuário (HU) modeladas como diagramas de atividades —
              do cadastro básico ao relatório gerencial, com decisões, validações e fluxos paralelos.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {hus.map((hu, i) => (
            <ScrollReveal key={hu.id} animation="fadeUp" delay={i * 0.05}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <hu.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs border-orange-400/40 text-orange-400">
                            {hu.id}
                          </Badge>
                          <h3 className="text-lg md:text-xl font-bold text-foreground">{hu.titulo}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="w-3 h-3" /> Ator: <span className="text-foreground font-medium">{hu.ator}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={hu.chart} />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
