import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/engenharia-software-2/aula6/HeroSection";
import TecnicasSection from "@/components/engenharia-software-2/aula6/TecnicasSection";
import ForumSection from "@/components/engenharia-software-2/aula6/ForumSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "tecnicas", title: "Técnicas" },
  { id: "forum", title: "Atividade" }
];

const Aula6 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 6 - JITT: Técnicas de Elicitação"
        course="engenharia-software-2"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="tecnicas">
          <TecnicasSection />
        </div>
        
        <div id="forum">
          <ForumSection />
        </div>
      </div>
    </main>
  );
};

export default Aula6;
