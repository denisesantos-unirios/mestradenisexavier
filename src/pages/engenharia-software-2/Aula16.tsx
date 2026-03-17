import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula16/HeroSection";
import UserStoriesSection from "@/components/engenharia-software-2/aula16/UserStoriesSection";
import KanbanSection from "@/components/engenharia-software-2/aula16/KanbanSection";
import AtividadeSection from "@/components/engenharia-software-2/aula16/AtividadeSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "user-stories", title: "User Stories" },
  { id: "kanban", title: "Kanban" },
  { id: "atividade", title: "Atividade" }
];

const Aula16 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 16 - User Stories & Kanban"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="user-stories">
          <UserStoriesSection />
        </div>
        
        <div id="kanban">
          <KanbanSection />
        </div>
        
        <div id="atividade">
          <AtividadeSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-16_User-Stories-Kanban.pdf" />
    </main>
  );
};

export default Aula16;
