import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hand, BrainCircuit, Repeat } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const regras = [
  {
    icon: Hand,
    n: "1",
    t: "Deixe o usuário no comando",
    intro: "Projetistas costumam simplificar a interface criando restrições que frustram quem usa. Interface simples de construir nem sempre é simples de usar.",
    itens: [
      { t: "Não force ações desnecessárias", d: "Entrou no modo de edição? Deve poder sair quando quiser, sem perder o trabalho." },
      { t: "A interação deve ser flexível", d: "Um desenhista não produz uma figura por comando de voz; um redator não escreve textos com caneta digitalizadora." },
      { t: "Permita interromper e desfazer", d: "Pausar uma tarefa, fazer outra e retomar sem perda — além de desfazer qualquer ação." },
      { t: "Permita criar macros", d: "Tarefas repetitivas desmotivam; automatizá-las aumenta a produtividade real e percebida." },
      { t: "Interação direta com os objetos da tela", d: "Esticar uma imagem arrastando as alças dá a sensação de manipular o objeto físico." },
    ],
  },
  {
    icon: BrainCircuit,
    n: "2",
    t: "Reduza a carga de memória do usuário",
    intro: "Quanto mais o sistema depende da memória do usuário, mais suscetível a erros ele se torna.",
    itens: [
      { t: "Reduza a demanda por memória recente", d: "Se o resultado de uma etapa anterior é necessário agora, o sistema deve exibi-lo — não o usuário memorizá-lo." },
      { t: "Estabeleça padrões (defaults)", d: "Ofereça um botão para restaurar os parâmetros da interface ao estado original." },
      { t: "Atalhos intuitivos", d: "Ctrl + C: tecla de controle + inicial do comando (copiar). O atalho deve ser dedutível." },
    ],
  },
  {
    icon: Repeat,
    n: "3",
    t: "Torne a interface consistente",
    intro: "Toda a aplicação deve seguir o mesmo padrão — os padrões precisam ser globais.",
    itens: [
      { t: "Mesma ação, mesmo comando", d: "Se copiar é Ctrl + C em uma tela, não pode virar Alt + S em outra." },
      { t: "Mesma linguagem visual", d: "Ícones, cores, posição de botões e nomenclatura estáveis em todo o produto." },
      { t: "Contexto preservado", d: "O usuário deve sempre saber onde está e como voltar." },
    ],
  },
];

const heuristicasDestaque = [
  { t: "Interface × mundo real", d: "A comunicação do sistema deve ser contextualizada e coerente com o modelo mental do usuário." },
  { t: "Reconhecimento em vez de memorização", d: "O usuário não deve decorar a interface: deve reconhecer os controles e prever o resultado." },
  { t: "Flexibilidade e eficiência de uso", d: "Fácil para o leigo, ágil para o avançado (aceleradores, atalhos, personalização)." },
];

const RegrasOuroSection = () => (
  <section id="regras-ouro" className="py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal animation="fadeUp">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Pressman &amp; Maxim (2016)</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">As 3 Regras de Ouro da Interação</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Antes de qualquer estética, toda interface precisa respeitar três regras básicas — elas
            explicam boa parte de como as interfaces afetam o comportamento e o humor das pessoas.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6 mb-16">
        {regras.map((r, i) => (
          <motion.div key={r.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{r.n}. {r.t}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5">{r.intro}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {r.itens.map((it) => (
                    <div key={it.t} className="p-4 rounded-xl bg-muted/40 border border-border/50">
                      <p className="font-semibold text-sm mb-1">{it.t}</p>
                      <p className="text-sm text-muted-foreground">{it.d}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ScrollReveal animation="fadeUp">
        <Card className="bg-card/50 border-border/50">
          <CardHeader><CardTitle>Validando com as Heurísticas de Nielsen (1994)</CardTitle></CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {heuristicasDestaque.map((h) => (
                <div key={h.t} className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="font-semibold mb-1">{h.t}</p>
                  <p className="text-sm text-muted-foreground">{h.d}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default RegrasOuroSection;
