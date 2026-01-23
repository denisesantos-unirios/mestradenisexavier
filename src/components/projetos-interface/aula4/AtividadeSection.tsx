import { useState } from "react";
import { motion } from "framer-motion";
import { Swords, Users, Trophy, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AtividadeSection = () => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const apps = [
    { name: "iFood", tipo: "Delivery" },
    { name: "Nubank", tipo: "Banco" },
    { name: "Instagram", tipo: "Rede Social" },
    { name: "Duolingo", tipo: "Educação" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Swords className="w-4 h-4" />
            Atividade Prática
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Batalha das Heurísticas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada grupo defende uma heurística como a mais importante. 
            Após 3 rodadas, a turma vota na heurística mais relevante.
          </p>
        </motion.div>

        <Tabs defaultValue="batalha" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="batalha" className="flex items-center gap-2">
              <Swords className="w-4 h-4" />
              Batalha
            </TabsTrigger>
            <TabsTrigger value="analise" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Análise
            </TabsTrigger>
          </TabsList>

          <TabsContent value="batalha">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Regras da Batalha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-5 h-5 text-green-400" />
                    </div>
                    <h4 className="font-medium mb-2">Formar Grupos</h4>
                    <p className="text-sm text-muted-foreground">
                      Cada grupo recebe uma das 10 heurísticas de Nielsen
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                      <Swords className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-medium mb-2">Defender</h4>
                    <p className="text-sm text-muted-foreground">
                      Apresente argumentos de por que sua heurística é a mais importante
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h4 className="font-medium mb-2">Votação</h4>
                    <p className="text-sm text-muted-foreground">
                      A turma vota na heurística com melhores argumentos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analise">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Identificar Requisitos em Apps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Escolha um app e identifique quais metas de usabilidade ele atende bem ou mal:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {apps.map((app) => (
                    <Button
                      key={app.name}
                      variant={selectedApp === app.name ? "default" : "outline"}
                      onClick={() => setSelectedApp(app.name)}
                      className="h-auto py-4 flex flex-col gap-1"
                    >
                      <span className="font-medium">{app.name}</span>
                      <span className="text-xs opacity-70">{app.tipo}</span>
                    </Button>
                  ))}
                </div>

                {selectedApp && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-secondary/50 rounded-lg"
                  >
                    <h4 className="font-medium mb-3">Analise o {selectedApp}:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Qual meta de usabilidade ele atende melhor?</li>
                      <li>• Qual heurística de Nielsen está mais presente?</li>
                      <li>• Onde ele poderia melhorar?</li>
                    </ul>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AtividadeSection;
