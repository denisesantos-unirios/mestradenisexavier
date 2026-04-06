import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, FileText, Repeat, ArrowRight, CheckCircle } from "lucide-react";

const valores = [
  { icon: Users, antes: "Processos e ferramentas", depois: "Indivíduos e interações" },
  { icon: FileText, antes: "Documentação abrangente", depois: "Software em funcionamento" },
  { icon: Heart, antes: "Negociação de contratos", depois: "Colaboração com o cliente" },
  { icon: Repeat, antes: "Seguir um plano", depois: "Responder a mudanças" },
];

const problemas = [
  "Requisitos mudam o tempo todo",
  "Cliente não sabe exatamente o que quer",
  "Feedback só vem no final do projeto",
  "Time não se comunica bem",
  "Demora demais para entregar algo funcional",
  "Documentação extensa que ninguém lê",
];

const ConteudoSection = () => (
  <section id="manifesto" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          📜 <span className="text-violet-400">Manifesto Ágil</span> (2001)
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          17 desenvolvedores se reuniram e definiram 4 valores que mudaram a indústria de software.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {valores.map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <v.icon className="w-5 h-5 text-violet-400 shrink-0" />
                  <span className="text-muted-foreground line-through text-sm">{v.antes}</span>
                  <ArrowRight className="w-4 h-4 text-violet-400 shrink-0" />
                  <span className="font-semibold text-foreground text-sm">{v.depois}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mentalidade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🧠 Diferença de Mentalidade</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <h4 className="font-bold text-destructive mb-3">❌ Plano Rígido (Tradicional)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Definir tudo no início</li>
                <li>• Mudanças são caras e indesejadas</li>
                <li>• Sucesso = seguir o plano original</li>
                <li>• Cliente vê o resultado só no final</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-500/5 border-violet-500/20">
            <CardContent className="p-6">
              <h4 className="font-bold text-violet-400 mb-3">✅ Adaptação Contínua (Ágil)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Planejar em ciclos curtos (sprints)</li>
                <li>• Mudanças são bem-vindas e naturais</li>
                <li>• Sucesso = entregar valor ao cliente</li>
                <li>• Entregas frequentes e feedback rápido</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Frameworks */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🔧 Frameworks Ágeis (Visão Geral)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-foreground mb-2">Scrum</h4>
              <p className="text-sm text-muted-foreground">Framework mais popular. Papéis definidos (PO, SM, Dev Team), eventos fixos (Sprint, Daily, Review, Retro) e artefatos claros. Ideal para projetos de produto.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-foreground mb-2">Kanban</h4>
              <p className="text-sm text-muted-foreground">Método visual de gerenciamento de fluxo. Usa quadro com colunas (To Do, Doing, Done), limita WIP. Ideal para suporte, manutenção e fluxo contínuo.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade Prática</h3>
            <p className="text-muted-foreground mb-4">Em grupos, analise os problemas clássicos abaixo e marque quais o ágil ajuda a mitigar:</p>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {problemas.map((p, i) => (
                <div key={i} className="p-3 rounded-lg bg-background/50 border border-border flex items-start gap-2">
                  <span className="text-violet-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                  <span className="text-sm text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Para cada problema marcado, justifique em 2-3 linhas <strong>como</strong> a abordagem ágil mitiga esse problema.
            </p>

            <div className="flex items-center gap-2 text-sm text-violet-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega: comentário em fórum do AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ConteudoSection;
