import { motion } from "framer-motion";
import { Map } from "lucide-react";

const roteiro = [
  { n: "1", t: "Contexto", d: "Por que projetos falham: requisitos incompletos lideram o Chaos Report." },
  { n: "2", t: "Origem e Níveis", d: "De onde vêm os requisitos e como eles descem de negócio até especificação técnica." },
  { n: "3", t: "Tipos", d: "Requisitos Funcionais x Não-Funcionais, com exemplos da locadora de veículos." },
  { n: "4", t: "Processo", d: "Produção + Gerência de requisitos caminhando juntas." },
  { n: "5", t: "5 Etapas e MoSCoW", d: "Da elicitação ao gerenciamento, priorizando o que entra na entrega." },
  { n: "6", t: "Técnicas", d: "Entrevista, observação, workshops, prototipação e análise documental." },
  { n: "7", t: "Bom Requisito", d: "Template, características e exemplos ambíguo → testável." },
  { n: "8", t: "User Stories e Personas", d: "INVEST, critérios em Gherkin e perfis de usuário." },
  { n: "9", t: "Estudo de Caso", d: "Locadora de veículos: RF e RNF identificados na prática." },
  { n: "10", t: "Atividade", d: "Percorrer todo o processo em grupo, com entregas e rubrica." },
];

const RoteiroSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-500 mb-4">
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">Roteiro</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Como esta aula está organizada
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Um único fio condutor: o <strong className="text-foreground">Sistema da Locadora de Veículos</strong>.
            Todos os exemplos, requisitos e histórias desta aula se referem a esse mesmo caso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {roteiro.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="glass-card p-5 flex gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {r.n}
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{r.t}</h3>
                <p className="text-xs text-muted-foreground mt-1">{r.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoteiroSection;
