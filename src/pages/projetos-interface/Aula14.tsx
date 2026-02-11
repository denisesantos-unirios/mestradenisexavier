import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula14/HeroSection";
import DCUSection from "@/components/projetos-interface/aula14/DCUSection";
import NormasSection from "@/components/projetos-interface/aula14/NormasSection";
import AtividadeSection from "@/components/projetos-interface/aula14/AtividadeSection";

const Aula14 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "dcu", title: "Processo DCU" },
    { id: "normas", title: "Normas" },
    { id: "atividade", title: "Atividade" },
  ];

  const lessonNavigation = {
    title: "Design Centrado no Usuário",
    course: "Projetos de Interface",
    currentLesson: 14,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-13",
      title: "Entrega da Fase 1"
    },
    nextLesson: {
      path: "/projetos-interface/aula-15",
      title: "Ideação e Brainstorming"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <LessonQRCode />
        <DCUSection />
        <NormasSection />
        <AtividadeSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-14_DCU.pdf" />
    </div>
  );
};

export default Aula14;
