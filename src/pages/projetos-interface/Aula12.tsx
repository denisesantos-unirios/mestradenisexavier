import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/projetos-interface/aula12/HeroSection";
import MapaConceitulaSection from "@/components/projetos-interface/aula12/MapaConceitulaSection";
import QuizRevisaoSection from "@/components/projetos-interface/aula12/QuizRevisaoSection";
import ChecklistSection from "@/components/projetos-interface/aula12/ChecklistSection";

const Aula12 = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-16">
        <HeroSection />
        <MapaConceitulaSection />
        <QuizRevisaoSection />
        <ChecklistSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-12_Revisao.pdf" />
    </div>
  );
};

export default Aula12;
