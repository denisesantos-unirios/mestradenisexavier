import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ChevronDown, Home, Code2, Layers, Monitor } from "lucide-react";

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
      { title: "Aula 5 - ES Assistida por IA", path: "/engenharia-software-1/aula-5" }
    ]
  },
  {
    id: "engenharia-software-2",
    title: "Engenharia de Software II",
    icon: Layers,
    submenu: []
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
      { title: "Aula 9 - Princípios de UX", path: "/projetos-interface/aula-9" }
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
                  <div className="absolute top-full left-0 mt-1 py-2 min-w-[280px] bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          location.pathname === subitem.path
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {subitem.title}
                      </Link>
                    ))}
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
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-2">
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
                            className="ml-8 mt-2 space-y-1"
                          >
                            {item.submenu.length > 0 ? (
                              item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.path}
                                  to={subitem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                                    location.pathname === subitem.path
                                      ? "bg-primary/10 text-primary"
                                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                  }`}
                                >
                                  {subitem.title}
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
