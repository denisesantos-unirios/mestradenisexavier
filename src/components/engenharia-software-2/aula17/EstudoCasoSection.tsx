import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GitBranch, Layers, Link2, Boxes, Zap, Code2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const sistemaAcademicoDiagram = `classDiagram
  direction TB

  class Pessoa {
    <<abstract>>
    #nome: String
    #cpf: String
    #email: String
    +autenticar() Boolean
  }

  class Aluno {
    -matricula: String
    -coeficiente: Double
    +matricularDisciplina() void
  }

  class Professor {
    -siape: String
    -titulacao: String
    +lancarNota() void
  }

  class Autenticavel {
    <<interface>>
    +login(senha) Boolean
    +logout() void
  }

  class Universidade {
    -nome: String
    -cnpj: String
  }

  class Departamento {
    -nome: String
    -sigla: String
  }

  class Disciplina {
    -codigo: String
    -nome: String
    -cargaHoraria: Integer
  }

  class Turma {
    -semestre: String
    -vagas: Integer
    +abrirMatricula() void
  }

  class Endereco {
    -rua: String
    -numero: Integer
    -cidade: String
  }

  class HistoricoEscolar {
    -dataEmissao: Date
    +gerarPDF() void
  }

  class SistemaPagamento {
    <<external>>
    +cobrarMensalidade() Boolean
  }

  class RelatorioFinanceiro {
    +gerar() void
  }

  Pessoa <|-- Aluno : herda
  Pessoa <|-- Professor : herda
  Pessoa ..|> Autenticavel : implementa

  Universidade "1" o-- "1..*" Departamento : agrega
  Departamento "1" *-- "1..*" Disciplina : compõe
  Departamento "1" --> "1..*" Professor : possui

  Disciplina "1" -- "0..*" Turma : oferta
  Turma "1" -- "0..*" Aluno : matricula
  Turma "0..*" -- "1" Professor : ministra

  Aluno "1" *-- "1" HistoricoEscolar : possui
  Pessoa "1" --> "1" Endereco : reside

  RelatorioFinanceiro ..> SistemaPagamento : depende
  RelatorioFinanceiro ..> Aluno : usa
`;

const relacionamentos = [
  {
    icon: GitBranch,
    nome: "Generalização (Herança)",
    simbolo: "──▷",
    cor: "purple",
    exemplo: "Aluno e Professor herdam de Pessoa",
    descricao: "Relação 'É UM'. Subclasse herda atributos e operações da superclasse.",
    sintaxe: "Pessoa <|-- Aluno",
  },
  {
    icon: Code2,
    nome: "Realização (Interface)",
    simbolo: "- -▷",
    cor: "cyan",
    exemplo: "Pessoa implementa Autenticável",
    descricao: "Classe concreta implementa o contrato definido por uma interface.",
    sintaxe: "Pessoa ..|> Autenticavel",
  },
  {
    icon: Link2,
    nome: "Associação",
    simbolo: "────",
    cor: "blue",
    exemplo: "Turma matricula Aluno",
    descricao: "Relação estrutural entre classes. Objetos conhecem um ao outro.",
    sintaxe: "Turma -- Aluno",
  },
  {
    icon: Boxes,
    nome: "Agregação",
    simbolo: "◇──",
    cor: "orange",
    exemplo: "Universidade agrega Departamentos",
    descricao: "Relação 'TEM UM' fraca. As partes existem independentemente do todo.",
    sintaxe: "Universidade o-- Departamento",
  },
  {
    icon: Layers,
    nome: "Composição",
    simbolo: "◆──",
    cor: "pink",
    exemplo: "Departamento é composto por Disciplinas; Aluno possui Histórico",
    descricao: "Relação 'TEM UM' forte. As partes não existem sem o todo (ciclo de vida atrelado).",
    sintaxe: "Departamento *-- Disciplina",
  },
  {
    icon: Zap,
    nome: "Dependência",
    simbolo: "- - ▶",
    cor: "yellow",
    exemplo: "RelatórioFinanceiro depende de SistemaPagamento",
    descricao: "Uso temporário. Mudanças em uma classe afetam a outra (parâmetro, instância local).",
    sintaxe: "RelatorioFinanceiro ..> SistemaPagamento",
  },
];

const corMap: Record<string, string> = {
  purple: "text-purple-400 border-purple-500/40 bg-purple-500/10",
  cyan: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
  blue: "text-blue-400 border-blue-500/40 bg-blue-500/10",
  orange: "text-orange-400 border-orange-500/40 bg-orange-500/10",
  pink: "text-pink-400 border-pink-500/40 bg-pink-500/10",
  yellow: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
};

const EstudoCasoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              📚 Estudo de Caso: <span className="text-purple-400">Sistema Acadêmico</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modelagem completa de um SIGAA simplificado, demonstrando <strong className="text-pink-400">todos os tipos de relacionamentos UML</strong> em um único diagrama.
            </p>
          </div>
        </ScrollReveal>

        {/* Enunciado */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 mb-10">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-400" /> Enunciado do Domínio
              </h3>
              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Uma <strong className="text-foreground">Universidade</strong> é organizada em vários <strong className="text-foreground">Departamentos</strong> (DCC, DAU, DLE...). Se a universidade fechar, os departamentos podem ser realocados — por isso a relação é de <strong className="text-orange-400">agregação</strong>.
                </p>
                <p>
                  Cada Departamento contém <strong className="text-foreground">Disciplinas</strong> próprias. Se o departamento for extinto, suas disciplinas deixam de existir — relação de <strong className="text-pink-400">composição</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Pessoas</strong> no sistema podem ser <strong className="text-foreground">Alunos</strong> ou <strong className="text-foreground">Professores</strong> (<strong className="text-purple-400">generalização</strong>). Toda pessoa precisa se autenticar, implementando a interface <code className="text-cyan-400">Autenticavel</code> (<strong className="text-cyan-400">realização</strong>).
                </p>
                <p>
                  Cada Disciplina pode ofertar várias <strong className="text-foreground">Turmas</strong> por semestre. Uma Turma <strong className="text-blue-400">associa</strong> alunos matriculados e o professor responsável.
                </p>
                <p>
                  Todo Aluno possui um <strong className="text-foreground">Histórico Escolar</strong> único — quando o aluno é removido, seu histórico é destruído junto (<strong className="text-pink-400">composição</strong>).
                </p>
                <p>
                  Para emitir relatórios financeiros, o sistema <strong className="text-yellow-400">depende</strong> temporariamente de um <strong className="text-foreground">SistemaPagamento</strong> externo (gateway), usado apenas no momento da cobrança.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Diagrama Visual */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Card className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border-purple-500/30 mb-10">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                🗺️ Diagrama de Classes Completo
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Observe como cada tipo de relacionamento aparece com sua notação característica.
              </p>
              <div className="bg-background/40 rounded-lg p-2 md:p-4 border border-purple-500/20">
                <MermaidDiagram chart={sistemaAcademicoDiagram} id="sistema-academico-diagram" />
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Legenda dos Relacionamentos */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🔍 Os 6 Relacionamentos no Diagrama
          </h3>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {relacionamentos.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className={`bg-card/50 border ${corMap[r.cor].split(" ")[1]} h-full hover:scale-[1.02] transition-transform`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${corMap[r.cor].split(" ")[2]}`}>
                          <Icon className={`w-5 h-5 ${corMap[r.cor].split(" ")[0]}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-bold text-foreground">{r.nome}</h4>
                            <span className={`font-mono text-lg font-bold ${corMap[r.cor].split(" ")[0]}`}>
                              {r.simbolo}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">{r.descricao}</p>
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-md p-2 border-l-2 border-purple-500/40 mb-2">
                        <p className="text-xs text-muted-foreground">
                          <strong className="text-foreground">No diagrama:</strong> {r.exemplo}
                        </p>
                      </div>
                      <div className="bg-background/70 rounded-md p-2 font-mono text-xs text-cyan-400">
                        {r.sintaxe}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tabela Resumo: Composição vs Agregação */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <Card className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 border-pink-500/30">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                ⚖️ Composição vs Agregação — A dúvida mais comum
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-muted-foreground">Critério</th>
                      <th className="text-left p-3 text-orange-400">Agregação ◇</th>
                      <th className="text-left p-3 text-pink-400">Composição ◆</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["Ciclo de vida", "Independente", "Atrelado ao todo"],
                      ["Se o todo for destruído", "Partes sobrevivem", "Partes são destruídas"],
                      ["Compartilhamento", "Pode ser compartilhado", "Exclusivo (1 dono)"],
                      ["Exemplo no caso", "Universidade ◇ Departamento", "Departamento ◆ Disciplina"],
                      ["Analogia", "Time ◇ Jogador (jogador troca de time)", "Casa ◆ Cômodo (cômodo morre com a casa)"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/40">
                        <td className="p-3 font-semibold text-foreground">{row[0]}</td>
                        <td className="p-3">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
