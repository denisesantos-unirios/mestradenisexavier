import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula2/HeroSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula2/ConteudoSection";
import FracassosSection from "@/components/engenharia-software-ead/aula2/FracassosSection";
import SeisSigmaCmmiSection from "@/components/engenharia-software-ead/aula2/SeisSigmaCmmiSection";
import MpsBrSection from "@/components/engenharia-software-ead/aula2/MpsBrSection";
import AtividadeSection from "@/components/engenharia-software-ead/aula2/AtividadeSection";
import ReferenciasSection from "@/components/engenharia-software-ead/aula2/ReferenciasSection";

const sections = [
  { id: "conceito", title: "Processos Tradicionais" },
  { id: "fracassos", title: "Por que fracassam?" },
  { id: "modelos", title: "Seis Sigma & CMMI" },
  { id: "mpsbr", title: "MPS.BR" },
  { id: "atividade", title: "Atividade" },
  { id: "referencias", title: "Referências" },
];

const Aula2 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 2 - Processos Tradicionais & Melhoria" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <ConteudoSection />
      <FracassosSection />
      <SeisSigmaCmmiSection />
      <MpsBrSection />
      <AtividadeSection />
      <ReferenciasSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
        <p className="text-xs text-muted-foreground mt-2 italic">
          Conteúdo baseado em Barreto, J. dos S. — "Melhorias de processos de software" (SAGAH) e Sommerville (2011)
        </p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-2_Processos-Tradicionais.pdf" />
  </main>
);

export default Aula2;
