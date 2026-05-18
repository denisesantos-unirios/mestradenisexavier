import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula15/HeroSection";
import PreparacaoSection from "@/components/projetos-interface/aula15/PreparacaoSection";
import TesteValidacaoSection from "@/components/projetos-interface/aula15/TesteValidacaoSection";

const Aula15 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "preparacao", title: "2.4 Preparação (DECIDE)" },
    { id: "teste-validacao", title: "4. Teste e Validação" },
  ];

  const lessonNavigation = {
    title: "Modelo de Relatório do Experimento",
    course: "Projetos de Interface",
    currentLesson: 15,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-14",
      title: "Design Centrado no Usuário"
    },
    nextLesson: {
      path: "/projetos-interface/aula-16",
      title: "Fundamentos de Prototipação"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <LessonQRCode />
        <PreparacaoSection />
        <TesteValidacaoSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-15_Relatorio-Experimento.pdf" />
    </div>
  );
};

export default Aula15;
