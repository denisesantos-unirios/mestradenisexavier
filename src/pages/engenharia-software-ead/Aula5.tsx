import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import { HeroSection } from "@/components/engenharia-software-ead/aula5/ConteudoSection";
import ConteudoSection from "@/components/engenharia-software-ead/aula5/ConteudoSection";
import ConceitosSection from "@/components/engenharia-software-ead/aula5/ConceitosSection";
import ProcessoSection from "@/components/engenharia-software-ead/aula5/ProcessoSection";
import ComoEscreverSection from "@/components/engenharia-software-ead/aula5/ComoEscreverSection";
import UserStoriesSection from "@/components/engenharia-software-ead/aula5/UserStoriesSection";
import JudyDetranSection from "@/components/engenharia-software-ead/aula5/JudyDetranSection";

const sections = [
  { id: "conceitos", title: "Conceitos" },
  { id: "requisitos", title: "Tipos" },
  { id: "processo", title: "Processo" },
  { id: "como-escrever", title: "Como Escrever" },
  { id: "user-stories", title: "User Stories" },
  { id: "judy-detran", title: "Caso Judy/Detran" },
];

const Aula5 = () => (
  <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
    <LessonNavigation sections={sections} title="Aula 5 - Requisitos de Software" course="Engenharia de Software EAD" />
    <div className="pt-16">
      <HeroSection />
      <LessonQRCode />
      <ConceitosSection />
      <ConteudoSection />
      <ProcessoSection />
      <ComoEscreverSection />
      <UserStoriesSection />
      <JudyDetranSection />
    </div>
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">Prof.ª Denise Xavier • Engenharia de Software EAD</p>
      </div>
    </footer>
    <PdfExportButton filename="ES-EAD_Aula-5_Requisitos-Software.pdf" />
  </main>
);

export default Aula5;
