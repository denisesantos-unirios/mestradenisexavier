import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula1/HeroSection";
import OQueEsSection from "@/components/engenharia-software-ead/aula1/OQueEsSection";
import PapeisSection from "@/components/engenharia-software-ead/aula1/PapeisSection";
import TiposSistemasSection from "@/components/engenharia-software-ead/aula1/TiposSistemasSection";
import AtividadeSection from "@/components/engenharia-software-ead/aula1/AtividadeSection";

const sections = [
  { id: "o-que-e-es", title: "O que é ES" },
  { id: "papeis", title: "Papéis" },
  { id: "tipos-sistemas", title: "Sistemas" },
  { id: "atividade", title: "Atividade" },
];

const Aula1 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 1 - ES e Mercado" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <OQueEsSection />
      <PapeisSection />
      <TiposSistemasSection />
      <AtividadeSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-1_ES-e-Mercado.pdf" />
  </main>
);

export default Aula1;
