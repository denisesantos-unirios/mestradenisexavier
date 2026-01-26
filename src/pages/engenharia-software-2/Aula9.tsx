import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula9/HeroSection";
import TecnicasValidacaoSection from "@/components/engenharia-software-2/aula9/TecnicasValidacaoSection";
import DinamicaSection from "@/components/engenharia-software-2/aula9/DinamicaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "tecnicas", title: "Técnicas" },
  { id: "dinamica", title: "Dinâmica" }
];

const Aula9 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 9 - Validação de Requisitos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="tecnicas">
          <TecnicasValidacaoSection />
        </div>
        
        <div id="dinamica">
          <DinamicaSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-9_Validacao-Requisitos.pdf" />
    </main>
  );
};

export default Aula9;
