import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import IntroducaoSection from "@/components/aula2/IntroducaoSection";
import DadoInformacaoSection from "@/components/aula2/DadoInformacaoSection";
import TeoriaSistemasSection from "@/components/aula2/TeoriaSistemasSection";
import AnalistaSection from "@/components/aula2/AnalistaSection";
import ModelagemSection from "@/components/aula2/ModelagemSection";
import ProcessosSection from "@/components/aula2/ProcessosSection";
import ExerciciosSection from "@/components/aula2/ExerciciosSection";

const Aula2 = () => {
  const sections = [
    { id: "introducao", title: "Introdução" },
    { id: "dado-informacao", title: "Dado/Informação" },
    { id: "teoria-sistemas", title: "Sistemas" },
    { id: "analista", title: "Analista" },
    { id: "modelagem", title: "Modelagem" },
    { id: "processos", title: "Processos" },
    { id: "exercicios", title: "Exercícios" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LessonNavigation 
        title="Aula 2 - Análise de Sistemas"
        course="Engenharia de Software I"
        sections={sections}
      />
      
      <main className="pt-16">
        <LessonQRCode />
        <IntroducaoSection />
        <DadoInformacaoSection />
        <TeoriaSistemasSection />
        <AnalistaSection />
        <ModelagemSection />
        <ProcessosSection />
        <ExerciciosSection />
      </main>
      <PdfExportButton filename="ES1_Aula-2_Analise-Sistemas.pdf" />
    </div>
  );
};

export default Aula2;
