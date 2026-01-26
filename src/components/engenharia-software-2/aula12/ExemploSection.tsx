import { motion } from "framer-motion";
import { ShoppingCart, User, CreditCard, Package, Eye } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ExemploSection = () => {
  return (
    <section id="exemplo" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              <Eye className="w-4 h-4" />
              Exemplo Prático
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sistema de E-commerce
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja um exemplo de Diagrama de Casos de Uso para um sistema de vendas online
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="p-8 rounded-2xl bg-card border border-border">
            {/* Diagrama Visual Simplificado */}
            <div className="mb-8 p-6 rounded-xl bg-background/50 overflow-x-auto">
              <div className="min-w-[600px] flex items-center justify-between gap-8">
                {/* Ator Cliente */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Cliente</span>
                </div>

                {/* Casos de Uso */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="px-4 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-sm text-foreground">Realizar Login</span>
                  </div>
                  <div className="px-4 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-sm text-foreground">Buscar Produtos</span>
                  </div>
                  <div className="px-4 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-sm text-foreground">Adicionar ao Carrinho</span>
                  </div>
                  <div className="px-4 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-sm text-foreground">Finalizar Compra</span>
                  </div>
                  <div className="px-4 py-3 rounded-full bg-violet-500/10 border border-violet-500/30 text-center col-span-2">
                    <span className="text-sm text-foreground">Realizar Pagamento</span>
                    <span className="text-xs text-violet-400 block">{"<<include>>"}</span>
                  </div>
                </div>

                {/* Ator Sistema de Pagamento */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Gateway</span>
                  <span className="text-xs text-muted-foreground">Pagamento</span>
                </div>
              </div>
            </div>

            {/* Lista de Atores e Casos de Uso */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  Atores Identificados
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <strong className="text-foreground">Cliente:</strong> Usuário que realiza compras
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong className="text-foreground">Gateway de Pagamento:</strong> Sistema externo
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <strong className="text-foreground">Administrador:</strong> Gerencia produtos e pedidos
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-cyan-400" />
                  Casos de Uso Principais
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">• UC001 - Realizar Login</li>
                  <li className="text-sm text-muted-foreground">• UC002 - Buscar Produtos</li>
                  <li className="text-sm text-muted-foreground">• UC003 - Adicionar ao Carrinho</li>
                  <li className="text-sm text-muted-foreground">• UC004 - Finalizar Compra</li>
                  <li className="text-sm text-muted-foreground">• UC005 - Realizar Pagamento</li>
                  <li className="text-sm text-muted-foreground">• UC006 - Acompanhar Pedido</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dicas */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">💡 Dicas para Identificar Casos de Uso</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background/50">
                <p className="font-medium text-cyan-400 mb-2">Pergunte aos Atores:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• O que você precisa fazer no sistema?</li>
                  <li>• Quais tarefas você realiza diariamente?</li>
                  <li>• Que informações você precisa obter?</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <p className="font-medium text-cyan-400 mb-2">Verifique se:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Entrega valor concreto ao ator</li>
                  <li>• Representa uma funcionalidade completa</li>
                  <li>• Pode ser executado de forma independente</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExemploSection;
