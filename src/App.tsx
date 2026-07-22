import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aula1 from "./pages/Aula1";
import Aula2 from "./pages/Aula2";
import Aula3 from "./pages/Aula3";
import Aula4 from "./pages/Aula4";
import ES1Aula4Reused from "./pages/Aula4";
import Aula5 from "./pages/Aula5";
import Aula6 from "./pages/Aula6";
import ES1Aula7 from "./pages/engenharia-software-1/Aula7";
// Engenharia de Software 2
import ES2Aula1 from "./pages/engenharia-software-2/Aula1";
import ES2Aula2 from "./pages/engenharia-software-2/Aula2";
import ES2Aula3 from "./pages/engenharia-software-2/Aula3";
import ES2Aula4 from "./pages/engenharia-software-2/Aula4";
import ES2Aula5 from "./pages/engenharia-software-2/Aula5";
import ES2Aula6 from "./pages/engenharia-software-2/Aula6";
import ES2Aula7 from "./pages/engenharia-software-2/Aula7";
import ES2Aula8 from "./pages/engenharia-software-2/Aula8";
import ES2Aula9 from "./pages/engenharia-software-2/Aula9";
import ES2Aula10 from "./pages/engenharia-software-2/Aula10";
import ES2Aula11 from "./pages/engenharia-software-2/Aula11";
import ES2Aula12 from "./pages/engenharia-software-2/Aula12";
import ES2Aula13 from "./pages/engenharia-software-2/Aula13";
import ES2Aula14 from "./pages/engenharia-software-2/Aula14";
import ES2Aula15 from "./pages/engenharia-software-2/Aula15";
import ES2Aula16 from "./pages/engenharia-software-2/Aula16";
import ES2Aula17 from "./pages/engenharia-software-2/Aula17";
import ES2Aula18 from "./pages/engenharia-software-2/Aula18";
// Projetos de Interface
import ProjetosInterfaceAula1 from "./pages/projetos-interface/Aula1";
import ProjetosInterfaceAula2 from "./pages/projetos-interface/Aula2";
import ProjetosInterfaceAula3 from "./pages/projetos-interface/Aula3";
import ProjetosInterfaceAula4 from "./pages/projetos-interface/Aula4";
import ProjetosInterfaceAula5 from "./pages/projetos-interface/Aula5";
import ProjetosInterfaceAula6 from "./pages/projetos-interface/Aula6";
import ProjetosInterfaceAula7 from "./pages/projetos-interface/Aula7";
import ProjetosInterfaceAula8 from "./pages/projetos-interface/Aula8";
import ProjetosInterfaceAula9 from "./pages/projetos-interface/Aula9";
import ProjetosInterfaceAula10 from "./pages/projetos-interface/Aula10";
import ProjetosInterfaceAula11 from "./pages/projetos-interface/Aula11";
import ProjetosInterfaceAula12 from "./pages/projetos-interface/Aula12";
import ProjetosInterfaceAula13 from "./pages/projetos-interface/Aula13";
import ProjetosInterfaceAula14 from "./pages/projetos-interface/Aula14";
import ProjetosInterfaceAula15 from "./pages/projetos-interface/Aula15";
import ProjetosInterfaceAula16 from "./pages/projetos-interface/Aula16";
import ProjetosInterfaceAula17 from "./pages/projetos-interface/Aula17";
import ProjetosInterfaceAula18 from "./pages/projetos-interface/Aula18";
import ProjetosInterfaceAula19 from "./pages/projetos-interface/Aula19";
import ProjetosInterfaceAula20 from "./pages/projetos-interface/Aula20";
// Engenharia de Software EAD
import ESEADAula1 from "./pages/engenharia-software-ead/Aula1";
import ESEADAula2 from "./pages/engenharia-software-ead/Aula2";
import ESEADAula3 from "./pages/engenharia-software-ead/Aula3";
import ESEADAula4 from "./pages/engenharia-software-ead/Aula4";
import ESEADAula5 from "./pages/engenharia-software-ead/Aula5";
import ESEADAula6 from "./pages/engenharia-software-ead/Aula6";
import ESEADAula7 from "./pages/engenharia-software-ead/Aula7";
import ESEADAula8 from "./pages/engenharia-software-ead/Aula8";
import ESEADAula9 from "./pages/engenharia-software-ead/Aula9";
import ESEADAula10 from "./pages/engenharia-software-ead/Aula10";
import ESEADAula11 from "./pages/engenharia-software-ead/Aula11";
// Gestão de Projetos
import GPAula1 from "./pages/gestao-projetos/Aula1";
import GPAula2 from "./pages/gestao-projetos/Aula2";
// Protocolos
import FrameworkDECIDE from "./pages/protocolos/FrameworkDECIDE";
import ProtocolosEquipes from "./pages/protocolos/Equipes";
import ProtocolosProjetos from "./pages/protocolos/Projetos";
import ProtocolosExperimentos from "./pages/protocolos/Experimentos";
import ProtocolosExperimentoDetalhe from "./pages/protocolos/ExperimentoDetalhe";
import ProtocolosLogin from "./pages/protocolos/Login";
import ProtocolosGestao from "./pages/protocolos/Gestao";
import SistemaExperimentos from "./pages/protocolos/SistemaExperimentos";
import ProjetosInterdisciplinares from "./pages/protocolos/ProjetosInterdisciplinares";
import ProjetoInterdisciplinarDetalhe from "./pages/protocolos/ProjetoInterdisciplinarDetalhe";
import ProtocolosGuard from "./components/protocolos/ProtocolosGuard";
// Modelagem
import ModelagemIndex from "./pages/modelagem/Index";
import ModelagemCaseStudy from "./pages/modelagem/CaseStudyPage";
// Provas
import ProvasLogin from "./pages/provas/Login";
import BancoQuestoes from "./pages/provas/BancoQuestoes";
import GerarProva from "./pages/provas/GerarProva";
import ListaProvas from "./pages/provas/ListaProvas";
// Nuvem de Palavras
import NuvemLista from "./pages/nuvem/NuvemLista";
import NuvemView from "./pages/nuvem/NuvemView";
import NuvemParticipar from "./pages/nuvem/NuvemParticipar";
// Ferramentas
import HistoriasUsuario from "./pages/ferramentas/HistoriasUsuario";
import NotFound from "./pages/NotFound";
import DenyMascot from "./components/DenyMascot";
import PresentationMode from "./components/PresentationMode";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DenyMascot />
        <PresentationMode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engenharia-software-1/aula-1" element={<Aula1 />} />
          <Route path="/engenharia-software-1/aula-2" element={<Aula2 />} />
          <Route path="/engenharia-software-1/aula-3" element={<Aula3 />} />
          <Route path="/engenharia-software-1/aula-4" element={<Aula4 />} />
          <Route path="/engenharia-software-1/aula-5" element={<Aula5 />} />
          <Route path="/engenharia-software-1/aula-6" element={<Aula6 />} />
          <Route path="/engenharia-software-1/aula-7" element={<ES1Aula7 />} />
          {/* Engenharia de Software 2 */}
          <Route path="/engenharia-software-2/aula-1" element={<ES2Aula1 />} />
          <Route path="/engenharia-software-2/aula-2" element={<ES2Aula2 />} />
          <Route path="/engenharia-software-2/aula-3" element={<ES2Aula3 />} />
          <Route path="/engenharia-software-2/aula-4" element={<ES1Aula4Reused />} />
          <Route path="/engenharia-software-2/aula-4-fundamentos" element={<ES2Aula4 />} />
          <Route path="/engenharia-software-2/aula-5" element={<ES2Aula5 />} />
          <Route path="/engenharia-software-2/aula-6" element={<ES2Aula6 />} />
          <Route path="/engenharia-software-2/aula-7" element={<ES2Aula7 />} />
          <Route path="/engenharia-software-2/aula-8" element={<ES2Aula8 />} />
          <Route path="/engenharia-software-2/aula-9" element={<ES2Aula9 />} />
          <Route path="/engenharia-software-2/aula-10" element={<ES2Aula10 />} />
          <Route path="/engenharia-software-2/aula-11" element={<ES2Aula11 />} />
          <Route path="/engenharia-software-2/aula-12" element={<ES2Aula12 />} />
          <Route path="/engenharia-software-2/aula-13" element={<ES2Aula13 />} />
          <Route path="/engenharia-software-2/aula-14" element={<ES2Aula14 />} />
          <Route path="/engenharia-software-2/aula-15" element={<ES2Aula15 />} />
          <Route path="/engenharia-software-2/aula-16" element={<ES2Aula16 />} />
          <Route path="/engenharia-software-2/aula-17" element={<ES2Aula17 />} />
          <Route path="/engenharia-software-2/aula-18" element={<ES2Aula18 />} />
          {/* Projetos de Interface */}
          <Route path="/projetos-interface/aula-1" element={<ProjetosInterfaceAula1 />} />
          <Route path="/projetos-interface/aula-2" element={<ProjetosInterfaceAula2 />} />
          <Route path="/projetos-interface/aula-3" element={<ProjetosInterfaceAula3 />} />
          <Route path="/projetos-interface/aula-4" element={<ProjetosInterfaceAula4 />} />
          <Route path="/projetos-interface/aula-5" element={<ProjetosInterfaceAula5 />} />
          <Route path="/projetos-interface/aula-6" element={<ProjetosInterfaceAula6 />} />
          <Route path="/projetos-interface/aula-7" element={<ProjetosInterfaceAula7 />} />
          <Route path="/projetos-interface/aula-8" element={<ProjetosInterfaceAula8 />} />
          <Route path="/projetos-interface/aula-9" element={<ProjetosInterfaceAula9 />} />
          <Route path="/projetos-interface/aula-10" element={<ProjetosInterfaceAula10 />} />
          <Route path="/projetos-interface/aula-11" element={<ProjetosInterfaceAula11 />} />
          <Route path="/projetos-interface/aula-12" element={<ProjetosInterfaceAula12 />} />
          <Route path="/projetos-interface/aula-13" element={<ProjetosInterfaceAula13 />} />
          <Route path="/projetos-interface/aula-14" element={<ProjetosInterfaceAula14 />} />
          <Route path="/projetos-interface/aula-15" element={<ProjetosInterfaceAula15 />} />
          <Route path="/projetos-interface/aula-16" element={<ProjetosInterfaceAula16 />} />
          <Route path="/projetos-interface/aula-17" element={<ProjetosInterfaceAula17 />} />
          <Route path="/projetos-interface/aula-18" element={<ProjetosInterfaceAula18 />} />
          <Route path="/projetos-interface/aula-19" element={<ProjetosInterfaceAula19 />} />
          <Route path="/projetos-interface/aula-20" element={<ProjetosInterfaceAula20 />} />
          {/* Engenharia de Software EAD */}
          <Route path="/engenharia-software-ead/aula-1" element={<ESEADAula1 />} />
          <Route path="/engenharia-software-ead/aula-2" element={<ESEADAula2 />} />
          <Route path="/engenharia-software-ead/aula-3" element={<ESEADAula3 />} />
          <Route path="/engenharia-software-ead/aula-4" element={<ESEADAula4 />} />
          <Route path="/engenharia-software-ead/aula-5" element={<ESEADAula5 />} />
          <Route path="/engenharia-software-ead/aula-6" element={<ESEADAula6 />} />
          <Route path="/engenharia-software-ead/aula-7" element={<ESEADAula7 />} />
          <Route path="/engenharia-software-ead/aula-8" element={<ESEADAula8 />} />
          <Route path="/engenharia-software-ead/aula-9" element={<ESEADAula9 />} />
          <Route path="/engenharia-software-ead/aula-10" element={<ESEADAula10 />} />
          <Route path="/engenharia-software-ead/aula-11" element={<ESEADAula11 />} />
          {/* Gestão de Projetos */}
          <Route path="/gestao-projetos/aula-1" element={<GPAula1 />} />
          <Route path="/gestao-projetos/aula-2" element={<GPAula2 />} />
          {/* Modelagem */}
          <Route path="/modelagem" element={<ModelagemIndex />} />
          <Route path="/modelagem/:slug" element={<ModelagemCaseStudy />} />
          {/* Protocolos */}
          <Route path="/protocolos/login" element={<ProtocolosLogin />} />
          <Route path="/protocolos/framework-decide" element={<ProtocolosGuard><FrameworkDECIDE /></ProtocolosGuard>} />
          <Route path="/protocolos/sistema" element={<ProtocolosGuard><SistemaExperimentos /></ProtocolosGuard>} />
          <Route path="/protocolos/equipes" element={<ProtocolosGuard permission="equipes"><ProtocolosEquipes /></ProtocolosGuard>} />
          <Route path="/protocolos/projetos" element={<ProtocolosGuard permission="projetos"><ProtocolosProjetos /></ProtocolosGuard>} />
          <Route path="/protocolos/experimentos" element={<ProtocolosGuard permission="experimentos"><ProtocolosExperimentos /></ProtocolosGuard>} />
          <Route path="/protocolos/experimentos/:id" element={<ProtocolosGuard permission="experimentos"><ProtocolosExperimentoDetalhe /></ProtocolosGuard>} />
          <Route path="/protocolos/gestao" element={<ProtocolosGuard requireGestor><ProtocolosGestao /></ProtocolosGuard>} />
          <Route path="/protocolos/interdisciplinar" element={<ProtocolosGuard><ProjetosInterdisciplinares /></ProtocolosGuard>} />
          <Route path="/protocolos/interdisciplinar/:id" element={<ProtocolosGuard><ProjetoInterdisciplinarDetalhe /></ProtocolosGuard>} />
          {/* Provas */}
          <Route path="/provas/login" element={<ProvasLogin />} />
          <Route path="/provas/banco-questoes" element={<BancoQuestoes />} />
          <Route path="/provas/gerar-prova" element={<GerarProva />} />
          <Route path="/provas/lista" element={<ListaProvas />} />
          {/* Nuvem de Palavras */}
          <Route path="/nuvem" element={<NuvemLista />} />
          <Route path="/nuvem/:id" element={<NuvemView />} />
          <Route path="/nuvem/:id/participar" element={<NuvemParticipar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
