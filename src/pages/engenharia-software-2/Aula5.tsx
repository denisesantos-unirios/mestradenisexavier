import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula5/HeroSection";
import MiniMundoSection from "@/components/engenharia-software-2/aula5/MiniMundoSection";
import EntregaSection from "@/components/engenharia-software-2/aula5/EntregaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "minimundo", title: "Mini-Mundo" },
  { id: "entrega", title: "Entrega" }
];

const Aula5 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 5 - PBL Fase 1: Mini-Mundo"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="minimundo">
          <MiniMundoSection />
        </div>
        
        <div id="entrega">
          <EntregaSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-5_PBL-MiniMundo.pdf" />
    </main>
  );
};

export default Aula5;
