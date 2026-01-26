import LessonNavigation from "@/components/LessonNavigation";
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
        course="engenharia-software-2"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="tipos">
          <TiposRequisitosSection />
        </div>
        
        <div id="estudo">
          <EstudoCasoSection />
        </div>
      </div>
    </main>
  );
};

export default Aula4;
