import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Sparkles, ChevronDown, BookOpen, Brain, Layers, ShieldCheck, Target, Users, GitBranch, MessageCircleQuestion, Wand2, Ban, ClipboardCheck, AlertTriangle, Lightbulb, PenLine, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import { useAuth } from "@/hooks/useAuth";

const sections = [
  { id: "identificacao", title: "Identificação" },
  { id: "canvas", title: "Canvas" },
  { id: "organizacao", title: "Organização" },
  { id: "modelo", title: "Modelo" },
  { id: "sintese", title: "Síntese" },
];

const HeroSection = () => (
  <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-background to-orange-950/30" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" /> Aula 7 • UniRios — Jornada Pedagógica 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
            Suporte de IA Generativa
          </span>
          <br />
          <span className="text-foreground text-2xl md:text-4xl">para Engenharia de Software</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Análise estruturada do <strong>Canvas de Atividade Pedagógica com Suporte de IA Generativa</strong> —
          planejar o uso da IA com intencionalidade, autoria e responsabilidade.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {[
            { icon: Target, t: "Intencionalidade" },
            { icon: PenLine, t: "Autoria" },
            { icon: ShieldCheck, t: "Responsabilidade" },
          ].map(({ icon: Icon, t }) => (
            <span key={t} className="px-3 py-1 rounded-full bg-card/60 border border-border text-muted-foreground inline-flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-orange-400" /> {t}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#identificacao" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-indigo-300 transition-colors">
          <span className="text-sm">Começar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const IdentificacaoSection = () => (
  <section id="identificacao" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4">
        📌 <span className="text-indigo-400">1. Identificação</span> da Atividade
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Antes de tudo, o professor situa a atividade em um contexto pedagógico concreto.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: BookOpen, label: "Disciplina/Projeto", hint: "Ex.: Engenharia de Software I — Requisitos" },
          { icon: Users, label: "Turma/Público", hint: "Ex.: 5º período, presencial, 32 alunos" },
          { icon: Layers, label: "Duração Estimada", hint: "Ex.: 2 encontros de 100 min + 1 semana extra" },
        ].map(({ icon: Icon, label, hint }) => (
          <Card key={label} className="bg-card/50 border-border hover:border-indigo-500/30 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10"><Icon className="w-5 h-5 text-indigo-400" /></div>
                <h3 className="font-semibold">{label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{hint}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const eixos = [
  { n: 1, icon: BookOpen, color: "indigo", title: "Conteúdo", question: "Qual conteúdo da disciplina esta atividade trabalha?", purpose: "Definir o conhecimento ou tema central." },
  { n: 2, icon: Brain, color: "indigo", title: "Habilidade em foco", question: "Além do conteúdo, que habilidade queremos desenvolver?", purpose: "Análise, argumentação, criatividade, pesquisa ou resolução de problemas." },
  { n: 3, icon: Lightbulb, color: "indigo", title: "Por que por aqui?", question: "Por que faz sentido usar IA nesta atividade — e não seria mais simples sem ela?", purpose: "Justificar pedagogicamente o uso da IA (evita uso por novidade)." },
  { n: 4, icon: PenLine, color: "orange", title: "Criar", question: "O que o aluno vai produzir com apoio da IA? Como a autoria fica visível?", purpose: "Definir o produto final e garantir participação autoral." },
  { n: 5, icon: GitBranch, color: "orange", title: "Gerenciar", question: "O que fica com o aluno e o que fica com a IA? Qual é a divisão intencional?", purpose: "Estabelecer responsabilidades — aluno x ferramenta." },
  { n: 6, icon: MessageCircleQuestion, color: "fuchsia", title: "Engajar-se", question: "Que pergunta crítica o aluno precisa fazer sobre o que a IA oferece?", purpose: "Estimular análise, verificação e pensamento crítico." },
  { n: 7, icon: Wand2, color: "fuchsia", title: "Moldar (opcional)", question: "Existe espaço para o aluno questionar ou ajustar a IA nesta atividade?", purpose: "Prever revisão, refinamento e adaptação das respostas." },
  { n: 8, icon: Ban, color: "rose", title: "Limite de não delegação", question: "O que o aluno não pode, de jeito nenhum, delegar à IA?", purpose: "Definir o que permanece sob responsabilidade exclusiva do aluno." },
  { n: 9, icon: ClipboardCheck, color: "emerald", title: "Avaliação", question: "Como avaliar considerando o processo — não só o produto final?", purpose: "Avaliar percurso, decisões, revisões e aprendizagem." },
  { n: 10, icon: AlertTriangle, color: "amber", title: "Risco a observar", question: "Qual risco é mais provável e como mitigo?", purpose: "Antecipar problemas e definir medidas preventivas." },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

const CanvasSection = () => (
  <section id="canvas" className="py-16 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🧭 <span className="text-orange-400">2. Estrutura do Canvas</span> — 10 Eixos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cada eixo traz uma <em>pergunta orientadora</em> e uma <em>finalidade</em>: o professor responde para
          desenhar a atividade com propósito.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {eixos.map((e, i) => (
          <motion.div key={e.n}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}>
            <Card className={`h-full bg-card/50 border transition-colors ${colorMap[e.color]}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold ${colorMap[e.color]}`}>
                    {e.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <e.icon className="w-4 h-4 opacity-80" />
                      <h3 className="font-bold text-foreground">{e.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-foreground/90">Pergunta:</strong> {e.question}
                    </p>
                    <div className="text-xs px-3 py-2 rounded-lg bg-background/60 border border-border">
                      🎯 <strong>Finalidade:</strong> {e.purpose}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const blocos = [
  {
    letra: "A", cor: "indigo", titulo: "Planejamento da aprendizagem", itens: "1 a 3",
    pontos: [
      "O que será estudado (conteúdo);",
      "Qual habilidade será desenvolvida;",
      "Por que a IA é adequada para essa proposta.",
    ],
    nota: "Evita o uso da IA apenas por conveniência ou novidade tecnológica.",
  },
  {
    letra: "B", cor: "orange", titulo: "Desenho da atividade", itens: "4 e 5",
    pontos: [
      "O que o aluno deverá criar;",
      "Como sua autoria será identificada;",
      "Quais tarefas serão realizadas pela IA;",
      "Quais decisões continuarão sob responsabilidade do aluno.",
    ],
    nota: "A IA funciona como apoio ao processo — não como substituta da produção intelectual.",
  },
  {
    letra: "C", cor: "fuchsia", titulo: "Pensamento crítico e interação", itens: "6 e 7",
    pontos: [
      "Questionar as respostas da IA;",
      "Verificar informações;",
      "Identificar erros, omissões ou vieses;",
      "Ajustar e aperfeiçoar o material gerado;",
      "Explicar por que aceitou ou rejeitou uma sugestão.",
    ],
    nota: "O item 7 é opcional, mas fortalece a ideia de moldar a ferramenta — não apenas aceitar.",
  },
  {
    letra: "D", cor: "rose", titulo: "Integridade, avaliação e prevenção", itens: "8 a 10",
    pontos: [
      "O que não pode ser delegado;",
      "Como o processo será avaliado;",
      "Quais riscos precisam ser observados.",
    ],
    nota: "Riscos-chave: dependência da IA, ilusão de aprendizagem, perda de autoria e delegação do julgamento.",
  },
];

const OrganizacaoSection = () => (
  <section id="organizacao" className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4">
        🧩 <span className="text-fuchsia-400">3. Organização Pedagógica</span> do Modelo
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        O Canvas segue uma sequência lógica em quatro blocos.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {blocos.map((b, i) => (
          <motion.div key={b.letra} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}>
            <Card className={`h-full bg-card/50 border ${colorMap[b.cor]}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-black ${colorMap[b.cor]}`}>
                    {b.letra}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{b.titulo}</h3>
                    <p className="text-xs text-muted-foreground">Eixos {b.itens}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {b.pontos.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-foreground/50">•</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="text-xs px-3 py-2 rounded-lg bg-background/60 border border-border text-muted-foreground">
                  💡 {b.nota}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const camposModelo = [
  "1. Conteúdo — Qual conteúdo da disciplina esta atividade trabalha?",
  "2. Habilidade em foco — Além do conteúdo, que habilidade queremos desenvolver?",
  "3. Por que usar IA nesta atividade? — Por que faz sentido usar IA aqui, e não seria mais simples sem ela?",
  "4. Criar — O que o aluno vai produzir com apoio da IA? Como a autoria ficará visível?",
  "5. Gerenciar — O que ficará sob responsabilidade do aluno e o que ficará sob responsabilidade da IA?",
  "6. Engajar-se — Que pergunta crítica o aluno precisa fazer sobre o que a IA oferece?",
  "7. Moldar (opcional) — Existe espaço para o aluno questionar ou ajustar a IA durante a atividade?",
  "8. Limite de não delegação — O que o aluno não poderá, de jeito nenhum, delegar à IA?",
  "9. Avaliação — Como avaliar o processo, e não apenas o produto final entregue?",
  "10. Risco a observar — Qual risco é mais provável e como será feita sua mitigação?",
];

const ModeloSection = () => (
  <section id="modelo" className="py-16 px-6 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4">
        📝 <span className="text-orange-400">4. Modelo</span> para Preenchimento
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10">
        Canvas de Atividade Pedagógica com Suporte de IA Generativa
      </p>

      <Card className="bg-card/50 border-border">
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-4 pb-4 border-b border-border">
            {["Disciplina/Projeto", "Turma/Público", "Duração Estimada"].map((f) => (
              <div key={f}>
                <label className="text-xs font-semibold uppercase tracking-wide text-indigo-400">{f}</label>
                <div className="mt-1 h-9 rounded-md border border-dashed border-border bg-background/40" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {camposModelo.map((c, i) => (
              <div key={i} className="p-4 rounded-lg border border-border bg-background/40">
                <p className="text-sm font-semibold text-foreground mb-2">{c}</p>
                <div className="h-14 rounded-md border border-dashed border-border/70 bg-card/30" />
              </div>
            ))}
          </div>

          <div className="pt-4 text-xs text-muted-foreground text-center border-t border-border">
            💾 Sugestão de entrega: 1 canvas preenchido por equipe (PDF ou formulário no AVA).
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const SinteseSection = () => (
  <section id="sintese" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10">
        ✨ Síntese — <span className="text-indigo-400">Três Princípios</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, cor: "indigo", titulo: "Intencionalidade", desc: "Usar IA somente quando ela contribuir efetivamente para a aprendizagem." },
          { icon: PenLine, cor: "orange", titulo: "Autoria", desc: "Manter visíveis as decisões, contribuições e posicionamentos do aluno." },
          { icon: ShieldCheck, cor: "emerald", titulo: "Responsabilidade", desc: "Avaliar o processo, estabelecer limites e prevenir dependência, erros e perda de autonomia." },
        ].map((p, i) => (
          <motion.div key={p.titulo} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className={`h-full bg-card/50 border ${colorMap[p.cor]}`}>
              <CardContent className="p-6 text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${colorMap[p.cor]}`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.titulo}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
        <Card className="bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-orange-500/10 border-indigo-500/20">
          <CardContent className="p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl text-foreground/90 italic">
              "A IA generativa é <strong>copiloto</strong>, não piloto. O aluno permanece autor —
              a ferramenta amplifica, mas nunca substitui, a decisão intelectual."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Canvas de Atividade Pedagógica • UniRios — Jornada Pedagógica 2026
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

const Aula7 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LessonNavigation
        title="Aula 7 - Suporte de IA Generativa"
        course="Engenharia de Software I"
        sections={sections}
      />
      <HeroSection />
      <LessonQRCode />
      <IdentificacaoSection />
      <CanvasSection />
      <OrganizacaoSection />
      <ModeloSection />
      <SinteseSection />

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software I</p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            "Intencionalidade • Autoria • Responsabilidade"
          </p>
        </div>
      </footer>
      <PdfExportButton filename="ES1_Aula-7_IA-Generativa.pdf" />
    </div>
  );
};

export default Aula7;
