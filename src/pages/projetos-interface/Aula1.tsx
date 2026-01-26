import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/projetos-interface/aula1/HeroSection";
import EmentaSection from "@/components/projetos-interface/aula1/EmentaSection";
import MetodologiaSection from "@/components/projetos-interface/aula1/MetodologiaSection";
import AvaliacaoSection from "@/components/projetos-interface/aula1/AvaliacaoSection";
import CronogramaSection from "@/components/projetos-interface/aula1/CronogramaSection";
import DinamicaSection from "@/components/projetos-interface/aula1/DinamicaSection";
import ConceitosSection from "@/components/projetos-interface/aula1/ConceitosSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "ementa", title: "Ementa" },
  { id: "metodologia", title: "Metodologia" },
  { id: "avaliacao", title: "Avaliação" },
  { id: "cronograma", title: "Cronograma" },
  { id: "dinamica", title: "Dinâmica" },
  { id: "conceitos", title: "Conceitos" }
];

const ProjetosInterfaceAula1 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 1 - Apresentação da Disciplina"
        course="Projetos de Interface"
        sections={sections}
      />
      <HeroSection />
      <EmentaSection />
      <MetodologiaSection />
      <AvaliacaoSection />
      <CronogramaSection />
      <DinamicaSection />
      <ConceitosSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Projetos de Interface • Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
      <PdfExportButton filename="Projetos-Interface_Aula-1_Apresentacao.pdf" />
    </main>
  );
};

export default ProjetosInterfaceAula1;
