import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  ArrowLeft,
  Edit,
  Trash2,
  Printer,
  Plus,
  ClipboardList,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Database } from "@/integrations/supabase/types";

type Exam = Database["public"]["Tables"]["exams"]["Row"];
type Discipline = Database["public"]["Enums"]["discipline"];

const disciplineLabels: Record<Discipline, string> = {
  "engenharia-software-1": "Engenharia de Software I",
  "engenharia-software-2": "Engenharia de Software II",
  "engenharia-software-ead": "Engenharia de Software EAD",
  "projetos-interface": "Projetos de Interface",
};

const ListaProvas = () => {
  const { user, isProfessor, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exams, setExams] = useState<Exam[]>([]);
  const [loadingExams, setLoadingExams] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isProfessor)) {
      navigate("/provas/login");
    }
  }, [user, isProfessor, loading, navigate]);

  useEffect(() => {
    if (isProfessor) fetchExams();
  }, [isProfessor]);

  const fetchExams = async () => {
    setLoadingExams(true);
    const { data, error } = await supabase
      .from("exams")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Erro ao carregar provas", description: error.message, variant: "destructive" });
    } else {
      setExams(data || []);
    }
    setLoadingExams(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("exams").delete().eq("id", id);
    if (error) {
      toast({ title: "Erro ao excluir", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Prova excluída com sucesso" });
      setExams((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleEdit = (exam: Exam) => {
    const ids = exam.question_ids.join(",");
    navigate(`/provas/gerar-prova?ids=${ids}&examId=${exam.id}&title=${encodeURIComponent(exam.title)}`);
  };

  const handleView = (exam: Exam) => {
    const ids = exam.question_ids.join(",");
    navigate(`/provas/gerar-prova?ids=${ids}&title=${encodeURIComponent(exam.title)}`);
  };

  if (loading || !isProfessor) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-primary" />
                Provas Geradas
              </h1>
              <p className="text-muted-foreground mt-1">{exams.length} provas salvas</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/provas/banco-questoes")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Banco de Questões
              </Button>
              <Button onClick={() => navigate("/provas/banco-questoes")}>
                <Plus className="w-4 h-4 mr-2" />
                Nova Prova
              </Button>
            </div>
          </motion.div>

          {loadingExams ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto" />
            </div>
          ) : exams.length === 0 ? (
            <motion.div
              className="glass-card p-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Nenhuma prova gerada</h3>
              <p className="text-muted-foreground mb-6">
                Vá ao Banco de Questões, selecione questões e gere sua primeira prova.
              </p>
              <Button onClick={() => navigate("/provas/banco-questoes")}>
                Ir para o Banco de Questões
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {exams.map((exam, index) => (
                <motion.div
                  key={exam.id}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * Math.min(index, 10) }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{exam.title}</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {disciplineLabels[exam.discipline]}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {exam.question_ids.length} questões
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Criada em {new Date(exam.created_at).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button variant="ghost" size="sm" onClick={() => handleView(exam)}>
                        <Printer className="w-4 h-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(exam)}>
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Excluir prova?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta ação não pode ser desfeita. A prova "{exam.title}" será permanentemente removida.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(exam.id)}>
                              Excluir
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ListaProvas;
