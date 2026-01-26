import { motion } from "framer-motion";
import { MessageSquare, BookOpen, HelpCircle } from "lucide-react";

const questoes = [
  {
    numero: 1,
    pergunta: "Qual técnica de elicitação você considera mais adequada para um projeto de e-commerce? Justifique.",
    dica: "Considere quem são os stakeholders (clientes, vendedores, administradores) e suas disponibilidades."
  },
  {
    numero: 2,
    pergunta: "Em que situação você combinaria duas ou mais técnicas de elicitação? Dê um exemplo prático.",
    dica: "Pense em como as técnicas podem se complementar (ex: entrevistas + observação)."
  },
  {
    numero: 3,
    pergunta: "Quais são os maiores desafios na elicitação de requisitos com clientes que não têm conhecimento técnico?",
    dica: "Reflita sobre comunicação, vocabulário e expectativas."
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Atividade JITT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discussão no Fórum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participe da discussão respondendo às questões abaixo no fórum do AVA.
          </p>
        </motion.div>

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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Leitura Recomendada</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  SOMMERVILLE - Cap. 4: Engenharia de Requisitos (Seção sobre Elicitação)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  PRESSMAN - Cap. 7: Técnicas de Elicitação
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
