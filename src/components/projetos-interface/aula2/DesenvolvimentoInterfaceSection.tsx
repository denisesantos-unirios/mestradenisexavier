import { motion } from "framer-motion";
import { 
  Search, 
  Palette, 
  Layers, 
  CheckCircle2,
  RefreshCw,
  Settings,
  Users,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const etapasDesenvolvimento = [
  { 
    icon: Search, 
    titulo: "Análise", 
    descricao: "Estudo das necessidades, contexto e usuários",
    cor: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Palette, 
    titulo: "Design", 
    descricao: "Criação da solução visual e interativa",
    cor: "from-purple-500 to-pink-500"
  },
  { 
    icon: Layers, 
    titulo: "Prototipação", 
    descricao: "Construção de versões testáveis",
    cor: "from-emerald-500 to-teal-500"
  },
  { 
    icon: CheckCircle2, 
    titulo: "Avaliação", 
    descricao: "Testes com usuários reais",
    cor: "from-amber-500 to-orange-500"
  }
];

const itensConsideracao = [
  {
    titulo: "Percepção Humana",
    descricao: "Os sentidos visual, tátil e auditivo possibilitam ao usuário perceber informações e armazená-las usando raciocínio indutivo ou dedutivo"
  },
  {
    titulo: "Habilidade e Comportamento",
    descricao: "Considerar o nível de habilidade individual e as diversas personalidades pertencentes a cada usuário do sistema"
  },
  {
    titulo: "Tarefas e Fatores Humanos",
    descricao: "O sistema raramente permite fazer algo inteiramente novo - normalmente automatiza atividades que eram executadas manualmente"
  }
];

const DesenvolvimentoInterfaceSection = () => {
  return (
    <section id="desenvolvimento-interface" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-primary">Processo Iterativo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Desenvolvimento de Interfaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O projeto de desenvolvimento engloba etapas que formam um ciclo 
              iterativo de melhoria contínua
            </p>
          </div>
        </ScrollReveal>

        {/* Ciclo de Desenvolvimento */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Ciclo de Desenvolvimento</h3>
            
            <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
              {etapasDesenvolvimento.map((etapa, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-6 text-center relative"
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${etapa.cor}`} />
                    
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${etapa.cor} flex items-center justify-center mx-auto mb-4`}>
                      <etapa.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{etapa.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{etapa.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 flex justify-center">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RefreshCw className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Design → Prototipação → Avaliação (Ciclo Iterativo)
                </span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Fatores Humanos e Ergonomia */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Settings className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fatores Humanos e Ergonomia</h3>
                <p className="text-muted-foreground">
                  O desenvolvimento de um sistema interativo se fundamenta na necessidade do usuário 
                  em solucionar questões pertinentes ao seu contexto de trabalho.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <p className="text-sm">
                ⚠️ <strong className="text-amber-500">Problema comum:</strong> O desconhecimento por parte 
                do projetista sobre a tarefa, o modo operatório e a estratégia de resolução de problemas 
                do ser humano geram <strong>incompatibilidades</strong> no processo de IHC.
              </p>
            </div>

            <div className="text-center p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="font-bold text-emerald-500">Ergonomia de Software:</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                <span className="text-sm text-muted-foreground">
                  Oferecer ao usuário melhores condições de trabalho, <strong className="text-foreground">adaptando o sistema a ele</strong>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Itens a Considerar */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              <Lightbulb className="inline w-6 h-6 text-primary mr-2" />
              Itens para o Desenvolvimento
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {itensConsideracao.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-6 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{item.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Exemplo do Google */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h4 className="font-bold text-center mb-6">🌟 Case de Sucesso: Google</h4>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Um grande exemplo de sucesso é a página do <strong className="text-foreground">Google</strong>:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Página limpa e direcionada para pesquisa</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Subitens disponibilizados de forma discreta</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Não causa poluição visual na página</span>
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <Users className="inline w-4 h-4 mr-1" />
                  <strong className="text-foreground">Marissa Mayer</strong> (na época vice-presidente do Google) 
                  foi a grande responsável por manter a página limpa. Essa iniciativa a levou para uma 
                  carreira de sucesso, sendo posteriormente convidada para assumir a presidência do Yahoo.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#conceitos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Conceitos de Design</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DesenvolvimentoInterfaceSection;
