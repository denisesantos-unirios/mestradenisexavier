import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
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
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="tecnicas">
          <TecnicasSection />
        </div>
        
        <div id="forum">
          <ForumSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-6_Tecnicas-Elicitacao.pdf" />
    </main>
  );
};

export default Aula6;
