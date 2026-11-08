import { Calendar, MessageCircle, Phone } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { medico } from "../lib/data";

export default function Medico() {
  return (
    <div>
      <PageHeader title="médico" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-medium text-secondary-foreground">
              M
            </div>
            <div>
              <h2 className="text-sm font-medium">{medico.nome}</h2>
              <p className="text-xs text-muted-foreground">{medico.crm}</p>
              <p className="text-xs text-muted-foreground">{medico.especialidade}</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border py-3 text-[10px] uppercase tracking-wide text-muted-foreground">
              <Phone size={15} strokeWidth={1.5} />
              contato em breve
            </button>
            <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border py-3 text-[10px] uppercase tracking-wide text-muted-foreground">
              <MessageCircle size={15} strokeWidth={1.5} />
              contato em breve
            </button>
            <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border py-3 text-[10px] uppercase tracking-wide text-foreground">
              <Calendar size={15} strokeWidth={1.5} />
              {medico.proximaConsulta}
            </button>
          </div>
        </Card>

        <Card>
          <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">orientações recentes</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {medico.orientacoes.map((o) => (
              <li key={o}>• {o}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
