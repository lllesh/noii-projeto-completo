import { useState } from "react";
import { motion } from "framer-motion";
import { Waypoints, TestTube, Stethoscope, Pill } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { agendaEvents, agendaMarkedDays } from "../lib/data";
import { cn } from "../lib/utils";

const weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
const daysInMonth = 31;
const firstWeekday = 5; // May 1 2026 is a Friday

const iconByKind: Record<string, typeof Waypoints> = {
  ultrassom: Waypoints,
  exame: TestTube,
  consulta: Stethoscope,
  medicacao: Pill,
};

export default function Agenda() {
  const [selected, setSelected] = useState(8);
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <PageHeader title="agenda" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <Card>
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">maio 2026</h2>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wide text-muted-foreground">
            {weekDays.map((d) => (
              <div key={d} className="py-2">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => (
              <button
                key={i}
                disabled={!day}
                onClick={() => day && setSelected(day)}
                className={cn(
                  "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg text-sm transition-colors",
                  day && "hover:bg-secondary",
                  day === selected ? "bg-foreground text-background" : "text-foreground"
                )}
              >
                {day}
                {day && agendaMarkedDays.includes(day) && (
                  <span
                    className={cn(
                      "h-1 w-1 rounded-full",
                      day === selected ? "bg-background" : "bg-success"
                    )}
                  />
                )}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">próximos eventos</h2>
          <div className="space-y-4">
            {agendaEvents.map((event, i) => {
              const Icon = iconByKind[event.kind] ?? Waypoints;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="flex gap-3 border-l-2 border-success/60 pl-3"
                >
                  <Icon size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm">{event.title}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{event.datetime}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
