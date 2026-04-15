import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/gestao-projetos/aula1/HeroSection";
import RevisaoTeoricaSection from "@/components/gestao-projetos/aula1/RevisaoTeoricaSection";
import EstudoCasoSection from "@/components/gestao-projetos/aula1/EstudoCasoSection";
import QuestoesENADESection from "@/components/gestao-projetos/aula1/QuestoesENADESection";
import FechamentoSection from "@/components/gestao-projetos/aula1/FechamentoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "teoria", title: "Scrum & Kanban" },
  { id: "estudo-caso", title: "Estudo de Caso" },
  { id: "questoes", title: "Questões ENADE" },
  { id: "fechamento", title: "Fechamento" },
];

const Aula1 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Gestão de Projetos - ENADE" course="Gestão de Projetos" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <RevisaoTeoricaSection />
      <EstudoCasoSection />
      <QuestoesENADESection />
      <FechamentoSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Gestão de Projetos - Preparação ENADE</p>
      </div>
    </footer>
    <PdfExportButton filename="Gestao-Projetos_ENADE.pdf" />
  </main>
);

export default Aula1;
