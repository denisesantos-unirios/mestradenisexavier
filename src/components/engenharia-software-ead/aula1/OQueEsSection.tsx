import { motion } from "framer-motion";
import { AlertTriangle, Target, Bug, Clock, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problemas = [
  { icon: Clock, title: "Atrasos constantes", desc: "Projetos que deveriam levar 6 meses estouram para 2 anos." },
  { icon: DollarSign, title: "Orçamento estourado", desc: "Custos ultrapassam estimativas em 50-100% com frequência." },
  { icon: Bug, title: "Software com defeitos", desc: "Produtos entregues cheios de bugs, frustrando usuários." },
  { icon: Users, title: "Requisitos mal entendidos", desc: "O que foi construído não é o que o cliente pediu." },
  { icon: AlertTriangle, title: "Projetos cancelados", desc: "Cerca de 30% dos projetos de TI são cancelados antes da entrega." },
  { icon: Target, title: "Manutenção difícil", desc: "Código sem documentação, impossível de evoluir." },
];

const OQueEsSection = () => {
  return (
    <section id="o-que-e-es" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que é <span className="text-emerald-400">Engenharia de Software</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            É a aplicação de uma abordagem <strong>sistemática, disciplinada e quantificável</strong> ao desenvolvimento, operação e manutenção de software. Mas por que ela existe?
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-2">💥 A Crise do Software</h3>
            <p className="text-muted-foreground">
              Nos anos 60-70, a indústria percebeu que software não podia ser desenvolvido de forma artesanal. Projetos falhavam sistematicamente. 
              A Engenharia de Software surgiu para trazer <strong>método, processo e qualidade</strong> ao desenvolvimento.
            </p>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Problemas típicos de projetos reais</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problemas.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <p.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{p.title}</h4>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">📌 Definição IEEE 610.12</h3>
            <blockquote className="text-muted-foreground italic border-l-4 border-emerald-500/50 pl-4">
              "Engenharia de Software é a aplicação de uma abordagem sistemática, disciplinada e quantificável para o desenvolvimento, operação e manutenção de software; isto é, a aplicação de engenharia ao software."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OQueEsSection;
