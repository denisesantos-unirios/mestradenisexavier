import HeroSection from "@/components/HeroSection";
import CrisisSection from "@/components/CrisisSection";
import MarshmallowSection from "@/components/MarshmallowSection";
import LessonNavigation from "@/components/LessonNavigation";

const Aula1 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 1 - Apresentação da Disciplina"
        course="Engenharia de Software I"
      />
      <HeroSection />
      <CrisisSection />
      <MarshmallowSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Engenharia de Software I • Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
    </main>
  );
};

export default Aula1;
