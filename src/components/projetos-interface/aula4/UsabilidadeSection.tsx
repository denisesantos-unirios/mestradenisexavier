import { motion } from "framer-motion";
import { Target, CheckCircle2, Gauge, SmilePlus, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metas = [
  {
    icon: CheckCircle2,
    title: "Eficácia",
    description: "O sistema permite que os usuários alcancem seus objetivos?",
    example: "Usuário consegue completar uma compra sem erros",
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Gauge,
    title: "Eficiência",
    description: "Os usuários conseguem realizar tarefas com mínimo esforço?",
    example: "Preencher um formulário em menos de 2 minutos",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "O sistema protege o usuário de erros e ações indesejadas?",
    example: "Confirmação antes de deletar dados importantes",
    color: "text-red-400",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Wrench,
    title: "Utilidade",
    description: "O sistema oferece as funcionalidades que o usuário precisa?",
    example: "App de banco permite pagar boletos e fazer transferências",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: SmilePlus,
    title: "Satisfação",
    description: "Os usuários se sentem confortáveis usando o sistema?",
    example: "Usuário recomenda o app para amigos",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  }
];

const UsabilidadeSection = () => {
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
            O que é <span className="text-green-400">Usabilidade</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Usabilidade é o fator que assegura que os produtos são fáceis de usar, 
            eficientes e agradáveis da perspectiva do usuário.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metas.map((meta, index) => (
            <motion.div
              key={meta.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-green-500/50 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${meta.bgColor} flex items-center justify-center mb-4`}>
                    <meta.icon className={`w-6 h-6 ${meta.color}`} />
                  </div>
                  <CardTitle className="text-xl">{meta.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{meta.description}</p>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-sm">
                      <span className="text-green-400 font-medium">Exemplo: </span>
                      {meta.example}
                    </p>
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

export default UsabilidadeSection;
