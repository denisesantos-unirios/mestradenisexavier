import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula8/HeroSection";
import DocumentoRequisitosSection from "@/components/engenharia-software-2/aula8/DocumentoRequisitosSection";
import AtividadeSection from "@/components/engenharia-software-2/aula8/AtividadeSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "documento", title: "Documento" },
  { id: "atividade", title: "Atividade" }
];

const Aula8 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 8 - Documentação de Requisitos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="documento">
          <DocumentoRequisitosSection />
        </div>
        
        <div id="atividade">
          <AtividadeSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-8_Documentacao-Requisitos.pdf" />
    </main>
  );
};

export default Aula8;
