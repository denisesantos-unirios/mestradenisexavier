import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula18/HeroSection";
import ConceitosSection from "@/components/engenharia-software-2/aula18/ConceitosSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula18/EstudoCasoSection";
import PraticaSection from "@/components/engenharia-software-2/aula18/PraticaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "conceitos", title: "Conceitos" },
  { id: "estudo-caso", title: "Estudo de Caso" },
  { id: "pratica", title: "Prática" },
];

const Aula18 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation
        sections={sections}
        title="Aula 18 - Diagrama de Atividades"
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

        <div id="estudo-caso">
          <EstudoCasoSection />
        </div>

        <div id="pratica">
          <PraticaSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-18_Diagrama-Atividades.pdf" />
    </main>
  );
};

export default Aula18;
