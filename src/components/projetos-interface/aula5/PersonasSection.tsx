import { motion } from "framer-motion";
import { User, Briefcase, Heart, Target, Brain, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const personaExemplo = {
  nome: "Maria Santos",
  idade: 32,
  profissao: "Gerente de Projetos",
  bio: "Trabalha em uma startup de tecnologia, usa apps diariamente para organizar sua rotina.",
  objetivos: [
    "Organizar tarefas do dia a dia",
    "Comunicar-se rapidamente com a equipe",
    "Acompanhar métricas de projeto"
  ],
  frustrações: [
    "Apps com muitos passos para ações simples",
    "Interfaces confusas e poluídas",
    "Falta de integração entre ferramentas"
  ],
  habilidades: "Usuária intermediária de tecnologia"
};

const PersonasSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que são <span className="text-indigo-400">Personas</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personas são representações fictícias dos seus usuários ideais, 
            baseadas em dados reais sobre comportamentos e necessidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-400" />
                  Exemplo de Persona
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    MS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{personaExemplo.nome}</h3>
                    <p className="text-muted-foreground">{personaExemplo.idade} anos • {personaExemplo.profissao}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{personaExemplo.bio}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-500/10 rounded-lg">
                    <h4 className="font-medium text-green-400 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Objetivos
                    </h4>
                    <ul className="text-sm space-y-1">
                      {personaExemplo.objetivos.map((obj, i) => (
                        <li key={i} className="text-muted-foreground">• {obj}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg">
                    <h4 className="font-medium text-red-400 mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Frustrações
                    </h4>
                    <ul className="text-sm space-y-1">
                      {personaExemplo.frustrações.map((frust, i) => (
                        <li key={i} className="text-muted-foreground">• {frust}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-indigo-400" />
                    Nível de Habilidade
                  </h4>
                  <p className="text-sm text-muted-foreground">{personaExemplo.habilidades}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Por que criar Personas?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Humaniza os dados de pesquisa",
                    "Guia decisões de design",
                    "Alinha a equipe sobre o público-alvo",
                    "Evita projetar para si mesmo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                        {i + 1}
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Elementos de uma Persona</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: User, label: "Nome e foto" },
                    { icon: Briefcase, label: "Profissão" },
                    { icon: Target, label: "Objetivos" },
                    { icon: Heart, label: "Frustrações" },
                    { icon: Brain, label: "Comportamentos" },
                    { icon: Clock, label: "Contexto de uso" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                      <item.icon className="w-4 h-4 text-indigo-400" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
