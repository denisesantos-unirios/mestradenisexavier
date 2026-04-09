import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Shield, Code2, Wrench, Users2, Globe } from "lucide-react";

const aspectos = [
  {
    icon: ClipboardList,
    title: "Planejamento",
    desc: "Divide responsabilidades (individuais e coletivas) e permite mensurar o tempo necessário para cada projeto. Sem planejamento, não há previsibilidade.",
    exemplo: "Um time sem planejamento não sabe se vai entregar em 3 meses ou 1 ano. Com ES, usa-se estimativas baseadas em dados reais.",
  },
  {
    icon: Shield,
    title: "Qualidade do Produto",
    desc: "Não se refere apenas a software funcionando, mas ao atendimento das necessidades do cliente. A engenharia de requisitos é fundamental nessa etapa.",
    exemplo: "Um app de delivery que funciona mas não mostra o tempo de entrega — funciona, mas não atende a necessidade real do usuário.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    desc: "A escolha do processo ideal influencia diretamente no trabalho cotidiano de todos os envolvidos. Ganha relevância maior em times distribuídos geograficamente.",
    exemplo: "Um time em São Paulo + outro em Lisboa: sem processo definido, ninguém sabe o que o outro está fazendo. Scrum resolve isso com Daily e Sprint Review.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    desc: "Se o sistema foi corretamente planejado, o código tende a estar mais limpo e com menos defeitos, causando menos manutenção e facilitando as necessárias.",
    exemplo: "Sistema bem documentado: manutenção leva 2 horas. Sistema sem documentação: o dev leva 2 dias só para entender o código antes de modificar.",
  },
];

const porqueEstudar = [
  { emoji: "💰", text: "Salários mais altos — profissionais com conhecimento em processos ganham 30-50% mais que 'apenas programadores'" },
  { emoji: "🚀", text: "Carreira acelerada — entender o processo completo permite crescer para tech lead, arquiteto, gerente de projetos" },
  { emoji: "🛡️", text: "Menos retrabalho — equipes que seguem processos têm 40% menos bugs em produção" },
  { emoji: "🌍", text: "Empregabilidade global — ES é universal: as mesmas práticas valem no Brasil, EUA, Europa ou Ásia" },
  { emoji: "🤝", text: "Comunicação melhor — entre profissionais de TI e entre TI e cliente, reduzindo mal-entendidos" },
  { emoji: "📈", text: "Maturidade profissional — sair do 'amador que programa' para o 'engenheiro que constrói software'" },
];

const ImportanciaSection = () => {
  return (
    <section id="importancia" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 Importância da <span className="text-emerald-400">Engenharia de Software</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A ES é a disciplina que se preocupa em estudar e monitorar o bom andamento de <strong>todas as atividades</strong> do 
            desenvolvimento e a <strong>integração entre elas</strong>. É nela que se baseia o sucesso de um projeto no que tange 
            à sua organização (Sommerville, 2011).
          </p>
        </motion.div>

        {/* 4 Aspectos */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {aspectos.map((asp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <asp.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg">{asp.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{asp.desc}</p>
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-emerald-400">💡 Exemplo:</strong> {asp.exemplo}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ciclo completo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-500/10">
                  <Globe className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-bold text-foreground text-lg">A ES cobre TODO o ciclo de vida</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Desde os estágios iniciais da especificação do sistema até a sua manutenção, quando o sistema já está sendo usado. 
                Não é "só programar" — é planejar, especificar, desenvolver, testar, implantar e manter.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Especificação", "Análise", "Projeto", "Implementação", "Testes", "Implantação", "Manutenção"].map((etapa, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">{etapa}</span>
                    {i < 6 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Por que estudar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-foreground">Por que estudar Engenharia de Software?</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {porqueEstudar.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                      <span className="text-xl">{item.emoji}</span>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportanciaSection;
