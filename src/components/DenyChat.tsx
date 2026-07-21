import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Trash2, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import denyImg from "@/assets/deny-mascot.png";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "deny-chat-messages-v1";
const WELCOME: Msg = {
  role: "assistant",
  content:
    "Olá! Sou a **Prof Deny** 👩‍🏫\n\nPergunte-me qualquer coisa sobre as aulas do portal: Engenharia de Software I, II, EAD, Projetos de Interface, Gestão de Projetos, Protocolos ou Provas. Como posso ajudar hoje?",
};

interface DenyChatProps {
  open: boolean;
  onClose: () => void;
}

const DenyChat = ({ open, onClose }: DenyChatProps) => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Load persisted
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as Msg[]) : [];
      setMessages(parsed.length ? parsed : [WELCOME]);
    } catch {
      setMessages([WELCOME]);
    }
  }, []);

  // Persist
  useEffect(() => {
    if (messages.length) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // Focus on open
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const newMessages: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/deny-chat`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        // envia todo o histórico (sem a saudação inicial se ainda vazia real)
        body: JSON.stringify({
          messages: newMessages
            .filter((m, i) => !(i === 0 && m === WELCOME))
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        toast.error(data?.error || "Erro ao conversar com a Deny");
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `⚠️ ${data?.error || "Erro"}` },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text || "…" }]);
      }
    } catch (e: any) {
      toast.error("Falha de rede");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ Falha de rede: ${e?.message ?? e}` },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const clearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([WELCOME]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-6 right-6 z-[60] w-[min(420px,calc(100vw-3rem))] h-[min(600px,calc(100vh-3rem))] bg-white border-2 border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden no-print"
          data-no-print
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-3 border-b bg-gradient-to-r from-primary/10 to-secondary/10">
            <img src={denyImg} alt="Deny" className="w-10 h-10 rounded-full object-contain bg-white border" />
            <div className="flex-1">
              <div className="font-semibold text-sm">Prof Deny</div>
              <div className="text-[10px] text-muted-foreground">Tutora do portal • pergunte sobre as aulas</div>
            </div>
            <button
              onClick={clearChat}
              className="p-1.5 rounded-md hover:bg-black/5 text-muted-foreground"
              title="Limpar conversa"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-black/5"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 bg-primary text-primary-foreground text-sm whitespace-pre-wrap"
                      : "max-w-[90%] text-sm text-foreground prose prose-sm prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-headings:my-2"
                  }
                >
                  {m.role === "assistant" ? (
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Deny está pensando…
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t p-2 flex items-end gap-2 bg-white">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Pergunte sobre uma aula, tema ou atividade…"
              rows={2}
              className="flex-1 resize-none rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DenyChat;
