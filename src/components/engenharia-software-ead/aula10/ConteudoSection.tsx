import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ChevronDown, CheckCircle, Lightbulb } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-background to-orange-950/30" />
    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-8">
          <GraduationCap className="w-4 h-4" /> Aula 10 • Revisão Integrada
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Revisão Integrada</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Processos + Requisitos + Modelagem + Ágil</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Amarrar tudo para avaliação e empregabilidade</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#revisao" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-amber-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const topicos = [
  { num: "1", title: "Engenharia de Software e Mercado", pontos: ["Definição e importância", "Papéis (Dev, PO, QA, SM, UX, DevOps)", "Tipos de sistemas (Web, Mobile, SaaS, Legado)"], color: "emerald" },
  { num: "2", title: "Processos de Software", pontos: ["Cascata: fases, vantagens, limitações", "Modelos incrementais e evolucionários", "Manifesto Ágil: 4 valores, mudança de mentalidade"], color: "blue" },
  { num: "3", title: "Scrum", pontos: ["Papéis: PO, SM, Dev Team", "Eventos: Sprint, Planning, Daily, Review, Retro", "Artefatos: Product Backlog, Sprint Backlog, Incremento"], color: "orange" },
  { num: "4", title: "Requisitos de Software", pontos: ["Funcionais vs Não Funcionais", "Erros clássicos: ambiguidade, incompletude", "Técnicas de elicitação: entrevista, brainstorming"], color: "cyan" },
  { num: "5", title: "Modelagem com UML", pontos: ["Por que modelar? Comunicação, descoberta, planejamento", "Diagrama de Casos de Uso: atores, UC, fronteira", "Relacionamentos: include, extend, generalização"], color: "indigo" },
  { num: "6", title: "Casos de Uso → User Stories", pontos: ["Transformação de UC para histórias de usuário", "Formato: Como [quem], eu quero [o quê], para [por quê]", "Conexão entre modelagem tradicional e ágil"], color: "fuchsia" },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  fuchsia: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400",
};

const ConteudoSection = () => (
  <section id="revisao" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          📚 Mapa de <span className="text-amber-400">Revisão</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {topicos.map((t, i) => {
          const cls = colorMap[t.color] || "";
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className={`h-full ${cls.split(' ').slice(0, 2).join(' ')}`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${cls.split(' ')[0]}`}>
                      <span className={`font-bold text-sm ${cls.split(' ').slice(2).join(' ')}`}>{t.num}</span>
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{t.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {t.pontos.map((p, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-1">
                        <span className={cls.split(' ').slice(2).join(' ')}>•</span>{p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Exercício Integrador */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Exercício Integrador</h3>
            <p className="text-muted-foreground mb-6">
              Dado o mini-cenário abaixo, responda individualmente ou em dupla:
            </p>

            <div className="p-5 rounded-xl bg-background/50 border border-border mb-6">
              <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" /> Mini-Cenário
              </p>
              <p className="text-sm text-muted-foreground">
                <em>"Uma escola de idiomas quer um sistema para gerenciar matrículas, turmas, aulas e notas dos alunos. 
                Professores precisam lançar presenças e notas. Alunos querem consultar suas notas e horários. 
                A secretaria gerencia tudo."</em>
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground text-sm">
                  <span className="text-amber-400">Questão 1:</span> Classifique 4 afirmações como requisitos funcionais ou não funcionais:
                </p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1 ml-4">
                  <li>a) O sistema deve permitir matrícula online</li>
                  <li>b) O sistema deve estar disponível 24/7</li>
                  <li>c) O professor deve poder lançar notas por turma</li>
                  <li>d) O sistema deve carregar em menos de 3 segundos</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground text-sm">
                  <span className="text-amber-400">Questão 2:</span> Escolha um processo (tradicional ou ágil) e justifique em 4-5 linhas
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground text-sm">
                  <span className="text-amber-400">Questão 3:</span> Desenhe ou descreva 3 casos de uso principais com seus atores
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-amber-400">
              <CheckCircle className="w-4 h-4" />
              <span>Pode valer como parte da nota de AVA/atividade diagnóstica</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
