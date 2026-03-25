import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, X, Image as ImageIcon } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Discipline = Database["public"]["Enums"]["discipline"];
type QuestionType = Database["public"]["Enums"]["question_type"];
type Difficulty = Database["public"]["Enums"]["difficulty_level"];

interface QuestionFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const QuestionFormDialog = ({ open, onOpenChange, onSuccess }: QuestionFormDialogProps) => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Form state
  const [discipline, setDiscipline] = useState<Discipline>("engenharia-software-1");
  const [questionType, setQuestionType] = useState<QuestionType>("multiple_choice");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [topic, setTopic] = useState("");
  const [statement, setStatement] = useState("");
  const [contextText, setContextText] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [optionE, setOptionE] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answerExplanation, setAnswerExplanation] = useState("");
  const [discursiveAnswer, setDiscursiveAnswer] = useState("");

  const resetForm = () => {
    setDiscipline("engenharia-software-1");
    setQuestionType("multiple_choice");
    setDifficulty("medium");
    setTopic("");
    setStatement("");
    setContextText("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setOptionE("");
    setCorrectAnswer("");
    setAnswerExplanation("");
    setDiscursiveAnswer("");
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Imagem muito grande", description: "O tamanho máximo é 5MB.", variant: "destructive" });
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim() || !statement.trim()) {
      toast({ title: "Campos obrigatórios", description: "Preencha o tópico e o enunciado.", variant: "destructive" });
      return;
    }

    if (questionType === "multiple_choice" && (!optionA || !optionB || !correctAnswer)) {
      toast({ title: "Campos obrigatórios", description: "Preencha ao menos as alternativas A e B e selecione a resposta correta.", variant: "destructive" });
      return;
    }

    setSaving(true);

    try {
      let imageUrl: string | null = null;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("question-images")
          .upload(path, imageFile);

        if (uploadError) throw uploadError;

        imageUrl = `${SUPABASE_URL}/storage/v1/object/public/question-images/${path}`;
      }

      const { error } = await supabase.from("questions").insert({
        discipline,
        question_type: questionType,
        difficulty,
        topic: topic.trim(),
        statement: statement.trim(),
        context_text: contextText.trim() || null,
        option_a: questionType === "multiple_choice" ? optionA.trim() || null : null,
        option_b: questionType === "multiple_choice" ? optionB.trim() || null : null,
        option_c: questionType === "multiple_choice" ? optionC.trim() || null : null,
        option_d: questionType === "multiple_choice" ? optionD.trim() || null : null,
        option_e: questionType === "multiple_choice" ? optionE.trim() || null : null,
        correct_answer: questionType === "multiple_choice" ? correctAnswer || null : null,
        answer_explanation: questionType === "multiple_choice" ? answerExplanation.trim() || null : null,
        discursive_answer: questionType === "discursive" ? discursiveAnswer.trim() || null : null,
        image_url: imageUrl,
      } as any);

      if (error) throw error;

      toast({ title: "Questão cadastrada!", description: "A questão foi adicionada ao banco com sucesso." });
      resetForm();
      onSuccess();
      onOpenChange(false);
    } catch (err: any) {
      toast({ title: "Erro ao salvar", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Nova Questão</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          {/* Row 1: Discipline, Type, Difficulty */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Disciplina *</Label>
              <Select value={discipline} onValueChange={(v) => setDiscipline(v as Discipline)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="engenharia-software-1">Eng. Software I</SelectItem>
                  <SelectItem value="engenharia-software-2">Eng. Software II</SelectItem>
                  <SelectItem value="projetos-interface">Projetos de Interface</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tipo de Questão *</Label>
              <Select value={questionType} onValueChange={(v) => setQuestionType(v as QuestionType)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple_choice">Múltipla Escolha</SelectItem>
                  <SelectItem value="discursive">Discursiva</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Dificuldade *</Label>
              <Select value={difficulty} onValueChange={(v) => setDifficulty(v as Difficulty)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Fácil</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="hard">Difícil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <Label>Tópico *</Label>
            <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Ex: Engenharia de Requisitos" />
          </div>

          {/* Context (optional) */}
          <div className="space-y-2">
            <Label>Texto de Contexto (opcional)</Label>
            <Textarea value={contextText} onChange={(e) => setContextText(e.target.value)} placeholder="Texto base, trecho de artigo ou cenário..." rows={3} />
          </div>

          {/* Statement */}
          <div className="space-y-2">
            <Label>Enunciado *</Label>
            <Textarea value={statement} onChange={(e) => setStatement(e.target.value)} placeholder="Escreva o enunciado da questão..." rows={4} />
          </div>

          {/* Image upload */}
          <div className="space-y-2">
            <Label>Imagem (opcional)</Label>
            {imagePreview ? (
              <div className="relative inline-block">
                <img src={imagePreview} alt="Preview" className="max-h-40 rounded-lg border border-border" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:opacity-80"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <label className="flex items-center gap-3 p-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Clique para adicionar uma imagem</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG ou GIF (máx. 5MB)</p>
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            )}
          </div>

          {/* Multiple choice options */}
          <AnimatePresence mode="wait">
            {questionType === "multiple_choice" && (
              <motion.div
                key="mc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                <Label className="text-base font-semibold">Alternativas</Label>
                {[
                  { label: "A", value: optionA, setter: setOptionA, required: true },
                  { label: "B", value: optionB, setter: setOptionB, required: true },
                  { label: "C", value: optionC, setter: setOptionC },
                  { label: "D", value: optionD, setter: setOptionD },
                  { label: "E", value: optionE, setter: setOptionE },
                ].map((opt) => (
                  <div key={opt.label} className="flex items-center gap-2">
                    <span className="font-bold text-muted-foreground w-6">{opt.label})</span>
                    <Input
                      value={opt.value}
                      onChange={(e) => opt.setter(e.target.value)}
                      placeholder={`Alternativa ${opt.label}${opt.required ? " *" : " (opcional)"}`}
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <Label>Resposta Correta *</Label>
                  <Select value={correctAnswer} onValueChange={setCorrectAnswer}>
                    <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      {["A", "B", "C", "D", "E"].map((l) => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Explicação da Resposta (opcional)</Label>
                  <Textarea value={answerExplanation} onChange={(e) => setAnswerExplanation(e.target.value)} placeholder="Justificativa do gabarito..." rows={3} />
                </div>
              </motion.div>
            )}

            {questionType === "discursive" && (
              <motion.div
                key="disc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label>Resposta Esperada</Label>
                <Textarea value={discursiveAnswer} onChange={(e) => setDiscursiveAnswer(e.target.value)} placeholder="Descreva a resposta esperada..." rows={5} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button type="submit" disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
              {saving ? "Salvando..." : "Cadastrar Questão"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionFormDialog;
