import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-ead/aula6/HeroSection";
import ObjetivosSection from "@/components/engenharia-software-ead/aula6/ObjetivosSection";
import PlanejamentoSection from "@/components/engenharia-software-ead/aula6/PlanejamentoSection";
import QuestionarioSection from "@/components/engenharia-software-ead/aula6/QuestionarioSection";
import EntrevistaSection from "@/components/engenharia-software-ead/aula6/EntrevistaSection";
import ObservacaoSection from "@/components/engenharia-software-ead/aula6/ObservacaoSection";
import HabilidadesSection from "@/components/engenharia-software-ead/aula6/HabilidadesSection";
import OrganizacaoSection from "@/components/engenharia-software-ead/aula6/OrganizacaoSection";
import ReferenciasSection from "@/components/engenharia-software-ead/aula6/ReferenciasSection";

const sections = [
  { id: "objetivos", title: "Objetivos" },
  { id: "planejamento", title: "Planejamento" },
  { id: "questionario", title: "Questionário" },
  { id: "entrevista", title: "Entrevista" },
  { id: "observacao", title: "Observação" },
  { id: "habilidades", title: "Habilidades" },
  { id: "organizacao", title: "Organização" },
  { id: "referencias", title: "Referências" },
];

const Aula6 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 6 - Elicitação de Requisitos" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <ObjetivosSection />
      <PlanejamentoSection />
      <QuestionarioSection />
      <EntrevistaSection />
      <ObservacaoSection />
      <HabilidadesSection />
      <OrganizacaoSection />
      <ReferenciasSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
        <p className="text-sm text-muted-foreground/60 mt-2 italic">
          "A engenharia de requisitos transforma necessidades em soluções."
        </p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-6_Elicitacao-Requisitos.pdf" />
  </main>
);

export default Aula6;
