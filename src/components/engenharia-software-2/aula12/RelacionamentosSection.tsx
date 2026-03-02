import { ArrowRight, Link2, GitBranch, Merge, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RelacionamentosSection = () => {
  return (
    <section id="relacionamentos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              <Link2 className="w-4 h-4" />
              Relacionamentos UML
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Relacionamentos
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A interação entre um Ator e um Caso de Uso é representada por um relacionamento. 
              Os relacionamentos possíveis são: <strong className="text-foreground">Associação</strong>, <strong className="text-foreground">Generalização</strong>, <strong className="text-foreground">Extensão</strong> e <strong className="text-foreground">Inclusão</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Associação */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <ArrowRight className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">1. Associação</h3>
                <p className="text-sm text-muted-foreground">Conexão entre ator e caso de uso</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              É um tipo de relacionamento entre os Atores que interagem com o sistema, entre os Atores e os Casos de Uso 
              ou entre Casos de Uso e outros Casos de Uso. Uma associação entre um Ator e um Caso de Uso demonstra que 
              o Ator utiliza-se, de alguma maneira, da função representada pelo Caso de Uso (GUEDES, 2011).
            </p>

            <div className="p-4 rounded-xl bg-background/50 mb-4">
              <p className="text-sm font-medium text-cyan-400 mb-2">Representação:</p>
              <p className="text-sm text-muted-foreground">
                Uma <strong className="text-foreground">reta</strong> ligando o Ator ao Caso de Uso, podendo indicar a 
                <strong className="text-foreground"> navegabilidade</strong> — se as informações são fornecidas pelo Ator ao Caso de Uso, 
                transmitidas pelo Caso de Uso ao Ator, ou ambos.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <p className="font-bold text-foreground mb-3">📌 Exemplo — Sistema de E-commerce:</p>
              <div className="flex items-center justify-center gap-6 py-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Cliente</span>
                </div>
                <div className="flex-1 max-w-[200px] border-t-2 border-dashed border-cyan-400/50 relative">
                  <ArrowRight className="w-4 h-4 text-cyan-400 absolute -right-2 -top-2" />
                </div>
                <div className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <span className="text-sm text-foreground">Realizar Login</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                O <strong className="text-foreground">Cliente</strong> está associado ao caso de uso <strong className="text-foreground">"Realizar Login"</strong> — ele utiliza essa funcionalidade.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Generalização */}
        <ScrollReveal delay={0.15}>
          <div className="mb-8 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <GitBranch className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">2. Generalização</h3>
                <p className="text-sm text-muted-foreground">Herança entre atores ou casos de uso</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Representa hierarquia entre atores ou entre casos de uso. A <strong className="text-foreground">Generalização de Atores</strong> é 
              uma representação abstrata de papéis. A <strong className="text-foreground">Generalização de Casos de Uso</strong> representa dois 
              ou mais Casos de Uso com características semelhantes — o Caso de Uso Geral descreve características compartilhadas, 
              herdadas pelos Casos de Uso Especializados.
            </p>

            <div className="p-4 rounded-xl bg-background/50 mb-4">
              <p className="text-sm font-medium text-violet-400 mb-2">Representação:</p>
              <p className="text-sm text-muted-foreground">
                Seta com <strong className="text-foreground">triângulo vazado (▷)</strong> apontando do elemento especializado para o elemento geral.
              </p>
              <code className="text-xs text-violet-400 mt-1 block">Especializado ——▷ Geral</code>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/20">
                <p className="font-bold text-foreground mb-3">📌 Generalização de Atores:</p>
                <div className="flex flex-col items-center gap-3 py-3">
                  <div className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/30">
                    <span className="text-sm font-medium text-foreground">Usuário</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-violet-400 text-lg">▲</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <span className="text-xs text-foreground">Cliente</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <span className="text-xs text-foreground">Administrador</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  "Cliente" e "Administrador" herdam os comportamentos de "Usuário"
                </p>
              </div>

              <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/20">
                <p className="font-bold text-foreground mb-3">📌 Generalização de Casos de Uso:</p>
                <div className="flex flex-col items-center gap-3 py-3">
                  <div className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30">
                    <span className="text-sm text-foreground">Realizar Pagamento</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-violet-400 text-lg">▲</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                      <span className="text-xs text-foreground">Pagar c/ Cartão</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                      <span className="text-xs text-foreground">Pagar c/ Pix</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  "Pagar c/ Cartão" e "Pagar c/ Pix" são especializações de "Realizar Pagamento"
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Include */}
        <ScrollReveal delay={0.2}>
          <div className="mb-8 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Merge className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">3. Inclusão {"(<<include>>)"}</h3>
                <p className="text-sm text-muted-foreground">Dependência obrigatória entre casos de uso</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Representa um relacionamento de dependência entre Casos de Uso, indicando <strong className="text-foreground">obrigatoriedade</strong>. 
              A execução do primeiro caso de uso <strong className="text-foreground">obriga também a execução do segundo</strong>. 
              Usa-se include sempre que um caso de uso obrigatoriamente depende de outro para sua execução.
            </p>

            <div className="p-4 rounded-xl bg-background/50 mb-4">
              <p className="text-sm font-medium text-green-400 mb-2">Representação:</p>
              <p className="text-sm text-muted-foreground">
                Seta <strong className="text-foreground">tracejada</strong> que parte do Caso de Uso <strong className="text-foreground">"base"</strong> para 
                o Caso de Uso <strong className="text-foreground">"incluído"</strong>, com o estereótipo {"<<include>>"}.
              </p>
              <code className="text-xs text-green-400 mt-1 block">Base ---{"<<include>>"}---{">"} Incluído</code>
            </div>

            <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20 mb-4">
              <p className="font-bold text-foreground mb-3">📌 Exemplo — Sistema de Estoque:</p>
              <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
                <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="text-sm text-foreground">Solicitar Material</span>
                </div>
                <div className="flex flex-col items-center">
                  <code className="text-xs text-green-400">{"<<include>>"}</code>
                  <div className="w-16 border-t-2 border-dashed border-green-400/50" />
                  <ArrowRight className="w-3 h-3 text-green-400" />
                </div>
                <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="text-sm text-foreground">Checar Estoque</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Antes de solicitar material é <strong className="text-foreground">obrigatório</strong> checar o estoque.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
              <p className="font-bold text-foreground mb-3">📌 Exemplo — Sistema de E-commerce:</p>
              <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
                <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="text-sm text-foreground">Finalizar Compra</span>
                </div>
                <div className="flex flex-col items-center">
                  <code className="text-xs text-green-400">{"<<include>>"}</code>
                  <div className="w-16 border-t-2 border-dashed border-green-400/50" />
                  <ArrowRight className="w-3 h-3 text-green-400" />
                </div>
                <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="text-sm text-foreground">Calcular Frete</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                "Finalizar Compra" <strong className="text-foreground">sempre</strong> inclui "Calcular Frete".
              </p>
            </div>

            {/* Tabela resumo Include */}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-green-400">Obrigatório?</td>
                    <td className="py-2 px-3 text-foreground">Sim, <strong>sempre ocorre</strong></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-green-400">Direção da Seta?</td>
                    <td className="py-2 px-3 text-foreground">Do caso <strong>principal</strong> para o caso <strong>incluído</strong></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-green-400">Quando Usar?</td>
                    <td className="py-2 px-3 text-foreground">Quando um caso <strong>precisa obrigatoriamente</strong> de outro</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-red-400">Erro Comum</td>
                    <td className="py-2 px-3 text-foreground">Usar {"<<include>>"} para funcionalidades <strong>opcionais</strong> (use {"<<extend>>"})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. Extend */}
        <ScrollReveal delay={0.25}>
          <div className="mb-8 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <GitBranch className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">4. Extensão {"(<<extend>>)"}</h3>
                <p className="text-sm text-muted-foreground">Funcionalidade opcional / condicional</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              A Extensão representa um relacionamento estendido entre Casos de Uso, indicando que o Caso de Uso 
              <strong className="text-foreground"> "base"</strong> incorpora <strong className="text-foreground">implicitamente</strong> o 
              comportamento de outro Caso de Uso em um local especificado. O relacionamento <strong className="text-foreground">extend</strong> é 
              usado quando um caso de uso precisa de outro, mas <strong className="text-foreground">não obrigatoriamente</strong> — indica funcionalidade opcional.
            </p>

            <div className="p-4 rounded-xl bg-background/50 mb-4">
              <p className="text-sm font-medium text-amber-400 mb-2">Representação:</p>
              <p className="text-sm text-muted-foreground">
                Seta <strong className="text-foreground">tracejada</strong> que parte do Caso de Uso <strong className="text-foreground">"estendido" (opcional)</strong> para 
                o Caso de Uso <strong className="text-foreground">"base"</strong>, com o estereótipo {"<<extend>>"}.
              </p>
              <code className="text-xs text-amber-400 mt-1 block">Opcional ---{"<<extend>>"}---{">"} Base</code>
            </div>

            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-4">
              <p className="font-bold text-foreground mb-3">📌 Exemplo — Sistema de Compras:</p>
              <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
                <div className="px-5 py-3 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="text-sm text-foreground">Comprar Material</span>
                </div>
                <div className="flex flex-col items-center">
                  <code className="text-xs text-amber-400">{"<<extend>>"}</code>
                  <div className="w-16 border-t-2 border-dashed border-amber-400/50" />
                  <ArrowRight className="w-3 h-3 text-amber-400 rotate-180" />
                </div>
                <div className="px-5 py-3 rounded-full bg-amber-500/10 border border-amber-500/30 opacity-70">
                  <span className="text-sm text-foreground">Solicitar Material</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Mesmo solicitando o material, é <strong className="text-foreground">opcional</strong> comprar o material.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <p className="font-bold text-foreground mb-3">📌 Exemplo — Sistema de E-commerce:</p>
              <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
                <div className="px-5 py-3 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="text-sm text-foreground">Finalizar Compra</span>
                </div>
                <div className="flex flex-col items-center">
                  <code className="text-xs text-amber-400">{"<<extend>>"}</code>
                  <div className="w-16 border-t-2 border-dashed border-amber-400/50" />
                  <ArrowRight className="w-3 h-3 text-amber-400 rotate-180" />
                </div>
                <div className="px-5 py-3 rounded-full bg-amber-500/10 border border-amber-500/30 opacity-70">
                  <span className="text-sm text-foreground">Gerar Cupom Desconto</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                "Gerar Cupom de Desconto" <strong className="text-foreground">pode ou não</strong> estender "Finalizar Compra".
              </p>
            </div>

            {/* Tabela resumo Extend */}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-amber-400">Obrigatório?</td>
                    <td className="py-2 px-3 text-foreground">Não, acontece apenas em <strong>certos casos</strong></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-amber-400">Direção da Seta?</td>
                    <td className="py-2 px-3 text-foreground">Do caso <strong>opcional</strong> para o caso <strong>principal</strong></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3 font-medium text-amber-400">Quando Usar?</td>
                    <td className="py-2 px-3 text-foreground">Quando um caso <strong>pode ou não</strong> ser executado dependendo de uma condição</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-red-400">Erro Comum</td>
                    <td className="py-2 px-3 text-foreground">Usar {"<<include>>"} para ações opcionais (deve ser {"<<extend>>"})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparativo Include vs Extend */}
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-amber-500/5 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Comparativo: Include vs Extend
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left text-muted-foreground">Característica</th>
                    <th className="py-3 px-4 text-left text-green-400">{"<<include>>"}</th>
                    <th className="py-3 px-4 text-left text-amber-400">{"<<extend>>"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">Obrigatoriedade</td>
                    <td className="py-3 px-4 text-foreground">Sempre executa</td>
                    <td className="py-3 px-4 text-foreground">Condicional / Opcional</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">Direção da seta</td>
                    <td className="py-3 px-4 text-foreground">Base → Incluído</td>
                    <td className="py-3 px-4 text-foreground">Opcional → Base</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">Exemplo</td>
                    <td className="py-3 px-4 text-foreground">Finalizar Compra → Calcular Frete</td>
                    <td className="py-3 px-4 text-foreground">Gerar Cupom → Finalizar Compra</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">Analogia</td>
                    <td className="py-3 px-4 text-foreground">"Sempre faz isso junto"</td>
                    <td className="py-3 px-4 text-foreground">"Às vezes também faz isso"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Especificação de Caso de Uso */}
        <ScrollReveal delay={0.35}>
          <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">📝 Template de Especificação de Caso de Uso</h3>
            <p className="text-muted-foreground mb-6">
              Cada caso de uso deve ser especificado detalhadamente para guiar o desenvolvimento:
            </p>

            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="template" className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                  Ver template completo de especificação
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Caso de Uso:</p>
                      <p className="text-muted-foreground">&lt;nome do caso de uso&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Objetivo:</p>
                      <p className="text-muted-foreground">&lt;breve descrição do objetivo do caso de uso no contexto do sistema&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Atores:</p>
                      <p className="text-muted-foreground">&lt;atores envolvidos&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Condição de Início:</p>
                      <p className="text-muted-foreground">&lt;o que vai disparar a funcionalidade&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Fluxo Principal:</p>
                      <p className="text-muted-foreground">&lt;definir a interação entre sistema e ator, para que o objetivo do caso de uso seja atingido&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Fluxo Alternativo:</p>
                      <p className="text-muted-foreground">&lt;definir fluxos que apoiam o fluxo principal, através de passos&gt;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Regras de Negócio:</p>
                      <p className="text-muted-foreground">&lt;definir restrições em cima das funcionalidades&gt;</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exemplo-spec" className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                  Exemplo preenchido: UC001 — Realizar Login
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Caso de Uso:</p>
                      <p className="text-foreground">UC001 — Realizar Login</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Objetivo:</p>
                      <p className="text-foreground">Permitir que o usuário se autentique no sistema para acessar funcionalidades protegidas</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Atores:</p>
                      <p className="text-foreground">Cliente, Administrador</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Condição de Início:</p>
                      <p className="text-foreground">O ator acessa a página de login do sistema</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Fluxo Principal:</p>
                      <ol className="list-decimal list-inside text-foreground space-y-1 mt-1">
                        <li>Sistema exibe a tela de login</li>
                        <li>Ator informa e-mail e senha</li>
                        <li>Sistema valida as credenciais</li>
                        <li>Sistema redireciona para a página inicial</li>
                      </ol>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Fluxo Alternativo:</p>
                      <p className="text-foreground">3a. Credenciais inválidas → Sistema exibe mensagem de erro e solicita nova tentativa</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="font-bold text-cyan-400">Regras de Negócio:</p>
                      <p className="text-foreground">RN01: Após 3 tentativas incorretas, a conta é bloqueada por 15 minutos</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RelacionamentosSection;
