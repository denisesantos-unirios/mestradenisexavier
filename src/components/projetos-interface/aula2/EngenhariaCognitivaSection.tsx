import { motion } from "framer-motion";
import { 
  Brain, 
  Eye, 
  Ear, 
  Hand,
  Clock,
  Database,
  Users,
  FileText,
  Settings,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const sentidos = [
  { icon: Eye, nome: "Visual", descricao: "Percepção de cores, formas e movimentos", cor: "from-blue-500 to-cyan-500" },
  { icon: Ear, nome: "Auditivo", descricao: "Sons, alertas e feedback sonoro", cor: "from-purple-500 to-pink-500" },
  { icon: Hand, nome: "Tátil", descricao: "Toque, gestos e vibração", cor: "from-emerald-500 to-teal-500" }
];

const modelosCognitivos = [
  {
    icon: FileText,
    titulo: "Modelo de Tarefas",
    descricao: "Quais as tarefas que os usuários realizam utilizando o sistema?",
    cor: "bg-blue-500"
  },
  {
    icon: Users,
    titulo: "Modelo de Usuário",
    descricao: "Quais as necessidades dos usuários?",
    cor: "bg-emerald-500"
  },
  {
    icon: Settings,
    titulo: "Modelo de Design",
    descricao: "O modelo mental criado pelo projetista da interface",
    cor: "bg-purple-500"
  }
];

const EngenhariaCognitivaSection = () => {
  return (
    <section id="engenharia-cognitiva" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Brain className="w-4 h-4" />
              <span>Compreendendo o Usuário</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engenharia Cognitiva
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Como os seres humanos alcançam seus objetivos através da realização 
              de tarefas cognitivas envolvendo o processamento de informação
            </p>
          </div>
        </ScrollReveal>

        {/* Definição */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              A IHC propõe uma visão do computador como um <strong className="text-primary">instrumento cognitivo</strong> que 
              oferece ao ser humano a capacidade de:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold">Entendimento</h4>
                <p className="text-sm text-muted-foreground">Compreender informações</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl mb-2">💾</div>
                <h4 className="font-bold">Memorização</h4>
                <p className="text-sm text-muted-foreground">Reter conhecimento</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold">Tomada de Decisão</h4>
                <p className="text-sm text-muted-foreground">Agir com base em dados</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Percepção Humana */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Percepção Humana na Interface</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              O ser humano utiliza todos os sentidos disponíveis para armazenar conhecimento. 
              Ele percebe, armazena e processa informações através de:
            </p>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sentidos.map((sentido, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-6 text-center relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sentido.cor}`} />
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sentido.cor} flex items-center justify-center mx-auto mb-4`}>
                      <sentido.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{sentido.nome}</h4>
                    <p className="text-sm text-muted-foreground">{sentido.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 max-w-2xl mx-auto">
              <p className="text-center text-sm">
                <Ear className="inline w-4 h-4 text-amber-500 mr-1" />
                <strong className="text-amber-500">Cuidado:</strong> Qualquer som oriundo do computador pode 
                causar efeito de distração no usuário, mesmo que não tenha a pretensão de chamar atenção.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Memória Humana */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Memória Humana</h3>
                <p className="text-muted-foreground">
                  As informações captadas pelos sentidos vão para a <strong className="text-foreground">memória de curta duração</strong> 
                  (memória de trabalho) antes de serem processadas e, possivelmente, armazenadas na memória de longo prazo.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-500 text-sm font-medium"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Entrada Sensorial
              </motion.div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <motion.div
                className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-500 text-sm font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Memória de Trabalho
              </motion.div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <motion.div
                className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-500 text-sm font-medium"
              >
                Memória de Longo Prazo
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Modelos da Engenharia Cognitiva */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Modelos da Engenharia Cognitiva</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              O projetista da interface cria o seu modelo mental (modelo de design), 
              tendo como referência os modelos de tarefas e de usuário.
            </p>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {modelosCognitivos.map((modelo, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-6 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${modelo.cor} flex items-center justify-center mb-4`}>
                      <modelo.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{modelo.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{modelo.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 max-w-3xl mx-auto">
              <p className="text-center text-sm">
                <Lightbulb className="inline w-4 h-4 text-primary mr-1" />
                <strong>Objetivo:</strong> Desenvolver a imagem do sistema de forma que o <strong className="text-primary">modelo de design</strong> seja 
                o mais compatível possível com o <strong className="text-primary">modelo de uso</strong> concebido pelo usuário.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Habilidade Individual */}
        <ScrollReveal>
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h4 className="font-bold text-center mb-4">👤 Nível de Habilidade e Comportamento</h4>
            <p className="text-sm text-muted-foreground text-center">
              Cada ser humano é dotado de uma <strong className="text-foreground">personalidade ímpar</strong>. 
              É importante considerar o nível de habilidade individual e as diversas personalidades, 
              pois <em>nem tudo que é bom para um determinado usuário pode satisfazer e ter o mesmo 
              sentido para outro</em>.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#desenvolvimento-interface"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Desenvolvimento de Interfaces</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EngenhariaCognitivaSection;
