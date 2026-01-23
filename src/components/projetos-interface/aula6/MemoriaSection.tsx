import { motion } from "framer-motion";
import { Database, Clock, HardDrive, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const MemoriaSection = () => {
  return (
    <section id="memoria" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Sistema de Memória</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Memória Humana e Interfaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entender como a memória funciona ajuda a criar interfaces que não sobrecarregam
              o usuário e facilitam a retenção de informações.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparação de memórias */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal animation="fadeLeft">
            <motion.div
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <Clock className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Memória de Curto Prazo</h3>
                  <p className="text-muted-foreground">Working Memory</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">⏱️ Duração</p>
                  <p className="text-muted-foreground">15-30 segundos sem repetição</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">📊 Capacidade</p>
                  <p className="text-muted-foreground">7±2 itens (Lei de Miller)</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">💡 Implicação no Design</p>
                  <p className="text-muted-foreground">
                    Não exija que usuários lembrem informações entre telas.
                    Mantenha dados visíveis quando necessários.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight">
            <motion.div
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-green-500/20">
                  <HardDrive className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Memória de Longo Prazo</h3>
                  <p className="text-muted-foreground">Long-term Memory</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">⏱️ Duração</p>
                  <p className="text-muted-foreground">Permanente (com reforço)</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">📊 Capacidade</p>
                  <p className="text-muted-foreground">Praticamente ilimitada</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="font-medium mb-2">💡 Implicação no Design</p>
                  <p className="text-muted-foreground">
                    Use padrões familiares e consistentes.
                    Crie modelos mentais claros e previsíveis.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Processo de memorização */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <RefreshCw className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">O Processo de Memorização</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {["Codificação", "Armazenamento", "Recuperação"].map((etapa, index) => (
                <motion.div
                  key={etapa}
                  className="flex-1 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{etapa}</h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && "Informação entra pelo sensorial"}
                    {index === 1 && "Processada na memória de trabalho"}
                    {index === 2 && "Acessada da memória de longo prazo"}
                  </p>
                  {index < 2 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Boas e más práticas */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal animation="fadeLeft">
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400">Boas Práticas</h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Mostre informações contextuais quando necessário",
                  "Use reconhecimento em vez de recall (dropdowns, autocomplete)",
                  "Mantenha consistência visual entre telas",
                  "Agrupe informações relacionadas",
                  "Forneça feedback imediato das ações"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight">
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-bold text-red-700 dark:text-red-400">Práticas a Evitar</h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Exigir que usuários memorizem códigos ou IDs",
                  "Usar navegação inconsistente entre páginas",
                  "Esconder informações necessárias para completar tarefas",
                  "Apresentar muitas opções de uma só vez",
                  "Mudar padrões visuais sem necessidade"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MemoriaSection;
