import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Search, 
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ArrowUp,
  BookOpen,
  FileText,
  Globe
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const sitesTestar = [
  { nome: "Site governamental", url: "gov.br ou site da prefeitura local" },
  { nome: "E-commerce popular", url: "Americanas, Magazine Luiza, etc." },
  { nome: "Banco digital", url: "Nubank, Inter, C6, etc." },
  { nome: "Rede social", url: "Instagram, Twitter, LinkedIn" }
];

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Atividade Prática</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Auditoria de Acessibilidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aplique as ferramentas e o checklist para identificar
              barreiras de acessibilidade em sites reais.
            </p>
          </div>
        </ScrollReveal>

        {/* Card principal da atividade */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">
                  Identificação de Barreiras
                </h3>
              </div>
            </div>

            <div className="p-8">
              {/* Objetivo */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">🎯 Objetivo</h4>
                <p className="text-muted-foreground">
                  Escolha <strong>2 sites diferentes</strong> e realize uma auditoria de acessibilidade 
                  utilizando as ferramentas apresentadas na aula.
                </p>
              </div>

              {/* Sites para testar */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Sugestões de Sites
                </h4>
                <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.05}>
                  {sitesTestar.map((site, index) => (
                    <StaggerItem key={index}>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border">
                        <p className="font-medium">{site.nome}</p>
                        <p className="text-sm text-muted-foreground">{site.url}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Passos */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Passo a Passo
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="font-medium mb-2">1. Use o Lighthouse</p>
                    <p className="text-sm text-muted-foreground">
                      Execute a auditoria no Chrome DevTools e anote a pontuação de acessibilidade.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="font-medium mb-2">2. Use o WAVE</p>
                    <p className="text-sm text-muted-foreground">
                      Instale a extensão e identifique erros visuais diretamente na página.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="font-medium mb-2">3. Teste com Teclado</p>
                    <p className="text-sm text-muted-foreground">
                      Navegue usando apenas Tab, Enter e setas. O foco é visível?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="font-medium mb-2">4. Verifique Contraste</p>
                    <p className="text-sm text-muted-foreground">
                      Use um verificador de contraste em 3 combinações de cores do site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Formato de entrega */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Formato de Entrega
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2">Para cada site, inclua:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Screenshot do resultado do Lighthouse
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Lista de 5 problemas encontrados
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Classificação WCAG de cada problema (A, AA, AAA)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Sugestão de correção para 2 problemas
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Tabela comparativa:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 text-muted-foreground">Critério</th>
                            <th className="text-center py-2 text-muted-foreground">Site 1</th>
                            <th className="text-center py-2 text-muted-foreground">Site 2</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-2">Pontuação Lighthouse</td>
                            <td className="text-center">__/100</td>
                            <td className="text-center">__/100</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2">Erros WAVE</td>
                            <td className="text-center">__</td>
                            <td className="text-center">__</td>
                          </tr>
                          <tr>
                            <td className="py-2">Navegação teclado</td>
                            <td className="text-center">✓/✗</td>
                            <td className="text-center">✓/✗</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dica do professor */}
        <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 mb-12 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">💡 Dica da Professora</h3>
                <p className="text-muted-foreground">
                  Compare um site brasileiro com um site internacional do mesmo segmento. Você vai perceber
                  diferenças interessantes! Sites europeus tendem a ter melhor acessibilidade devido a 
                  regulamentações mais rigorosas (como a EN 301 549).
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima aula */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-6 mb-12">
            <div className="flex items-center gap-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Próxima Semana</p>
                <h4 className="text-xl font-bold">Revisão Geral da Etapa 1</h4>
                <p className="text-muted-foreground">
                  Quiz interativo e preparação para a entrega da Fase 1 do Projeto.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Voltar ao topo */}
        <ScrollReveal animation="fadeUp">
          <div className="text-center">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ y: -3 }}
            >
              <ArrowUp className="w-5 h-5" />
              Voltar ao Topo
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtividadeSection;
