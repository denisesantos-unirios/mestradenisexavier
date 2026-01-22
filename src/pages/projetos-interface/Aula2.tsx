import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/projetos-interface/aula2/HeroSection";
import ConceitosSection from "@/components/projetos-interface/aula2/ConceitosSection";
import ModelosInteracaoSection from "@/components/projetos-interface/aula2/ModelosInteracaoSection";
import MicrointeracoesSection from "@/components/projetos-interface/aula2/MicrointeracoesSection";
import PraticaSection from "@/components/projetos-interface/aula2/PraticaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "conceitos", title: "Conceitos" },
  { id: "modelos", title: "Princípios" },
  { id: "microinteracoes", title: "Microinterações" },
  { id: "pratica", title: "Prática" }
];

const ProjetosInterfaceAula2 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 2 - Design de Interação"
        course="Projetos de Interface"
        sections={sections}
      />
      <HeroSection />
      <ConceitosSection />
      <ModelosInteracaoSection />
      <MicrointeracoesSection />
      <PraticaSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Projetos de Interface • Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
    </main>
  );
};

export default ProjetosInterfaceAula2;
