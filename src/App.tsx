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
import Aula5 from "./pages/Aula5";
import ProjetosInterfaceAula1 from "./pages/projetos-interface/Aula1";
import ProjetosInterfaceAula2 from "./pages/projetos-interface/Aula2";
import ProjetosInterfaceAula3 from "./pages/projetos-interface/Aula3";
import ProjetosInterfaceAula4 from "./pages/projetos-interface/Aula4";
import ProjetosInterfaceAula5 from "./pages/projetos-interface/Aula5";
import ProjetosInterfaceAula6 from "./pages/projetos-interface/Aula6";
import ProjetosInterfaceAula7 from "./pages/projetos-interface/Aula7";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engenharia-software-1/aula-1" element={<Aula1 />} />
          <Route path="/engenharia-software-1/aula-2" element={<Aula2 />} />
          <Route path="/engenharia-software-1/aula-3" element={<Aula3 />} />
          <Route path="/engenharia-software-1/aula-4" element={<Aula4 />} />
          <Route path="/engenharia-software-1/aula-5" element={<Aula5 />} />
          <Route path="/projetos-interface/aula-1" element={<ProjetosInterfaceAula1 />} />
          <Route path="/projetos-interface/aula-2" element={<ProjetosInterfaceAula2 />} />
          <Route path="/projetos-interface/aula-3" element={<ProjetosInterfaceAula3 />} />
          <Route path="/projetos-interface/aula-4" element={<ProjetosInterfaceAula4 />} />
          <Route path="/projetos-interface/aula-5" element={<ProjetosInterfaceAula5 />} />
          <Route path="/projetos-interface/aula-6" element={<ProjetosInterfaceAula6 />} />
          <Route path="/projetos-interface/aula-7" element={<ProjetosInterfaceAula7 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
