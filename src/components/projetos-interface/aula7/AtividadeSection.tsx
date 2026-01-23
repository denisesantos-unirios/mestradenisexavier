import { motion } from "framer-motion";
import { 
  ClipboardList, 
  GitBranch, 
  FileText, 
  ArrowUp,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Download
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const passosAtividade = [
  "Escolha a tarefa principal do seu projeto de usabilidade",
  "Identifique todas as subtarefas necessárias",
  "Crie a hierarquia (HTA) com pelo menos 3 níveis",
  "Desenhe o diagrama de fluxo com decisões",
  "Identifique possíveis pontos de erro/frustração"
];

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Atividade Prática</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Diagrama de Atividades
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aplique os conceitos de análise de tarefas ao seu Projeto de Usabilidade,
              criando diagramas que mostram os fluxos principais da interface.
            </p>
          </div>
        </ScrollReveal>

        {/* Card principal da atividade */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-primary-foreground" />
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Mapeamento de Tarefas do Projeto
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">🎯 Objetivo</h4>
                <p className="text-muted-foreground">
                  Criar a documentação de análise de tarefas para a interface que você está
                  desenvolvendo no Projeto de Usabilidade. Esta atividade é parte da Fase 1.
                </p>
              </div>

              {/* Passos */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">📋 Passos da Atividade</h4>
                <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                  {passosAtividade.map((passo, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{passo}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Entregáveis */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-blue-500" />
                    <h5 className="font-bold">Diagrama HTA</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tarefa principal no topo</li>
                    <li>• Mínimo 3 níveis de profundidade</li>
                    <li>• Todas as subtarefas identificadas</li>
                    <li>• Numeração hierárquica (1, 1.1, 1.1.1)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-green-500" />
                    <h5 className="font-bold">Diagrama de Fluxo</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Início e fim marcados</li>
                    <li>• Mínimo 2 pontos de decisão</li>
                    <li>• Caminhos alternativos (sucesso/erro)</li>
                    <li>• Ações do usuário e sistema</li>
                  </ul>
                </div>
              </div>

              {/* Formato de entrega */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Formato de Entrega
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium mb-1">Ferramentas sugeridas:</p>
                    <p className="text-muted-foreground">Figma, Draw.io, Lucidchart, ou papel</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium mb-1">Formato:</p>
                    <p className="text-muted-foreground">PDF ou imagens de alta qualidade</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium mb-1">Entrega:</p>
                    <p className="text-muted-foreground">Via AVA até a data indicada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Template download */}
        <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-12 border border-primary/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-start gap-4">
                <Download className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Template de Diagrama</h3>
                  <p className="text-muted-foreground text-sm">
                    Use o template no Figma ou Draw.io para criar seus diagramas mais rapidamente.
                  </p>
                </div>
              </div>
              <motion.button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Acessar Template
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dica do professor */}
        <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 mb-12 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">💡 Dica da Professora</h3>
                <p className="text-muted-foreground">
                  Lembre-se: seus diagramas devem refletir o comportamento <strong>real</strong> dos usuários,
                  não o comportamento ideal. Inclua caminhos de erro, desistências e fluxos alternativos.
                  Quanto mais realista, mais útil será para o design da interface.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima aula */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-6 mb-12">
            <div className="flex items-center gap-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Próxima Aula</p>
                <h4 className="text-xl font-bold">Introdução à Experiência do Usuário (UX)</h4>
                <p className="text-muted-foreground">
                  Explore os princípios de UX e aprenda a criar mapas de jornada do usuário.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Voltar ao topo */}
        <ScrollReveal animation="fadeUp">
          <div className="text-center">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ y: -3 }}
            >
              <ArrowUp className="w-5 h-5" />
              Voltar ao Topo
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtividadeSection;
