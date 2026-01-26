import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/engenharia-software-2/aula1/HeroSection";
import EmentaSection from "@/components/engenharia-software-2/aula1/EmentaSection";
import MetodologiaSection from "@/components/engenharia-software-2/aula1/MetodologiaSection";
import AvaliacaoSection from "@/components/engenharia-software-2/aula1/AvaliacaoSection";
import ProjetoIntegradorSection from "@/components/engenharia-software-2/aula1/ProjetoIntegradorSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "ementa", title: "Ementa" },
  { id: "metodologia", title: "Metodologia" },
  { id: "avaliacao", title: "Avaliação" },
  { id: "projeto", title: "Projeto Integrador" }
];

const Aula1 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 1 - Apresentação da Disciplina"
        course="engenharia-software-2"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="ementa">
          <EmentaSection />
        </div>
        
        <div id="metodologia">
          <MetodologiaSection />
        </div>
        
        <div id="avaliacao">
          <AvaliacaoSection />
        </div>
        
        <div id="projeto">
          <ProjetoIntegradorSection />
        </div>
      </div>
    </main>
  );
};

export default Aula1;
