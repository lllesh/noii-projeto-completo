import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 pt-2 sm:mb-8 sm:pt-4">
      <h1 className="font-display text-2xl uppercase tracking-[0.1em] sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-2 max-w-xl text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-5 sm:p-6", className)}>{children}</div>
  );
}

const statusStyles: Record<string, string> = {
  realizado: "bg-success/15 text-success",
  confirmado: "bg-success/15 text-success",
  agendado: "bg-muted text-muted-foreground",
  pendente: "bg-warning/15 text-warning",
  futuro: "bg-muted text-muted-foreground",
};

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase();
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide",
        statusStyles[key] ?? "bg-muted text-muted-foreground"
      )}
    >
      {status}
    </span>
  );
}

export function Pill({ children, active, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-xs transition-colors",
        active
          ? "border-transparent bg-foreground text-background"
          : "border-border text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
