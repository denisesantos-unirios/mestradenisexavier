import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula11/HeroSection";
import FerramentasSection from "@/components/projetos-interface/aula11/FerramentasSection";
import ChecklistSection from "@/components/projetos-interface/aula11/ChecklistSection";
import ExemplosSection from "@/components/projetos-interface/aula11/ExemplosSection";
import AtividadeSection from "@/components/projetos-interface/aula11/AtividadeSection";

const Aula11 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <LessonQRCode />
        <FerramentasSection />
        <ChecklistSection />
        <ExemplosSection />
        <AtividadeSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-11_Acessibilidade-Pratica.pdf" />
    </div>
  );
};

export default Aula11;
