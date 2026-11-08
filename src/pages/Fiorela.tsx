import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, AlertCircle } from "lucide-react";
import { PageHeader } from "../components/ui";
import { fiorelaSuggestions } from "../lib/data";

interface Message {
  from: "fiorela" | "user";
  text: string;
}

const replies: Record<string, string> = {
  "enviar exame": "certo! você pode anexar o exame na aba exames ou me mandar aqui que eu organizo pra você. (funcionalidade de demonstração)",
  "ver próximo passo": "seu próximo passo é: ultrassom de monitoramento — dia 8 do ciclo. quer que eu abra a agenda?",
  "abrir plano de voo": "abrindo o plano de voo do seu ciclo atual — protocolo antagonista com dose alta.",
  "ver minha agenda": "você tem 5 eventos nos próximos dias, incluindo consulta com a Dra. Demonstração em 12/05 às 14h.",
  "falar com a equipe": "encaminhando sua mensagem para a equipe clínica. alguém responde em breve por aqui.",
};

export default function Fiorela() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "fiorela",
      text: "olá! 👋 como posso ajudar hoje? posso te ajudar a enviar exames, verificar próximos passos ou abrir seu plano de voo.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      const reply =
        replies[text.toLowerCase()] ??
        "entendi! essa é uma resposta de demonstração da fiorela — em produção, ela consultaria seus dados reais.";
      setMessages((m) => [...m, { from: "fiorela", text: reply }]);
    }, 500);
  };

  return (
    <div className="flex h-[calc(100dvh-8rem)] max-h-[720px] flex-col">
      <PageHeader title="fiorela" subtitle="sua assistente de jornada" />

      <div className="flex-1 space-y-3 overflow-y-auto rounded-2xl border border-border bg-card p-4 sm:p-6">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex max-w-[85%] items-start gap-2 rounded-2xl px-4 py-2.5 text-sm ${
                msg.from === "user" ? "bg-foreground text-background" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {msg.from === "fiorela" && <Bot size={14} className="mt-0.5 shrink-0" strokeWidth={1.5} />}
              <span>{msg.text}</span>
            </div>
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {fiorelaSuggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="mt-3 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="escreva uma mensagem..."
          className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-foreground/30"
        />
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
          aria-label="enviar"
        >
          <Send size={15} />
        </button>
      </form>

      <p className="mt-4 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-muted-foreground">
        <AlertCircle size={11} /> fiorela não toma decisões médicas. todas as decisões clínicas devem ser aprovadas
        pela médica responsável.
      </p>
    </div>
  );
}
