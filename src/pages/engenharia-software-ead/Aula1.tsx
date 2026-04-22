import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula1/HeroSection";
import IntroducaoSection from "@/components/engenharia-software-ead/aula1/IntroducaoSection";
import HistoricoSection from "@/components/engenharia-software-ead/aula1/HistoricoSection";
import EvolucaoSection from "@/components/engenharia-software-ead/aula1/EvolucaoSection";
import ImportanciaSection from "@/components/engenharia-software-ead/aula1/ImportanciaSection";
import EstudoCasoSection from "@/components/engenharia-software-ead/aula1/EstudoCasoSection";
import ReferenciasSection from "@/components/engenharia-software-ead/aula1/ReferenciasSection";

const sections = [
  { id: "introducao", title: "Introdução" },
  { id: "historico", title: "Histórico" },
  { id: "evolucao", title: "Evolução" },
  { id: "importancia", title: "Importância" },
  { id: "estudo-caso", title: "Estudo de Caso" },
  { id: "referencias", title: "Referências" },
];

const Aula1 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 1 - Conceitos da ES" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <IntroducaoSection />
      <HistoricoSection />
      <EvolucaoSection />
      <ImportanciaSection />
      <EstudoCasoSection />
      <ReferenciasSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
        <p className="text-xs text-muted-foreground mt-2 italic">
          Conteúdo baseado em Zanin, A. — "Conceitos da Engenharia de Software" (SAGAH, 2017)
        </p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-1_Conceitos-ES.pdf" />
  </main>
);

export default Aula1;

