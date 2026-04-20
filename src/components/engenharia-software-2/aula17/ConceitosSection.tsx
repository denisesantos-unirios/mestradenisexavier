import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Users, Wrench } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const perspectivas = [
  {
    icon: Eye,
    nome: "Conceitual",
    publico: "Cliente / Domínio",
    desc: "Representa os conceitos do domínio em estudo. Sem detalhes técnicos — foca em entidades do mundo real e suas relações.",
    cor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Users,
    nome: "Especificação",
    publico: "Arquitetos / Analistas",
    desc: "Foca nas interfaces principais, métodos relevantes e contratos. Não entra em detalhes de implementação.",
    cor: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Wrench,
    nome: "Implementação",
    publico: "Time de Desenvolvimento",
    desc: "A mais utilizada. Mostra detalhes de atributos, navegabilidade, visibilidade e tipos. Pronta para gerar código.",
    cor: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

const visibilidades = [
  { simbolo: "+", nome: "public", desc: "Acessível por qualquer classe", cor: "text-green-400" },
  { simbolo: "-", nome: "private", desc: "Acessível apenas pela própria classe", cor: "text-red-400" },
  { simbolo: "#", nome: "protected", desc: "Acessível pela classe e subclasses", cor: "text-yellow-400" },
  { simbolo: "~", nome: "package", desc: "Acessível por classes do mesmo pacote", cor: "text-blue-400" },
];

const ConceitosSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              📐 Conceitos <span className="text-purple-400">Fundamentais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O diagrama de classes faz parte dos diagramas <strong>estruturais</strong> da UML —
              mostra a estrutura estática que o sistema terá. Diferente dos comportamentais,
              que descrevem dinâmica entre objetos.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Perspectivas */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🎯 As 3 Perspectivas (Ambler, 2016)
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {perspectivas.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`${p.bg} ${p.border} h-full`}>
                  <CardContent className="p-6">
                    <p.icon className={`w-8 h-8 ${p.cor} mb-3`} />
                    <h4 className="font-bold text-foreground text-lg mb-1">{p.nome}</h4>
                    <p className={`text-xs ${p.cor} mb-3 font-medium`}>👤 {p.publico}</p>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Anatomia da Classe */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🧬 Anatomia de uma Classe
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <Card className="bg-card/80 border-purple-500/30 shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-purple-500/20 p-4 border-b-2 border-purple-500/40 text-center">
                  <span className="text-xs text-purple-300 uppercase tracking-wider">Nome</span>
                  <p className="font-bold text-xl text-foreground">Voo</p>
                </div>
                <div className="p-4 border-b-2 border-purple-500/40 font-mono text-sm space-y-1">
                  <p className="text-xs text-purple-300 uppercase tracking-wider mb-2">Atributos</p>
                  <p className="text-muted-foreground"><span className="text-red-400">-</span> id : Integer</p>
                  <p className="text-muted-foreground"><span className="text-red-400">-</span> horario_partida : Date</p>
                  <p className="text-muted-foreground"><span className="text-red-400">-</span> duracao_voo : Integer</p>
                  <p className="text-muted-foreground"><span className="text-red-400">-</span> aeroporto_saida : String</p>
                  <p className="text-muted-foreground"><span className="text-red-400">-</span> aeroporto_chegada : String</p>
                </div>
                <div className="p-4 font-mono text-sm space-y-1">
                  <p className="text-xs text-purple-300 uppercase tracking-wider mb-2">Operações</p>
                  <p className="text-muted-foreground"><span className="text-green-400">+</span> atrasarVoo(min : int) : void</p>
                  <p className="text-muted-foreground"><span className="text-green-400">+</span> getHorarioChegada() : Date</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <h5 className="font-bold text-purple-400 mb-1">📛 Nome da Classe</h5>
                <p className="text-sm text-muted-foreground">Substantivo no singular, primeira letra <strong>maiúscula</strong>. Ex: <code className="text-purple-300">Voo</code>, <code className="text-purple-300">Cliente</code>.</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <h5 className="font-bold text-purple-400 mb-1">📋 Atributos</h5>
                <p className="text-sm text-muted-foreground">Estado do objeto. Formato: <code className="text-purple-300">visibilidade nome : Tipo</code>. Primeira letra <strong>minúscula</strong>.</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <h5 className="font-bold text-purple-400 mb-1">⚙️ Operações / Métodos</h5>
                <p className="text-sm text-muted-foreground">Comportamento. Formato: <code className="text-purple-300">visibilidade nome(args) : Retorno</code>. Verbo no infinitivo.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Visibilidade */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🔐 Visibilidade
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibilidades.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/50 border-border h-full">
                  <CardContent className="p-5 text-center">
                    <div className={`text-5xl font-mono font-bold ${v.cor} mb-2`}>{v.simbolo}</div>
                    <p className="font-bold text-foreground">{v.nome}</p>
                    <p className="text-xs text-muted-foreground mt-2">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConceitosSection;
