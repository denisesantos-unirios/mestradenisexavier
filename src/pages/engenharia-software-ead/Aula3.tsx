import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula3/HeroSection";
import MetodologiasSection from "@/components/engenharia-software-ead/aula3/MetodologiasSection";
import CascataSection from "@/components/engenharia-software-ead/aula3/CascataSection";
import PrototipacaoSection from "@/components/engenharia-software-ead/aula3/PrototipacaoSection";
import HistoriaSection from "@/components/engenharia-software-ead/aula3/HistoriaSection";
import ManifestoSection from "@/components/engenharia-software-ead/aula3/ManifestoSection";
import PrincipiosSection from "@/components/engenharia-software-ead/aula3/PrincipiosSection";
import ScrumSection from "@/components/engenharia-software-ead/aula3/ScrumSection";
import HistoriaUsuarioSection from "@/components/engenharia-software-ead/aula3/HistoriaUsuarioSection";
import ImpactoSection from "@/components/engenharia-software-ead/aula3/ImpactoSection";
import PorqueManifestoSection from "@/components/engenharia-software-ead/aula3/PorqueManifestoSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula3/ConteudoSection";

const sections = [
  { id: "metodologias", title: "Metodologias" },
  { id: "cascata", title: "Cascata" },
  { id: "prototipacao", title: "Prototipação" },
  { id: "historia", title: "História do Ágil" },
  { id: "manifesto", title: "4 Valores" },
  { id: "principios", title: "12 Princípios" },
  { id: "scrum", title: "Scrum" },
  { id: "user-stories", title: "User Stories + INVEST" },
  { id: "impacto", title: "Impacto" },
  { id: "porque-manifesto", title: "Por que ainda importa" },
  { id: "atividade", title: "Atividade" },
];

const Aula3 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation
      sections={sections}
      title="Aula 3 - Ciclos de Desenvolvimento, Metodologia Ágil e Scrum"
      course="Engenharia de Software EAD"
    />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <MetodologiasSection />
      <CascataSection />
      <PrototipacaoSection />
      <HistoriaSection />
      <ManifestoSection />
      <PrincipiosSection />
      <ScrumSection />
      <HistoriaUsuarioSection />
      <ImpactoSection />
      <PorqueManifestoSection />
      <div id="atividade">
        <ConteudoSection />
      </div>
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-3_Ciclos-Agil-Scrum.pdf" />
  </main>
);

export default Aula3;
