import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import { HeroSection } from "@/components/engenharia-software-ead/aula5/ConteudoSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula5/ConteudoSection";

const sections = [
  { id: "requisitos", title: "Requisitos" },
];

const Aula5 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 5 - Requisitos de Software" course="Engenharia de Software EAD" />
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
    <PdfExportButton filename="ES-EAD_Aula-5_Requisitos-Software.pdf" />
  </main>
);

export default Aula5;
