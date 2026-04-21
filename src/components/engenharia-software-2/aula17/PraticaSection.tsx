import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Lightbulb, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const locacaoDiagram = `classDiagram
  direction TB
  class Veiculo {
    -placa: String
    -marca: String
    -modelo: String
    -valorKmRodado: Double
    +calcularValor(km) Double
  }
  class Carro {
    -numPortas: Integer
  }
  class Moto {
    -cilindradas: Integer
  }
  class Cliente {
    -nome: String
    -cpf: String
    -telefone: String
    -cnh: String
    +alugar() void
  }
  class Funcionario {
    -matricula: String
    -nome: String
    -cargo: String
    +registrarLocacao() void
  }
  class Locacao {
    -dataRetirada: Date
    -dataDevolucao: Date
    -kmRodados: Integer
    +calcularTotal() Double
    +finalizar() void
  }
  Veiculo <|-- Carro
  Veiculo <|-- Moto
  Cliente "1" -- "0..*" Locacao : realiza
  Locacao "0..*" -- "1" Veiculo : envolve
  Funcionario "1" -- "0..*" Locacao : registra
`;

const passos = [
  {
    numero: "1",
    titulo: "Identificar Classes",
    desc: "Procure substantivos no enunciado. Cada substantivo relevante = candidato a classe.",
    exemplo: "Sistema de provas → Teste, Disciplina, Questão, Aluno",
    cor: "from-purple-500 to-purple-600",
  },
  {
    numero: "2",
    titulo: "Identificar Atributos",
    desc: "Para cada classe, liste suas características (dados que ela armazena).",
    exemplo: "Teste → dataGeracao, duracao | Disciplina → nome, codigo",
    cor: "from-pink-500 to-pink-600",
  },
  {
    numero: "3",
    titulo: "Identificar Operações",
    desc: "Liste o que cada classe faz (verbos no infinitivo).",
    exemplo: "Teste → gerarTeste(), corrigir() | Aluno → realizarTeste()",
    cor: "from-cyan-500 to-cyan-600",
  },
  {
    numero: "4",
    titulo: "Identificar Relacionamentos",
    desc: "Conecte as classes. Pergunte: como elas interagem? Há herança? Composição?",
    exemplo: "Teste contém Questões | Disciplina possui Testes",
    cor: "from-blue-500 to-blue-600",
  },
];

const dicasRelacionamentos = [
  { pergunta: "É um tipo de?", resposta: "Generalização (▷)", ex: "Gerente é um tipo de Funcionário" },
  { pergunta: "Tem um / parte de?", resposta: "Agregação (◇) ou Composição (◆)", ex: "Carro tem Motor" },
  { pergunta: "Usa temporariamente?", resposta: "Dependência (- - ▶)", ex: "Relatório usa Impressora" },
  { pergunta: "Conhece / referencia?", resposta: "Associação (──)", ex: "Cliente faz Pedido" },
];

const PraticaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              🛠️ Processo de <span className="text-purple-400">Elaboração</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Como construir um diagrama de classes na prática, passo a passo.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {passos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/50 border-border h-full hover:border-purple-500/40 transition-colors">
                <CardContent className="p-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.cor} flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {p.numero}
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2">{p.titulo}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <div className="bg-background/50 rounded-md p-2 border-l-2 border-purple-500/40">
                    <p className="text-xs text-muted-foreground italic">{p.exemplo}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Como identificar relacionamentos */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 mb-16">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-7 h-7 text-yellow-400" />
                <h3 className="text-2xl font-bold text-foreground">
                  Como identificar Relacionamentos? Pergunte-se:
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {dicasRelacionamentos.map((d, i) => (
                  <div key={i} className="p-4 rounded-lg bg-background/50 border border-border">
                    <p className="text-sm text-purple-400 font-bold mb-1">❓ {d.pergunta}</p>
                    <p className="text-foreground font-medium mb-2">→ {d.resposta}</p>
                    <p className="text-xs text-muted-foreground italic">Ex: {d.ex}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Mini-cenário prático */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🎯 Mini-cenário: Sistema de Locação de Veículos
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Enunciado
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uma locadora deseja informatizar suas operações. <strong>Clientes</strong> alugam <strong>veículos</strong> registrando uma <strong>locação</strong>.
                  Cada locação tem data de retirada, data de devolução prevista e valor por km rodado.
                  Veículos podem ser <strong>carros</strong> ou <strong>motos</strong>, cada um com características próprias.
                  Funcionários atendem os clientes e registram as locações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-pink-400 mb-3">📋 Classes Identificadas</h4>
                <div className="space-y-2 text-sm">
                  {[
                    { c: "Cliente", a: "nome, cpf, telefone, cnh" },
                    { c: "Veículo", a: "placa, marca, modelo, valorKmRodado" },
                    { c: "Carro", a: "(herda de Veículo) + numPortas" },
                    { c: "Moto", a: "(herda de Veículo) + cilindradas" },
                    { c: "Locação", a: "dataRetirada, dataDevolucao, kmRodados" },
                    { c: "Funcionário", a: "matricula, nome, cargo" },
                  ].map((cl, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded bg-background/40">
                      <span className="font-mono text-purple-400 font-bold min-w-[80px]">{cl.c}</span>
                      <span className="text-muted-foreground text-xs">{cl.a}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border mb-16">
            <CardContent className="p-6">
              <h4 className="font-bold text-cyan-400 mb-4">🔗 Relacionamentos do Cenário</h4>
              <div className="space-y-3">
                {[
                  { rel: "Cliente ──── Locação", mult: "1 — 0..*", tipo: "Associação", explicacao: "Um cliente pode ter várias locações." },
                  { rel: "Locação ──── Veículo", mult: "0..* — 1", tipo: "Associação", explicacao: "Cada locação envolve um veículo." },
                  { rel: "Funcionário ──── Locação", mult: "1 — 0..*", tipo: "Associação", explicacao: "Um funcionário registra várias locações." },
                  { rel: "Carro ────▷ Veículo", mult: "—", tipo: "Generalização", explicacao: "Carro É UM tipo de Veículo." },
                  { rel: "Moto ────▷ Veículo", mult: "—", tipo: "Generalização", explicacao: "Moto É UM tipo de Veículo." },
                ].map((r, i) => (
                  <div key={i} className="grid md:grid-cols-4 gap-3 items-center p-3 rounded-lg bg-background/40 border border-border">
                    <p className="font-mono text-sm text-foreground">{r.rel}</p>
                    <p className="text-xs text-muted-foreground"><strong>Mult:</strong> {r.mult}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 w-fit">{r.tipo}</span>
                    <p className="text-xs text-muted-foreground italic">{r.explicacao}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Atividade */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                ✏️ Atividade em Plenário
              </h3>
              <p className="text-muted-foreground mb-6">
                Em duplas, modelem o <strong>diagrama de classes</strong> do projeto integrador.
                Sigam o processo dos 4 passos e tragam um esboço (papel ou ferramenta digital) para a próxima aula.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Identifiquem ao menos 5 classes do domínio do seu projeto",
                  "Para cada classe, listem 3+ atributos com tipo (String, Integer, Date, etc.)",
                  "Para cada classe, listem 2+ operações com visibilidade",
                  "Modelem ao menos 1 generalização e 1 composição/agregação",
                  "Indiquem multiplicidade em todas as associações",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <p className="text-sm text-foreground">
                  <strong className="text-purple-400">💡 Ferramentas sugeridas:</strong> draw.io, Lucidchart,
                  Astah Community, StarUML, ou mesmo papel + foto.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PraticaSection;
