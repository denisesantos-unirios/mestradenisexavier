import { motion } from "framer-motion";
import { 
  Users, 
  UserCircle, 
  FileText,
  CheckCircle2,
  Clock,
  ArrowUp,
  Lightbulb,
  Video
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const passosPersona = [
  "Escolha um sistema/app real",
  "Identifique 2-3 tipos de usuários diferentes",
  "Para cada tipo, defina: nome fictício, idade, profissão",
  "Liste 3 objetivos que esse usuário quer alcançar",
  "Liste 2 frustrações que esse usuário pode ter",
  "Descreva um cenário típico de uso"
];

const PraticaSection = () => {
  return (
    <section id="pratica" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary">Mão na Massa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Atividade Prática</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Criação inicial de personas e análise de comportamentos
            </p>
          </div>
        </ScrollReveal>

        {/* Card Principal */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Levantamento de Perfis de Usuários</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>30-40 minutos • Em duplas ou trios</span>
                </div>
              </div>
            </div>

            {/* Objetivo */}
            <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
              <h4 className="font-bold mb-2">🎯 Objetivo</h4>
              <p className="text-sm text-muted-foreground">
                Criar <span className="text-primary font-medium">proto-personas</span> para um sistema/app 
                real, identificando diferentes tipos de usuários, seus objetivos e frustrações.
              </p>
            </div>

            {/* Passos */}
            <div className="mb-8">
              <h4 className="font-bold mb-4">📝 Passos da Atividade</h4>
              <StaggerContainer className="space-y-3">
                {passosPersona.map((passo, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm">{passo}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Template de Persona */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-bold mb-4">📋 Template de Persona</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-medium w-24">Nome:</span>
                    <span className="text-muted-foreground">_____________</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium w-24">Idade:</span>
                    <span className="text-muted-foreground">_____________</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium w-24">Profissão:</span>
                    <span className="text-muted-foreground">_____________</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium w-24">Experiência:</span>
                    <span className="text-muted-foreground">Novato / Intermediário / Expert</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">Objetivos:</span>
                    <p className="text-muted-foreground">1. _____________ 2. _____________ 3. _____________</p>
                  </div>
                  <div>
                    <span className="font-medium">Frustrações:</span>
                    <p className="text-muted-foreground">1. _____________ 2. _____________</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Entrega */}
        <ScrollReveal>
          <div className="glass-card p-6 max-w-3xl mx-auto mb-8">
            <h4 className="font-bold mb-3">📤 Entrega</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Documento com 2-3 personas criadas
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Justificativa: por que esses perfis foram escolhidos?
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Como o sistema atende (ou não) cada persona?
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Recursos */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            <div className="glass-card p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Vídeo sugerido</p>
                <p className="text-xs text-muted-foreground">Persona e análise centrada no usuário</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Dica</p>
                <p className="text-xs text-muted-foreground">Use dados reais de entrevistas quando possível!</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima Aula */}
        <ScrollReveal delay={0.3}>
          <div className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-xl mx-auto">
            <p className="text-muted-foreground mb-2">Na próxima aula (Semana 3)</p>
            <p className="text-xl font-bold">"Requisitos de Usabilidade"</p>
            <p className="text-sm text-muted-foreground mt-2">Eficiência, eficácia, satisfação e flexibilidade</p>
          </div>
        </ScrollReveal>

        {/* Back to Top */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <ArrowUp className="w-5 h-5" />
              <span>Voltar ao Topo</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PraticaSection;
