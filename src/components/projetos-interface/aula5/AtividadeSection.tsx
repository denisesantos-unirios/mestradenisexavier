import { motion } from "framer-motion";
import { PenTool, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AtividadeSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <PenTool className="w-4 h-4" />
            Atividade Prática
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crie sua Persona
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desenvolva uma persona para o projeto de usabilidade da sua equipe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Template de Persona</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { label: "Nome", placeholder: "Nome fictício da persona" },
                    { label: "Idade", placeholder: "Faixa etária" },
                    { label: "Profissão", placeholder: "O que ela faz" },
                    { label: "Bio", placeholder: "Uma breve história" },
                    { label: "Objetivos", placeholder: "O que ela quer alcançar" },
                    { label: "Frustrações", placeholder: "O que a irrita" },
                    { label: "Nível de habilidade", placeholder: "Novato, Intermediário, Expert" }
                  ].map((field, i) => (
                    <div key={i} className="p-3 bg-secondary/50 rounded-lg">
                      <label className="text-sm font-medium text-indigo-400">{field.label}</label>
                      <p className="text-sm text-muted-foreground">{field.placeholder}</p>
                    </div>
                  ))}
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
                <CardTitle>Passos da Atividade</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    "Defina o sistema que seu grupo vai projetar",
                    "Identifique quem seriam os usuários principais",
                    "Crie 1-2 personas representando esses usuários",
                    "Liste as principais tarefas que cada persona precisa realizar",
                    "Apresente para a turma"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/30">
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">💡 Dica importante</h4>
                <p className="text-sm text-muted-foreground">
                  "Você não é seu usuário. Seu cliente também não. 
                  Procure saber o máximo sobre quem realmente vai usar o sistema."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtividadeSection;
