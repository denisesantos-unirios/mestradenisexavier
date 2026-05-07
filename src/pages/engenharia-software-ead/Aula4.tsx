import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula4/HeroSection";
import MetodologiasSection from "@/components/engenharia-software-ead/aula4/MetodologiasSection";
import PapeisArtefatosSection from "@/components/engenharia-software-ead/aula4/PapeisArtefatosSection";
import HistoriasUsuarioSection from "@/components/engenharia-software-ead/aula4/HistoriasUsuarioSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula4/ConteudoSection";

const sections = [
  { id: "metodologias", title: "Metodologias" },
  { id: "papeis-artefatos", title: "Papéis & Artefatos" },
  { id: "historias", title: "Histórias de Usuário" },
  { id: "scrum-teoria", title: "Mini-Simulação" },
];

const Aula4 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 4 - Scrum na Prática" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <MetodologiasSection />
      <PapeisArtefatosSection />
      <HistoriasUsuarioSection />
      <ConteudoSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
        <p className="text-xs text-muted-foreground/70 mt-2">Referência: BARBOSA, C. Sistemas de Informações Gerenciais — Ciclos de desenvolvimento, metodologia ágil e Scrum.</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-4_Scrum-Pratica.pdf" />
  </main>
);

export default Aula4;
