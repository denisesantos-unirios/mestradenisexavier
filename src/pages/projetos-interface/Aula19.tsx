import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/projetos-interface/aula19/HeroSection";
import ComponentesSection from "@/components/projetos-interface/aula19/ComponentesSection";
import PrototypingSection from "@/components/projetos-interface/aula19/PrototypingSection";
import AtividadeSection from "@/components/projetos-interface/aula19/AtividadeSection";

const Aula19 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "componentes", title: "Componentes" },
    { id: "prototyping", title: "Prototipação" },
    { id: "atividade", title: "Atividade" },
  ];

  const lessonNavigation = {
    title: "Componentes e Fluxos",
    course: "Projetos de Interface",
    currentLesson: 19,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-18",
      title: "Introdução ao Figma"
    },
    nextLesson: undefined
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <ComponentesSection />
        <PrototypingSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula19;
