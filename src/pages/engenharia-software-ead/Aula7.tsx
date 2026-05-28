import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import ConteudoSection, { HeroSection } from "@/components/engenharia-software-ead/aula7/ConteudoSection";

const sections = [
  { id: "objetivos", title: "Objetivos" },
  { id: "conceitos", title: "Conceitos" },
  { id: "diretrizes", title: "Diretrizes" },
  { id: "notacao", title: "Notação" },
  { id: "estudo-caso", title: "Estudo de Caso" },
  { id: "atividade", title: "Atividade" },
  { id: "referencias", title: "Referências" },
];

const Aula7 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 7 - Modelagem Conceitual" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <ConteudoSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-7_Modelagem-Conceitual.pdf" />
  </main>
);

export default Aula7;
