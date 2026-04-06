import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula2/HeroSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula2/ConteudoSection";
import AtividadeSection from "@/components/engenharia-software-ead/aula2/AtividadeSection";

const sections = [
  { id: "conceito", title: "Conceito" },
  { id: "atividade", title: "Atividade" },
];

const Aula2 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 2 - Processos Tradicionais" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <ConteudoSection />
      <AtividadeSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-2_Processos-Tradicionais.pdf" />
  </main>
);

export default Aula2;
