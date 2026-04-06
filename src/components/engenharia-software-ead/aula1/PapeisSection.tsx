import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Search, ShieldCheck, Palette, Server, ClipboardList } from "lucide-react";

const papeis = [
  { icon: Code, title: "Desenvolvedor (Dev)", desc: "Escreve o código, implementa funcionalidades, corrige bugs. Front-end, back-end ou fullstack.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Search, title: "Analista de Sistemas", desc: "Entende as necessidades do negócio e traduz em requisitos técnicos. Faz a ponte entre cliente e time.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: ClipboardList, title: "Product Owner (PO)", desc: "Dono do produto. Define prioridades, gerencia o backlog, representa o cliente no time ágil.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: ShieldCheck, title: "QA / Testador", desc: "Garante a qualidade do software. Planeja e executa testes, encontra falhas antes do usuário.", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Server, title: "DevOps", desc: "Automatiza deploys, monitora infraestrutura, garante que o sistema esteja sempre disponível.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Palette, title: "UX Designer", desc: "Projeta a experiência do usuário. Pesquisa, cria protótipos, testa interfaces para garantir usabilidade.", color: "text-pink-400", bg: "bg-pink-500/10" },
];

const PapeisSection = () => {
  return (
    <section id="papeis" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Papéis em uma <span className="text-emerald-400">Equipe de Desenvolvimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nenhum software complexo é feito por uma pessoa só. Conheça os principais papéis do mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papeis.map((papel, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${papel.bg} flex items-center justify-center mb-4`}>
                    <papel.icon className={`w-6 h-6 ${papel.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{papel.title}</h3>
                  <p className="text-sm text-muted-foreground">{papel.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PapeisSection;
