import { motion } from "framer-motion";
import { AlertTriangle, Target, Bug, Clock, DollarSign, Users, TrendingUp, BarChart3, BookOpen, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problemas = [
  { icon: Clock, title: "Atrasos constantes", desc: "Projetos que deveriam levar 6 meses estouram para 2 anos. O Standish Group reporta que apenas 29% dos projetos de TI são entregues no prazo." },
  { icon: DollarSign, title: "Orçamento estourado", desc: "Custos ultrapassam estimativas em 50-100%. O projeto do FBI Virtual Case File custou US$ 170 milhões e foi abandonado." },
  { icon: Bug, title: "Software com defeitos", desc: "Produtos entregues cheios de bugs. O bug do Therac-25 (radioterapia) causou mortes por overdose de radiação nos anos 80." },
  { icon: Users, title: "Requisitos mal entendidos", desc: "O que foi construído não é o que o cliente pediu. A famosa tirinha do 'balanço na árvore' ilustra isso perfeitamente." },
  { icon: AlertTriangle, title: "Projetos cancelados", desc: "Cerca de 19% dos projetos de TI são cancelados. O Healthcare.gov (EUA, 2013) custou US$ 1,7 bilhão e falhou no lançamento." },
  { icon: Target, title: "Manutenção impossível", desc: "Código sem documentação, acoplado, impossível de evoluir. Estima-se que 60-80% do custo de software é manutenção." },
];

const chaosData = [
  { label: "Sucesso", value: "29%", desc: "Entregues no prazo, orçamento e escopo", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { label: "Comprometidos", value: "52%", desc: "Entregues com atraso, acima do custo ou com menos funcionalidades", color: "text-amber-400", bg: "bg-amber-500/20" },
  { label: "Falha", value: "19%", desc: "Cancelados ou nunca utilizados", color: "text-red-400", bg: "bg-red-500/20" },
];

const pilares = [
  { icon: BookOpen, title: "Processo", desc: "Conjunto de atividades organizadas: requisitos → design → implementação → testes → manutenção. Dá previsibilidade." },
  { icon: BarChart3, title: "Métodos", desc: "Técnicas específicas: modelagem UML, elicitação de requisitos, revisão de código, testes automatizados, integração contínua." },
  { icon: Zap, title: "Ferramentas", desc: "Suportam o processo: IDEs (VS Code), versionamento (Git), CI/CD (GitHub Actions), gestão (Jira, Trello), testes (Selenium)." },
  { icon: TrendingUp, title: "Qualidade", desc: "Métricas e padrões: ISO 25010 (funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade, portabilidade)." },
];

const OQueEsSection = () => {
  return (
    <section id="o-que-e-es" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que é <span className="text-emerald-400">Engenharia de Software</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            É a aplicação de uma abordagem <strong>sistemática, disciplinada e quantificável</strong> ao desenvolvimento, operação e manutenção de software. Mas por que ela existe?
          </p>
        </motion.div>

        {/* Software vs Programa */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🤔 Software ≠ Programa</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h4 className="font-bold text-red-400 mb-2">❌ Programa</h4>
                  <p className="text-sm text-muted-foreground mb-3">Código que resolve um problema específico.</p>
                  <p className="text-xs text-muted-foreground italic">Ex: Um script Python que calcula a média de notas.</p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="font-bold text-emerald-400 mb-2">✅ Software</h4>
                  <p className="text-sm text-muted-foreground mb-3">Programa + documentação + dados + procedimentos + pessoas + manutenção.</p>
                  <p className="text-xs text-muted-foreground italic">Ex: Um sistema acadêmico completo com matrícula, notas, frequência, relatórios, integração com o MEC.</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Analogia:</strong> Um programa é como uma parede. Software é a casa inteira — com fundação, elétrica, hidráulica, projeto arquitetônico, manual do proprietário e manutenção periódica.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Crise do Software */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-3">💥 A Crise do Software (1965-1985)</h3>
            <p className="text-muted-foreground mb-4">
              Nos anos 60-70, a indústria percebeu que software não podia ser desenvolvido de forma artesanal. A complexidade dos sistemas crescia exponencialmente, mas os métodos de desenvolvimento continuavam amadores.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-bold text-foreground text-lg">1968</p>
                <p className="text-sm text-muted-foreground">Conferência da NATO em Garmisch (Alemanha) cunha o termo "Engenharia de Software" pela primeira vez.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-bold text-foreground text-lg">1969</p>
                <p className="text-sm text-muted-foreground">O software do Apollo 11 (Margaret Hamilton) quase falha durante o pouso lunar — salvo por boas práticas de engenharia.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-bold text-foreground text-lg">1995</p>
                <p className="text-sm text-muted-foreground">Primeiro relatório CHAOS (Standish Group): apenas 16% dos projetos eram bem-sucedidos.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              A Engenharia de Software surgiu para trazer <strong>método, processo e qualidade</strong> ao desenvolvimento, transformando a construção de software de "arte" em "engenharia".
            </p>
          </div>
        </motion.div>

        {/* CHAOS Report */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">📊 Relatório CHAOS — Standish Group (2020)</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Pesquisa com mais de 50.000 projetos de software no mundo</p>
          <div className="grid md:grid-cols-3 gap-4">
            {chaosData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="h-full bg-card/50 border-border text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mx-auto mb-3`}>
                      <span className={`text-2xl font-black ${item.color}`}>{item.value}</span>
                    </div>
                    <h4 className={`font-bold text-lg ${item.color} mb-1`}>{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-amber-400">Reflexão:</strong> Mesmo em 2020, mais da metade dos projetos não são entregues conforme planejado. 
              Isso mostra que a Engenharia de Software continua essencial — não é teoria, é <strong>sobrevivência no mercado</strong>.
            </p>
          </div>
        </motion.div>

        {/* Problemas típicos */}
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">⚠️ Problemas típicos de projetos reais</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {problemas.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
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

        {/* 4 Pilares */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">🏗️ Os 4 Pilares da Engenharia de Software</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Segundo Pressman e Sommerville</p>
          <div className="grid md:grid-cols-2 gap-4">
            {pilares.map((pilar, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-card/50 border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
                        <pilar.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{pilar.title}</h4>
                        <p className="text-sm text-muted-foreground">{pilar.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Definição IEEE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">📌 Definição IEEE 610.12</h3>
            <blockquote className="text-muted-foreground italic border-l-4 border-emerald-500/50 pl-4 mb-4">
              "Engenharia de Software é a aplicação de uma abordagem sistemática, disciplinada e quantificável para o desenvolvimento, operação e manutenção de software; isto é, a aplicação de engenharia ao software."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-background/50 border border-border text-center">
                <p className="font-bold text-emerald-400 text-sm">Sistemática</p>
                <p className="text-xs text-muted-foreground">Segue passos organizados e repetíveis</p>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border text-center">
                <p className="font-bold text-emerald-400 text-sm">Disciplinada</p>
                <p className="text-xs text-muted-foreground">Com regras, padrões e boas práticas</p>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border text-center">
                <p className="font-bold text-emerald-400 text-sm">Quantificável</p>
                <p className="text-xs text-muted-foreground">Pode ser medida: prazo, custo, defeitos, cobertura de testes</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Por que estudar ES */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🎯 Por que estudar Engenharia de Software?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { emoji: "💰", text: "Salários mais altos — profissionais com conhecimento em processos ganham 30-50% mais que 'apenas programadores'" },
                  { emoji: "🚀", text: "Carreira acelerada — entender o processo completo permite crescer para tech lead, arquiteto, gerente" },
                  { emoji: "🛡️", text: "Menos retrabalho — equipes que seguem processos têm 40% menos bugs em produção" },
                  { emoji: "🌍", text: "Empregabilidade global — ES é universal: as mesmas práticas valem no Brasil, EUA, Europa ou Ásia" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
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
