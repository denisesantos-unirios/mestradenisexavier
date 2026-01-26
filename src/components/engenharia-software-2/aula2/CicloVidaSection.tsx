import { motion } from "framer-motion";
import { 
  Settings, ArrowRight, FileSearch, Code2, 
  TestTube, Rocket, Wrench, RotateCcw 
} from "lucide-react";

const fases = [
  {
    icon: FileSearch,
    titulo: "Requisitos",
    descricao: "Levantamento e documentação das necessidades do cliente e do sistema",
    atividades: ["Elicitação", "Análise", "Especificação", "Validação"]
  },
  {
    icon: Settings,
    titulo: "Projeto (Design)",
    descricao: "Definição da arquitetura, estruturas de dados e interfaces",
    atividades: ["Arquitetura", "Design detalhado", "Design de interface", "Design de dados"]
  },
  {
    icon: Code2,
    titulo: "Implementação",
    descricao: "Codificação do sistema seguindo as especificações do projeto",
    atividades: ["Codificação", "Revisão de código", "Integração contínua"]
  },
  {
    icon: TestTube,
    titulo: "Testes",
    descricao: "Verificação e validação do sistema em diferentes níveis",
    atividades: ["Testes unitários", "Testes de integração", "Testes de sistema", "Testes de aceitação"]
  },
  {
    icon: Rocket,
    titulo: "Implantação",
    descricao: "Disponibilização do sistema para uso em ambiente de produção",
    atividades: ["Deploy", "Migração de dados", "Treinamento", "Go-live"]
  },
  {
    icon: Wrench,
    titulo: "Manutenção",
    descricao: "Correções, melhorias e adaptações após a implantação",
    atividades: ["Corretiva", "Adaptativa", "Perfectiva", "Preventiva"]
  }
];

const CicloVidaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-4">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-medium">Ciclo de Vida do Software</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fases do Desenvolvimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo software passa por um ciclo de vida que vai da concepção até a 
            descontinuação, com fases bem definidas
          </p>
        </motion.div>

        {/* Fluxo das Fases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fases.map((fase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 relative group hover:border-cyan-500/50 transition-colors"
            >
              {/* Número da fase */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <fase.icon className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{fase.titulo}</h3>
              <p className="text-sm text-muted-foreground mb-4">{fase.descricao}</p>

              <div className="flex flex-wrap gap-2">
                {fase.atividades.map((atividade, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300"
                  >
                    {atividade}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Definição Formal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Definição de Engenharia de Software</h3>
          <blockquote className="border-l-4 border-cyan-500 pl-6 py-2">
            <p className="text-lg text-muted-foreground italic">
              "A aplicação de uma abordagem <strong className="text-foreground">sistemática</strong>, 
              <strong className="text-foreground"> disciplinada</strong> e 
              <strong className="text-foreground"> quantificável</strong> no desenvolvimento, 
              operação e manutenção de software."
            </p>
            <cite className="text-sm text-cyan-400 mt-2 block">— IEEE Standard 610.12</cite>
          </blockquote>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-background/50">
              <h4 className="font-semibold text-foreground mb-2">Sistemática</h4>
              <p className="text-xs text-muted-foreground">
                Existe um processo de desenvolvimento definindo as atividades a serem executadas
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h4 className="font-semibold text-foreground mb-2">Disciplinada</h4>
              <p className="text-xs text-muted-foreground">
                Os processos definidos devem ser seguidos pela equipe de desenvolvimento
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h4 className="font-semibold text-foreground mb-2">Quantificável</h4>
              <p className="text-xs text-muted-foreground">
                Métricas são extraídas para tomadas de decisão baseadas em dados reais
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CicloVidaSection;
