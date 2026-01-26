import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula12/HeroSection";
import ElementosSection from "@/components/engenharia-software-2/aula12/ElementosSection";
import ExemploSection from "@/components/engenharia-software-2/aula12/ExemploSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "elementos", title: "Elementos" },
  { id: "exemplo", title: "Exemplo" }
];

const Aula12 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 12 - Casos de Uso: Fundamentos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="elementos">
          <ElementosSection />
        </div>
        
        <div id="exemplo">
          <ExemploSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-12_Casos-Uso-Fundamentos.pdf" />
    </main>
  );
};

export default Aula12;
