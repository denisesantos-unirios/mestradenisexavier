import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, ChevronDown, CheckCircle, Brain, Eye, FileQuestion, Users } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-background to-pink-950/30" />
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-8">
          <Mic className="w-4 h-4" /> Aula 6 • Prática
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Elicitação e Documentação</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Objetiva de Requisitos</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Técnicas simples, mão na massa, preparando a modelagem</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#tecnicas" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-rose-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const tecnicas = [
  { icon: Mic, title: "Entrevista", desc: "Conversa direta com stakeholders. Pode ser estruturada (perguntas fixas) ou não estruturada (conversa livre). A mais usada no mercado.", dica: "Prepare um roteiro, mas esteja aberto a desvios." },
  { icon: Brain, title: "Brainstorming", desc: "Sessão criativa em grupo para gerar ideias sem julgamento. Quantidade antes da qualidade.", dica: "Toda ideia é válida na fase inicial. Filtre depois." },
  { icon: Eye, title: "Observação", desc: "Observar o usuário no ambiente real de trabalho. Revela necessidades que ele não sabe verbalizar.", dica: "Observe sem interferir. Anote padrões e dificuldades." },
  { icon: FileQuestion, title: "Questionário", desc: "Formulário com perguntas abertas e/ou fechadas. Bom para grande número de stakeholders.", dica: "Mantenha curto. Perguntas objetivas rendem mais." },
];

const ConteudoSection = () => (
  <section id="tecnicas" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🎤 Técnicas de <span className="text-rose-400">Elicitação</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Como "arrancar" os requisitos dos stakeholders — porque eles raramente sabem expressar o que precisam.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {tecnicas.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border hover:border-rose-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-rose-500/10"><t.icon className="w-5 h-5 text-rose-400" /></div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t.desc}</p>
                    <div className="px-3 py-2 rounded-lg bg-rose-500/5 border border-rose-500/10 text-xs text-muted-foreground">
                      💡 <strong>Dica:</strong> {t.dica}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Documento de Visão */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">📄 Estrutura de um Documento de Visão</h3>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Contexto", desc: "Descrição do cenário atual, problemas e motivação para o sistema" },
                { num: "2", title: "Atores/Stakeholders", desc: "Quem vai usar o sistema e quem é afetado por ele" },
                { num: "3", title: "Necessidades", desc: "O que cada ator precisa que o sistema resolva" },
                { num: "4", title: "Requisitos Funcionais", desc: "Lista organizada das funcionalidades do sistema" },
                { num: "5", title: "Requisitos Não Funcionais", desc: "Restrições e qualidades esperadas" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-3 rounded-lg bg-background/50">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                    <span className="text-rose-400 font-bold text-sm">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-rose-400" /> 🎯 Atividade: Simulação de Entrevista
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground">Roteiro de entrevista com "cliente" (professor faz o papel do dono da clínica):</p>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground mb-2">Cada grupo entrega:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-rose-400">1.</span> Mini "documento de visão" do sistema da clínica</li>
                  <li className="flex items-start gap-2"><span className="text-rose-400">2.</span> Contexto + lista organizada dos requisitos da aula 5, revisados</li>
                  <li className="flex items-start gap-2"><span className="text-rose-400">3.</span> Atores identificados com suas necessidades</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-rose-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega: Documento de Visão no AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
