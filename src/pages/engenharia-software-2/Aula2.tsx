import LessonNavigation from "@/components/LessonNavigation";
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
        course="engenharia-software-2"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
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
    </main>
  );
};

export default Aula2;
