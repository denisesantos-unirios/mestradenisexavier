import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula4/HeroSection";
import TiposRequisitosSection from "@/components/engenharia-software-2/aula4/TiposRequisitosSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula4/EstudoCasoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "tipos", title: "Tipos de Requisitos" },
  { id: "estudo", title: "Estudo de Caso" }
];

const Aula4 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 4 - Requisitos: Fundamentos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="tipos">
          <TiposRequisitosSection />
        </div>
        
        <div id="estudo">
          <EstudoCasoSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-4_Requisitos-Fundamentos.pdf" />
    </main>
  );
};

export default Aula4;
