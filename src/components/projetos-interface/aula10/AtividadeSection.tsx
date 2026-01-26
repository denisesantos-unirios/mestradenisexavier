import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Video, 
  Lightbulb, 
  ArrowUp,
  BookOpen,
  CheckCircle2,
  Search,
  FileText
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Atividade Prática</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Exploração de Acessibilidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pesquise e reflita sobre a importância da acessibilidade digital
              no contexto brasileiro e internacional.
            </p>
          </div>
        </ScrollReveal>

        {/* Vídeo sugerido */}
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-12 border border-primary/20">
            <div className="flex items-start gap-4">
              <Video className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">📺 Vídeo Sugerido</h3>
                <p className="text-muted-foreground mb-3">
                  Assista a vídeos sobre acessibilidade digital na prática, mostrando como pessoas
                  com deficiência usam a web no dia a dia.
                </p>
                <p className="text-sm text-primary font-medium">
                  Tópicos: Leitores de tela, navegação por teclado, tecnologias assistivas
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Card principal da atividade */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">
                  Pesquisa: Acessibilidade no Brasil
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Pesquise e Responda
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="font-medium mb-2">1. Lei Brasileira de Inclusão</p>
                    <p className="text-sm text-muted-foreground">
                      Qual é a Lei Brasileira de Inclusão (LBI) e o que ela diz sobre acessibilidade digital?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="font-medium mb-2">2. eMAG</p>
                    <p className="text-sm text-muted-foreground">
                      O que é o eMAG (Modelo de Acessibilidade em Governo Eletrônico)?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="font-medium mb-2">3. Estatísticas</p>
                    <p className="text-sm text-muted-foreground">
                      Quantas pessoas com deficiência existem no Brasil? Qual % tem acesso à internet?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="font-medium mb-2">4. Caso de Sucesso</p>
                    <p className="text-sm text-muted-foreground">
                      Encontre um exemplo de site ou app brasileiro que seja acessível.
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
                    <p className="font-medium mb-2">Documento deve conter:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Resposta para cada pergunta com fontes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Print do site/app acessível encontrado
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        Reflexão pessoal (mínimo 5 linhas)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Fontes sugeridas:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• planalto.gov.br (Lei 13.146/2015)</li>
                      <li>• gov.br/governodigital/emag</li>
                      <li>• ibge.gov.br (Censo demográfico)</li>
                      <li>• w3c.org/WAI (WCAG)</li>
                    </ul>
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
                  Ao pesquisar sobre acessibilidade, tente instalar uma extensão de leitor de tela no seu
                  navegador e experimente navegar em alguns sites. Essa experiência prática vai enriquecer
                  muito sua reflexão e ajudará na próxima aula!
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
                <p className="text-sm text-muted-foreground">Próxima Aula</p>
                <h4 className="text-xl font-bold">Acessibilidade na Prática</h4>
                <p className="text-muted-foreground">
                  Aprenda a identificar barreiras de acessibilidade em sites reais usando ferramentas de auditoria.
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
