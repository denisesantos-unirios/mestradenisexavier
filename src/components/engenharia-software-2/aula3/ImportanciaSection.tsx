import { motion } from "framer-motion";
import { 
  FileText, AlertTriangle, TrendingUp, Users, 
  CheckCircle2, XCircle, DollarSign, Clock 
} from "lucide-react";

const ImportanciaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 mb-4">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">A Base do Sucesso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Requisitos são Fundamentais?
          </h2>
        </motion.div>

        {/* O que são requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">O que são Requisitos?</h3>
          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 mb-6">
            <p className="text-lg text-muted-foreground italic">
              "Um <strong className="text-foreground">requisito</strong> é uma condição ou capacidade 
              necessária para um usuário resolver um problema ou alcançar um objetivo."
            </p>
            <cite className="text-sm text-emerald-400 mt-2 block">— IEEE 830</cite>
          </blockquote>

          <p className="text-muted-foreground">
            Em outras palavras, requisitos descrevem <strong className="text-foreground">o que</strong> o 
            sistema deve fazer (funcionalidades) e <strong className="text-foreground">como</strong> deve 
            se comportar (qualidades), antes de começarmos a pensar em <em>como</em> vamos implementar.
          </p>
        </motion.div>

        {/* Estatísticas de Falhas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">O Custo de Errar nos Requisitos</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center border-red-500/30">
              <div className="text-4xl font-bold text-red-400 mb-2">56%</div>
              <p className="text-sm text-muted-foreground">
                dos projetos falham por problemas de requisitos
              </p>
            </div>
            <div className="glass-card p-6 text-center border-amber-500/30">
              <div className="text-4xl font-bold text-amber-400 mb-2">100x</div>
              <p className="text-sm text-muted-foreground">
                mais caro corrigir erro de requisitos em produção
              </p>
            </div>
            <div className="glass-card p-6 text-center border-orange-500/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">37%</div>
              <p className="text-sm text-muted-foreground">
                do retrabalho vem de requisitos mal definidos
              </p>
            </div>
            <div className="glass-card p-6 text-center border-rose-500/30">
              <div className="text-4xl font-bold text-rose-400 mb-2">45%</div>
              <p className="text-sm text-muted-foreground">
                das funcionalidades nunca são usadas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefícios vs Problemas */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-green-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Com Bons Requisitos</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Escopo bem definido evita 'scope creep'",
                "Estimativas de prazo e custo mais precisas",
                "Equipe alinhada com as expectativas do cliente",
                "Base sólida para testes de aceitação",
                "Documentação para manutenção futura",
                "Menor retrabalho e desperdício"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-red-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Sem Requisitos Claros</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Mudanças constantes durante o desenvolvimento",
                "Cliente insatisfeito com o produto final",
                "Funcionalidades desnecessárias ou incompletas",
                "Atrasos e estouros de orçamento",
                "Conflitos entre stakeholders",
                "Sistema que não resolve o problema real"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImportanciaSection;
