import { NavLink } from "react-router-dom";
import {
  Home,
  Route,
  Calendar,
  TestTube,
  Waypoints,
  Pill,
  BookOpen,
  FolderOpen,
  CheckSquare,
  Bot,
  Stethoscope,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../lib/utils";

const items = [
  { label: "início", href: "/", icon: Home },
  { label: "minha jornada", href: "/jornada", icon: Route },
  { label: "agenda", href: "/agenda", icon: Calendar },
  { label: "exames", href: "/exames", icon: TestTube },
  { label: "ultrassons", href: "/ultrassons", icon: Waypoints },
  { label: "medicações", href: "/medicacoes", icon: Pill },
  { label: "plano de voo", href: "/plano-de-voo", icon: BookOpen },
  { label: "arquivos", href: "/arquivos", icon: FolderOpen },
  { label: "tarefas", href: "/tarefas", icon: CheckSquare },
  { label: "fiorela", href: "/fiorela", icon: Bot },
  { label: "médico", href: "/medico", icon: Stethoscope },
  { label: "configurações", href: "/configuracoes", icon: Settings },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
          n
        </div>
        <span className="font-display text-lg tracking-[0.15em]">NOII</span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[11px] uppercase tracking-[0.12em] transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon size={15} strokeWidth={1.5} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-sidebar-border px-5 py-4">
        <div className="mb-2 text-[10px] tracking-[0.3em] text-muted-foreground">FERTIFY</div>
        <NavLink
          to="/admin"
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-[11px] uppercase tracking-[0.12em] transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
            )
          }
        >
          <ShieldCheck size={15} strokeWidth={1.5} />
          painel admin
        </NavLink>
      </div>
    </div>
  );
}
