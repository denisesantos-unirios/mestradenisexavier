import { motion } from "framer-motion";
import { FileText, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const EspecificacaoSection = () => {
  return (
    <section id="especificacao" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Template
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Especificação de Caso de Uso
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modelo completo para documentar cada caso de uso do seu sistema
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="p-6 rounded-2xl bg-card border border-border mb-8">
            <h3 className="text-xl font-bold text-amber-500 mb-6">
              UC001 - Realizar Login
            </h3>
            
            <div className="space-y-6">
              {/* Informações Básicas */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Ator Principal</p>
                  <p className="font-medium text-foreground">Cliente</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Pré-condições</p>
                  <p className="font-medium text-foreground">Usuário cadastrado no sistema</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Pós-condições</p>
                  <p className="font-medium text-foreground">Usuário autenticado com sessão ativa</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Requisitos Relacionados</p>
                  <p className="font-medium text-foreground">RF001, RF002, RNF003</p>
                </div>
              </div>

              {/* Descrição */}
              <div className="p-4 rounded-xl bg-background/50">
                <p className="text-sm text-muted-foreground mb-2">Descrição</p>
                <p className="text-foreground">
                  Este caso de uso descreve o processo de autenticação do cliente no sistema, 
                  permitindo acesso às funcionalidades restritas.
                </p>
              </div>

              {/* Fluxo Principal */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <p className="text-sm font-bold text-amber-500 mb-3">Fluxo Principal</p>
                <div className="space-y-2">
                  {[
                    "O cliente acessa a página de login",
                    "O sistema exibe o formulário de login",
                    "O cliente informa e-mail e senha",
                    "O cliente clica em 'Entrar'",
                    "O sistema valida as credenciais",
                    "O sistema redireciona para a área logada"
                  ].map((passo, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-sm flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-foreground text-sm">{passo}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fluxos Alternativos */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm font-bold text-blue-400 mb-3">Fluxo Alternativo A1</p>
                  <p className="text-xs text-muted-foreground mb-2">Credenciais inválidas (no passo 5)</p>
                  <div className="space-y-1 text-sm text-foreground">
                    <p>5a. O sistema identifica credenciais inválidas</p>
                    <p>5b. Exibe mensagem de erro</p>
                    <p>5c. Retorna ao passo 2</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <p className="text-sm font-bold text-violet-400 mb-3">Fluxo de Exceção E1</p>
                  <p className="text-xs text-muted-foreground mb-2">Conta bloqueada</p>
                  <div className="space-y-1 text-sm text-foreground">
                    <p>5a. O sistema identifica conta bloqueada</p>
                    <p>5b. Exibe mensagem de conta suspensa</p>
                    <p>5c. Caso de uso encerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Rastreabilidade */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-amber-500" />
              Matriz de Rastreabilidade RF → UC
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-muted-foreground">Requisito</th>
                    <th className="text-left p-3 text-muted-foreground">Caso de Uso</th>
                    <th className="text-left p-3 text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">RF001 - Realizar Login</td>
                    <td className="p-3 text-foreground">UC001</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Mapeado</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">RF002 - Cadastrar Cliente</td>
                    <td className="p-3 text-foreground">UC002</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Mapeado</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">RF003 - Buscar Produtos</td>
                    <td className="p-3 text-foreground">UC003, UC004</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Mapeado</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground">RF004 - Gerar Relatório</td>
                    <td className="p-3 text-muted-foreground">—</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-amber-500/20 text-amber-400 text-xs">Pendente</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EspecificacaoSection;
