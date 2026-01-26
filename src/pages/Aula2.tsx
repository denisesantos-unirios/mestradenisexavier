import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import TheorySection from "@/components/aula2/TheorySection";
import DynamicSection from "@/components/aula2/DynamicSection";
import ModelingSection from "@/components/aula2/ModelingSection";
import ActivitySection from "@/components/aula2/ActivitySection";

const Aula2 = () => {
  const sections = [
    { id: "teoria", title: "Teoria Relâmpago" },
    { id: "dinamica", title: "Dinâmica" },
    { id: "modelagem", title: "Modelagem" },
    { id: "atividade", title: "Atividade" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation 
        title="Aula 2 - Análise de Sistemas + Processos"
        course="Engenharia de Software I"
        sections={sections}
      />
      
      <main className="pt-32">
        <TheorySection />
        <DynamicSection />
        <ModelingSection />
        <ActivitySection />
      </main>
      <PdfExportButton filename="ES1_Aula-2_Analise-Sistemas.pdf" />
    </div>
  );
};

export default Aula2;
