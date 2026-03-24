import { motion } from "framer-motion";
import { PenTool, Users, Clock, CheckSquare } from "lucide-react";
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

        {/* Checklist de entrega */}
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
