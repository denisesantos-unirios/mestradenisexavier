import { motion } from "framer-motion";
import { UserCircle, Circle, ArrowRight, Link2, Layers } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ElementosSection = () => {
  return (
    <section id="elementos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              Notação UML
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elementos do Diagrama
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os elementos básicos que compõem um Diagrama de Casos de Uso
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Atores */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-cyan-500/10">
                  <UserCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Atores</h3>
                  <p className="text-sm text-muted-foreground">Quem interage com o sistema</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Representam entidades externas que interagem com o sistema. Podem ser:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400 font-bold">👤</span>
                    <span className="text-foreground"><strong>Usuários humanos:</strong> Cliente, Administrador, Vendedor</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400 font-bold">🖥️</span>
                    <span className="text-foreground"><strong>Sistemas externos:</strong> API de Pagamento, Banco de Dados</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400 font-bold">⏰</span>
                    <span className="text-foreground"><strong>Tempo:</strong> Eventos agendados ou periódicos</span>
                  </li>
                </ul>
                
                <div className="p-4 rounded-xl bg-background/50 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-cyan-400">Representação:</strong> Boneco palito (stick figure) com o nome abaixo
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Casos de Uso */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-cyan-500/10">
                  <Circle className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Casos de Uso</h3>
                  <p className="text-sm text-muted-foreground">O que o sistema faz</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Representam funcionalidades ou serviços que o sistema oferece aos atores.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-foreground">Sempre começam com <strong>verbo no infinitivo</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-foreground">Representam uma funcionalidade <strong>completa</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-foreground">Devem entregar <strong>valor</strong> ao ator</span>
                  </li>
                </ul>
                
                <div className="p-4 rounded-xl bg-background/50 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-cyan-400">Representação:</strong> Elipse com o nome do caso de uso dentro
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Ex: "Realizar Login", "Cadastrar Cliente", "Emitir Relatório"
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Relacionamentos */}
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-cyan-400" />
              Tipos de Relacionamentos
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-card/50">
                <p className="font-bold text-foreground mb-2">Associação</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Linha contínua conectando ator ao caso de uso
                </p>
                <code className="text-xs text-cyan-400">Ator ——— Caso de Uso</code>
              </div>
              
              <div className="p-4 rounded-xl bg-card/50">
                <p className="font-bold text-foreground mb-2">Include</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Caso de uso obrigatoriamente inclui outro
                </p>
                <code className="text-xs text-cyan-400">{"<<include>>"}</code>
              </div>
              
              <div className="p-4 rounded-xl bg-card/50">
                <p className="font-bold text-foreground mb-2">Extend</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Caso de uso opcionalmente estende outro
                </p>
                <code className="text-xs text-cyan-400">{"<<extend>>"}</code>
              </div>
              
              <div className="p-4 rounded-xl bg-card/50">
                <p className="font-bold text-foreground mb-2">Generalização</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Herança entre atores ou casos de uso
                </p>
                <code className="text-xs text-cyan-400">Ator ——▷ Ator Pai</code>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ElementosSection;
