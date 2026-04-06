import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import { HeroSection } from "@/components/engenharia-software-ead/aula8/ConteudoSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula8/ConteudoSection";

const sections = [
  { id: "case", title: "Estudo de Caso" },
];

const Aula8 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 8 - Modelagem: E-Commerce" course="Engenharia de Software EAD" />
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
    <PdfExportButton filename="ES-EAD_Aula-8_Modelagem-Ecommerce.pdf" />
  </main>
);

export default Aula8;
