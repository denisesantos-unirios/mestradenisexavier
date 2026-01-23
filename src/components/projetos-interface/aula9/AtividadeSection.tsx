import { motion } from "framer-motion";
import { 
  PenTool, ArrowLeftRight, CheckCircle, Lightbulb, 
  ArrowUp, Star, AlertCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const criteriosComparacao = [
    {
      criterio: "Utilidade",
      pergunta: "Qual resolve melhor o problema do usuário?",
    },
    {
      criterio: "Usabilidade",
      pergunta: "Qual é mais fácil de usar?",
    },
    {
      criterio: "Desejabilidade",
      pergunta: "Qual é mais atraente visualmente?",
    },
    {
      criterio: "Acessibilidade",
      pergunta: "Qual atende melhor usuários diversos?",
    },
    {
      criterio: "Credibilidade",
      pergunta: "Qual transmite mais confiança?",
    },
    {
      criterio: "Experiência Geral",
      pergunta: "Qual deixou você mais satisfeito?",
    },
  ];

  const sugestoesPares = [
    { app1: "Uber", app2: "99", categoria: "Transporte" },
    { app1: "iFood", app2: "Rappi", categoria: "Delivery" },
    { app1: "Spotify", app2: "Deezer", categoria: "Música" },
    { app1: "Nubank", app2: "Banco tradicional", categoria: "Bancos" },
    { app1: "Netflix", app2: "Prime Video", categoria: "Streaming" },
    { app1: "Instagram", app2: "TikTok", categoria: "Redes Sociais" },
  ];

  return (
    <section id="atividade" className="py-24 bg-secondary/30">
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
            Comparativo de Interfaces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha dois aplicativos similares e compare suas experiências 
            usando os princípios de UX que aprendemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instruções */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowLeftRight className="w-5 h-5 text-primary" />
                  Como Fazer a Comparação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ol className="space-y-4">
                  {[
                    "Escolha dois apps do mesmo segmento",
                    "Execute a mesma tarefa em ambos",
                    "Analise cada critério da tabela ao lado",
                    "Dê uma nota de 1 a 5 para cada critério",
                    "Identifique pontos fortes e fracos",
                    "Proponha melhorias para o app mais fraco",
                  ].map((passo, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{passo}</span>
                    </li>
                  ))}
                </ol>

                {/* Sugestões de pares */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="font-medium text-foreground mb-3">💡 Sugestões de pares:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {sugestoesPares.map((par, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        <span className="text-foreground">{par.app1}</span>
                        {" vs "}
                        <span className="text-foreground">{par.app2}</span>
                        <span className="text-xs block text-muted-foreground/70">{par.categoria}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabela de comparação */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Critérios de Avaliação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {criteriosComparacao.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-foreground">{item.criterio}</p>
                          <p className="text-sm text-muted-foreground">{item.pergunta}</p>
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div 
                              key={n}
                              className="w-6 h-6 rounded border border-border bg-background flex items-center justify-center text-xs text-muted-foreground"
                            >
                              {n}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Template de entrega */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Template de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-sm font-medium text-foreground">App A:</p>
                    <p className="text-sm text-muted-foreground italic">Nome do aplicativo</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-sm font-medium text-foreground">App B:</p>
                    <p className="text-sm text-muted-foreground italic">Nome do aplicativo</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-sm font-medium text-foreground">Tarefa executada:</p>
                    <p className="text-sm text-muted-foreground italic">Ex: Fazer um pedido de comida</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-sm font-medium text-green-500">Pontos fortes (vencedor):</p>
                    <p className="text-sm text-muted-foreground italic">Liste 3 pontos positivos</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-sm font-medium text-red-500">Pontos fracos (perdedor):</p>
                    <p className="text-sm text-muted-foreground italic">Liste 3 pontos a melhorar</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-primary">Sugestões de melhoria:</p>
                    <p className="text-sm text-muted-foreground italic">Proponha 2 melhorias</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground mb-2">Dica da Professora</p>
                <p className="text-muted-foreground">
                  Ao fazer a comparação, tente se colocar no lugar de diferentes 
                  tipos de usuários: um novato, um expert, uma pessoa idosa, alguém 
                  com pressa. Cada perfil pode ter percepções diferentes sobre a mesma interface.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Próxima aula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-card border border-border text-center"
        >
          <p className="text-muted-foreground mb-2">Próxima Semana</p>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Acessibilidade: Fundamentos
          </h3>
          <p className="text-muted-foreground">
            Aprenderemos sobre WCAG, barreiras de usabilidade e design inclusivo.
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
