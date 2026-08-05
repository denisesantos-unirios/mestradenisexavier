import { Link, useParams, Navigate } from "react-router-dom";
import {
  Target, BookOpen, HelppCircle, CheckCircle2, XCircle, Clock, Lightbulb,
  AlertTriangle, PenLine, ArrowLeft, ArrowRight, Award,
} from "lucide-react";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { enadeAulas, getEnadeAula } from "@/data/enade/aulas";

const sections = [
  { id: "hero", title: "Início" },
  { id: "objetivos", title: "Objetivos" },
  { id: "conceitos", title: "Conceitos-chave" },
  { id: "questao", title: "Questão comentada" },
  { id: "roteiro", title: "Roteiro de aula" },
  { id: "exemplos", title: "Exemplos" },
  { id: "armadilhas", title: "Armadilhas" },
  { id: "exercicios", title: "Exercícios" },
];

const AulaEnade = () => {
  const { slug } = useParams();
  const aula = getEnadeAula(slug);
  if (!aula) return <Navigate to="/enade" replace />;

  const idx = enadeAulas.findIndex((a) => a.slug === aula.slug);
  const anterior = enadeAulas[idx - 1];
  const proxima = enadeAulas[idx + 1];

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation
        sections={sections}
        title={`ENADE • Aula ${aula.numero} - ${aula.titulo}`}
        course="ENADE - Engenharia de Software"
      />
      <div className="pt-16">
        <section id="hero" className="container mx-auto px-6 pt-12 pb-6">
          <ScrollReveal animation="fadeUp">
            <Link to="/enade" className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <ArrowLeft className="w-4 h-4" /> Todas as aulas ENADE
            </Link>
            <span className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Award className="w-3.5 h-3.5" /> {aula.origem}
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Aula {aula.numero} — {aula.titulo}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{aula.subtitulo}</p>
            <p className="mt-2 text-sm text-muted-foreground">Eixo: {aula.eixo}</p>
          </ScrollReveal>
        </section>

        <LessonQRCode />

        <section id="objetivos" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <Target className="w-6 h-6 text-primary" /> Objetivos de aprendizagem
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {aula.objetivos.map((o) => (
                <li key={o} className="glass-card p-4 rounded-xl border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        <section id="conceitos" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <BookOpen className="w-6 h-6 text-primary" /> Conceitos-chave
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {aula.conceitos.map((c) => (
                <div key={c.termo} className="glass-card p-5 rounded-xl border border-border">
                  <h3 className="font-bold text-foreground">{c.termo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.definicao}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="questao" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <HelpCircle className="w-6 h-6 text-primary" /> Questão comentada
            </h2>
            <div className="glass-card p-6 rounded-xl border border-border">
              <p className="text-foreground leading-relaxed">{aula.enunciado}</p>

              {aula.afirmacoes && (
                <ul className="mt-6 space-y-3">
                  {aula.afirmacoes.map((af) => (
                    <li key={af.id} className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="flex gap-3">
                        {af.correta ? (
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium text-foreground">
                            {af.id} — {af.texto}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">{af.comentario}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
                <p className="font-bold text-foreground">Gabarito: {aula.gabarito}</p>
                <p className="mt-1 text-sm text-muted-foreground">{aula.gabaritoJustificativa}</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="roteiro" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <Clock className="w-6 h-6 text-primary" /> Roteiro de aula
            </h2>
            <div className="space-y-3">
              {aula.roteiro.map((r, i) => (
                <div key={r.etapa} className="glass-card p-4 rounded-xl border border-border flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {r.etapa} <span className="text-primary text-sm font-medium">• {r.tempo}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{r.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="exemplos" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <Lightbulb className="w-6 h-6 text-primary" /> Exemplos aplicados
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {aula.exemplos.map((e) => (
                <div key={e.titulo} className="glass-card p-5 rounded-xl border border-border">
                  <h3 className="font-bold text-foreground">{e.titulo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.descricao}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="armadilhas" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" /> Armadilhas frequentes na prova
            </h2>
            <ul className="space-y-2">
              {aula.armadilhas.map((a) => (
                <li key={a} className="glass-card p-4 rounded-xl border border-border flex gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        <section id="exercicios" className="container mx-auto px-6 py-10">
          <ScrollReveal animation="fadeUp">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <PenLine className="w-6 h-6 text-primary" /> Exercícios de revisão
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {aula.exercicios.map((ex) => (
                <li key={ex} className="glass-card p-4 rounded-xl border border-border text-foreground">
                  {ex}
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-6 py-10 flex flex-wrap gap-4 justify-between">
          {anterior ? (
            <Link to={`/enade/${anterior.slug}`} className="inline-flex items-center gap-2 text-primary font-medium">
              <ArrowLeft className="w-4 h-4" /> Aula {anterior.numero} — {anterior.titulo}
            </Link>
          ) : <span />}
          {proxima && (
            <Link to={`/enade/${proxima.slug}`} className="inline-flex items-center gap-2 text-primary font-medium">
              Aula {proxima.numero} — {proxima.titulo} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </section>
      </div>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Prof.ª Denise Xavier • Preparação ENADE 2026</p>
        </div>
      </footer>
      <PdfExportButton filename={`ENADE_Aula-${aula.numero}_${aula.slug}.pdf`} />
    </main>
  );
};

export default AulaEnade;
