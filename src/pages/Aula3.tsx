import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import ManifestoSection from "@/components/aula3/ManifestoSection";
import ScrumSection from "@/components/aula3/ScrumSection";
import KanbanSection from "@/components/aula3/KanbanSection";
import SprintActivitySection from "@/components/aula3/SprintActivitySection";

const Aula3 = () => {
  const sections = [
    { id: "manifesto", title: "Manifesto Ágil" },
    { id: "scrum", title: "Scrum" },
    { id: "kanban", title: "Kanban" },
    { id: "atividade", title: "Atividade" }
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
        <ManifestoSection />
        <ScrumSection />
        <KanbanSection />
        <SprintActivitySection />
      </main>
      <PdfExportButton filename="ES1_Aula-3_Metodologias-Ageis.pdf" />
    </div>
  );
};

export default Aula3;
