import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import RequirementsIntroSection from "@/components/aula4/RequirementsIntroSection";
import RequirementsTypesSection from "@/components/aula4/RequirementsTypesSection";
import ElicitationTechniquesSection from "@/components/aula4/ElicitationTechniquesSection";
import InterviewSimulationSection from "@/components/aula4/InterviewSimulationSection";
import AVAActivitySection from "@/components/aula4/AVAActivitySection";
import CanvasIASection from "@/components/aula4/CanvasIASection";

const sections = [
  { id: "introducao", title: "Introdução" },
  { id: "tipos", title: "Tipos de Requisitos" },
  { id: "tecnicas", title: "Técnicas de Elicitação" },
  { id: "dinamica", title: "Simulação de Entrevista" },
  { id: "canvas-ia", title: "Canvas com IA" },
  { id: "atividade-ava", title: "Atividade AVA" }
];

const Aula4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <LessonNavigation
        title="Aula 4 - Engenharia de Requisitos"
        course="Engenharia de Software I"
        sections={sections}
      />
      
      <main className="pt-16">
        <LessonQRCode />
        <RequirementsIntroSection />
        <RequirementsTypesSection />
        <ElicitationTechniquesSection />
        <InterviewSimulationSection />
        <CanvasIASection />
        <AVAActivitySection />
      </main>
      <PdfExportButton filename="ES1_Aula-4_Engenharia-Requisitos.pdf" />
    </div>
  );
};

export default Aula4;
