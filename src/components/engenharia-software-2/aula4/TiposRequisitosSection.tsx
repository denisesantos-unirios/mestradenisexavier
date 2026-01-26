import { motion } from "framer-motion";
import { 
  FileText, Settings, CheckCircle2, 
  Zap, Shield, Clock, Users, Cog
} from "lucide-react";

const requisitosFuncionais = [
  { exemplo: "O sistema deve permitir o cadastro de usuários", categoria: "Cadastro" },
  { exemplo: "O sistema deve emitir relatórios de vendas mensais", categoria: "Relatórios" },
  { exemplo: "O sistema deve calcular o total do pedido com desconto", categoria: "Cálculo" },
  { exemplo: "O sistema deve enviar e-mail de confirmação após compra", categoria: "Notificação" },
  { exemplo: "O sistema deve permitir busca de produtos por nome", categoria: "Busca" },
  { exemplo: "O sistema deve validar CPF no cadastro", categoria: "Validação" }
];

const requisitosNaoFuncionais = [
  { 
    categoria: "Desempenho", 
    icon: Zap,
    exemplo: "O sistema deve responder em até 2 segundos",
    cor: "text-yellow-400 bg-yellow-500/20"
  },
  { 
    categoria: "Segurança", 
    icon: Shield,
    exemplo: "O sistema deve criptografar senhas com bcrypt",
    cor: "text-red-400 bg-red-500/20"
  },
  { 
    categoria: "Disponibilidade", 
    icon: Clock,
    exemplo: "O sistema deve ter 99.9% de uptime",
    cor: "text-blue-400 bg-blue-500/20"
  },
  { 
    categoria: "Usabilidade", 
    icon: Users,
    exemplo: "O usuário deve completar cadastro em até 3 minutos",
    cor: "text-green-400 bg-green-500/20"
  },
  { 
    categoria: "Manutenibilidade", 
    icon: Cog,
    exemplo: "O código deve seguir padrão PSR-12",
    cor: "text-purple-400 bg-purple-500/20"
  },
  { 
    categoria: "Portabilidade", 
    icon: Settings,
    exemplo: "O sistema deve funcionar em Chrome, Firefox e Safari",
    cor: "text-cyan-400 bg-cyan-500/20"
  }
];

const TiposRequisitosSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 mb-4">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Tipos de Requisitos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionais vs Não-Funcionais
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requisitos Funcionais */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Requisitos Funcionais</h3>
                <p className="text-sm text-muted-foreground">O que o sistema FAZ</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30 mb-6">
              <p className="text-sm text-muted-foreground">
                Descrevem as <strong className="text-foreground">funcionalidades</strong> e 
                <strong className="text-foreground"> comportamentos</strong> específicos do sistema. 
                São as ações que o sistema deve executar.
              </p>
            </div>

            <div className="space-y-3">
              {requisitosFuncionais.map((rf, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 mb-1 inline-block">
                      {rf.categoria}
                    </span>
                    <p className="text-sm text-muted-foreground">{rf.exemplo}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requisitos Não-Funcionais */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Requisitos Não-Funcionais</h3>
                <p className="text-sm text-muted-foreground">COMO o sistema se comporta</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30 mb-6">
              <p className="text-sm text-muted-foreground">
                Descrevem as <strong className="text-foreground">qualidades</strong> e 
                <strong className="text-foreground"> restrições</strong> do sistema. 
                Definem atributos como desempenho, segurança e usabilidade.
              </p>
            </div>

            <div className="space-y-3">
              {requisitosNaoFuncionais.map((rnf, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <div className={`w-8 h-8 rounded-lg ${rnf.cor} flex items-center justify-center flex-shrink-0`}>
                    <rnf.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground">{rnf.categoria}</span>
                    <p className="text-sm text-muted-foreground">{rnf.exemplo}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Comparativo Rápido</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Aspecto</th>
                  <th className="text-left py-3 px-4 text-orange-400 font-medium">Funcional</th>
                  <th className="text-left py-3 px-4 text-purple-400 font-medium">Não-Funcional</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">Pergunta</td>
                  <td className="py-3 px-4">"O que o sistema faz?"</td>
                  <td className="py-3 px-4">"Como o sistema faz?"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">Foco</td>
                  <td className="py-3 px-4">Comportamento, ações</td>
                  <td className="py-3 px-4">Qualidade, restrições</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">Teste</td>
                  <td className="py-3 px-4">Verificar se a função existe</td>
                  <td className="py-3 px-4">Medir métricas de qualidade</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Exemplo</td>
                  <td className="py-3 px-4">"Cadastrar cliente"</td>
                  <td className="py-3 px-4">"Responder em 2s"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TiposRequisitosSection;
