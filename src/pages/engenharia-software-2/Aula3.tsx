import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula3/HeroSection";
import ImportanciaSection from "@/components/engenharia-software-2/aula3/ImportanciaSection";
import ForumSection from "@/components/engenharia-software-2/aula3/ForumSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "importancia", title: "Importância" },
  { id: "forum", title: "Atividade" }
];

const Aula3 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 3 - JITT: Eng. de Requisitos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="importancia">
          <ImportanciaSection />
        </div>
        
        <div id="forum">
          <ForumSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-3_JITT-Requisitos.pdf" />
    </main>
  );
};

export default Aula3;
