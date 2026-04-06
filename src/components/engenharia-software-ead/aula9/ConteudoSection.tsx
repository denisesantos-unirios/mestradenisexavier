import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/30 via-background to-purple-950/30" />
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400 text-sm font-medium mb-8">
          <Scissors className="w-4 h-4" /> Aula 9 • Prática - Estudo de Caso 2
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Modelagem + Ágil</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">De Casos de Uso a User Stories</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Segunda prática de modelagem + conexão com histórias de usuário</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#case2" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-fuchsia-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ConteudoSection = () => (
  <section id="case2" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Conexão UC -> HU */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
          🔗 De <span className="text-fuchsia-400">Requisitos</span> a <span className="text-purple-400">Casos de Uso</span> a <span className="text-violet-400">User Stories</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          {[
            { label: "Requisitos", emoji: "📋", desc: "O que o sistema faz" },
            { label: "Casos de Uso", emoji: "⭕", desc: "Visão estruturada" },
            { label: "User Stories", emoji: "📝", desc: "Visão ágil" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border text-center min-w-[140px]">
                <span className="text-2xl block mb-1">{item.emoji}</span>
                <p className="font-bold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              {i < 2 && <ArrowRight className="w-5 h-5 text-fuchsia-400 hidden md:block" />}
            </div>
          ))}
        </div>

        <Card className="bg-fuchsia-500/5 border-fuchsia-500/20">
          <CardContent className="p-6">
            <h3 className="font-bold text-foreground mb-3">Exemplo de transformação:</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-background/50">
                <p className="text-xs text-fuchsia-400 font-semibold">Caso de Uso:</p>
                <p className="text-sm text-muted-foreground">Agendar Serviço</p>
              </div>
              <div className="p-3 rounded-lg bg-background/50">
                <p className="text-xs text-purple-400 font-semibold">User Story 1:</p>
                <p className="text-sm text-muted-foreground">Como <strong>cliente</strong>, eu quero <strong>escolher um horário disponível</strong>, para que <strong>eu possa agendar meu corte sem esperar</strong>.</p>
              </div>
              <div className="p-3 rounded-lg bg-background/50">
                <p className="text-xs text-purple-400 font-semibold">User Story 2:</p>
                <p className="text-sm text-muted-foreground">Como <strong>cliente</strong>, eu quero <strong>receber confirmação por WhatsApp</strong>, para que <strong>eu tenha certeza de que meu agendamento foi registrado</strong>.</p>
              </div>
              <div className="p-3 rounded-lg bg-background/50">
                <p className="text-xs text-purple-400 font-semibold">User Story 3:</p>
                <p className="text-sm text-muted-foreground">Como <strong>barbeiro</strong>, eu quero <strong>visualizar minha agenda do dia</strong>, para que <strong>eu possa me organizar entre os atendimentos</strong>.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Estudo de Caso 2 */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">📋 Estudo de Caso 2</h3>
            <p className="text-lg text-muted-foreground">
              <em>"Aplicativo de agendamento de serviços para uma barbearia/salão"</em>
            </p>
            <p className="text-muted-foreground mt-3">
              O salão tem 4 profissionais, cada um com horários diferentes. Clientes querem agendar pelo celular, 
              escolher o profissional e o serviço. O dono quer controlar a agenda e ver relatórios de atendimento.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border-fuchsia-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade Prática (aula inteira)</h3>
            <p className="text-muted-foreground mb-6">Em grupos:</p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground"><span className="text-fuchsia-400">Parte 1:</span> Construir o diagrama de casos de uso do salão/barbearia</p>
                <p className="text-xs text-muted-foreground mt-1">Identifique atores, casos de uso e relacionamentos</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground"><span className="text-fuchsia-400">Parte 2:</span> Escolher 3 casos de uso e para cada um escrever:</p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                  <li>• Uma breve descrição em texto</li>
                  <li>• 2-3 histórias de usuário associadas</li>
                  <li>• Formato: "Como [tipo de usuário], eu quero [ação] para [benefício]"</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background/50 border border-border mb-6">
              <p className="font-semibold text-foreground text-sm mb-1">📤 Entrega no AVA:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Diagrama de Casos de Uso</li>
                <li>• Histórias de Usuário (mínimo 6-9 total)</li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-fuchsia-400">
              <CheckCircle className="w-4 h-4" />
              <span>Esta atividade integra modelagem + pensamento ágil</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
