import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula6/HeroSection";
import CognicaoSection from "@/components/projetos-interface/aula6/CognicaoSection";
import PercepcaoSection from "@/components/projetos-interface/aula6/PercepcaoSection";
import MemoriaSection from "@/components/projetos-interface/aula6/MemoriaSection";
import AtividadeSection from "@/components/projetos-interface/aula6/AtividadeSection";

const Aula6 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <HeroSection />
      <CognicaoSection />
      <PercepcaoSection />
      <MemoriaSection />
      <AtividadeSection />
    </div>
  );
};

export default Aula6;
