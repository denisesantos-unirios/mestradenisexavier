import { motion } from "framer-motion";
import { 
  Wrench, ExternalLink, FileText, 
  Layout, Kanban, MessageSquare 
} from "lucide-react";

const ferramentas = [
  {
    nome: "Jira",
    tipo: "Gestão de Requisitos",
    descricao: "Ferramenta profissional para rastreamento de requisitos, histórias de usuário e gerenciamento ágil de projetos.",
    uso: "Documentar requisitos, criar backlog, rastrear mudanças",
    link: "https://www.atlassian.com/software/jira"
  },
  {
    nome: "Trello",
    tipo: "Kanban Simples",
    descricao: "Quadro Kanban visual para organizar requisitos em cartões, ideal para equipes menores.",
    uso: "Organizar requisitos por status, priorizar funcionalidades",
    link: "https://trello.com/"
  },
  {
    nome: "Miro / Mural",
    tipo: "Colaboração Visual",
    descricao: "Quadro branco virtual para brainstorming, mapas mentais e workshops remotos.",
    uso: "Sessões de elicitação, organização de ideias, personas",
    link: "https://miro.com/"
  },
  {
    nome: "Notion",
    tipo: "Documentação",
    descricao: "Plataforma all-in-one para documentação de requisitos, wikis e bases de conhecimento.",
    uso: "Documentar mini-mundo, especificações, glossário",
    link: "https://notion.so/"
  },
  {
    nome: "Google Forms",
    tipo: "Questionários",
    descricao: "Ferramenta gratuita para criar questionários e coletar dados de stakeholders.",
    uso: "Pesquisas com usuários, validação de requisitos",
    link: "https://docs.google.com/forms/"
  },
  {
    nome: "Figma",
    tipo: "Prototipação",
    descricao: "Ferramenta de design colaborativo para criar protótipos de interface.",
    uso: "Validar requisitos de interface, prototipação rápida",
    link: "https://figma.com/"
  }
];

const FerramentasSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 mb-4">
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-medium">Ferramentas de Apoio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ferramentas para Elicitação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ferramentas.map((ferramenta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{ferramenta.nome}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                    {ferramenta.tipo}
                  </span>
                </div>
                <a 
                  href={ferramenta.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{ferramenta.descricao}</p>
              
              <div className="p-2 rounded-lg bg-background/50 text-xs text-muted-foreground">
                <strong className="text-foreground">Uso:</strong> {ferramenta.uso}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template de Documento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Template: Registro de Entrevista</h3>
          </div>

          <div className="bg-background/50 p-6 rounded-lg text-sm font-mono text-muted-foreground">
            <pre className="whitespace-pre-wrap">{`REGISTRO DE ENTREVISTA
========================

Data: ___/___/______
Entrevistador: _____________________
Stakeholder: _______________________
Cargo/Função: ______________________
Duração: ___ minutos

CONTEXTO
---------
[Descreva brevemente o contexto da entrevista]

PRINCIPAIS PONTOS DISCUTIDOS
----------------------------
1. 
2. 
3. 

REQUISITOS IDENTIFICADOS
------------------------
RF01: [Descrição do requisito funcional]
RF02: 
...

RNF01: [Descrição do requisito não-funcional]
RNF02: 
...

PENDÊNCIAS E DÚVIDAS
--------------------
- 

PRÓXIMOS PASSOS
---------------
- `}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FerramentasSection;
