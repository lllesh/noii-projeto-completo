import { motion } from "framer-motion";
import { Check, Clock, ArrowRight, Circle } from "lucide-react";
import { PageHeader } from "../components/ui";
import { jornadaEvents } from "../lib/data";
import { cn } from "../lib/utils";

const iconByStatus = {
  done: Check,
  current: Clock,
  next: ArrowRight,
  pending: Circle,
};

const styleByStatus: Record<string, string> = {
  done: "bg-success text-success-foreground",
  current: "bg-secondary text-secondary-foreground border border-border",
  next: "bg-warning text-warning-foreground",
  pending: "bg-muted text-muted-foreground",
};

export default function Jornada() {
  return (
    <div>
      <PageHeader title="minha jornada" subtitle="linha do tempo do seu tratamento de fertilidade." />
      <div className="space-y-0">
        {jornadaEvents.map((event, i) => {
          const Icon = iconByStatus[event.status as keyof typeof iconByStatus];
          const isLast = i === jornadaEvents.length - 1;
          return (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    styleByStatus[event.status]
                  )}
                >
                  <Icon size={13} strokeWidth={2} />
                </div>
                {!isLast && <div className="w-px flex-1 bg-border" />}
              </div>
              <div className="pb-8">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-sm font-medium">{event.title}</h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{event.date}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
