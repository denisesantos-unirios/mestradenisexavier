import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import ManifestoSection from "@/components/aula3/ManifestoSection";
import ScrumSection from "@/components/aula3/ScrumSection";
import XPSection from "@/components/aula3/XPSection";
import ComparacaoSection from "@/components/aula3/ComparacaoSection";
import KanbanSection from "@/components/aula3/KanbanSection";
import SprintActivitySection from "@/components/aula3/SprintActivitySection";
import PresencialActivitySection from "@/components/aula3/PresencialActivitySection";

const Aula3 = () => {
  const sections = [
    { id: "manifesto", title: "Manifesto Ágil" },
    { id: "scrum", title: "Scrum" },
    { id: "xp", title: "Extreme Programming" },
    { id: "comparacao", title: "Comparação" },
    { id: "kanban", title: "Kanban" },
    { id: "atividade", title: "Dinâmica Remota" },
    { id: "atividade-presencial", title: "Dinâmica Presencial" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation 
        title="Aula 3 - Metodologias Ágeis"
        course="Engenharia de Software I"
        sections={sections}
      />
      
      <main className="pt-32">
        <LessonQRCode />
        <ManifestoSection />
        <ScrumSection />
        <XPSection />
        <ComparacaoSection />
        <KanbanSection />
        <SprintActivitySection />
      </main>
      <PdfExportButton filename="ES1_Aula-3_Metodologias-Ageis.pdf" />
    </div>
  );
};

export default Aula3;
