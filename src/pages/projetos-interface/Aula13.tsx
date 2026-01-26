import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/projetos-interface/aula13/HeroSection";
import RequisitosFase1Section from "@/components/projetos-interface/aula13/RequisitosFase1Section";
import CriteriosAvaliacaoSection from "@/components/projetos-interface/aula13/CriteriosAvaliacaoSection";
import EntregaSection from "@/components/projetos-interface/aula13/EntregaSection";

const Aula13 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <RequisitosFase1Section />
        <CriteriosAvaliacaoSection />
        <EntregaSection />
      </main>
    </div>
  );
};

export default Aula13;
