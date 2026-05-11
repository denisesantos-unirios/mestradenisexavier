import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Filter, FileText, LogOut, Plus, Trash2, CheckCircle2, XCircle, Image as ImageIcon, ClipboardList } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";
import QuestionFormDialog from "@/components/provas/QuestionFormDialog";

type Question = Database["public"]["Tables"]["questions"]["Row"];
type Discipline = Database["public"]["Enums"]["discipline"];
type QuestionType = Database["public"]["Enums"]["question_type"];
type Difficulty = Database["public"]["Enums"]["difficulty_level"];

const disciplineLabels: Record<Discipline, string> = {
  "engenharia-software-1": "Engenharia de Software I",
  "engenharia-software-2": "Engenharia de Software II",
  "engenharia-software-ead": "Engenharia de Software EAD",
  "projetos-interface": "Projetos de Interface",
};

const difficultyLabels: Record<Difficulty, string> = {
  easy: "Fácil",
  medium: "Médio",
  hard: "Difícil",
};

const difficultyColors: Record<Difficulty, string> = {
  easy: "bg-green-500/20 text-green-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  hard: "bg-red-500/20 text-red-400",
};

const BancoQuestoes = () => {
  const { user, isProfessor, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filterDiscipline, setFilterDiscipline] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [filterTopic, setFilterTopic] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set());
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isProfessor)) {
      navigate("/provas/login");
    }
  }, [user, isProfessor, loading, navigate]);

  useEffect(() => {
    if (isProfessor) fetchQuestions();
  }, [isProfessor]);

  const fetchQuestions = async () => {
    setLoadingQuestions(true);
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .order("discipline")
      .order("topic")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Erro ao carregar questões", description: error.message, variant: "destructive" });
    } else {
      setQuestions(data || []);
    }
    setLoadingQuestions(false);
  };

  const topics = Array.from(new Set(questions.map((q) => q.topic))).sort();

  const filtered = questions.filter((q) => {
    if (filterDiscipline !== "all" && q.discipline !== filterDiscipline) return false;
    if (filterType !== "all" && q.question_type !== filterType) return false;
    if (filterDifficulty !== "all" && q.difficulty !== filterDifficulty) return false;
    if (filterTopic !== "all" && q.topic !== filterTopic) return false;
    return true;
  });

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAnswer = (id: string) => {
    setShowAnswers((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleGenerateExam = () => {
    if (selectedIds.size === 0) {
      toast({ title: "Selecione questões", description: "Escolha pelo menos uma questão para gerar a prova.", variant: "destructive" });
      return;
    }
    const ids = Array.from(selectedIds).join(",");
    navigate(`/provas/gerar-prova?ids=${ids}`);
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                Banco de Questões
              </h1>
              <p className="text-muted-foreground mt-1">{questions.length} questões cadastradas</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setShowCreateDialog(true)} variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nova Questão
              </Button>
              <Button onClick={handleGenerateExam} disabled={selectedIds.size === 0}>
                <FileText className="w-4 h-4 mr-2" />
                Gerar Prova ({selectedIds.size})
              </Button>
              <Button variant="outline" onClick={() => navigate("/provas/lista")}>
                <ClipboardList className="w-4 h-4 mr-2" />
                Provas Salvas
              </Button>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="glass-card p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Filtros</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select value={filterDiscipline} onValueChange={setFilterDiscipline}>
                <SelectTrigger>
                  <SelectValue placeholder="Disciplina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as disciplinas</SelectItem>
                  <SelectItem value="engenharia-software-1">Engenharia de Software I</SelectItem>
                  <SelectItem value="engenharia-software-2">Engenharia de Software II</SelectItem>
                  <SelectItem value="engenharia-software-ead">Engenharia de Software EAD</SelectItem>
                  <SelectItem value="projetos-interface">Projetos de Interface</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="multiple_choice">Múltipla Escolha</SelectItem>
                  <SelectItem value="discursive">Discursiva</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Dificuldade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as dificuldades</SelectItem>
                  <SelectItem value="easy">Fácil</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="hard">Difícil</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterTopic} onValueChange={setFilterTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Tópico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tópicos</SelectItem>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Questions */}
          {loadingQuestions ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto" />
            </div>
          ) : filtered.length === 0 ? (
            <motion.div
              className="glass-card p-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Nenhuma questão encontrada</h3>
              <p className="text-muted-foreground">Ajuste os filtros ou aguarde o carregamento do banco de questões.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filtered.map((q, index) => (
                <motion.div
                  key={q.id}
                  className={`glass-card p-6 transition-all ${selectedIds.has(q.id) ? "border-primary/50 bg-primary/5" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * Math.min(index, 10) }}
                >
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={selectedIds.has(q.id)}
                      onCheckedChange={() => toggleSelect(q.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {disciplineLabels[q.discipline]}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {q.question_type === "multiple_choice" ? "Múltipla Escolha" : "Discursiva"}
                        </Badge>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[q.difficulty]}`}>
                          {difficultyLabels[q.difficulty]}
                        </span>
                        <span className="text-xs text-muted-foreground">• {q.topic}</span>
                      </div>

                      {q.context_text && (
                        <div className="bg-secondary/50 rounded-lg p-4 mb-3 text-sm text-muted-foreground italic border-l-4 border-primary/30">
                          {q.context_text}
                        </div>
                      )}

                      <p className="text-foreground font-medium mb-3">{q.statement}</p>

                      {(q as any).image_url && (
                        <div className="mb-3">
                          <img src={(q as any).image_url} alt="Imagem da questão" className="max-h-48 rounded-lg border border-border" />
                        </div>
                      )}
                      {q.question_type === "multiple_choice" && (
                        <div className="space-y-2 mb-3">
                          {[
                            { label: "A", value: q.option_a },
                            { label: "B", value: q.option_b },
                            { label: "C", value: q.option_c },
                            { label: "D", value: q.option_d },
                            { label: "E", value: q.option_e },
                          ]
                            .filter((opt) => opt.value)
                            .map((opt) => (
                              <div
                                key={opt.label}
                                className={`flex items-start gap-2 p-2 rounded-lg text-sm ${
                                  showAnswers.has(q.id) && q.correct_answer === opt.label
                                    ? "bg-green-500/10 border border-green-500/30"
                                    : "bg-secondary/30"
                                }`}
                              >
                                <span className="font-bold text-muted-foreground min-w-[24px]">{opt.label})</span>
                                <span className="text-foreground">{opt.value}</span>
                                {showAnswers.has(q.id) && q.correct_answer === opt.label && (
                                  <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto shrink-0" />
                                )}
                              </div>
                            ))}
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleAnswer(q.id)}
                          className="text-xs"
                        >
                          {showAnswers.has(q.id) ? "Ocultar Resposta" : "Ver Resposta"}
                        </Button>
                      </div>

                      {showAnswers.has(q.id) && (
                        <motion.div
                          className="mt-3 p-4 rounded-lg bg-primary/5 border border-primary/20"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                        >
                          {q.question_type === "multiple_choice" ? (
                            <>
                              <p className="text-sm font-semibold text-primary mb-1">
                                Gabarito: Alternativa {q.correct_answer}
                              </p>
                              {q.answer_explanation && (
                                <p className="text-sm text-muted-foreground">{q.answer_explanation}</p>
                              )}
                            </>
                          ) : (
                            <>
                              <p className="text-sm font-semibold text-primary mb-1">Resposta esperada:</p>
                              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{q.discursive_answer}</p>
                            </>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      <QuestionFormDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onSuccess={fetchQuestions}
      />
    </main>
  );
};

export default BancoQuestoes;
