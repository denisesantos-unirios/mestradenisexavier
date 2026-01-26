import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula15/HeroSection";
import EntregaFase3Section from "@/components/engenharia-software-2/aula15/EntregaFase3Section";

const sections = [
  { id: "hero", title: "Início" },
  { id: "entrega", title: "Entrega" }
];

const Aula15 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 15 - Entrega Fase 3: Casos de Uso"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="entrega">
          <EntregaFase3Section />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-15_Entrega-Fase3-UC.pdf" />
    </main>
  );
};

export default Aula15;
