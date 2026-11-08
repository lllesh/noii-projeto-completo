import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { tarefasPendentes, tarefasConcluidas } from "../lib/data";

interface Task {
  title: string;
  date: string;
  tag: string;
  done: boolean;
}

export default function Tarefas() {
  const [tasks, setTasks] = useState<Task[]>([
    ...tarefasPendentes.map((t) => ({ ...t, done: false })),
    ...tarefasConcluidas.map((t) => ({ ...t, done: true })),
  ]);

  const toggle = (title: string) =>
    setTasks((prev) => prev.map((t) => (t.title === title ? { ...t, done: !t.done } : t)));

  const pending = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <div>
      <PageHeader title="tarefas" subtitle="suas tarefas pendentes e concluídas." />

      <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        pendentes ({pending.length})
      </h2>
      <div className="mb-8 space-y-2">
        <AnimatePresence>
          {pending.map((task) => (
            <motion.div
              key={task.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 12 }}
            >
              <Card className="flex items-center gap-3 py-3">
                <button
                  onClick={() => toggle(task.title)}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border"
                  aria-label="marcar concluída"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{task.title}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {task.date} · {task.tag}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        concluídas ({done.length})
      </h2>
      <div className="space-y-2">
        <AnimatePresence>
          {done.map((task) => (
            <motion.div
              key={task.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Card className="flex items-center gap-3 py-3 opacity-60">
                <button
                  onClick={() => toggle(task.title)}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-success text-success-foreground"
                  aria-label="marcar pendente"
                >
                  <Check size={12} strokeWidth={2.5} />
                </button>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm line-through">{task.title}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {task.date} · {task.tag}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
