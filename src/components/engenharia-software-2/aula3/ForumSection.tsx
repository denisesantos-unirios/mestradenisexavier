import { motion } from "framer-motion";
import { 
  MessageSquare, BookOpen, HelpCircle, 
  Send, Users, Lightbulb 
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const questoes = [
  {
    numero: 1,
    pergunta: "Na sua opinião, qual é a diferença entre 'o que o cliente pede' e 'o que o cliente realmente precisa'?",
    dica: "Pense em situações onde o cliente solicitou algo, mas o verdadeiro problema era outro."
  },
  {
    numero: 2,
    pergunta: "Por que você acha que tantos projetos de software falham por problemas de requisitos?",
    dica: "Considere aspectos como comunicação, mudanças, e compreensão do negócio."
  },
  {
    numero: 3,
    pergunta: "Cite um exemplo (real ou fictício) de um software que falhou ou teve problemas por requisitos mal definidos.",
    dica: "Pode ser um app, site, ou sistema que você conhece e que não atendeu às expectativas."
  }
];

const ForumSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Atividade JITT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discussão no Fórum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participe da discussão respondendo às questões abaixo no fórum do AVA. 
            Suas reflexões serão discutidas na próxima aula presencial.
          </p>
        </motion.div>

        {/* Instruções */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-8 border-teal-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como participar</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Responda às 3 questões no fórum do AVA</li>
                <li>• Comente a resposta de pelo menos 2 colegas</li>
                <li>• Prazo: até a próxima aula presencial</li>
                <li>• Suas reflexões serão base para a discussão em sala</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Questões */}
        <div className="space-y-6">
          {questoes.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{q.numero}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{q.pergunta}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HelpCircle className="w-4 h-4" />
                    <span className="italic">{q.dica}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leitura Complementar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Leitura Complementar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Para aprofundar seu conhecimento antes da próxima aula:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  SOMMERVILLE, Ian. Engenharia de Software - Capítulo 4: Engenharia de Requisitos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  PRESSMAN, Roger. Engenharia de Software - Capítulo 5: Entendendo os Requisitos
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForumSection;
