import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula7/HeroSection";
import AnaliseSection from "@/components/projetos-interface/aula7/AnaliseSection";
import HTASection from "@/components/projetos-interface/aula7/HTASection";
import FluxosSection from "@/components/projetos-interface/aula7/FluxosSection";
import AtividadeSection from "@/components/projetos-interface/aula7/AtividadeSection";

const Aula7 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <LessonQRCode />
        <AnaliseSection />
        <HTASection />
        <FluxosSection />
        <AtividadeSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-7_Analise-Tarefas.pdf" />
    </div>
  );
};

export default Aula7;
