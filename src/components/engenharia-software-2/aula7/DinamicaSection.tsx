import { motion } from "framer-motion";
import { 
  Users, MessageCircle, ClipboardList, 
  HelpCircle, CheckCircle2, AlertCircle 
} from "lucide-react";

const DinamicaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Exercício Prático</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dinâmica: Entrevista com Stakeholder
          </h2>
        </motion.div>

        {/* Cenário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">O Cenário</h3>
          <p className="text-muted-foreground mb-4">
            Vocês foram contratados para desenvolver um sistema para uma <strong className="text-foreground">biblioteca universitária</strong>. 
            O cliente (interpretado por um colega ou pelo professor) é o bibliotecário-chefe que precisa informatizar os processos.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-teal-500/10">
              <h4 className="font-semibold text-teal-300 mb-2">Papel: Analista</h4>
              <p className="text-sm text-muted-foreground">
                Conduzir a entrevista, fazer perguntas abertas e fechadas, anotar requisitos
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/10">
              <h4 className="font-semibold text-emerald-300 mb-2">Papel: Cliente</h4>
              <p className="text-sm text-muted-foreground">
                Responder às perguntas, descrever problemas atuais e expectativas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Roteiro de Entrevista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Roteiro de Perguntas</h3>
          </div>

          <div className="space-y-4">
            {[
              { fase: "Abertura", perguntas: ["Pode descrever como funciona a biblioteca hoje?", "Quais são os principais problemas que vocês enfrentam?"] },
              { fase: "Exploração", perguntas: ["Como é feito o empréstimo de livros atualmente?", "Como vocês controlam devoluções atrasadas?", "Quantos funcionários trabalham aqui?"] },
              { fase: "Aprofundamento", perguntas: ["O que acontece quando um livro está reservado?", "Como funciona a renovação de empréstimo?", "Existem categorias de usuários diferentes?"] },
              { fase: "Expectativas", perguntas: ["O que você gostaria que o sistema fizesse?", "Quais funcionalidades são mais urgentes?", "Como você imagina a interface do sistema?"] },
              { fase: "Fechamento", perguntas: ["Há algo mais que você gostaria de mencionar?", "Posso entrar em contato para esclarecer dúvidas?"] }
            ].map((fase, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-background/50">
                <h4 className="font-semibold text-foreground mb-2">{fase.fase}</h4>
                <ul className="space-y-1">
                  {fase.perguntas.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dicas */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-green-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <h4 className="font-bold text-foreground">Boas Práticas</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use perguntas abertas ("Como você...", "Por que...")</li>
              <li>• Anote tudo, mesmo o que parece óbvio</li>
              <li>• Reformule para confirmar entendimento</li>
              <li>• Deixe o cliente falar, não interrompa</li>
              <li>• Identifique requisitos implícitos</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-red-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <h4 className="font-bold text-foreground">Evite</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Perguntas indutivas ("Você não acha que...")</li>
              <li>• Jargões técnicos com o cliente</li>
              <li>• Assumir que você já sabe a resposta</li>
              <li>• Falar mais do que ouvir</li>
              <li>• Propor soluções durante a entrevista</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DinamicaSection;
