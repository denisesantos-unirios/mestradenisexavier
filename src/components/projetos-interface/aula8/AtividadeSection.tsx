import { motion } from "framer-motion";
import { PenTool, Map, Users, Target, CheckCircle, Lightbulb, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const passosAtividade = [
    "Escolha um app ou serviço que você usa frequentemente",
    "Defina a persona (pode usar uma do seu projeto)",
    "Identifique o cenário principal de uso",
    "Mapeie 4-6 etapas da jornada",
    "Para cada etapa, documente ações, pensamentos e emoções",
    "Identifique os touchpoints em cada fase",
    "Marque oportunidades de melhoria",
  ];

  const templateJornada = [
    { campo: "Persona", placeholder: "Nome, idade, objetivo principal" },
    { campo: "Cenário", placeholder: "Situação em que usa o produto" },
    { campo: "Etapa 1", placeholder: "Descoberta - Como conheceu?" },
    { campo: "Etapa 2", placeholder: "Primeiro uso - Primeiras impressões" },
    { campo: "Etapa 3", placeholder: "Uso regular - O que faz sempre?" },
    { campo: "Etapa 4", placeholder: "Problema - Alguma frustração?" },
    { campo: "Etapa 5", placeholder: "Resolução - Como foi resolvido?" },
  ];

  return (
    <section id="atividade" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <PenTool className="w-4 h-4" />
            Atividade Prática
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Crie seu Mapa de Jornada
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aplique os conceitos aprendidos criando um mapa de jornada do usuário 
            para o seu projeto ou para um app que você utiliza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passos da atividade */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Passos da Atividade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {passosAtividade.map((passo, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{passo}</span>
                    </motion.li>
                  ))}
                </ol>

                {/* Dica */}
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Dica</p>
                      <p className="text-sm text-muted-foreground">
                        Use post-its coloridos ou ferramentas como Miro/FigJam para 
                        criar seu mapa de forma colaborativa e visual.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Template */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-primary" />
                  Template de Jornada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templateJornada.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <label className="text-sm font-medium text-foreground">
                        {item.campo}
                      </label>
                      <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                        <span className="text-sm text-muted-foreground italic">
                          {item.placeholder}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Critérios de entrega */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Critérios de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Persona claramente definida",
                  "Mínimo de 4 etapas mapeadas",
                  "Ações documentadas em cada etapa",
                  "Emoções identificadas",
                  "Touchpoints mapeados",
                  "Pelo menos 2 oportunidades de melhoria",
                ].map((criterio, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">{criterio}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Próxima aula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-card border border-border text-center"
        >
          <p className="text-muted-foreground mb-2">Próxima Aula</p>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Princípios da Experiência do Usuário
          </h3>
          <p className="text-muted-foreground">
            Vamos aprofundar nos princípios que guiam uma boa experiência do usuário.
          </p>
        </motion.div>

        {/* Voltar ao topo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao Topo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AtividadeSection;
