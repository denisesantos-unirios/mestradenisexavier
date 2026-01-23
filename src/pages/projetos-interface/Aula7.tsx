import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula7/HeroSection";
import AnaliseSection from "@/components/projetos-interface/aula7/AnaliseSection";
import HTASection from "@/components/projetos-interface/aula7/HTASection";
import FluxosSection from "@/components/projetos-interface/aula7/FluxosSection";
import AtividadeSection from "@/components/projetos-interface/aula7/AtividadeSection";

const Aula7 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <HeroSection />
      <AnaliseSection />
      <HTASection />
      <FluxosSection />
      <AtividadeSection />
    </div>
  );
};

export default Aula7;
