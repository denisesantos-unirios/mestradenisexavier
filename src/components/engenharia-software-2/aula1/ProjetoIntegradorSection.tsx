import { motion } from "framer-motion";
import { 
  Rocket, FileText, CheckCircle2, Code2, 
  Layers, Presentation, ArrowRight 
} from "lucide-react";

const fases = [
  {
    numero: 1,
    titulo: "Mini-Mundo e Elicitação",
    descricao: "Levantar requisitos iniciais para o projeto através de técnicas de elicitação",
    entrega: "Documento Mini-Mundo",
    etapa: 1
  },
  {
    numero: 2,
    titulo: "Requisitos RF e RNF",
    descricao: "Documentar requisitos funcionais e não-funcionais do sistema",
    entrega: "Documento de Requisitos",
    etapa: 1
  },
  {
    numero: 3,
    titulo: "Casos de Uso",
    descricao: "Identificar e modelar casos de uso com diagrama UML",
    entrega: "Diagrama de Casos de Uso",
    etapa: 1
  },
  {
    numero: 4,
    titulo: "Diagramas Estruturais",
    descricao: "Modelar a estrutura estática do sistema com diagramas de classe e objeto",
    entrega: "Diagramas de Classe e Objeto",
    etapa: 2
  },
  {
    numero: 5,
    titulo: "Diagramas Comportamentais",
    descricao: "Modelar o comportamento dinâmico com sequência, atividade e estado",
    entrega: "Diagramas Comportamentais",
    etapa: 2
  },
  {
    numero: 6,
    titulo: "Entrega Final",
    descricao: "Documentação completa do projeto e apresentação oral",
    entrega: "Documento Final + Apresentação",
    etapa: 2
  }
];

const ProjetoIntegradorSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 mb-4">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Projeto Integrador (PBL)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seu projeto ao longo do semestre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Você desenvolverá um sistema completo em equipe, aplicando todos os conceitos 
            de Engenharia de Software vistos na disciplina.
          </p>
        </motion.div>

        {/* Timeline das Fases */}
        <div className="relative">
          {/* Linha conectora */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-violet-500 hidden md:block" />

          <div className="space-y-6">
            {fases.map((fase, index) => (
              <motion.div
                key={fase.numero}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Número da fase */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    fase.etapa === 1 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                      : 'bg-gradient-to-br from-pink-500 to-violet-500'
                  }`}>
                    <span className="text-2xl font-bold text-white">{fase.numero}</span>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 glass-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          fase.etapa === 1 
                            ? 'bg-purple-500/20 text-purple-300' 
                            : 'bg-pink-500/20 text-pink-300'
                        }`}>
                          Etapa {fase.etapa}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-2">
                          Fase {fase.numero}: {fase.titulo}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>{fase.entrega}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{fase.descricao}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Próximos Passos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Próximos Passos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm">Formação das equipes</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500/20 text-pink-300">
              <Layers className="w-4 h-4" />
              <span className="text-sm">Escolha do tema do projeto</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500/20 text-violet-300">
              <Code2 className="w-4 h-4" />
              <span className="text-sm">Início da Fase 1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjetoIntegradorSection;
