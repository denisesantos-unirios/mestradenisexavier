import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Target, ArrowRight, ListChecks } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import LessonQRCode from "@/components/LessonQRCode";
import PdfExportButton from "@/components/PdfExportButton";
import { enadeAulas, enadeEixos } from "@/data/enade/aulas";

const EnadeIndex = () => (
  <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
    <MainNavigation />
    <div className="pt-24 pb-16 container mx-auto px-6">
      <ScrollReveal animation="fadeUp">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <GraduationCap className="w-4 h-4" /> Preparação ENADE 2026
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-foreground">
            ENADE — Engenharia de Software
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Bloco essencial de preparação com sete aulas construídas a partir das questões de
            Engenharia de Software do ENADE 2021 (Bacharelado em Sistemas de Informação),
            com conceitos, questões comentadas, roteiro de aula e exercícios de revisão.
          </p>
        </div>
      </ScrollReveal>

      <LessonQRCode />

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-5">
            <Target className="w-6 h-6 text-primary" /> Eixos mais importantes para o ENADE 2026
          </h2>
          <div className="glass-card overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground w-1/3">Eixo</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Conteúdos</th>
                </tr>
              </thead>
              <tbody>
                {enadeEixos.map((e, i) => (
                  <tr key={e.eixo} className={i % 2 ? "bg-muted/30" : ""}>
                    <td className="px-4 py-3 font-medium text-foreground align-top">{e.eixo}</td>
                    <td className="px-4 py-3 text-muted-foreground">{e.conteudos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-5">
          <ListChecks className="w-6 h-6 text-primary" /> Sequência recomendada de aulas
        </h2>
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {enadeAulas.map((aula) => (
            <StaggerItem key={aula.slug}>
              <Link to={`/enade/${aula.slug}`} className="block h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="glass-card h-full p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">
                      Aula {aula.numero}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{aula.titulo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{aula.subtitulo}</p>
                  <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                    {aula.origem} • {aula.eixo}
                  </p>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>

    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Preparação ENADE 2026</p>
      </div>
    </footer>
    <PdfExportButton filename="ENADE_Engenharia-de-Software_Visao-Geral.pdf" />
  </main>
);

export default EnadeIndex;
