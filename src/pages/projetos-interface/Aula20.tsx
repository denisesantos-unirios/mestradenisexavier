import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula20/HeroSection";
import DECIDESection from "@/components/projetos-interface/aula20/DECIDESection";
import EticaSection from "@/components/projetos-interface/aula20/EticaSection";
import MetodosSection from "@/components/projetos-interface/aula20/MetodosSection";
import TesteLaboratorioSection from "@/components/projetos-interface/aula20/TesteLaboratorioSection";
import UsabilidadeSection from "@/components/projetos-interface/aula20/UsabilidadeSection";
import EstudoCasoSection from "@/components/projetos-interface/aula20/EstudoCasoSection";
import AtividadeSection from "@/components/projetos-interface/aula20/AtividadeSection";

const sections = [
  { id: "decide", title: "DECIDE" },
  { id: "etica", title: "Ética" },
  { id: "metodos", title: "Métodos" },
  { id: "teste-lab", title: "Testes Lab" },
  { id: "usabilidade", title: "Usabilidade" },
  { id: "estudo-caso", title: "Estudo de Caso" },
  { id: "atividade", title: "Atividade" },
];

const Aula20 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation
        sections={sections}
        title="Aula 20 - Framework DECIDE"
        course="Projetos de Interface"
      />

      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>

        <div id="decide"><DECIDESection /></div>
        <div id="etica"><EticaSection /></div>
        <div id="metodos"><MetodosSection /></div>
        <div id="teste-lab"><TesteLaboratorioSection /></div>
        <div id="usabilidade"><UsabilidadeSection /></div>
        <div id="estudo-caso"><EstudoCasoSection /></div>
        <div id="atividade"><AtividadeSection /></div>
      </div>

      <PdfExportButton filename="PI_Aula-20_Framework-DECIDE.pdf" />
    </main>
  );
};

export default Aula20;
