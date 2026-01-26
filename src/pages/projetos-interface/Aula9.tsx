import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/projetos-interface/aula9/HeroSection";
import PrincipiosUXSection from "@/components/projetos-interface/aula9/PrincipiosUXSection";
import LeisPsicologicasSection from "@/components/projetos-interface/aula9/LeisPsicologicasSection";
import AtividadeSection from "@/components/projetos-interface/aula9/AtividadeSection";

const Aula9 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <PrincipiosUXSection />
        <LeisPsicologicasSection />
        <AtividadeSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-9_Principios-UX.pdf" />
    </div>
  );
};

export default Aula9;
