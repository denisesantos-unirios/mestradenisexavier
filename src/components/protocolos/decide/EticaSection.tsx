import { motion } from "framer-motion";
import { Shield, FileText, Lock, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const EticaSection = () => {
  const tcleItems = [
    "Objetivos da pesquisa",
    "Procedimentos envolvidos",
    "Riscos e benefícios potenciais",
    "Garantia de sigilo",
    "Liberdade de desistência",
    "Contatos para esclarecimentos"
  ];

  return (
    <section id="Ética" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Considerações Éticas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pesquisa com Seres Humanos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conforme estabelecido na Resolução CNS 510/2016 e diretrizes internacionais como a Declaração de Helsinque.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TCLE */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  Termo de Consentimento Livre e Esclarecido (TCLE)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                O TCLE deve conter informações claras sobre:
              </p>
              <ul className="space-y-2">
                {tcleItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* LGPD */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  Proteção de Dados - LGPD
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Em conformidade com a Lei 13.709/2018:
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm text-foreground">
                    <strong>Coleta mínima:</strong> Dados pessoais devem ser coletados apenas quando estritamente necessários
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm text-foreground">
                    <strong>Armazenamento seguro:</strong> Utilizar criptografia e controle de acesso
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm text-foreground">
                    <strong>Finalidade específica:</strong> Usar dados exclusivamente para os fins declarados
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Alerta CEP */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Atenção: Comitê de Ética em Pesquisa (CEP)</h4>
              <p className="text-muted-foreground text-sm">
                Pesquisas acadêmicas em instituições de ensino frequentemente requerem aprovação do CEP. 
                Verifique os requisitos institucionais <strong>antes</strong> de iniciar a coleta de dados. 
                O processo de aprovação pode levar semanas ou meses.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EticaSection;
