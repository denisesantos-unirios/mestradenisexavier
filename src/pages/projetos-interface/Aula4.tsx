import MainNavigation from "@/components/MainNavigation";
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
        <UsabilidadeSection />
        <PrincipiosSection />
        <HeuristicasSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula4;
