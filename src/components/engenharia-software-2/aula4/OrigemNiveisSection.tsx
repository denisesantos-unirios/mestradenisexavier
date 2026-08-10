import { motion } from "framer-motion";
import { Search, Layers, Users, FileSearch, Building, Gavel, Cpu, BarChart3 } from "lucide-react";

const fontes = [
  { icon: Users, t: "Stakeholders", d: "Clientes, usuários finais, patrocinadores, operação e suporte." },
  { icon: FileSearch, t: "Documentos existentes", d: "Manuais, planilhas, relatórios, sistemas legados e formulários em uso." },
  { icon: Building, t: "Regras de negócio", d: "Políticas internas, processos e fluxos já praticados pela organização." },
  { icon: Gavel, t: "Legislação e normas", d: "LGPD, ANVISA, Banco Central, acessibilidade (WCAG), normas ISO." },
  { icon: Cpu, t: "Restrições técnicas", d: "Infraestrutura, integrações obrigatórias, padrões de arquitetura." },
  { icon: BarChart3, t: "Dados e mercado", d: "Métricas de uso, chamados de suporte, benchmarking com concorrentes." },
];

const niveis = [
  {
    n: "1. Requisitos de Negócio",
    q: "POR QUE o sistema existe?",
    ex: "Reduzir em 40% o tempo de atendimento no balcão da locadora.",
    cor: "from-blue-500 to-cyan-500",
  },
  {
    n: "2. Requisitos de Usuário",
    q: "O QUE o usuário precisa fazer?",
    ex: "O atendente precisa consultar veículos disponíveis por categoria e data.",
    cor: "from-orange-500 to-amber-500",
  },
  {
    n: "3. Requisitos de Sistema (funcionais)",
    q: "COMO o sistema atende a necessidade?",
    ex: "RF06: O sistema deve listar veículos filtrando por categoria, período e status.",
    cor: "from-purple-500 to-fuchsia-500",
  },
  {
    n: "4. Especificação Técnica",
    q: "COM O QUE será implementado?",
    ex: "Endpoint GET /veiculos?categoria=&inicio=&fim= com resposta em até 3s.",
    cor: "from-emerald-500 to-teal-500",
  },
];

const OrigemNiveisSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-500 mb-4">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Origem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔍 De onde vêm os requisitos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Requisitos não "aparecem": eles são descobertos em múltiplas fontes. Ignorar uma delas
            é a principal causa de retrabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {fontes.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-6"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-500/15 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{f.t}</h3>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-500 mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Granularidade</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Níveis de Detalhamento</h2>
        </motion.div>

        <div className="space-y-4">
          {niveis.map((n, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col md:flex-row gap-4 md:items-center"
            >
              <div className={`px-4 py-3 rounded-xl bg-gradient-to-br ${n.cor} text-white font-semibold text-sm md:w-72 flex-shrink-0`}>
                {n.n}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{n.q}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-semibold">Exemplo:</span> {n.ex}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrigemNiveisSection;
