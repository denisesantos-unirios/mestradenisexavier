import { motion } from "framer-motion";
import { BookOpen, MessageSquare, Users, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-rose-300 mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Aula 6 • JITT - Atividade Virtual</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Técnicas de </span>
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Elicitação de Requisitos
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Explorar técnicas como entrevistas, brainstorming, personas e observação
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Entrevistas</h3>
              <p className="text-sm text-muted-foreground">Conversa direta com stakeholders</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Workshops</h3>
              <p className="text-sm text-muted-foreground">Sessões colaborativas em grupo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Observação</h3>
              <p className="text-sm text-muted-foreground">Etnografia e análise contextual</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
