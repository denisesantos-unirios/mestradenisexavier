import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ChevronDown, Home, Code2, Layers, Monitor, FlaskConical, ClipboardList, Wifi, FolderKanban } from "lucide-react";

const menuItems = [
  {
    id: "home",
    title: "Início",
    path: "/",
    icon: Home
  },
  {
    id: "engenharia-software-1",
    title: "Engenharia de Software I",
    icon: Code2,
    submenu: [
      { title: "Aula 1 - Apresentação da Disciplina", path: "/engenharia-software-1/aula-1" },
      { title: "Aula 2 - Análise de Sistemas + Processos", path: "/engenharia-software-1/aula-2" },
      { title: "Aula 3 - Metodologias Ágeis", path: "/engenharia-software-1/aula-3" },
      { title: "Aula 4 - Engenharia de Requisitos", path: "/engenharia-software-1/aula-4" },
      { title: "Aula 5 - ES Assistida por IA", path: "/engenharia-software-1/aula-5" },
      { title: "Aula 6 - Modelagem Conceitual", path: "/engenharia-software-1/aula-6" }
    ]
  },
  {
    id: "engenharia-software-2",
    title: "Engenharia de Software II",
    icon: Layers,
    submenu: [
      { title: "Aula 1 - Apresentação da Disciplina", path: "/engenharia-software-2/aula-1" },
      { title: "Aula 2 - Introdução à ES e Processos", path: "/engenharia-software-2/aula-2" },
      { title: "Aula 3 - JITT: Engenharia de Requisitos", path: "/engenharia-software-2/aula-3" },
      { title: "Aula 4 - Requisitos: Fundamentos", path: "/engenharia-software-2/aula-4" },
      { title: "Aula 5 - PBL Fase 1: Mini-Mundo", path: "/engenharia-software-2/aula-5" },
      { title: "Aula 6 - JITT: Técnicas de Elicitação", path: "/engenharia-software-2/aula-6" },
      { title: "Aula 7 - Elicitação: Prática", path: "/engenharia-software-2/aula-7" },
      { title: "Aula 8 - Documentação de Requisitos", path: "/engenharia-software-2/aula-8" },
      { title: "Aula 9 - Validação de Requisitos", path: "/engenharia-software-2/aula-9" },
      { title: "Aula 10 - JITT: Entrega Fase 2", path: "/engenharia-software-2/aula-10" },
      { title: "Aula 11 - Introdução à UML", path: "/engenharia-software-2/aula-11" },
      { title: "Aula 12 - Casos de Uso: Fundamentos", path: "/engenharia-software-2/aula-12" },
      { title: "Aula 13 - JITT: Especificação UC", path: "/engenharia-software-2/aula-13" },
      { title: "Aula 14 - Workshop: Diagrama UC", path: "/engenharia-software-2/aula-14" },
      { title: "Aula 15 - Entrega Fase 3: Casos de Uso", path: "/engenharia-software-2/aula-15" },
      { title: "Aula 16 - User Stories & Kanban", path: "/engenharia-software-2/aula-16" },
      { title: "Aula 17 - Diagrama de Classes", path: "/engenharia-software-2/aula-17" }
    ]
  },
  {
    id: "projetos-interface",
    title: "Projetos de Interface",
    icon: Monitor,
    submenu: [
      { title: "Aula 1 - Apresentação da Disciplina", path: "/projetos-interface/aula-1" },
      { title: "Aula 2 - Design de Interação", path: "/projetos-interface/aula-2" },
      { title: "Aula 3 - Conceitualizando a Interação", path: "/projetos-interface/aula-3" },
      { title: "Aula 4 - Requisitos de Usabilidade", path: "/projetos-interface/aula-4" },
      { title: "Aula 5 - Coleta de Informações", path: "/projetos-interface/aula-5" },
      { title: "Aula 6 - Como Interfaces Afetam Pessoas", path: "/projetos-interface/aula-6" },
      { title: "Aula 7 - Análise de Tarefas e Fluxos", path: "/projetos-interface/aula-7" },
      { title: "Aula 8 - Introdução à UX", path: "/projetos-interface/aula-8" },
      { title: "Aula 9 - Princípios de UX", path: "/projetos-interface/aula-9" },
      { title: "Aula 10 - Acessibilidade: Fundamentos", path: "/projetos-interface/aula-10" },
      { title: "Aula 11 - Acessibilidade na Prática", path: "/projetos-interface/aula-11" },
      { title: "Aula 12 - Revisão Geral da Etapa 1", path: "/projetos-interface/aula-12" },
      { title: "Aula 13 - Entrega da Fase 1", path: "/projetos-interface/aula-13" },
      { title: "Aula 14 - Design Centrado no Usuário", path: "/projetos-interface/aula-14" },
      { title: "Aula 15 - Ideação e Brainstorming", path: "/projetos-interface/aula-15" },
      { title: "Aula 16 - Fundamentos de Prototipação", path: "/projetos-interface/aula-16" },
      { title: "Aula 17 - Prototipação de Papel", path: "/projetos-interface/aula-17" },
      { title: "Aula 18 - Introdução ao Figma", path: "/projetos-interface/aula-18" },
      { title: "Aula 19 - Componentes e Fluxos", path: "/projetos-interface/aula-19" },
      { title: "Aula 20 - Framework DECIDE", path: "/projetos-interface/aula-20" }
    ]
  },
  {
    id: "engenharia-software-ead",
    title: "ES EAD",
    icon: Wifi,
    submenu: [
      { title: "Aula 1 - ES e Mercado", path: "/engenharia-software-ead/aula-1" },
      { title: "Aula 2 - Processos Tradicionais", path: "/engenharia-software-ead/aula-2" },
      { title: "Aula 3 - Visão Ágil", path: "/engenharia-software-ead/aula-3" },
      { title: "Aula 4 - Scrum na Prática", path: "/engenharia-software-ead/aula-4" },
      { title: "Aula 5 - Requisitos de Software", path: "/engenharia-software-ead/aula-5" },
      { title: "Aula 6 - Elicitação de Requisitos", path: "/engenharia-software-ead/aula-6" },
      { title: "Aula 7 - UML e Casos de Uso", path: "/engenharia-software-ead/aula-7" },
      { title: "Aula 8 - Modelagem: E-Commerce", path: "/engenharia-software-ead/aula-8" },
      { title: "Aula 9 - Modelagem + Ágil", path: "/engenharia-software-ead/aula-9" },
      { title: "Aula 10 - Revisão Integrada", path: "/engenharia-software-ead/aula-10" },
    ]
  },
  {
    id: "gestao-projetos",
    title: "Gestão de Projetos",
    icon: FolderKanban,
    submenu: [
      { title: "Aula 1 - Ágeis, Scrum & Kanban (ENADE)", path: "/gestao-projetos/aula-1" },
      { title: "Aula 2 - Metodologias Ágeis e ENADE", path: "/gestao-projetos/aula-2" },
    ]
  },
  {
    id: "protocolos",
    title: "Protocolos",
    icon: FlaskConical,
    submenu: [
      { title: "Framework DECIDE - Experimentos de Usabilidade", path: "/protocolos/framework-decide" }
    ]
  },
  {
    id: "provas",
    title: "Provas",
    icon: ClipboardList,
    submenu: [
      { title: "Login Professor", path: "/provas/login" },
      { title: "Banco de Questões", path: "/provas/banco-questoes" },
      { title: "Gerar Prova", path: "/provas/gerar-prova" }
    ]
  }
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-foreground">Prof.ª Denise Xavier</p>
              <p className="text-xs text-muted-foreground">Portal de Aulas</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname.includes(item.id)
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                    {item.submenu && item.submenu.length > 0 && (
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                    )}
                  </button>
                )}

                {/* Desktop Submenu */}
                {item.submenu && item.submenu.length > 0 && (
                  <div className="absolute top-full left-0 mt-1 min-w-[320px] bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col max-h-[75vh]">
                    <div className="px-4 py-2 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-xl rounded-t-xl">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground">{item.submenu.length} {item.submenu.length === 1 ? "item" : "itens"}</p>
                    </div>
                    <div className="overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                      {item.submenu.map((subitem, idx) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === subitem.path
                              ? "bg-primary/10 text-primary border-l-2 border-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-l-2 border-transparent"
                          }`}
                        >
                          <span className="text-[10px] font-mono text-muted-foreground/60 w-6 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="flex-1">{subitem.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty submenu indicator */}
                {item.submenu && item.submenu.length === 0 && (
                  <div className="absolute top-full left-0 mt-1 py-4 px-4 min-w-[200px] bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <p className="text-sm text-muted-foreground">Em breve</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-6 py-4 space-y-2 pb-8">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname.includes(item.id)
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          {item.title}
                        </div>
                        {item.submenu && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openSubmenu === item.id ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.id && item.submenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-1 max-h-[50vh] overflow-y-auto pr-2 border-l-2 border-border/50 pl-3"
                          >
                            {item.submenu.length > 0 ? (
                              item.submenu.map((subitem, idx) => (
                                <Link
                                  key={subitem.path}
                                  to={subitem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                    location.pathname === subitem.path
                                      ? "bg-primary/10 text-primary"
                                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                  }`}
                                >
                                  <span className="text-[10px] font-mono text-muted-foreground/60 w-6 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                                  <span className="flex-1">{subitem.title}</span>
                                </Link>
                              ))
                            ) : (
                              <p className="px-4 py-2 text-sm text-muted-foreground">
                                Em breve
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavigation;
