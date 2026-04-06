import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Search, ShieldCheck, Palette, Server, ClipboardList, ArrowRight } from "lucide-react";

const papeis = [
  { 
    icon: Code, title: "Desenvolvedor (Dev)", 
    desc: "Escreve o código, implementa funcionalidades, corrige bugs. Front-end, back-end ou fullstack.",
    dia: "Participa da daily, pega uma task do Jira, abre o VS Code, implementa, faz commit no Git, abre um Pull Request para code review.",
    ferramentas: "VS Code, Git, GitHub, Docker, Node.js, React, Python",
    salario: "R$ 4.000 – R$ 25.000+",
    color: "text-blue-400", bg: "bg-blue-500/10" 
  },
  { 
    icon: Search, title: "Analista de Sistemas", 
    desc: "Entende as necessidades do negócio e traduz em requisitos técnicos. Faz a ponte entre cliente e time.",
    dia: "Reúne com stakeholders, documenta requisitos, valida protótipos com o cliente, escreve especificações.",
    ferramentas: "Confluence, Draw.io, Lucidchart, Word, Figma (para validar)",
    salario: "R$ 5.000 – R$ 15.000",
    color: "text-emerald-400", bg: "bg-emerald-500/10" 
  },
  { 
    icon: ClipboardList, title: "Product Owner (PO)", 
    desc: "Dono do produto. Define prioridades, gerencia o backlog, representa o cliente no time ágil.",
    dia: "Prioriza o backlog, escreve user stories, aceita ou rejeita entregas, conversa com stakeholders diariamente.",
    ferramentas: "Jira, Trello, Miro, Productboard, Notion",
    salario: "R$ 8.000 – R$ 20.000",
    color: "text-purple-400", bg: "bg-purple-500/10" 
  },
  { 
    icon: ShieldCheck, title: "QA / Testador", 
    desc: "Garante a qualidade do software. Planeja e executa testes, encontra falhas antes do usuário.",
    dia: "Escreve casos de teste, automatiza testes com Selenium/Cypress, reporta bugs, valida correções.",
    ferramentas: "Selenium, Cypress, Postman, JMeter, TestRail",
    salario: "R$ 4.000 – R$ 18.000",
    color: "text-amber-400", bg: "bg-amber-500/10" 
  },
  { 
    icon: Server, title: "DevOps / SRE", 
    desc: "Automatiza deploys, monitora infraestrutura, garante que o sistema esteja sempre disponível.",
    dia: "Configura pipelines CI/CD, monitora servidores, responde a incidentes, otimiza custos de cloud.",
    ferramentas: "AWS/Azure/GCP, Docker, Kubernetes, Terraform, Grafana",
    salario: "R$ 8.000 – R$ 30.000+",
    color: "text-cyan-400", bg: "bg-cyan-500/10" 
  },
  { 
    icon: Palette, title: "UX Designer", 
    desc: "Projeta a experiência do usuário. Pesquisa, cria protótipos, testa interfaces para garantir usabilidade.",
    dia: "Faz pesquisa com usuários, cria wireframes e protótipos no Figma, testa usabilidade, itera no design.",
    ferramentas: "Figma, Adobe XD, Maze, Hotjar, Miro",
    salario: "R$ 5.000 – R$ 20.000",
    color: "text-pink-400", bg: "bg-pink-500/10" 
  },
];

const OQueEsSection = () => {
  return (
    <section id="papeis" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Papéis em uma <span className="text-emerald-400">Equipe de Desenvolvimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nenhum software complexo é feito por uma pessoa só. Conheça os principais papéis do mercado, o que cada um faz no dia a dia, as ferramentas que usa e a faixa salarial.
          </p>
        </motion.div>

        {/* Fluxo de equipe */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">🔄 Como uma equipe trabalha junta?</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                {["PO define o quê", "Analista detalha", "UX projeta", "Dev implementa", "QA testa", "DevOps entrega"].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-muted-foreground font-medium">{step}</span>
                    {i < 5 && <ArrowRight className="w-4 h-4 text-emerald-400 hidden md:block" />}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Em times ágeis, esse fluxo é iterativo — acontece a cada Sprint (1-4 semanas), não em sequência única.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {papeis.map((papel, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${papel.bg} flex items-center justify-center mb-4`}>
                    <papel.icon className={`w-6 h-6 ${papel.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{papel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{papel.desc}</p>
                  
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-secondary/30">
                      <p className="text-xs font-semibold text-foreground mb-1">📋 Dia típico:</p>
                      <p className="text-xs text-muted-foreground">{papel.dia}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/30">
                      <p className="text-xs font-semibold text-foreground mb-1">🛠️ Ferramentas:</p>
                      <p className="text-xs text-muted-foreground">{papel.ferramentas}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-xs font-semibold text-emerald-400">💰 Faixa salarial: {papel.salario}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mercado brasileiro */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">🇧🇷 Mercado de TI no Brasil (2024-2025)</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { valor: "159 mil", desc: "Vagas abertas em TI por ano (Brasscom)" },
                  { valor: "53 mil", desc: "Formandos em TI por ano — déficit enorme" },
                  { valor: "R$ 8.200", desc: "Salário médio em TI (acima da média nacional)" },
                  { valor: "2x", desc: "Crescimento do setor vs PIB brasileiro" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-2xl font-black text-emerald-400">{item.valor}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default OQueEsSection;
