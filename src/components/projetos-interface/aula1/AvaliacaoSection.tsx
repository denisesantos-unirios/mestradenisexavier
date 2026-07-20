import { motion } from "framer-motion";
import { 
  Trophy, 
  FileCheck, 
  Presentation, 
  PenLine,
  Calculator,
  Shield,
  ChevronRight,
  BookOpen
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const avaliacoesEtapa1 = [
  {
    icon: FileCheck,
    title: "Atividades Práticas no AVA",
    pontos: "10,0 pontos",
    descricao: "Exercícios, fóruns e tarefas ao longo do semestre",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Presentation,
    title: "Projeto de Usabilidade",
    pontos: "10,0 pontos",
    descricao: "Fase 1: Requisitos | Fase 2: Protótipo + DECIDE",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: PenLine,
    title: "Avaliação Institucional",
    pontos: "10,0 pontos",
    descricao: "Prova escrita ao final da etapa",
    color: "from-orange-500 to-amber-500"
  }
];
const nota2 = {
  icon: BookOpen,
  title: "Resenha Crítica",
  pontos: "10,0 pontos",
  descricao: "Livro: \"Não me faça pensar\" de Steve Krug",
  prazo: "21/09/2026",
  color: "from-rose-500 to-pink-500"
};

const avaliacoesEtapa2 = [
  {
    icon: Presentation,
    title: "Projeto (Fase 4)",
    pontos: "2,5 pontos",
    descricao: "Planejamento final com DECIDE",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Trophy,
    title: "Experimento (Fase 5)",
    pontos: "7,5 pontos",
    descricao: "Teste e validação com usuários reais",
    color: "from-violet-500 to-purple-500"
  }
];

const projetoFases = [
  {
    fase: "Fase 1",
    titulo: "Requisitos",
    pontosTotal: "1,2 pts",
    data: "17/08",
    items: [
      { desc: "1.1 Objetivo geral do sistema", pts: "0,2" },
      { desc: "1.2 Nível de habilidade dos usuários", pts: "0,2" },
      { desc: "1.3 Tarefas que os usuários irão realizar", pts: "0,2" },
      { desc: "1.4 Perfis (com Persona - 3)", pts: "0,2" },
      { desc: "1.5 Equipe de desenvolvimento", pts: "0,2" },
      { desc: "1.6 Ações / Responsabilidades / Cronograma", pts: "0,2" }
    ]
  },
  {
    fase: "Fase 2",
    titulo: "Planejamento Inicial",
    pontosTotal: "2,2 pts",
    data: "24/08",
    items: [
      { desc: "2.1 Fluxo principal: Diagrama de Atividades (usuário e admin)", pts: "0,7" },
      { desc: "2.2 Interface atual", pts: "0,5" },
      { desc: "2.3 Protótipo (Figma)", pts: "1,0" }
    ]
  },
  {
    fase: "Fase 3",
    titulo: "Desenvolvimento - Heurísticas",
    pontosTotal: "6,6 pts",
    data: "14/09",
    items: [
      { desc: "3.1.1 Definir modos de interação", pts: "0,6" },
      { desc: "3.1.2 Interação flexível (comandos de teclado)", pts: "0,6" },
      { desc: "3.1.3 Permitir interromper e desfazer ações", pts: "0,6" },
      { desc: "3.2.1 Definir ações intuitivas", pts: "0,6" },
      { desc: "3.2.2 Layout com metáfora do mundo real", pts: "0,6" },
      { desc: "3.2.3 Informações reveladas progressivamente", pts: "0,6" },
      { desc: "3.3.1 Informações organizadas pelas regras do projeto", pts: "0,6" },
      { desc: "3.3.2 Mecanismos de entradas restritas", pts: "0,6" },
      { desc: "3.3.3 Mecanismos de navegação", pts: "0,6" },
      { desc: "3.3.4 Título, janelas, ícones, cores", pts: "0,6" },
      { desc: "3.3.5 Saber onde está e para onde está indo", pts: "0,6" }
    ]
  }
];

const projetoFasesEtapa2 = [
  {
    fase: "Fase 4",
    titulo: "Planejamento Final - DECIDE",
    pontosTotal: "2,5 pts",
    data: "26/10",
    items: [
      { desc: "2.4 Preparação do Teste com DECIDE", pts: "0,5" },
      { desc: "2.4.1 Objetivo", pts: "0,5" },
      { desc: "2.4.2 Questionamentos", pts: "0,5" },
      { desc: "2.4.3 Tarefas", pts: "0,5" },
      { desc: "2.4.4 Medição", pts: "0,5" }
    ]
  },
  {
    fase: "Fase 5",
    titulo: "Teste e Validação da Interface",
    pontosTotal: "7,5 pts",
    data: "16/11",
    items: [
      { desc: "4.1 Recursos: Filmagem", pts: "1,0" },
      { desc: "4.2 Coleta de Dados", pts: "1,0" },
      { desc: "4.3 Survey", pts: "1,0" },
      { desc: "4.4 Análise", pts: "1,0" },
      { desc: "4.5 Resultados", pts: "1,5" },
      { desc: "4.6 Apresentação", pts: "2,0" }
    ]
  }
];

const AvaliacaoSection = () => {
  return (
    <section id="avaliacao" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Shield className="w-4 h-4" />
              <span>UX: Transparência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistema de Avaliação</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Apresentar isso na primeira aula aumenta a segurança do aluno e reduz dúvidas recorrentes
            </p>
          </div>
        </ScrollReveal>

        {/* Etapa 1 */}
        <ScrollReveal>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sm mb-4">
              <span className="font-bold text-blue-400">1ª Etapa</span>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {avaliacoesEtapa1.map((aval, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${aval.color}`} />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${aval.color} flex items-center justify-center`}>
                    <aval.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{aval.pontos}</div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{aval.title}</h3>
                <p className="text-sm text-muted-foreground">{aval.descricao}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Nota 2 - Resenha Crítica */}
        <ScrollReveal>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-sm mb-4">
              <span className="font-bold text-rose-400">Nota 2</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            className="glass-card p-6 max-w-lg mx-auto mb-12 relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${nota2.color}`} />
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${nota2.color} flex items-center justify-center`}>
                <nota2.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{nota2.pontos}</div>
            </div>
            
            <h3 className="font-bold text-lg mb-2">{nota2.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{nota2.descricao}</p>
            
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
              <p className="text-sm font-medium text-rose-400">
                📅 Prazo de Entrega (AVA): {nota2.prazo}
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Etapa 2 */}
        <ScrollReveal>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-sm mb-4">
              <span className="font-bold text-emerald-400">2ª Etapa</span>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {avaliacoesEtapa2.map((aval, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${aval.color}`} />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${aval.color} flex items-center justify-center`}>
                    <aval.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{aval.pontos}</div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{aval.title}</h3>
                <p className="text-sm text-muted-foreground">{aval.descricao}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fórmula */}
        <ScrollReveal>
          <div className="glass-card p-6 mb-16 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Calculator className="w-8 h-8 text-primary" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Média Final</p>
                <p className="text-xl font-bold">Soma das Etapas ÷ 3</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projeto de Usabilidade - Etapa 1 */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-primary">A Alma da Disciplina</span>
            </div>
            <h3 className="text-3xl font-bold">O Projeto de Usabilidade</h3>
            <p className="text-muted-foreground mt-2">Detalhamento das fases e critérios de avaliação</p>
          </div>
        </ScrollReveal>

        {/* Fases da Etapa 1 */}
        <ScrollReveal>
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sm">
              <span className="font-bold text-blue-400">1ª Etapa - 10 pontos</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projetoFases.map((fase, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm">
                    <span className="font-bold">{fase.fase}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{fase.pontosTotal}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{fase.titulo}</h4>
                <div className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  📅 Entrega: <span className="font-medium text-foreground">{fase.data}</span>
                </div>
                
                <ul className="space-y-2">
                  {fase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="flex-1">{item.desc}</span>
                      <span className="text-xs font-bold text-primary shrink-0">{item.pts}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fases da Etapa 2 */}
        <ScrollReveal>
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-sm">
              <span className="font-bold text-emerald-400">2ª Etapa - 10 pontos</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {projetoFasesEtapa2.map((fase, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-sm">
                    <span className="font-bold text-emerald-400">{fase.fase}</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">{fase.pontosTotal}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{fase.titulo}</h4>
                <div className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  📅 Entrega: <span className="font-medium text-foreground">{fase.data}</span>
                </div>
                
                <ul className="space-y-2">
                  {fase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="flex-1">{item.desc}</span>
                      <span className="text-xs font-bold text-emerald-400 shrink-0">{item.pts}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>



        {/* Narrativa UX */}
        <ScrollReveal>
          <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-muted-foreground">
              "Imagine que você cria um app e precisa saber se o usuário consegue usar. 
              <span className="text-foreground font-medium"> Essa disciplina ensina exatamente como descobrir isso.</span>"
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#cronograma"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Ver Cronograma</span>
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AvaliacaoSection;
