import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Clock } from "lucide-react";
import { PageHeader, Card, StatusBadge, Pill } from "../components/ui";
import { exames, examCategories } from "../lib/data";

export default function Exames() {
  const [filter, setFilter] = useState("todos");
  const list = filter === "todos" ? exames : exames.filter((e) => e.category === filter);

  return (
    <div>
      <PageHeader title="exames" subtitle="acompanhe todos os seus exames solicitados, agendados e realizados." />
      <div className="mb-6 flex flex-wrap gap-2">
        {examCategories.map((cat) => (
          <Pill key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
            {cat}
          </Pill>
        ))}
      </div>
      <div className="space-y-3">
        {list.map((exam, i) => (
          <motion.div
            key={exam.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
          >
            <Card className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-medium">{exam.title}</h3>
                  <StatusBadge status={exam.status} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{exam.meta}</p>
                {exam.note && <p className="mt-1 text-sm">{exam.note}</p>}
                {exam.extra && (
                  <p className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    <Clock size={11} /> {exam.extra}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                {exam.date && <span className="text-xs text-muted-foreground">{exam.date}</span>}
                {exam.hasResult && (
                  <button className="flex items-center gap-1 text-xs uppercase tracking-wide text-foreground underline underline-offset-4">
                    <FileText size={12} /> resultado
                  </button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
