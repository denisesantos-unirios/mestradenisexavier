import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula2/HeroSection";
import IntroducaoIHCSection from "@/components/projetos-interface/aula2/IntroducaoIHCSection";
import EvolucaoInterfacesSection from "@/components/projetos-interface/aula2/EvolucaoInterfacesSection";
import ProcessoInteracaoSection from "@/components/projetos-interface/aula2/ProcessoInteracaoSection";
import InterfaceDefinicaoSection from "@/components/projetos-interface/aula2/InterfaceDefinicaoSection";
import MetaforasAffordanceSection from "@/components/projetos-interface/aula2/MetaforasAffordanceSection";
import EngenhariaCognitivaSection from "@/components/projetos-interface/aula2/EngenhariaCognitivaSection";
import DesenvolvimentoInterfaceSection from "@/components/projetos-interface/aula2/DesenvolvimentoInterfaceSection";
import ConceitosSection from "@/components/projetos-interface/aula2/ConceitosSection";
import ModelosInteracaoSection from "@/components/projetos-interface/aula2/ModelosInteracaoSection";
import MicrointeracoesSection from "@/components/projetos-interface/aula2/MicrointeracoesSection";
import PraticaSection from "@/components/projetos-interface/aula2/PraticaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "introducao-ihc", title: "O que é IHC?" },
  { id: "evolucao-interfaces", title: "Evolução das Interfaces" },
  { id: "processo-interacao", title: "Processo de Interação" },
  { id: "interface-definicao", title: "Definição de Interface" },
  { id: "metaforas-affordance", title: "Metáforas e Affordance" },
  { id: "engenharia-cognitiva", title: "Engenharia Cognitiva" },
  { id: "desenvolvimento-interface", title: "Desenvolvimento" },
  { id: "conceitos", title: "Conceitos de Design" },
  { id: "modelos", title: "Princípios de Norman" },
  { id: "microinteracoes", title: "Microinterações" },
  { id: "pratica", title: "Atividade" }
];

const ProjetosInterfaceAula2 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 2 - Interface e Design de Interação"
        course="Projetos de Interface"
        sections={sections}
      />
      
      <HeroSection />
      <LessonQRCode />
      <IntroducaoIHCSection />
      <ProcessoInteracaoSection />
      <InterfaceDefinicaoSection />
      <MetaforasAffordanceSection />
      <EngenhariaCognitivaSection />
      <DesenvolvimentoInterfaceSection />
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
      
      <PdfExportButton filename="Projetos-Interface_Aula-2_Interface-Design-Interacao.pdf" />
    </main>
  );
};

export default ProjetosInterfaceAula2;
