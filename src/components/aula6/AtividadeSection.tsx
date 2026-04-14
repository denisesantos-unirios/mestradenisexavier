import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Users, Clock, CheckSquare, Eye, EyeOff } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const cenarios = [
  {
    titulo: "🏥 Sistema Clínica Médica",
    descricao: "Uma clínica precisa de um sistema para gerenciar pacientes, médicos, consultas e receitas. Cada paciente pode ter múltiplas consultas com diferentes médicos. Cada consulta gera uma ou mais receitas.",
    dicas: ["Entidades: Paciente, Médico, Consulta, Receita", "Pense nas cardinalidades: um médico atende N pacientes", "Consulta é uma entidade associativa?"],
  },
  {
    titulo: "🎓 Sistema Acadêmico",
    descricao: "Uma faculdade precisa controlar alunos, professores, disciplinas e matrículas. Cada aluno pode cursar várias disciplinas. Cada disciplina é ministrada por um professor. A matrícula registra o semestre e a nota.",
    dicas: ["Entidades: Aluno, Professor, Disciplina, Matrícula", "Matrícula é forte ou fraca?", "Identifique os atributos de cada entidade"],
  },
  {
    titulo: "🚗 Sistema Locadora de Veículos",
    descricao: "Uma locadora precisa gerenciar seus veículos, clientes e aluguéis. Cada cliente pode alugar vários veículos. Cada aluguel registra data de retirada, devolução e valor. Os veículos possuem categorias.",
    dicas: ["Entidades: Cliente, Veículo, Aluguel, Categoria", "Qual é a cardinalidade entre Veículo e Categoria?", "Aluguel conecta Cliente a Veículo"],
  },
];

const AtividadeSection = () => {
  const [showResultado, setShowResultado] = useState(false);

  return (
    <section id="atividade" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 mb-6">
              <PenTool className="w-4 h-4" />
              <span className="text-sm font-medium">Atividade Prática</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mãos à Obra!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aplique os conceitos aprendidos construindo o MER para um dos cenários abaixo.
            </p>
          </div>
        </ScrollReveal>

        {/* Instruções */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="bg-card/90 border border-border rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">📋 Instruções</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">Equipes</p>
                  <p className="text-xs text-muted-foreground">Grupos de 3-4 alunos</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">Tempo</p>
                  <p className="text-xs text-muted-foreground">30 minutos para modelagem</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                <CheckSquare className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">Entrega</p>
                  <p className="text-xs text-muted-foreground">DER completo com atributos</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cenários */}
        <div className="space-y-6 mb-12">
          {cenarios.map((cenario, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={0.3 + i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-card/90 border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{cenario.titulo}</h3>
                <p className="text-muted-foreground mb-4">{cenario.descricao}</p>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">💡 Dicas</p>
                  <ul className="space-y-1">
                    {cenario.dicas.map((dica, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {dica}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Resultado: DER Locadora de Veículos */}
        <ScrollReveal animation="fadeUp" delay={0.55}>
          <div className="mb-12">
            <motion.button
              onClick={() => setShowResultado(!showResultado)}
              whileHover={{ scale: 1.01 }}
              className="w-full flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {showResultado ? <EyeOff className="w-5 h-5 text-amber-400" /> : <Eye className="w-5 h-5 text-amber-400" />}
                <span className="text-lg font-bold text-foreground">
                  🚗 Resultado: DER da Locadora de Veículos
                </span>
              </div>
              <span className="text-sm text-amber-400 font-medium">
                {showResultado ? "Ocultar" : "Clique para ver"}
              </span>
            </motion.button>

            <AnimatePresence>
              {showResultado && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 bg-card/90 border border-border rounded-2xl p-8">
                    {/* Entidades identificadas */}
                    <h4 className="text-xl font-bold text-foreground mb-4">Entidades e Atributos</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {[
                        { nome: "CLIENTE", attrs: ["ID_Cliente (PK)", "Nome", "CPF", "Telefone", "CNH", "Endereço"] },
                        { nome: "VEÍCULO", attrs: ["Placa (PK)", "Modelo", "Ano", "Cor", "Km", "Status"] },
                        { nome: "CATEGORIA", attrs: ["ID_Cat (PK)", "Nome", "Diária", "Descrição"] },
                        { nome: "ALUGUEL", attrs: ["ID_Aluguel (PK)", "Data_Retirada", "Data_Devolução", "Valor_Total", "ID_Cliente (FK)", "Placa (FK)"] },
                      ].map((ent) => (
                        <div key={ent.nome} className="p-4 rounded-xl bg-secondary/50 border border-border">
                          <h5 className="font-bold text-foreground mb-2 text-sm">{ent.nome}</h5>
                          <div className="space-y-1">
                            {ent.attrs.map((a, i) => (
                              <p key={i} className={`text-xs ${a.includes("PK") ? "text-amber-400 font-medium" : a.includes("FK") ? "text-teal-400 font-medium" : "text-muted-foreground"}`}>
                                • {a}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cardinalidades */}
                    <h4 className="text-lg font-bold text-foreground mb-3">Cardinalidades</h4>
                    <div className="space-y-2 mb-8">
                      {[
                        { de: "CLIENTE", rel: "realiza", para: "ALUGUEL", card: "1:N", nota: "Um cliente pode fazer vários aluguéis" },
                        { de: "VEÍCULO", rel: "participa de", para: "ALUGUEL", card: "1:N", nota: "Um veículo pode ser alugado várias vezes (em datas diferentes)" },
                        { de: "CATEGORIA", rel: "classifica", para: "VEÍCULO", card: "1:N", nota: "Uma categoria agrupa vários veículos" },
                      ].map((r, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 rounded-lg bg-background/50">
                          <span className="font-bold text-sm text-teal-400">{r.de}</span>
                          <span className="text-xs text-muted-foreground">—{r.rel}→</span>
                          <span className="font-bold text-sm text-cyan-400">{r.para}</span>
                          <span className="font-mono text-sm text-primary font-bold">({r.card})</span>
                          <span className="text-xs text-muted-foreground ml-auto hidden sm:block">{r.nota}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-6">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-amber-400">Observação:</strong> Neste cenário, o relacionamento entre Cliente e Veículo é N:N (um cliente aluga vários veículos, um veículo é alugado por vários clientes). 
                        A entidade <strong className="text-foreground">ALUGUEL</strong> é justamente a <strong className="text-amber-400">entidade associativa</strong> que resolve esse N:N, contendo as FKs de ambas as entidades.
                      </p>
                    </div>

                    {/* DER Visual */}
                    <h4 className="text-lg font-bold text-foreground mb-3">Diagrama Entidade-Relacionamento</h4>
                    <div className="p-4 rounded-xl bg-background/50 border border-border overflow-x-auto">
                      <svg viewBox="0 0 750 300" className="w-full max-w-3xl mx-auto" style={{ minWidth: 500 }}>
                        {/* CATEGORIA */}
                        <rect x="10" y="110" width="120" height="45" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                        <text x="70" y="137" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">CATEGORIA</text>
                        <ellipse cx="30" cy="55" rx="30" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="30" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">ID_Cat</text>
                        <line x1="35" y1="69" x2="50" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                        <ellipse cx="100" cy="55" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="100" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Nome</text>
                        <line x1="98" y1="69" x2="90" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                        <ellipse cx="55" cy="200" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="55" y="204" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Diária</text>
                        <line x1="60" y1="186" x2="65" y2="155" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                        {/* Linha CATEGORIA → VEÍCULO (1:N) */}
                        <line x1="130" y1="132" x2="220" y2="132" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                        <text x="148" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>
                        <text x="200" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>

                        {/* VEÍCULO */}
                        <rect x="220" y="110" width="110" height="45" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                        <text x="275" y="137" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">VEÍCULO</text>
                        <ellipse cx="230" cy="55" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="230" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">Placa</text>
                        <line x1="235" y1="69" x2="250" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                        <ellipse cx="300" cy="55" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="300" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Modelo</text>
                        <line x1="298" y1="69" x2="290" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                        {/* Linha VEÍCULO → ALUGUEL (1:N) */}
                        <line x1="330" y1="132" x2="410" y2="132" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                        <text x="348" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>
                        <text x="395" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>

                        {/* ALUGUEL (entidade associativa) */}
                        <rect x="410" y="100" width="130" height="65" rx="5" fill="none" stroke="hsl(38,92%,50%)" strokeWidth="2.5" />
                        <text x="475" y="125" textAnchor="middle" fill="hsl(38,92%,50%)" fontSize="13" fontWeight="bold">ALUGUEL</text>
                        <text x="475" y="142" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">(Ent. Associativa)</text>
                        <text x="475" y="156" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Data_Ret, Data_Dev, Valor</text>

                        {/* Linha ALUGUEL → CLIENTE (N:1) */}
                        <line x1="540" y1="132" x2="610" y2="132" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                        <text x="555" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>
                        <text x="598" y="125" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>

                        {/* CLIENTE */}
                        <rect x="610" y="110" width="110" height="45" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                        <text x="665" y="137" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">CLIENTE</text>
                        <ellipse cx="620" cy="55" rx="30" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="620" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">ID_Cli</text>
                        <line x1="625" y1="69" x2="640" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                        <ellipse cx="695" cy="55" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="695" y="59" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Nome</text>
                        <line x1="693" y1="69" x2="685" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                        <ellipse cx="665" cy="200" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                        <text x="665" y="204" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">CNH</text>
                        <line x1="665" y1="186" x2="665" y2="155" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      ALUGUEL é a <strong className="text-amber-400">entidade associativa</strong> que resolve o N:N entre CLIENTE e VEÍCULO. CATEGORIA se relaciona 1:N com VEÍCULO.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.6}>
          <div className="bg-gradient-to-r from-teal-500/10 via-primary/10 to-emerald-500/10 border border-teal-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">✅ Checklist de Entrega</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                "Entidades identificadas",
                "Atributos com PKs",
                "Cardinalidades definidas",
                "DER desenhado",
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 rounded-xl bg-card/50 border border-border">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtividadeSection;
