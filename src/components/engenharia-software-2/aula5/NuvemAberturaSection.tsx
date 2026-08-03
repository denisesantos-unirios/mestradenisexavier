import { motion } from "framer-motion";
import { Cloud, QrCode, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const palavras = [
  "escopo", "contexto", "atores", "regras de negócio", "processos",
  "restrições", "stakeholders", "objetivo", "limites", "glossário",
  "premissas", "fluxo", "domínio", "entidade", "requisito"
];

const NuvemAberturaSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-violet-400">Abertura da aula • 10 min</span>
              <h2 className="text-2xl font-bold text-foreground">Nuvem de Palavras: o que é um Mini-Mundo?</h2>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Antes de qualquer teoria: escreva <strong className="text-foreground">3 palavras</strong> que,
            para você, definem o "mundo" de um sistema. A nuvem é atualizada em tempo real e usaremos as
            palavras mais citadas como âncora da aula.
          </p>

          <div className="flex flex-wrap gap-2 mb-8 p-6 rounded-lg bg-background/50">
            {palavras.map((p, i) => (
              <span
                key={p}
                className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                style={{ fontSize: `${0.8 + ((palavras.length - i) % 5) * 0.14}rem` }}
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="gap-2">
              <Link to="/nuvem">
                <QrCode className="w-4 h-4" />
                Abrir Nuvem de Palavras
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/nuvem">
                <MessageSquare className="w-4 h-4" />
                Participar / enviar palavras
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Dica: projete a nuvem em tela cheia e compartilhe o QR Code da sessão com a turma.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NuvemAberturaSection;
