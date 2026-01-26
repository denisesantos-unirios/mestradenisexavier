import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula11/HeroSection";
import HistoriaUMLSection from "@/components/engenharia-software-2/aula11/HistoriaUMLSection";
import TiposDiagramasSection from "@/components/engenharia-software-2/aula11/TiposDiagramasSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "historia", title: "História" },
  { id: "diagramas", title: "Diagramas" }
];

const Aula11 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 11 - Introdução à UML"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="historia">
          <HistoriaUMLSection />
        </div>
        
        <div id="diagramas">
          <TiposDiagramasSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-11_Introducao-UML.pdf" />
    </main>
  );
};

export default Aula11;
