import { motion } from "framer-motion";
import { FileText, List, Users, Target, AlertTriangle, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const estruturaDocumento = [
  {
    secao: "1. Introdução",
    icone: Target,
    conteudo: [
      "Propósito do documento",
      "Escopo do produto",
      "Definições, acrônimos e abreviações",
      "Referências",
      "Visão geral do documento"
    ]
  },
  {
    secao: "2. Descrição Geral",
    icone: Users,
    conteudo: [
      "Perspectiva do produto",
      "Funções do produto",
      "Características dos usuários",
      "Restrições",
      "Suposições e dependências"
    ]
  },
  {
    secao: "3. Requisitos Funcionais",
    icone: List,
    conteudo: [
      "RF001 - [Nome do Requisito]",
      "Descrição detalhada",
      "Entradas e saídas",
      "Critérios de aceitação",
      "Prioridade (Alta/Média/Baixa)"
    ]
  },
  {
    secao: "4. Requisitos Não-Funcionais",
    icone: AlertTriangle,
    conteudo: [
      "RNF001 - [Nome do Requisito]",
      "Categoria (Desempenho, Segurança, etc.)",
      "Descrição e métricas",
      "Método de verificação",
      "Prioridade"
    ]
  }
];

const DocumentoRequisitosSection = () => {
  return (
    <section id="documento" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              IEEE 830
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Estrutura do Documento de Requisitos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Baseado no padrão IEEE 830 para Especificação de Requisitos de Software (SRS)
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {estruturaDocumento.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.secao}
                    </h3>
                    <ul className="space-y-2">
                      {item.conteudo.map((linha, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {linha}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Exemplo de Requisito */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Exemplo de Requisito Funcional
            </h3>
            
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Identificador</p>
                  <p className="font-mono text-primary font-bold">RF001</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Prioridade</p>
                  <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-sm font-medium">Alta</span>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Nome</p>
                  <p className="font-semibold text-foreground">Cadastro de Cliente</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Descrição</p>
                  <p className="text-foreground">
                    O sistema deve permitir o cadastro de novos clientes contendo: nome completo, 
                    CPF, e-mail, telefone e endereço. O CPF deve ser validado e único no sistema.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Critérios de Aceitação</p>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• CPF validado com dígito verificador</li>
                    <li>• E-mail em formato válido</li>
                    <li>• Todos os campos obrigatórios preenchidos</li>
                    <li>• Mensagem de sucesso após cadastro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DocumentoRequisitosSection;
