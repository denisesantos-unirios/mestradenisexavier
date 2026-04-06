import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-background to-blue-950/30" />
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
          <Boxes className="w-4 h-4" /> Aula 7 • Modelagem Teórica
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">UML e Casos de Uso</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Introdução à Modelagem</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Teoria de modelagem ligada ao que o mercado ainda usa</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#por-que-modelar" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-indigo-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const diagramas = [
  { nome: "Casos de Uso", desc: "O que o sistema faz (visão do usuário)", uso: "⭐ Mais usado neste curso" },
  { nome: "Classes", desc: "Estrutura do sistema (objetos e relações)", uso: "Muito usado em design" },
  { nome: "Sequência", desc: "Como objetos interagem ao longo do tempo", uso: "Usado em APIs" },
  { nome: "Atividades", desc: "Fluxo de trabalho (tipo fluxograma)", uso: "Processos de negócio" },
  { nome: "Estados", desc: "Ciclo de vida de um objeto", uso: "Pedidos, tickets" },
  { nome: "Componentes", desc: "Módulos do sistema e suas dependências", uso: "Arquitetura" },
];

const ConteudoSection = () => (
  <section id="por-que-modelar" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🤔 Por que <span className="text-indigo-400">Modelar</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Modelagem é a ponte de comunicação entre <strong>cliente</strong>, <strong>analista</strong> e <strong>desenvolvedor</strong>. 
          Um diagrama vale mais que 10 páginas de texto.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {[
          { emoji: "🗣️", title: "Comunicação", desc: "Todos entendem a mesma coisa olhando o mesmo diagrama" },
          { emoji: "🔍", title: "Descoberta", desc: "Ao modelar, você encontra falhas nos requisitos" },
          { emoji: "📐", title: "Planejamento", desc: "Base para estimar esforço e planejar o desenvolvimento" },
        ].map((b, i) => (
          <Card key={i} className="bg-indigo-500/5 border-indigo-500/20">
            <CardContent className="p-5 text-center">
              <span className="text-3xl mb-2 block">{b.emoji}</span>
              <h4 className="font-bold text-foreground mb-1">{b.title}</h4>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* UML */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">📊 UML — Unified Modeling Language</h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Linguagem padrão de modelagem visual para sistemas de software. Não é metodologia, é <strong>notação</strong>.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {diagramas.map((d, i) => (
            <Card key={i} className="bg-card/50 border-border">
              <CardContent className="p-4">
                <h4 className="font-bold text-foreground mb-1">{d.nome}</h4>
                <p className="text-sm text-muted-foreground mb-2">{d.desc}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">{d.uso}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Diagrama de Casos de Uso */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🎯 Diagrama de Casos de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-3">Elementos</h4>
              <div className="space-y-3">
                {[
                  { elem: "Ator", desc: "Quem interage com o sistema (pessoa, sistema externo)", symbol: "🧑" },
                  { elem: "Caso de Uso", desc: "Uma funcionalidade do sistema (verbo no infinitivo)", symbol: "⭕" },
                  { elem: "Fronteira", desc: "Limite do sistema (retângulo)", symbol: "📦" },
                  { elem: "Associação", desc: "Ligação entre ator e caso de uso (linha)", symbol: "➖" },
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{e.symbol}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{e.elem}</p>
                      <p className="text-xs text-muted-foreground">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-3">Relacionamentos</h4>
              <div className="space-y-3">
                {[
                  { rel: "«include»", desc: "UC obrigatoriamente chama outro UC", ex: "Realizar Pedido include Validar Pagamento" },
                  { rel: "«extend»", desc: "UC opcionalmente estende outro UC", ex: "Realizar Pedido extend Aplicar Cupom" },
                  { rel: "Generalização", desc: "Ator ou UC herda de outro mais genérico", ex: "Administrador generaliza Usuário" },
                ].map((r, i) => (
                  <div key={i} className="p-3 rounded-lg bg-background/50">
                    <p className="font-semibold text-indigo-400 text-sm">{r.rel}</p>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1 italic">Ex: {r.ex}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade em Plenário</h3>
            <p className="text-muted-foreground mb-4">
              Vamos construir juntos um esboço de diagrama de casos de uso para o <strong>sistema da clínica</strong>.
            </p>
            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-lg bg-background/50 border border-border flex items-center gap-3">
                <span className="text-indigo-400 font-bold">1.</span>
                <span className="text-sm text-muted-foreground">Identificar os atores (Paciente, Médico, Recepcionista...)</span>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border flex items-center gap-3">
                <span className="text-indigo-400 font-bold">2.</span>
                <span className="text-sm text-muted-foreground">Listar os casos de uso (Agendar Consulta, Cancelar, Consultar Agenda...)</span>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border flex items-center gap-3">
                <span className="text-indigo-400 font-bold">3.</span>
                <span className="text-sm text-muted-foreground">Montar o diagrama coletivamente no quadro/ferramenta</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-indigo-400">
              <CheckCircle className="w-4 h-4" />
              <span>Participação ativa no plenário</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
