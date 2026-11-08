import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { PageHeader, Card, StatusBadge, Pill } from "../components/ui";
import { medications, medicationCategories } from "../lib/data";

export default function Medicacoes() {
  const [filter, setFilter] = useState("todos");
  const list =
    filter === "todos"
      ? medications
      : medications.filter((m) => m.category.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      <PageHeader title="medicações" subtitle="controle de medicamentos do seu tratamento." />
      <div className="mb-6 flex flex-wrap gap-2">
        {medicationCategories.map((cat) => (
          <Pill key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
            {cat}
          </Pill>
        ))}
      </div>
      <div className="space-y-3">
        {list.map((med, i) => (
          <motion.div
            key={med.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
          >
            <Card>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-medium">{med.name}</h3>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  {med.category}
                </span>
                <StatusBadge status={med.status} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{med.dose}</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{med.period}</p>
              <p className="mt-1 text-sm">{med.note}</p>
              {med.missed && (
                <p className="mt-2 flex items-center gap-1 text-xs text-destructive">
                  <AlertTriangle size={12} /> {med.missed} dose(s) perdida(s)
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
