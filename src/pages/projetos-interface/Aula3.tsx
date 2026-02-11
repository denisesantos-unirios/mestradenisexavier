import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/projetos-interface/aula3/HeroSection";
import ModelosMentaisSection from "@/components/projetos-interface/aula3/ModelosMentaisSection";
import UsuariosSection from "@/components/projetos-interface/aula3/UsuariosSection";
import PraticaSection from "@/components/projetos-interface/aula3/PraticaSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "modelos-mentais", title: "Modelos Mentais" },
  { id: "usuarios", title: "Usuários" },
  { id: "pratica", title: "Prática" }
];

const ProjetosInterfaceAula3 = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        title="Aula 3 - Conceitualizando a Interação"
        course="Projetos de Interface"
        sections={sections}
      />
      <HeroSection />
      <LessonQRCode />
      <ModelosMentaisSection />
      <UsuariosSection />
      <PraticaSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Projetos de Interface • Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
      <PdfExportButton filename="Projetos-Interface_Aula-3_Conceitualizacao.pdf" />
    </main>
  );
};

export default ProjetosInterfaceAula3;
