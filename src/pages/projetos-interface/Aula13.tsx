import MainNavigation from "@/components/MainNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
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
        <LessonQRCode />
        <RequisitosFase1Section />
        <CriteriosAvaliacaoSection />
        <EntregaSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-13_Entrega-Fase1.pdf" />
    </div>
  );
};

export default Aula13;
