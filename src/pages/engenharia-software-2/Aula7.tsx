import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/engenharia-software-2/aula7/HeroSection";
import DinamicaSection from "@/components/engenharia-software-2/aula7/DinamicaSection";
import FerramentasSection from "@/components/engenharia-software-2/aula7/FerramentasSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "dinamica", title: "Dinâmica" },
  { id: "ferramentas", title: "Ferramentas" }
];

const Aula7 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 7 - Elicitação: Prática"
        course="engenharia-software-2"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="dinamica">
          <DinamicaSection />
        </div>
        
        <div id="ferramentas">
          <FerramentasSection />
        </div>
      </div>
    </main>
  );
};

export default Aula7;
