import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula4/HeroSection";
import IntroducaoSection from "@/components/engenharia-software-2/aula4/IntroducaoSection";
import ProcessoERSection from "@/components/engenharia-software-2/aula4/ProcessoERSection";
import TiposRequisitosSection from "@/components/engenharia-software-2/aula4/TiposRequisitosSection";
import TecnicasLevantamentoSection from "@/components/engenharia-software-2/aula4/TecnicasLevantamentoSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula4/EstudoCasoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "introducao", title: "Contexto" },
  { id: "processo", title: "Processo ER" },
  { id: "tipos", title: "Tipos de Requisitos" },
  { id: "tecnicas", title: "Técnicas" },
  { id: "estudo", title: "Estudo de Caso" }
];

const Aula4 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 4 - Engenharia de Requisitos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>

        <div id="introducao">
          <IntroducaoSection />
        </div>

        <div id="processo">
          <ProcessoERSection />
        </div>
        
        <div id="tipos">
          <TiposRequisitosSection />
        </div>

        <div id="tecnicas">
          <TecnicasLevantamentoSection />
        </div>
        
        <div id="estudo">
          <EstudoCasoSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-4_Engenharia-Requisitos.pdf" />
    </main>
  );
};

export default Aula4;
