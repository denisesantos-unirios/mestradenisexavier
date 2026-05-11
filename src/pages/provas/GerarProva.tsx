import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { FileText, Printer, ArrowLeft, CheckCircle2, Save } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Question = Database["public"]["Tables"]["questions"]["Row"];

const disciplineLabels: Record<string, string> = {
  "engenharia-software-1": "Engenharia de Software I",
  "engenharia-software-2": "Engenharia de Software II",
  "engenharia-software-ead": "Engenharia de Software EAD",
  "projetos-interface": "Projetos de Interface",
};

const GerarProva = () => {
  const { user, isProfessor, loading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [examTitle, setExamTitle] = useState("Prova - 1ª Etapa");
  const [showAnswerKey, setShowAnswerKey] = useState(true);
  const [saving, setSaving] = useState(false);
  const [examId, setExamId] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && (!user || !isProfessor)) {
      navigate("/provas/login");
    }
  }, [user, isProfessor, loading, navigate]);

  useEffect(() => {
    const ids = searchParams.get("ids");
    const titleParam = searchParams.get("title");
    const examIdParam = searchParams.get("examId");
    if (titleParam) setExamTitle(decodeURIComponent(titleParam));
    if (examIdParam) setExamId(examIdParam);
    if (ids && isProfessor) {
      fetchQuestions(ids.split(","));
    }
  }, [searchParams, isProfessor]);

  const fetchQuestions = async (ids: string[]) => {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .in("id", ids);

    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      setQuestions(data || []);
    }
  };

  const handleSave = async () => {
    if (!user || questions.length === 0) return;
    setSaving(true);

    const disciplines = [...new Set(questions.map((q) => q.discipline))];
    const discipline = disciplines[0];
    const questionIds = questions.map((q) => q.id);

    if (examId) {
      const { error } = await supabase
        .from("exams")
        .update({ title: examTitle, question_ids: questionIds, discipline })
        .eq("id", examId);

      if (error) {
        toast({ title: "Erro ao atualizar", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Prova atualizada com sucesso!" });
      }
    } else {
      const { data, error } = await supabase
        .from("exams")
        .insert({ title: examTitle, question_ids: questionIds, discipline, created_by: user.id })
        .select()
        .single();

      if (error) {
        toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
      } else {
        setExamId(data.id);
        toast({ title: "Prova salva com sucesso!" });
      }
    }
    setSaving(false);
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading || !isProfessor) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  const disciplines = [...new Set(questions.map((q) => q.discipline))];

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Controls - hidden on print */}
          <div className="print:hidden mb-8">
            <motion.div
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button variant="ghost" onClick={() => navigate("/provas/banco-questoes")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Banco
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                >
                  {showAnswerKey ? "Ocultar Gabarito" : "Mostrar Gabarito"}
                </Button>
                <Button variant="secondary" onClick={handleSave} disabled={saving || questions.length === 0}>
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? "Salvando..." : examId ? "Atualizar" : "Salvar"}
                </Button>
                <Button onClick={handlePrint}>
                  <Printer className="w-4 h-4 mr-2" />
                  Imprimir
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="text-sm font-medium text-foreground mb-2 block">Título da Prova</label>
              <Input
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                className="text-lg font-semibold"
              />
            </motion.div>
          </div>

          {/* Exam Content - printable */}
          <div ref={printRef} className="print:bg-white print:text-black">
            {/* Exam Header */}
            <div className="glass-card p-8 mb-6 print:border print:border-gray-300 print:bg-white print:rounded-none">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-foreground print:text-black mb-2">{examTitle}</h1>
                <div className="flex flex-wrap justify-center gap-2">
                  {disciplines.map((d) => (
                    <span key={d} className="text-sm text-muted-foreground print:text-gray-600">
                      {disciplineLabels[d]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border print:border-gray-300 pt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground print:text-gray-600">Nome: _______________________________________________</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground print:text-gray-600">Data: ____/____/________</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground print:text-gray-600 mt-4">
                Total de questões: {questions.length} | 
                Múltipla escolha: {questions.filter(q => q.question_type === "multiple_choice").length} | 
                Discursivas: {questions.filter(q => q.question_type === "discursive").length}
              </p>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="glass-card p-6 print:border print:border-gray-300 print:bg-white print:rounded-none print:break-inside-avoid"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary print:text-black text-lg min-w-[40px]">
                      {idx + 1}.
                    </span>
                    <div className="flex-1">
                      <div className="print:hidden flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {q.topic}
                        </span>
                      </div>

                      {q.context_text && (
                        <div className="bg-secondary/50 print:bg-gray-100 rounded-lg p-4 mb-3 text-sm text-muted-foreground print:text-gray-700 italic border-l-4 border-primary/30 print:border-gray-400">
                          {q.context_text}
                        </div>
                      )}

                      <p className="text-foreground print:text-black font-medium mb-4">{q.statement}</p>

                      {q.image_url && (
                        <div className="mb-4">
                          <img src={q.image_url} alt="Imagem da questão" className="max-h-48 rounded-lg border border-border print:border-gray-300" />
                        </div>
                      )}

                      {q.question_type === "multiple_choice" && (
                        <div className="space-y-2">
                          {[
                            { label: "A", value: q.option_a },
                            { label: "B", value: q.option_b },
                            { label: "C", value: q.option_c },
                            { label: "D", value: q.option_d },
                            { label: "E", value: q.option_e },
                          ]
                            .filter((opt) => opt.value)
                            .map((opt) => (
                              <div key={opt.label} className="flex items-start gap-2 text-sm">
                                <span className="font-bold text-muted-foreground print:text-gray-600 min-w-[24px]">
                                  {opt.label})
                                </span>
                                <span className="text-foreground print:text-black">{opt.value}</span>
                              </div>
                            ))}
                        </div>
                      )}

                      {q.question_type === "discursive" && (
                        <div className="mt-2 print:mt-4">
                          <div className="border-b border-dashed border-border print:border-gray-300 pb-6 mb-2" />
                          <div className="border-b border-dashed border-border print:border-gray-300 pb-6 mb-2" />
                          <div className="border-b border-dashed border-border print:border-gray-300 pb-6 mb-2" />
                          <div className="border-b border-dashed border-border print:border-gray-300 pb-6" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Answer Key */}
            {showAnswerKey && (
              <div className="glass-card p-6 mt-8 print:border print:border-gray-300 print:bg-white print:rounded-none print:break-before-page">
                <h2 className="text-xl font-bold text-foreground print:text-black mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary print:text-black" />
                  Gabarito
                </h2>
                <div className="space-y-4">
                  {questions.map((q, idx) => (
                    <div key={q.id} className="border-b border-border/50 print:border-gray-200 pb-3">
                      <p className="font-semibold text-foreground print:text-black">
                        Questão {idx + 1}
                        {q.question_type === "multiple_choice" && (
                          <span className="text-primary print:text-black ml-2">
                            — Alternativa {q.correct_answer}
                          </span>
                        )}
                      </p>
                      {q.answer_explanation && (
                        <p className="text-sm text-muted-foreground print:text-gray-600 mt-1">
                          {q.answer_explanation}
                        </p>
                      )}
                      {q.question_type === "discursive" && q.discursive_answer && (
                        <p className="text-sm text-muted-foreground print:text-gray-600 mt-1 whitespace-pre-wrap">
                          {q.discursive_answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          nav, .print\\:hidden, footer { display: none !important; }
          main { background: white !important; }
          .glass-card { background: white !important; border: 1px solid #e5e7eb !important; box-shadow: none !important; backdrop-filter: none !important; }
        }
      `}</style>
    </main>
  );
};

export default GerarProva;
