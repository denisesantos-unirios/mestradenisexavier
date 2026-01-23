import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula5/HeroSection";
import PersonasSection from "@/components/projetos-interface/aula5/PersonasSection";
import TarefasSection from "@/components/projetos-interface/aula5/TarefasSection";
import AtividadeSection from "@/components/projetos-interface/aula5/AtividadeSection";

const Aula5 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <PersonasSection />
        <TarefasSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula5;
