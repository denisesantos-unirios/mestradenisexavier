import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula4/HeroSection";
import UsabilidadeSection from "@/components/projetos-interface/aula4/UsabilidadeSection";
import PrincipiosSection from "@/components/projetos-interface/aula4/PrincipiosSection";
import HeuristicasSection from "@/components/projetos-interface/aula4/HeuristicasSection";
import AtividadeSection from "@/components/projetos-interface/aula4/AtividadeSection";

const Aula4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <LessonQRCode />
        <UsabilidadeSection />
        <PrincipiosSection />
        <HeuristicasSection />
        <AtividadeSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-4_Usabilidade.pdf" />
    </div>
  );
};

export default Aula4;
