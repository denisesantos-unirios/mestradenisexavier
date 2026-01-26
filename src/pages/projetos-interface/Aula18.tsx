import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/projetos-interface/aula18/HeroSection";
import InterfaceSection from "@/components/projetos-interface/aula18/InterfaceSection";
import FramesSection from "@/components/projetos-interface/aula18/FramesSection";
import AtividadeSection from "@/components/projetos-interface/aula18/AtividadeSection";

const Aula18 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "interface", title: "Interface" },
    { id: "frames", title: "Frames" },
    { id: "atividade", title: "Atividade" },
  ];

  const lessonNavigation = {
    title: "Introdução ao Figma",
    course: "Projetos de Interface",
    currentLesson: 18,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-17",
      title: "Prototipação de Papel"
    },
    nextLesson: {
      path: "/projetos-interface/aula-19",
      title: "Componentes e Fluxos"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <InterfaceSection />
        <FramesSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula18;
