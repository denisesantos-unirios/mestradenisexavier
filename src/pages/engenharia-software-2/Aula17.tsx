import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula17/HeroSection";
import ConceitosSection from "@/components/engenharia-software-2/aula17/ConceitosSection";
import RelacionamentosSection from "@/components/engenharia-software-2/aula17/RelacionamentosSection";
import PraticaSection from "@/components/engenharia-software-2/aula17/PraticaSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula17/EstudoCasoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "conceitos", title: "Conceitos" },
  { id: "relacionamentos", title: "Relacionamentos" },
  { id: "pratica", title: "Prática" },
  { id: "estudo-caso", title: "Estudo de Caso" }
];

const Aula17 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 17 - Diagrama de Classes"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="conceitos">
          <ConceitosSection />
        </div>

        <div id="relacionamentos">
          <RelacionamentosSection />
        </div>
        
        <div id="pratica">
          <PraticaSection />
        </div>

        <div id="estudo-caso">
          <EstudoCasoSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-17_Diagrama-Classes.pdf" />
    </main>
  );
};

export default Aula17;
