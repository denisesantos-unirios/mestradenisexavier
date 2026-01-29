import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/protocolos/decide/HeroSection";
import FundamentacaoSection from "@/components/protocolos/decide/FundamentacaoSection";
import FasesSection from "@/components/protocolos/decide/FasesSection";
import MetodologiaSection from "@/components/protocolos/decide/MetodologiaSection";
import EticaSection from "@/components/protocolos/decide/EticaSection";
import AnaliseSection from "@/components/protocolos/decide/AnaliseSection";
import DicasSection from "@/components/protocolos/decide/DicasSection";
import ReferenciasSection from "@/components/protocolos/decide/ReferenciasSection";

const sections = [
  { id: "Introdução", title: "Introdução" },
  { id: "Fundamentação", title: "Fundamentação" },
  { id: "Fases DECIDE", title: "Fases DECIDE" },
  { id: "Metodologia", title: "Metodologia" },
  { id: "Ética", title: "Ética" },
  { id: "Análise", title: "Análise" },
  { id: "Dicas", title: "Dicas" },
  { id: "Referências", title: "Referências" }
];

const FrameworkDECIDE = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation 
        title="Framework DECIDE"
        course="Protocolos"
        sections={sections}
      />
      
      <main id="pdf-content" className="pt-16">
        <HeroSection />
        <FundamentacaoSection />
        <FasesSection />
        <MetodologiaSection />
        <EticaSection />
        <AnaliseSection />
        <DicasSection />
        <ReferenciasSection />
      </main>

      <PdfExportButton filename="Framework-DECIDE-Usabilidade.pdf" />
    </div>
  );
};

export default FrameworkDECIDE;
