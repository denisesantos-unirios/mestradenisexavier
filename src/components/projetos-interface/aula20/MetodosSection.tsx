import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Eye, Monitor, Mic, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const metodos = [
  { icon: MessageSquare, titulo: "Entrevistas e Questionários", desc: "Online ou presencial. Coletam percepções e preferências dos usuários de forma direta.", tipo: "Coleta" },
  { icon: Users, titulo: "Grupos Focais", desc: "Discussão em grupo moderada para explorar expectativas e experiências com a interface.", tipo: "Coleta" },
  { icon: ClipboardList, titulo: "Registro de Uso (Logs)", desc: "Captura automática de interações do usuário com o sistema para análise posterior.", tipo: "Observação" },
  { icon: Eye, titulo: "Observação de Uso", desc: "Exploração livre ou trabalho cotidiano — observar sem interferir como o usuário interage.", tipo: "Observação" },
  { icon: Monitor, titulo: "Testes em Laboratório", desc: "Teste de Usabilidade (medidas quantitativas) e Teste de Comunicabilidade (compreensão da interface).", tipo: "Teste" },
  { icon: Mic, titulo: "Protocolos Verbais", desc: "Pensar alto, co-descoberta (dois usuários juntos) e avaliação cooperativa (avaliador interage).", tipo: "Verbalização" },
];

const MetodosSection = () => (
  <section id="metodos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔬 Métodos de <span className="text-fuchsia-400">Avaliação</span> com Usuário
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas empíricas para coletar dados reais sobre como os usuários interagem com interfaces.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metodos.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full bg-card/50 border-border hover:border-fuchsia-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-fuchsia-500/10">
                    <m.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">{m.tipo}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{m.titulo}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetodosSection;
