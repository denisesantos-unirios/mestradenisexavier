import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lightbulb, ChevronRight } from "lucide-react";
import denyImg from "@/assets/deny-mascot.png";

type TipSet = { titulo: string; dicas: string[] };

const TIPS: Record<string, TipSet> = {
  "engenharia-software-1": {
    titulo: "Dicas do Deny • ES I",
    dicas: [
      "Requisitos bem escritos evitam retrabalho: seja específico e mensurável.",
      "Modelagem conceitual: identifique entidades, atributos e relacionamentos antes de pensar em tabelas.",
      "Use histórias de usuário no formato: Como <persona>, quero <ação>, para <valor>.",
      "Documente decisões — o 'porquê' vale mais que o 'como' no futuro.",
    ],
  },
  "engenharia-software-2": {
    titulo: "Dicas do Deny • ES II",
    dicas: [
      "Casos de uso descrevem interações, não telas. Foque no objetivo do ator.",
      "PBL/JITT: chegue com dúvidas concretas, saia com soluções aplicáveis.",
      "UML é comunicação: se o time não entende, o diagrama falhou.",
      "Divida entregas em fases pequenas e revisáveis.",
    ],
  },
  "engenharia-software-ead": {
    titulo: "Dicas do Deny • ES EAD",
    dicas: [
      "Manifesto Ágil: valorize indivíduos e interações acima de processos.",
      "Elicitação: combine entrevistas, observação e questionários para cobrir vieses.",
      "MoSCoW ajuda a priorizar: Must, Should, Could, Won't.",
      "Revise sempre com o stakeholder — validação evita surpresas na entrega.",
    ],
  },
  "projetos-interface": {
    titulo: "Dicas do Deny • Projetos de Interface",
    dicas: [
      "Heurísticas de Nielsen: visibilidade, feedback e prevenção de erros são seus aliados.",
      "Protocolo DECIDE: Determine, Explore, Choose, Identify, Decide, Evaluate.",
      "Acessibilidade não é extra — é requisito. Comece pelo contraste e navegação por teclado.",
      "Teste com usuários reais: 5 pessoas revelam ~80% dos problemas de usabilidade.",
    ],
  },
  "gestao-projetos": {
    titulo: "Dicas do Deny • Gestão de Projetos",
    dicas: [
      "PMBOK: escopo, tempo e custo formam a tripla restrição — mexeu em um, afeta os outros.",
      "Riscos identificados e monitorados são melhores que surpresas.",
      "Comunicação consome 90% do tempo de um gestor. Estruture-a.",
    ],
  },
  "protocolos": {
    titulo: "Dicas do Deny • Protocolos",
    dicas: [
      "Ética primeiro: TCLE assinado antes de qualquer coleta.",
      "Meça eficácia (concluiu?), eficiência (em quanto tempo?) e satisfação (como se sentiu?).",
      "Piloto: teste seu experimento com 1-2 pessoas antes de rodar com todos.",
    ],
  },
  "modelagem": {
    titulo: "Dicas do Deny • Modelagem",
    dicas: [
      "Comece pelo mini-mundo: descreva em texto antes de desenhar.",
      "Cardinalidades: leia o relacionamento nos dois sentidos.",
      "Entidade fraca depende da existência da entidade forte — use com cuidado.",
    ],
  },
  "provas": {
    titulo: "Dicas do Deny • Provas",
    dicas: [
      "Banco de questões: use filtros por disciplina, tema e dificuldade.",
      "Prova Final é destinada à recuperação — questões mais desafiadoras.",
    ],
  },
  default: {
    titulo: "Olá! Sou o Deny 🦉",
    dicas: [
      "Sou o mascote deste portal e vou te acompanhar em cada aula com dicas rápidas.",
      "Navegue pelo menu superior para acessar as disciplinas.",
      "Cada aula tem um QR Code — compartilhe com colegas!",
    ],
  },
};

const DenyMascot = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dicaIdx, setDicaIdx] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const tipSet = useMemo(() => {
    const seg = location.pathname.split("/")[1] || "default";
    return TIPS[seg] || TIPS.default;
  }, [location.pathname]);

  // Reset ao mudar de rota
  useEffect(() => {
    setDicaIdx(0);
    setDismissed(false);
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  if (dismissed) {
    return (
      <button
        onClick={() => {
          setDismissed(false);
          setOpen(true);
        }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full shadow-lg bg-white border-2 border-primary hover:scale-110 transition-transform"
        aria-label="Abrir dicas do Deny"
      >
        <img src={denyImg} alt="Deny" className="w-full h-full object-contain p-1" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-3 no-print" data-no-print>
      <motion.img
        src={denyImg}
        alt="Deny mascote"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 md:w-28 md:h-28 object-contain cursor-pointer drop-shadow-xl"
        onClick={() => setOpen((v) => !v)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="relative max-w-xs bg-white border-2 border-primary/30 rounded-2xl shadow-2xl p-4 mb-4"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition"
              aria-label="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
              <Lightbulb className="w-4 h-4" />
              {tipSet.titulo}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              {tipSet.dicas[dicaIdx]}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                {dicaIdx + 1} / {tipSet.dicas.length}
              </span>
              <button
                onClick={() =>
                  setDicaIdx((i) => (i + 1) % tipSet.dicas.length)
                }
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Próxima dica <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            {/* Cauda do balão */}
            <div className="absolute bottom-6 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DenyMascot;
