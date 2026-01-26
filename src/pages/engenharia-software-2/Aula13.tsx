import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/engenharia-software-2/aula13/HeroSection";
import EspecificacaoSection from "@/components/engenharia-software-2/aula13/EspecificacaoSection";
import ForumSection from "@/components/engenharia-software-2/aula13/ForumSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "especificacao", title: "Especificação" },
  { id: "forum", title: "Fórum" }
];

const Aula13 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 13 - JITT: Especificação UC"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="especificacao">
          <EspecificacaoSection />
        </div>
        
        <div id="forum">
          <ForumSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-13_Especificacao-UC.pdf" />
    </main>
  );
};

export default Aula13;
