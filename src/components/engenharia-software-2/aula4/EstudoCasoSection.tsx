import { motion } from "framer-motion";
import { 
  Building2, Car, FileText, CheckCircle2, 
  Settings, Users, Calendar, CreditCard 
} from "lucide-react";

const EstudoCasoSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 mb-4">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Estudo de Caso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sistema de Locadora de Veículos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos identificar requisitos funcionais e não-funcionais para um sistema real
          </p>
        </motion.div>

        {/* Cenário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <Car className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">O Cenário</h3>
              <p className="text-muted-foreground mb-4">
                Uma locadora de veículos deseja informatizar seu processo de locação. Atualmente, 
                todo controle é feito em planilhas e papel, gerando problemas como:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Demora para encontrar veículos disponíveis",
                  "Dificuldade em controlar devoluções",
                  "Perda de informações de clientes",
                  "Não consegue gerar relatórios de faturamento"
                ].map((problema, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2" />
                    {problema}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requisitos Funcionais Identificados */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Requisitos Funcionais</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span className="font-medium text-foreground">Gestão de Clientes</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• RF01: Cadastrar, editar e excluir clientes</li>
                  <li>• RF02: Validar CNH do cliente</li>
                  <li>• RF03: Consultar histórico de locações</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-4 h-4 text-orange-400" />
                  <span className="font-medium text-foreground">Gestão de Veículos</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• RF04: Cadastrar frota de veículos</li>
                  <li>• RF05: Controlar manutenções</li>
                  <li>• RF06: Consultar disponibilidade</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span className="font-medium text-foreground">Gestão de Locações</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• RF07: Registrar nova locação</li>
                  <li>• RF08: Calcular valor com base em diárias</li>
                  <li>• RF09: Registrar devolução</li>
                  <li>• RF10: Calcular multa por atraso</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 text-orange-400" />
                  <span className="font-medium text-foreground">Financeiro</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• RF11: Emitir recibo de pagamento</li>
                  <li>• RF12: Gerar relatório de faturamento</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Requisitos Não-Funcionais Identificados */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Requisitos Não-Funcionais</h3>
            </div>

            <div className="space-y-4">
              {[
                { 
                  categoria: "Desempenho", 
                  req: "RNF01: O sistema deve responder a consultas em até 3 segundos",
                  cor: "border-yellow-500/30"
                },
                { 
                  categoria: "Disponibilidade", 
                  req: "RNF02: O sistema deve estar disponível 24/7 com 99% de uptime",
                  cor: "border-blue-500/30"
                },
                { 
                  categoria: "Segurança", 
                  req: "RNF03: Senhas devem ser armazenadas com hash SHA-256",
                  cor: "border-red-500/30"
                },
                { 
                  categoria: "Segurança", 
                  req: "RNF04: Apenas gerentes podem excluir registros",
                  cor: "border-red-500/30"
                },
                { 
                  categoria: "Usabilidade", 
                  req: "RNF05: Atendente deve conseguir registrar locação em até 5 minutos",
                  cor: "border-green-500/30"
                },
                { 
                  categoria: "Portabilidade", 
                  req: "RNF06: Sistema deve funcionar em Chrome, Firefox e Edge",
                  cor: "border-cyan-500/30"
                },
                { 
                  categoria: "Manutenibilidade", 
                  req: "RNF07: Código deve ter cobertura de testes de 80%",
                  cor: "border-purple-500/30"
                },
                { 
                  categoria: "Escalabilidade", 
                  req: "RNF08: Sistema deve suportar até 100 usuários simultâneos",
                  cor: "border-indigo-500/30"
                }
              ].map((rnf, idx) => (
                <div key={idx} className={`p-4 rounded-lg bg-background/50 border-l-4 ${rnf.cor}`}>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {rnf.categoria}
                  </span>
                  <p className="text-sm text-foreground mt-1">{rnf.req}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
