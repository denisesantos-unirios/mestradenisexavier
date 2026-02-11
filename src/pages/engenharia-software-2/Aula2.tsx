import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula2/HeroSection";
import HistoriaSection from "@/components/engenharia-software-2/aula2/HistoriaSection";
import CicloVidaSection from "@/components/engenharia-software-2/aula2/CicloVidaSection";
import ProcessosSection from "@/components/engenharia-software-2/aula2/ProcessosSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "historia", title: "História" },
  { id: "ciclo", title: "Ciclo de Vida" },
  { id: "processos", title: "Processos" }
];

const Aula2 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 2 - Introdução à ES e Processos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="historia">
          <HistoriaSection />
        </div>
        
        <div id="ciclo">
          <CicloVidaSection />
        </div>
        
        <div id="processos">
          <ProcessosSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-2_Introducao-Processos.pdf" />
    </main>
  );
};

export default Aula2;
