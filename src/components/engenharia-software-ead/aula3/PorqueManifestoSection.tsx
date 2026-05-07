import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, Handshake, RefreshCw, Shield, BookMarked, Lightbulb } from "lucide-react";
import culturaAgilImg from "@/assets/aula3-ead/cultura-agil.png";
import valoresPrincipiosImg from "@/assets/aula3-ead/valores-principios.png";

const pilares = [
  {
    icon: Users,
    title: "Indivíduos e Interações",
    desc: "A efetividade de como os indivíduos interagem é provavelmente o fator mais relevante para o sucesso (ou falha) de qualquer esforço. Quase tudo no Manifesto depende dessa interação: colaboração, conversas cara-a-cara, motivações, confiança, auto-organização e aceitação de mudanças.",
    cor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    icon: Handshake,
    title: "Colaboração com o Cliente",
    desc: "Não basta envolver o cliente: é preciso reconhecer suas pressões e dar tempo para construir o relacionamento. Quando o envolvimento direto não é possível, um Product Owner forte representa stakeholders. Conversas em tempo real substituem comitês formais de mudança.",
    cor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  },
  {
    icon: RefreshCw,
    title: "Estar Aberto às Mudanças",
    desc: "Ágil não significa aceitar TUDO. Diante de uma mudança, a equipe avalia custo, prazo e prioridades, apresenta opções ao cliente e decide colaborativamente. Excelência técnica, bom design e simplicidade tornam o software adaptável e reduzem retrabalho.",
    cor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  {
    icon: Shield,
    title: "Auto-organização exige Confiança",
    desc: "Confiança em três níveis: o entorno confia na equipe, os membros confiam entre si, e cada um confia em si mesmo. Sem confiança, a visibilidade radical do Ágil vira ameaça. Com confiança, vira liberdade para experimentar, melhorar e pedir ajuda sem medo.",
    cor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
];

const atividadesEquipe = [
  { titulo: "Treinamento conjunto", desc: "Times normalmente são treinados separadamente. Treinar juntos permite ir além dos fundamentos e construir entendimento compartilhado." },
  { titulo: "Formação deliberada da equipe", desc: "Definir regras de trabalho, Definition of Done, visões sobre design/qualidade, formas de aumentar confiança, cultura desejada." },
  { titulo: "Iterações de aprendizagem", desc: "Equipes novas precisam de 3-4 iterações para começar a 'SER' Ágil em vez de apenas 'FAZER' Ágil. Pressão imediata por velocidade prejudica esse aprendizado." },
];

const PorqueManifestoSection = () => (
  <section id="porque-manifesto" className="py-20 px-6 bg-background/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
          <BookMarked className="w-4 h-4" /> Leitura Complementar
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          📚 Por que o Manifesto Ágil <span className="text-orange-400">ainda importa</span>
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
          Reflexão de <strong>Scott Duncan</strong> (InfoQ, 2019 — trad. Edeilson Silva) — 46 anos de experiência com software, ex-Bell Labs, ex-board da Scrum Alliance.
        </p>
      </motion.div>

      {/* Quote intro */}
      <Card className="mb-10 bg-gradient-to-br from-orange-500/10 to-blue-500/10 border-orange-500/30">
        <CardContent className="p-8">
          <Quote className="w-8 h-8 text-orange-400 mb-3" />
          <p className="text-lg text-foreground italic leading-relaxed">
            "Não acredito que uma equipe ou organização possa atingir todos os benefícios de uma abordagem Ágil sem estar familiarizada com a proposta dos princípios e valores do Manifesto, substituindo isso por <strong>frameworks e práticas sem conhecer as grandes orientações por trás deles</strong>."
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Scott Duncan</p>
        </CardContent>
      </Card>

      {/* Pontos principais */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-amber-400" /> Pontos Principais do Artigo
      </h3>
      <div className="grid md:grid-cols-2 gap-3 mb-12">
        {[
          "Quem se diz Ágil deve conhecer e honrar os valores e princípios do Manifesto.",
          "A interação efetiva entre pessoas é fator crítico para o sucesso de qualquer projeto.",
          "Times devem ser treinados juntos e ter tempo para uma verdadeira transformação.",
          "Não subestime os impactos da colaboração com cliente e da resposta a mudanças.",
          "Auto-organização e autogerenciamento exigem confiança em todos os níveis.",
        ].map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border">
            <span className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center flex-shrink-0">{i + 1}</span>
            <p className="text-sm text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>

      {/* Os 4 pilares */}
      <h3 className="text-2xl font-bold text-foreground mb-6">🏛️ Os 4 Pilares destacados por Duncan</h3>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {pilares.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className={`h-full border ${p.cor.split(" ").slice(1).join(" ")}`}>
              <CardContent className="p-6">
                <p.icon className={`w-9 h-9 mb-3 ${p.cor.split(" ")[0]}`} />
                <h4 className="font-bold text-foreground mb-2 text-lg">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Atividades necessárias */}
      <Card className="mb-12 bg-card/50 border-border">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">🎯 O que as equipes precisam compartilhar (segundo Duncan)</h3>
          <div className="space-y-4">
            {atividadesEquipe.map((a, i) => (
              <div key={i} className="p-4 rounded-xl bg-background/50 border border-border">
                <h4 className="font-bold text-orange-400 mb-1">{i + 1}. {a.titulo}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quote da equipe */}
      <Card className="mb-12 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/30">
        <CardContent className="p-8 text-center">
          <Quote className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-foreground italic leading-relaxed max-w-3xl mx-auto">
            "Acredito que posso caminhar com qualquer outra pessoa na equipe e pedir ou oferecer ajuda <strong className="text-emerald-400">sem me preocupar com a reação</strong> que vou ter."
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Membro de equipe Ágil, em retrospectiva citada por Duncan</p>
        </CardContent>
      </Card>

      {/* Estudo de Caso – Infográfico Cultura Ágil */}
      <h3 className="text-2xl font-bold text-foreground mb-6">📖 Caso prático: Implantação de Cultura Ágil</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          src={culturaAgilImg}
          alt="Infográfico: Implantação de Cultura Ágil — caso do consultor Fernando"
          className="rounded-2xl border border-border w-full shadow-lg"
          loading="lazy"
        />
        <div className="space-y-3 text-sm text-muted-foreground">
          <p><strong className="text-orange-400">Cenário:</strong> Fernando é contratado como consultor para implantar Scrum em uma empresa. O diretor pede execução imediata.</p>
          <p><strong className="text-orange-400">Posição do consultor:</strong> "Primeiro precisamos conscientizar os colaboradores e <strong>criar uma cultura ágil na organização</strong>."</p>
          <p><strong className="text-orange-400">Argumento-chave:</strong> Não basta o setor de desenvolvimento adotar agilidade — comercial, suporte e administrativo também precisam ser "contaminados". Caso contrário, práticas como reuniões quinzenais serão vistas como desperdício.</p>
          <p><strong className="text-orange-400">Estratégia adotada:</strong> Disseminação <em>top-down</em> — gestores treinados primeiro, montando planos de ação e promovendo autonomia, responsabilidade e times multifuncionais.</p>
          <p><strong className="text-orange-400">Resultado:</strong> Equipes mais "soltas", responsabilidade coletiva, gestores como suporte estratégico. Só depois disso definiu-se qual metodologia Ágil cabia em cada grupo.</p>
        </div>
      </div>

      {/* Infográfico Valores x Princípios */}
      <h3 className="text-2xl font-bold text-foreground mb-6">🔗 Ligação entre Valores e Princípios</h3>
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6 md:p-8">
          <p className="text-sm text-muted-foreground mb-6">
            Os <strong>4 valores são os norteadores</strong>, e os <strong>12 princípios são as ações práticas</strong> que precisam ser executadas para que a equipe utilize o Manifesto Ágil como condutor para o sucesso.
          </p>
          <motion.img
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            src={valoresPrincipiosImg}
            alt="Infográfico ligando os 4 valores aos 12 princípios do Manifesto Ágil"
            className="rounded-2xl border border-border w-full shadow-lg mx-auto max-w-2xl"
            loading="lazy"
          />
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground/70 mt-8 text-center italic">
        Fonte: DUNCAN, Scott. <strong>Por que o Manifesto Ágil ainda importa</strong>. InfoQ Brasil, 22 jan. 2019. Tradução: Edeilson Silva.
      </p>
    </div>
  </section>
);

export default PorqueManifestoSection;
