import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula3/HeroSection";
import HistoriaSection from "@/components/engenharia-software-ead/aula3/HistoriaSection";
import ManifestoSection from "@/components/engenharia-software-ead/aula3/ManifestoSection";
import PrincipiosSection from "@/components/engenharia-software-ead/aula3/PrincipiosSection";
import ImpactoSection from "@/components/engenharia-software-ead/aula3/ImpactoSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula3/ConteudoSection";

const sections = [
  { id: "historia", title: "História" },
  { id: "manifesto", title: "4 Valores" },
  { id: "principios", title: "12 Princípios" },
  { id: "impacto", title: "Impacto nos Processos" },
  { id: "atividade", title: "Atividade Prática" },
];

const Aula3 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 3 - Visão Ágil" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <HistoriaSection />
      <ManifestoSection />
      <PrincipiosSection />
      <ImpactoSection />
      <div id="atividade">
        <ConteudoSection />
      </div>
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-3_Manifesto-Agil.pdf" />
  </main>
);

export default Aula3;
