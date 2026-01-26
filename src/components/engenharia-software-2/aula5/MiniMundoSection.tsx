import { motion } from "framer-motion";
import { 
  FileText, HelpCircle, CheckCircle2, 
  Globe, Building2, Lightbulb 
} from "lucide-react";

const MiniMundoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 mb-4">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Documento Inicial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que é o Mini-Mundo?
          </h2>
        </motion.div>

        {/* Definição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Definição</h3>
              <p className="text-muted-foreground mb-4">
                O <strong className="text-foreground">Mini-Mundo</strong> é uma descrição textual 
                que delimita o escopo de um sistema, apresentando o contexto, os principais atores, 
                processos e regras de negócio de forma clara e objetiva.
              </p>
              <p className="text-muted-foreground">
                É o ponto de partida para toda a análise de requisitos, funcionando como um 
                "universo reduzido" do problema que o sistema precisa resolver.
              </p>
            </div>
          </div>
        </motion.div>

        {/* O que deve conter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-violet-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">O que deve conter</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Contexto do Problema",
                descricao: "Situação atual, dificuldades enfrentadas e motivação para o sistema"
              },
              {
                titulo: "Objetivo do Sistema",
                descricao: "O que o sistema irá resolver e quais resultados espera-se alcançar"
              },
              {
                titulo: "Principais Atores",
                descricao: "Quem são os usuários e stakeholders que interagirão com o sistema"
              },
              {
                titulo: "Processos Principais",
                descricao: "Fluxos de trabalho e atividades que o sistema deve suportar"
              },
              {
                titulo: "Regras de Negócio",
                descricao: "Políticas, restrições e validações que devem ser respeitadas"
              },
              {
                titulo: "Escopo e Limites",
                descricao: "O que está dentro e o que está fora do sistema"
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6">
                <h4 className="font-semibold text-foreground mb-2">{item.titulo}</h4>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Exemplo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Exemplo: Clínica Veterinária</h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="p-6 rounded-lg bg-background/50 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-4">
                <strong className="text-foreground">Contexto:</strong> A Clínica PetCare atende 
                animais domésticos e atualmente controla seus agendamentos por telefone e caderno, 
                gerando problemas de overbooking e perda de informações sobre os pacientes.
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Objetivo:</strong> Desenvolver um sistema 
                para gerenciar agendamentos de consultas, histórico médico dos animais e 
                controle financeiro da clínica.
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Atores:</strong> Recepcionista (agenda consultas), 
                Veterinário (registra atendimentos), Tutor (cliente que leva o animal), 
                Administrador (gerencia financeiro).
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Processos:</strong> Cadastro de tutores e animais, 
                agendamento de consultas, registro de prontuário, emissão de receitas, 
                controle de pagamentos.
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Regras:</strong> Consultas podem ser canceladas 
                até 24h antes sem multa. Cada veterinário atende no máximo 8 pacientes por dia. 
                Vacinas devem gerar alerta de reforço.
              </p>
              <p>
                <strong className="text-foreground">Fora do escopo:</strong> Controle de estoque 
                de medicamentos, farmácia, petshop.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniMundoSection;
