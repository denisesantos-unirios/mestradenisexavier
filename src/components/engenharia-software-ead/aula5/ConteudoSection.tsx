import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, ChevronDown, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-background to-teal-950/30" />
    <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
          <FileSearch className="w-4 h-4" /> Aula 5 • Teórica + Prática
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Requisitos de Software</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">em Linguagem de Negócio</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Requisitos voltados ao entendimento com o cliente, não só "coisa acadêmica"</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#requisitos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const requisitosFunc = [
  "O sistema deve permitir agendamento de consultas",
  "O sistema deve enviar lembretes por SMS/WhatsApp",
  "O paciente pode cancelar com até 24h de antecedência",
  "O médico pode visualizar sua agenda do dia",
  "O sistema deve gerar relatório mensal de atendimentos",
];

const requisitosNaoFunc = [
  { tipo: "Desempenho", ex: "O sistema deve responder em menos de 2 segundos" },
  { tipo: "Segurança", ex: "Dados de pacientes devem ser criptografados" },
  { tipo: "Usabilidade", ex: "A interface deve funcionar em celulares" },
  { tipo: "Disponibilidade", ex: "O sistema deve estar disponível 99,5% do tempo" },
];

const erros = [
  { titulo: "Ambiguidade", ex: "\"O sistema deve ser rápido\" — rápido é quanto?", icon: "🤔" },
  { titulo: "Incompletude", ex: "\"O sistema deve gerar relatórios\" — quais relatórios? para quem?", icon: "❓" },
  { titulo: "Conflito", ex: "Marketing quer uma coisa, TI quer outra, cliente quer uma terceira", icon: "⚔️" },
  { titulo: "Tecnês", ex: "\"Usar API REST com JWT\" — o dono da clínica não entende isso", icon: "🤖" },
];

const ConteudoSection = () => (
  <section id="requisitos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que são <span className="text-cyan-400">Requisitos</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Requisitos descrevem <strong>o que o sistema deve fazer</strong> (funcionais) e <strong>como deve se comportar</strong> (não funcionais).
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-cyan-500/5 border-cyan-500/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">📋 Requisitos Funcionais</h3>
            <p className="text-sm text-muted-foreground mb-4">Descrevem <strong>funcionalidades</strong> — o que o sistema faz.</p>
            <div className="space-y-2">
              {requisitosFunc.map((r, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-background/50">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-teal-500/5 border-teal-500/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-teal-400 mb-4">⚙️ Requisitos Não Funcionais</h3>
            <p className="text-sm text-muted-foreground mb-4">Descrevem <strong>qualidades</strong> — como o sistema se comporta.</p>
            <div className="space-y-2">
              {requisitosNaoFunc.map((r, i) => (
                <div key={i} className="p-2 rounded-lg bg-background/50">
                  <span className="text-xs font-semibold text-teal-400">{r.tipo}:</span>
                  <span className="text-sm text-muted-foreground ml-2">{r.ex}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Erros Clássicos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-400" /> Erros Clássicos em Requisitos
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {erros.map((e, i) => (
            <Card key={i} className="bg-amber-500/5 border-amber-500/20">
              <CardContent className="p-5">
                <h4 className="font-bold text-foreground mb-1">{e.icon} {e.titulo}</h4>
                <p className="text-sm text-muted-foreground italic">"{e.ex}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade: Estudo de Caso</h3>
            <div className="p-4 rounded-xl bg-background/50 border border-border mb-6">
              <p className="font-semibold text-foreground mb-1 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-cyan-400" /> Cenário</p>
              <p className="text-sm text-muted-foreground">
                <em>"Sistema de agendamento para uma clínica pequena"</em> — A clínica tem 3 médicos, 1 recepcionista e atende ~40 pacientes/dia. 
                Hoje tudo é feito em agenda de papel e WhatsApp.
              </p>
            </div>
            <p className="text-muted-foreground mb-4">Em duplas/grupos, levantar:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground text-sm">5 Requisitos Funcionais</p>
                <p className="text-xs text-muted-foreground">Escritos em linguagem que o dono da clínica entende</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground text-sm">3 Requisitos Não Funcionais</p>
                <p className="text-xs text-muted-foreground">Com valores mensuráveis quando possível</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega no AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
