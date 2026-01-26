import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
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
        course="Engenharia de Software II"
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
      <PdfExportButton filename="ES2_Aula-7_Elicitacao-Pratica.pdf" />
    </main>
  );
};

export default Aula7;
