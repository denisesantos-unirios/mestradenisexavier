import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Cloud, Building, Landmark, Lightbulb, ArrowRight } from "lucide-react";

const tipos = [
  { 
    icon: Globe, title: "Sistemas Web", 
    exemplos: "E-commerces, portais, sistemas corporativos internos, plataformas educacionais.",
    ex: "Amazon, Mercado Livre, sistemas de ERP web, AVA da universidade",
    tech: "React, Angular, Vue.js, Node.js, Python (Django/Flask), PostgreSQL",
    desafios: "Performance com muitos usuários simultâneos, SEO, responsividade, segurança (XSS, SQL Injection)",
    color: "from-blue-500 to-cyan-500" 
  },
  { 
    icon: Smartphone, title: "Mobile", 
    exemplos: "Apps nativos (Swift/Kotlin), híbridos (React Native/Flutter) ou PWAs.",
    ex: "iFood, Uber, Nubank, WhatsApp",
    tech: "Swift (iOS), Kotlin (Android), React Native, Flutter, Firebase",
    desafios: "Diferentes tamanhos de tela, consumo de bateria, funcionamento offline, publicação nas stores",
    color: "from-purple-500 to-pink-500" 
  },
  { 
    icon: Cloud, title: "SaaS (Cloud)", 
    exemplos: "Software como Serviço — o cliente paga assinatura, não compra licença.",
    ex: "Slack, Notion, Salesforce, Google Workspace, Netflix",
    tech: "Microserviços, APIs REST, AWS/Azure/GCP, Docker, Kubernetes",
    desafios: "Multi-tenancy (vários clientes na mesma infra), disponibilidade 99.9%, escalabilidade automática",
    color: "from-emerald-500 to-teal-500" 
  },
  { 
    icon: Building, title: "Legado", 
    exemplos: "Sistemas antigos (10-40+ anos) ainda em produção, difíceis de manter e evoluir.",
    ex: "Sistemas bancários em COBOL, ERPs antigos em Delphi, mainframes",
    tech: "COBOL, Delphi, Visual Basic 6, Oracle Forms, mainframes IBM",
    desafios: "Falta de documentação, profissionais escassos, risco alto em mudanças, custo de migração",
    color: "from-amber-500 to-orange-500" 
  },
  { 
    icon: Landmark, title: "Governamental", 
    exemplos: "Sistemas do governo com alta regulação, licitação e burocracia.",
    ex: "gov.br, SIAFI, sistemas do SUS, INSS Digital, e-Social",
    tech: "Java (muito comum), .NET, Oracle, processos cascata ou híbridos",
    desafios: "Licitação demorada, requisitos rígidos, acessibilidade obrigatória, integração com outros órgãos",
    color: "from-red-500 to-rose-500" 
  },
  { 
    icon: Lightbulb, title: "Startups / MVP", 
    exemplos: "Produtos inovadores, velocidade é prioridade, validar hipótese rápido.",
    ex: "Fintechs (PicPay), healthtechs (Conexa), edtechs (Descomplica)",
    tech: "Stack moderna: Next.js, Supabase, Vercel, Firebase, no-code/low-code",
    desafios: "Time-to-market, pivotar rápido, escalar de 0 a milhões, dívida técnica consciente",
    color: "from-yellow-500 to-amber-500" 
  },
];

const TiposSistemasSection = () => {
  return (
    <section id="tipos-sistemas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de <span className="text-emerald-400">Sistemas no Mercado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O mercado de software é diverso. Cada tipo de sistema tem tecnologias, processos e desafios diferentes. 
            Saber isso ajuda você a <strong>escolher sua área de atuação</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tipos.map((tipo, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-all group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tipo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tipo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{tipo.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tipo.exemplos}</p>
                  
                  <div className="space-y-2">
                    <div className="px-3 py-2 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                      <strong className="text-foreground">Exemplos:</strong> {tipo.ex}
                    </div>
                    <div className="px-3 py-2 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                      <strong className="text-foreground">Tecnologias:</strong> {tipo.tech}
                    </div>
                    <div className="px-3 py-2 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs text-muted-foreground">
                      <strong className="text-amber-400">Desafios:</strong> {tipo.desafios}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparação prática */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">🤔 Onde quero trabalhar? Comparação rápida</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-foreground">Critério</th>
                      <th className="text-center p-3 text-foreground">Startup</th>
                      <th className="text-center p-3 text-foreground">Corporação</th>
                      <th className="text-center p-3 text-foreground">Governo</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["Velocidade", "🚀 Muito rápida", "🐢 Moderada", "🐌 Lenta"],
                      ["Estabilidade", "⚡ Incerta", "✅ Alta", "✅ Muito alta"],
                      ["Tecnologias", "🆕 Mais modernas", "🔄 Misto", "📦 Mais tradicionais"],
                      ["Processo", "🏃 Ágil", "🔀 Híbrido", "📋 Cascata/formal"],
                      ["Aprendizado", "📈 Exponencial", "📊 Estruturado", "📚 Especializado"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">{row[0]}</td>
                        <td className="p-3 text-center">{row[1]}</td>
                        <td className="p-3 text-center">{row[2]}</td>
                        <td className="p-3 text-center">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TiposSistemasSection;
