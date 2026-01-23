import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const heuristicas = [
  {
    numero: 1,
    titulo: "Visibilidade do status do sistema",
    descricao: "O sistema mantém os usuários sempre informados sobre o que está acontecendo, fornecendo feedback adequado."
  },
  {
    numero: 2,
    titulo: "Compatibilidade com o mundo real",
    descricao: "O sistema fala a linguagem do usuário, utilizando palavras e conceitos familiares."
  },
  {
    numero: 3,
    titulo: "Controle e liberdade do usuário",
    descricao: "Fornece 'saídas de emergência' claramente identificadas para sair de estados indesejados."
  },
  {
    numero: 4,
    titulo: "Consistência e padrões",
    descricao: "Evita que os usuários tenham que pensar se palavras ou ações diferentes significam a mesma coisa."
  },
  {
    numero: 5,
    titulo: "Prevenção de erros",
    descricao: "Onde possível, impede a ocorrência de erros antes que aconteçam."
  },
  {
    numero: 6,
    titulo: "Reconhecimento em vez de memorização",
    descricao: "Torna objetos, ações e opções visíveis, minimizando a carga de memória."
  },
  {
    numero: 7,
    titulo: "Flexibilidade e eficiência de uso",
    descricao: "Fornece aceleradores para usuários experientes realizarem tarefas rapidamente."
  },
  {
    numero: 8,
    titulo: "Estética e design minimalista",
    descricao: "Evita o uso de informações irrelevantes ou raramente necessárias."
  },
  {
    numero: 9,
    titulo: "Ajuda a reconhecer e recuperar erros",
    descricao: "Utiliza linguagem simples para descrever problemas e sugere soluções."
  },
  {
    numero: 10,
    titulo: "Ajuda e documentação",
    descricao: "Fornece informações que podem ser facilmente encontradas quando necessárias."
  }
];

const HeuristicasSection = () => {
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
            10 Heurísticas de <span className="text-teal-400">Nielsen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Regras gerais que descrevem propriedades comuns de interfaces usáveis, 
            servindo como guia para avaliação heurística.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {heuristicas.map((h, index) => (
            <motion.div
              key={h.numero}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge className="bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 text-lg px-3 py-1">
                      {h.numero}
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{h.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{h.descricao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeuristicasSection;
