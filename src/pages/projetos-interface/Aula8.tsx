import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula8/HeroSection";
import UXvsUISection from "@/components/projetos-interface/aula8/UXvsUISection";
import CamadasUXSection from "@/components/projetos-interface/aula8/CamadasUXSection";
import JornadaSection from "@/components/projetos-interface/aula8/JornadaSection";
import AtividadeSection from "@/components/projetos-interface/aula8/AtividadeSection";

const Aula8 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <UXvsUISection />
        <CamadasUXSection />
        <JornadaSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula8;
