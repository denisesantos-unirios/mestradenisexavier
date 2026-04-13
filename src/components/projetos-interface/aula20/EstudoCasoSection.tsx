import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, ListChecks } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const tarefas = [
  "Encontrar um aviso no espaço público",
  "Identificar que um aviso deveria estar no espaço privativo, entrar e encontrá-lo",
  "Criar um aviso",
  "Alterar um aviso",
  "Utilizar o mecanismo de busca para encontrar um aviso e identificar quem teria acesso",
];

const EstudoCasoSection = () => (
  <section id="estudo-caso" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📘 Estudo de Caso: <span className="text-violet-400">Projeto Oré</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aplicação completa do DECIDE em um Quadro de Avisos para a comunidade ASCR — do objetivo ao relatório.
          </p>
        </div>
      </ScrollReveal>

      {/* Contexto */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Card className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-400" /> Objetivo da Avaliação
            </h3>
            <p className="text-muted-foreground">
              Observar se os usuários conseguiam <strong className="text-violet-400">compreender o que podiam fazer</strong> e
              <strong className="text-violet-400"> como usar</strong> o Quadro de Avisos. O objetivo de design era que pessoas leigas,
              que usam o computador eventualmente, fossem capazes de usá-lo bem.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              A qualidade de uso avaliada foi a <strong className="text-fuchsia-400">comunicabilidade</strong>, resultando em
              planejamento para um teste de comunicabilidade.
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Tarefas Selecionadas */}
      <ScrollReveal animation="fadeUp" delay={0.2}>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <ListChecks className="w-5 h-5 text-violet-400" /> Tarefas Selecionadas (5)
        </h3>
        <div className="space-y-3 mb-8">
          {tarefas.map((t, i) => (
            <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold text-sm">{i + 1}</span>
              </div>
              <p className="text-muted-foreground">{t}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Participantes */}
      <ScrollReveal animation="fadeUp" delay={0.3}>
        <Card className="bg-card/50 border-border mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">👥 Seleção de Participantes</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl font-black text-violet-400">6</span>
                <p className="text-sm text-muted-foreground mt-1">usuários selecionados</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl font-black text-fuchsia-400">5♀ 1♂</span>
                <p className="text-sm text-muted-foreground mt-1">distribuição de gênero</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl font-black text-pink-400">30-60+</span>
                <p className="text-sm text-muted-foreground mt-1">faixa etária (anos)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Funcionários e voluntários da ASCR que já utilizavam computador eventualmente, representando os perfis definidos na etapa de design.
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Critérios do Teste de Usabilidade */}
      <ScrollReveal animation="fadeUp" delay={0.4}>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">🎯 Critérios Prioritários do Teste</h3>
            <div className="space-y-4">
              {[
                { criterio: "Facilidade de uso", pergunta: "O usuário consegue utilizar facilmente o Quadro de Avisos? Sem cometer muitos erros? O sistema de ajuda é eficiente?" },
                { criterio: "Produtividade", pergunta: "O usuário consegue criar e encontrar um aviso rapidamente? É útil para a comunidade ASCR?" },
                { criterio: "Satisfação", pergunta: "Os usuários ficaram satisfeitos com o Quadro de Avisos?" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.criterio}</p>
                    <p className="text-sm text-muted-foreground">{item.pergunta}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default EstudoCasoSection;
