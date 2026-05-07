import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Layers3, Repeat, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const cascata = [
  { etapa: "Análise", desc: "Levantamento de requisitos e necessidades do cliente." },
  { etapa: "Projeto", desc: "Modelagem da arquitetura, dados e interfaces." },
  { etapa: "Codificação", desc: "Desenvolvimento do código-fonte." },
  { etapa: "Testes", desc: "Verificação e validação do software construído." },
  { etapa: "Implementação", desc: "Implantação, suporte e feedback do produto entregue." },
];

const prototipos = [
  { tipo: "Wireframes & Rascunhos", fidelidade: "Baixa", desc: "Permitem alterações rápidas e validação ágil de regras de negócio. Não mostram detalhes visuais nem interações.", cor: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
  { tipo: "Protótipos Visuais", fidelidade: "Média", desc: "Criados em softwares de edição gráfica. Têm apelo visual, mas não possuem interações e demandam tempo para ajustes.", cor: "bg-orange-500/10 border-orange-500/30 text-orange-400" },
  { tipo: "Protótipos Interativos", fidelidade: "Alta", desc: "Englobam visual + interações. Ajudam a identificar novos requisitos e problemas. Demandam profissionais experientes.", cor: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
];

const MetodologiasSection = () => (
  <section id="metodologias" className="py-20 px-6 bg-background/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🧭 Metodologias de Desenvolvimento de Software
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Segundo Webster's (1998), <strong>metodologia</strong> é "um conjunto de métodos, regras e postulados empregados por uma disciplina". 
          No software, ela define <strong className="text-orange-400">papéis, prazos, atividades e entregas</strong> — harmonizando todos os envolvidos.
        </p>
      </motion.div>

      {/* Cascata */}
      <Card className="mb-10 bg-card/50 border-border">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-7 h-7 text-blue-400" />
            <h3 className="text-2xl font-bold text-foreground">Modelo Cascata (Sequencial Linear)</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Realizado de forma <strong>sistemática e sequencial</strong>: cada fase só inicia após a conclusão da anterior. Bom para projetos com requisitos muito estáveis.
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {cascata.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm">
                  <p className="font-bold text-blue-400">{c.etapa}</p>
                  <p className="text-xs text-muted-foreground max-w-[160px]">{c.desc}</p>
                </div>
                {i < cascata.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <p className="font-semibold text-emerald-400 mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Vantagens</p>
              <p className="text-sm text-muted-foreground">Documentação rica, fases bem definidas, fácil de gerenciar.</p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
              <p className="font-semibold text-red-400 mb-1 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Desvantagens</p>
              <p className="text-sm text-muted-foreground">Pouca flexibilidade a mudanças; cliente só vê o produto no final.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prototipação */}
      <Card className="mb-10 bg-card/50 border-border">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Layers3 className="w-7 h-7 text-purple-400" />
            <h3 className="text-2xl font-bold text-foreground">Desenvolvimento por Prototipação</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Processo que <strong>esclarece requisitos</strong> apresentando conceitos e funcionalidades antes da construção definitiva, propondo soluções adequadas para o problema.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {prototipos.map((p, i) => (
              <div key={i} className={`p-5 rounded-xl border ${p.cor}`}>
                <p className="text-xs uppercase tracking-wide opacity-80 mb-1">Fidelidade {p.fidelidade}</p>
                <h4 className="font-bold text-foreground mb-2">{p.tipo}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ágil */}
      <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/30">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Repeat className="w-7 h-7 text-orange-400" />
            <h3 className="text-2xl font-bold text-foreground">Metodologia Ágil — Scrum</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong className="text-orange-400">Scrum</strong> é uma metodologia ágil para desenvolvimento e planejamento de projetos onde o trabalho é dividido em ciclos chamados <strong>Sprints</strong> (geralmente de 2 a 4 semanas). Cada Sprint é um <em>time box</em> dentro do qual rotinas específicas devem ser executadas.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-bold">Product Backlog</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 font-bold">Sprint Planning</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 font-bold">Sprint (Daily)</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">Review + Retro</span>
            <Repeat className="w-4 h-4 text-orange-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default MetodologiasSection;
