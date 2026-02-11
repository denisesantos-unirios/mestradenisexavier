import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula10/HeroSection";
import EntregaFase2Section from "@/components/engenharia-software-2/aula10/EntregaFase2Section";
import ForumSection from "@/components/engenharia-software-2/aula10/ForumSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "entrega", title: "Entrega" },
  { id: "forum", title: "Fórum" }
];

const Aula10 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 10 - JITT: Entrega Fase 2"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="entrega">
          <EntregaFase2Section />
        </div>
        
        <div id="forum">
          <ForumSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-10_Entrega-Fase2.pdf" />
    </main>
  );
};

export default Aula10;
