import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, Bug, DollarSign, Users, Target, BookOpen, BarChart3, Zap, TrendingUp } from "lucide-react";

const problemas = [
  { icon: Clock, title: "Atrasos constantes", desc: "Projetos que deveriam levar 6 meses estouram para 2 anos. Apenas 29% dos projetos de TI são entregues no prazo (Standish Group)." },
  { icon: DollarSign, title: "Orçamento estourado", desc: "Custos ultrapassam estimativas em 50–100%. O projeto do FBI Virtual Case File custou US$ 170 milhões e foi abandonado." },
  { icon: Bug, title: "Software com defeitos", desc: "Produtos entregues cheios de bugs. O bug do Therac-25 causou mortes por overdose de radiação nos anos 80." },
  { icon: Users, title: "Requisitos mal entendidos", desc: "O que foi construído não é o que o cliente pediu. Sem metodologia, as equipes simplesmente 'começavam a programar'." },
  { icon: AlertTriangle, title: "Projetos cancelados", desc: "Cerca de 19% dos projetos de TI são cancelados. Falta de processo é a principal causa." },
  { icon: Target, title: "Manutenção impossível", desc: "Código sem documentação, acoplado, impossível de evoluir. 60–80% do custo de software é manutenção." },
];

const timeline = [
  { year: "1725", title: "Cartões perfurados", desc: "Os primeiros 'programas' eram instruções mecânicas em cartões perfurados para teares automáticos.", color: "border-zinc-500/50" },
  { year: "1955–60", title: "Primeiras linguagens", desc: "Surgem FORTRAN (cálculos científicos), LISP (inteligência artificial) e COBOL (sistemas comerciais/bancários).", color: "border-blue-500/50" },
  { year: "1967", title: "Termo 'Engenharia de Software'", desc: "A OTAN cunha o termo para adequar o desenvolvimento de software às metodologias já utilizadas em outras engenharias.", color: "border-emerald-500/50" },
  { year: "1968", title: "Conferência da NATO", desc: "Em Garmisch (Alemanha), reconhece-se oficialmente a crise do software e a necessidade de engenharia no processo.", color: "border-emerald-500/50" },
  { year: "1970", title: "Modelo Cascata", desc: "Winston Royce propõe o ciclo de vida em cascata — o primeiro modelo formal de processo de software.", color: "border-amber-500/50" },
  { year: "1995", title: "CHAOS Report", desc: "Primeiro relatório Standish Group: apenas 16% dos projetos eram bem-sucedidos. Dados que chocaram a indústria.", color: "border-red-500/50" },
  { year: "2001", title: "Manifesto Ágil", desc: "17 profissionais lançam o Manifesto Ágil, revolucionando a forma de desenvolver software com foco em pessoas e entregas.", color: "border-cyan-500/50" },
];

const chaosData = [
  { label: "Sucesso", value: "29%", desc: "Entregues no prazo, orçamento e escopo", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { label: "Comprometidos", value: "52%", desc: "Entregues com atraso, acima do custo ou com menos funcionalidades", color: "text-amber-400", bg: "bg-amber-500/20" },
  { label: "Falha", value: "19%", desc: "Cancelados ou nunca utilizados", color: "text-red-400", bg: "bg-red-500/20" },
];

const pilares = [
  { icon: BookOpen, title: "Processo", desc: "Conjunto de atividades organizadas: requisitos → design → implementação → testes → manutenção. Dá previsibilidade ao trabalho." },
  { icon: BarChart3, title: "Métodos", desc: "Técnicas específicas: modelagem UML, elicitação de requisitos, revisão de código, testes automatizados, integração contínua." },
  { icon: Zap, title: "Ferramentas", desc: "Suportam o processo: IDEs (VS Code), versionamento (Git), CI/CD (GitHub Actions), gestão (Jira, Trello), testes (Selenium)." },
  { icon: TrendingUp, title: "Qualidade", desc: "Métricas e padrões: ISO 25010 — funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade, portabilidade." },
];

const HistoricoSection = () => {
  return (
    <section id="historico" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📜 Histórico e Conceitos <span className="text-emerald-400">Fundamentais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Engenharia de Software é uma disciplina da Ciência da Computação que estuda <strong>todos os processos envolvidos 
            no desenvolvimento de software</strong> — uma atividade complexa que exige habilidades multidisciplinares e trabalho 
            colaborativo (Sommerville, 2011).
          </p>
        </motion.div>

        {/* Software ≠ Programa */}
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
                  <p className="text-xs text-muted-foreground italic">Ex: Um sistema acadêmico completo com matrícula, notas, frequência, relatórios e integração com o MEC.</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Analogia:</strong> Um programa é como uma parede. Software é a casa inteira — com fundação, 
                  elétrica, hidráulica, projeto arquitetônico, manual do proprietário e manutenção periódica.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Crise do Software */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-3">💥 A Crise do Software</h3>
            <p className="text-muted-foreground mb-4">
              Por muito tempo, o desenvolvimento de sistemas foi realizado <strong>sem atenção a processos, metodologias e estruturas 
              organizacionais</strong>. A criação de software foi subestimada e realizada sem nenhuma metodologia, gerando erros em sistemas, 
              como problemas de cálculos e perdas financeiras e de tempo. Essa falta de controle sobre os processos fez com que o software 
              fosse entregue sem qualidade e com grande número de erros.
            </p>
            <p className="text-muted-foreground mb-4">
              Em <strong className="text-foreground">1967</strong>, a OTAN designou o termo "Engenharia de Software" para adequar o processo de 
              desenvolvimento com metodologias já utilizadas em outras engenharias. Dados históricos apontam que houve uma <strong>diminuição 
              brutal nos problemas</strong> após a adoção dessas metodologias.
            </p>
            <h4 className="font-semibold text-foreground mb-3">⚠️ Problemas típicos que motivaram a crise:</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {problemas.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                  <div className="p-1.5 rounded bg-destructive/10 shrink-0">
                    <p.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Linha do Tempo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">📅 Linha do Tempo da ES</h3>
          <div className="space-y-3">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className={`flex items-start gap-4 p-4 rounded-xl bg-card/50 border-l-4 ${item.color} border border-border`}>
                  <div className="shrink-0 w-16 text-center">
                    <span className="font-black text-emerald-400 text-lg">{item.year}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              A Engenharia de Software continua essencial — não é teoria, é <strong>sobrevivência no mercado</strong>.
            </p>
          </div>
        </motion.div>

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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">📌 Definição IEEE 610.12</h3>
            <blockquote className="text-muted-foreground italic border-l-4 border-emerald-500/50 pl-4 mb-4">
              "Engenharia de Software é a aplicação de uma abordagem sistemática, disciplinada e quantificável para o desenvolvimento, 
              operação e manutenção de software; isto é, a aplicação de engenharia ao software."
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
                <p className="text-xs text-muted-foreground">Pode ser medida: prazo, custo, defeitos, cobertura</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricoSection;
