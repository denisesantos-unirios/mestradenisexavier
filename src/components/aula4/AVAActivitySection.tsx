import { motion } from "framer-motion";
import { BookOpen, Search, FileText, ExternalLink, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AVAActivitySection = () => {
  const famousFails = [
    {
      name: "Therac-25 (1985-87)",
      description: "Máquina de radioterapia causou mortes por overdose de radiação",
      cause: "Requisitos de segurança mal especificados"
    },
    {
      name: "Ariane 5 (1996)",
      description: "Foguete explodiu 40 segundos após lançamento",
      cause: "Reutilização de código sem validar requisitos do novo sistema"
    },
    {
      name: "Healthcare.gov (2013)",
      description: "Site de saúde dos EUA travou no lançamento",
      cause: "Requisitos de desempenho subestimados"
    },
    {
      name: "Boeing 737 MAX (2018-19)",
      description: "Dois acidentes fatais com 346 mortes",
      cause: "Requisitos de interface piloto-sistema ignorados"
    }
  ];

  return (
    <section id="atividade-ava" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              <BookOpen className="w-4 h-4" />
              Atividade AVA
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WebQuest: <span className="text-primary">Falhas Famosas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pesquise sobre falhas de software causadas por problemas de requisitos 
              e reflita sobre como poderiam ter sido evitadas.
            </p>
          </div>
        </ScrollReveal>

        {/* Card da Atividade */}
        <ScrollReveal>
          <Card className="mb-12 border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Search className="w-6 h-6 text-primary" />
                Instruções da WebQuest
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Escolha um Caso</h4>
                      <p className="text-sm text-muted-foreground">
                        Selecione uma falha famosa de software (pode ser das sugestões ou outra)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Pesquise a Fundo</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifique qual requisito (funcional ou não-funcional) falhou
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Analise as Causas</h4>
                      <p className="text-sm text-muted-foreground">
                        Por que o requisito foi ignorado ou mal definido?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Proponha Solução</h4>
                      <p className="text-sm text-muted-foreground">
                        Como a engenharia de requisitos poderia ter evitado o problema?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Formato do Relatório</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Descrição do incidente (1 parágrafo)</li>
                      <li>• Requisito que falhou e seu tipo</li>
                      <li>• Análise da causa raiz</li>
                      <li>• Proposta de como evitar</li>
                      <li>• Fontes consultadas</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                    <Clock className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">Prazo de Entrega</p>
                      <p className="text-sm text-muted-foreground">Até a próxima aula presencial</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                    <Target className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">Objetivo</p>
                      <p className="text-sm text-muted-foreground">Entender o impacto real de requisitos ruins</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Sugestões de Casos */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Sugestões de Casos para Pesquisa
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {famousFails.map((fail, index) => (
              <motion.div
                key={fail.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-2">{fail.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{fail.description}</p>
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-destructive/10">
                      <span className="text-xs font-medium text-destructive">Causa:</span>
                      <span className="text-xs text-destructive/80">{fail.cause}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Botão para AVA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Acessar AVA para Envio
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              O envio deve ser feito pela plataforma AVA da instituição
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AVAActivitySection;
