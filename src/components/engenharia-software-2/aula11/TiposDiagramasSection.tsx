import { motion } from "framer-motion";
import { Boxes, Workflow, Users, Activity, MessageSquare, Clock, GitBranch, Layers, Package, Component } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const diagramasEstruturais = [
  { nome: "Classes", icone: Boxes, descricao: "Estrutura estática das classes e relacionamentos", destaque: false },
  { nome: "Objetos", icone: Package, descricao: "Instâncias de classes em um momento específico", destaque: false },
  { nome: "Componentes", icone: Component, descricao: "Organização dos componentes do sistema", destaque: false },
  { nome: "Pacotes", icone: Layers, descricao: "Agrupamento lógico de elementos", destaque: false }
];

const diagramasComportamentais = [
  { nome: "Casos de Uso", icone: Users, descricao: "Interações entre atores e sistema", destaque: true },
  { nome: "Sequência", icone: MessageSquare, descricao: "Fluxo de mensagens entre objetos", destaque: false },
  { nome: "Atividades", icone: Activity, descricao: "Fluxo de trabalho e processos", destaque: false },
  { nome: "Estados", icone: GitBranch, descricao: "Estados e transições de um objeto", destaque: false }
];

const TiposDiagramasSection = () => {
  return (
    <section id="diagramas" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              <Workflow className="w-4 h-4" />
              14 Diagramas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Diagramas UML
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A UML 2.5 define 14 tipos de diagramas divididos em duas categorias principais
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Diagramas Estruturais */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Boxes className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Diagramas Estruturais</h3>
                  <p className="text-sm text-muted-foreground">O que o sistema é (estática)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {diagramasEstruturais.map((diagrama, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
                    <diagrama.icone className="w-5 h-5 text-blue-400" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{diagrama.nome}</p>
                      <p className="text-xs text-muted-foreground">{diagrama.descricao}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground italic pt-2">
                  + Implantação, Estrutura Composta, Perfis
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Diagramas Comportamentais */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Diagramas Comportamentais</h3>
                  <p className="text-sm text-muted-foreground">O que o sistema faz (dinâmica)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {diagramasComportamentais.map((diagrama, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      diagrama.destaque 
                        ? 'bg-violet-500/20 border border-violet-500/30' 
                        : 'bg-background/50'
                    }`}
                  >
                    <diagrama.icone className={`w-5 h-5 ${diagrama.destaque ? 'text-violet-400' : 'text-violet-400/70'}`} />
                    <div className="flex-1">
                      <p className="font-medium text-foreground flex items-center gap-2">
                        {diagrama.nome}
                        {diagrama.destaque && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/30 text-violet-300">
                            Foco desta etapa
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{diagrama.descricao}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground italic pt-2">
                  + Comunicação, Temporização, Interação
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Nota sobre Casos de Uso */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-primary/10 border border-violet-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-500/20 text-violet-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Próximos Passos: Casos de Uso
                </h3>
                <p className="text-muted-foreground">
                  Nas próximas aulas, vamos nos aprofundar no <strong className="text-foreground">Diagrama de Casos de Uso</strong>, 
                  que é fundamental para modelar as funcionalidades do sistema do ponto de vista do usuário. 
                  Este será o entregável da <strong className="text-violet-400">Fase 3 do PBL</strong>.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TiposDiagramasSection;
