import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula10/HeroSection";
import DeficienciasSection from "@/components/projetos-interface/aula10/DeficienciasSection";
import WCAGSection from "@/components/projetos-interface/aula10/WCAGSection";
import TecnologiasAssistivasSection from "@/components/projetos-interface/aula10/TecnologiasAssistivasSection";
import AtividadeSection from "@/components/projetos-interface/aula10/AtividadeSection";

const Aula10 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <DeficienciasSection />
        <WCAGSection />
        <TecnologiasAssistivasSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula10;
