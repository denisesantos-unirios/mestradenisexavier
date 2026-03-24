import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/aula6/HeroSection";
import ConceitosSection from "@/components/aula6/ConceitosSection";
import NiveisModelagemSection from "@/components/aula6/NiveisModelagemSection";
import ElementosMERSection from "@/components/aula6/ElementosMERSection";
import PraticaSection from "@/components/aula6/PraticaSection";
import AtividadeSection from "@/components/aula6/AtividadeSection";

const sections = [
  { id: "conceitos", title: "Conceitos" },
  { id: "niveis", title: "Níveis" },
  { id: "elementos", title: "MER" },
  { id: "pratica", title: "Prática" },
  { id: "atividade", title: "Atividade" },
];

const Aula6 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LessonNavigation
        title="Aula 6 - Modelagem Conceitual"
        course="Engenharia de Software I"
        sections={sections}
      />

      <HeroSection />
      <LessonQRCode />
      <ConceitosSection />
      <NiveisModelagemSection />
      <ElementosMERSection />
      <PraticaSection />
      <AtividadeSection />

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Prof.ª Denise Xavier • Engenharia de Software I
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            "Em modelagem de dados só podemos ter uma certeza: a de que nosso modelo nunca estará completamente acabado"
          </p>
        </div>
      </footer>
      <PdfExportButton filename="ES1_Aula-6_Modelagem-Conceitual.pdf" />
    </div>
  );
};

export default Aula6;
