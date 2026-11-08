import { Bell, MessageCircle, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../lib/theme";

export function Header({ onMenu }: { onMenu?: () => void }) {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-end gap-2 bg-background/80 px-4 py-4 backdrop-blur sm:px-8">
      <button
        onClick={onMenu}
        className="mr-auto flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
        aria-label="abrir menu"
      >
        <Menu size={18} strokeWidth={1.5} />
      </button>

      <button
        className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
        aria-label="notificações"
      >
        <Bell size={17} strokeWidth={1.5} />
        <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-success text-[9px] font-medium text-success-foreground">
          3
        </span>
      </button>

      <button
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
        aria-label="mensagens"
      >
        <MessageCircle size={17} strokeWidth={1.5} />
      </button>

      <button
        onClick={toggle}
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
        aria-label="alternar tema"
      >
        {theme === "dark" ? <Sun size={17} strokeWidth={1.5} /> : <Moon size={17} strokeWidth={1.5} />}
      </button>

      <button
        className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
        aria-label="perfil"
      >
        P
      </button>
    </header>
  );
}
