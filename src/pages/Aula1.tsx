import HeroSection from "@/components/engenharia-software-1/aula1/HeroSection";
import EmentaSection from "@/components/engenharia-software-1/aula1/EmentaSection";
import MetodologiaSection from "@/components/engenharia-software-1/aula1/MetodologiaSection";
import AvaliacaoSection from "@/components/engenharia-software-1/aula1/AvaliacaoSection";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";

const Aula1 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 1 - Apresentação da Disciplina"
        course="Engenharia de Software I"
      />
      <HeroSection />
      <EmentaSection />
      <MetodologiaSection />
      <AvaliacaoSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Engenharia de Software I • Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
      <PdfExportButton filename="ES1_Aula-1_Apresentacao.pdf" />
    </main>
  );
};

export default Aula1;
