import { useEffect, useState } from "react";
import { AlertTriangle, Check } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { perfilCasal } from "../lib/data";

function useLocalField(key: string, initial: string) {
  const [value, setValue] = useState<string>(() => {
    try {
      return localStorage.getItem(key) ?? initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  }, [key, value]);
  return [value, setValue] as const;
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground/30"
      />
    </div>
  );
}

export default function Configuracoes() {
  const [paciente, setPaciente] = useLocalField("noii-paciente", perfilCasal.paciente);
  const [parceiro, setParceiro] = useLocalField("noii-parceiro", perfilCasal.parceiro);
  const [cidade, setCidade] = useLocalField("noii-cidade", perfilCasal.cidade);
  const [email, setEmail] = useLocalField("noii-email", perfilCasal.email);
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <PageHeader title="configurações" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">perfil do casal</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSaved(true);
              setTimeout(() => setSaved(false), 1800);
            }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <Field label="paciente" value={paciente} onChange={setPaciente} />
              <Field label="parceiro" value={parceiro} onChange={setParceiro} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="cidade" value={cidade} onChange={setCidade} />
              <Field label="e-mail" value={email} onChange={setEmail} />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">médica responsável</p>
                <p className="mt-1">{perfilCasal.medica}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">objetivo</p>
                <p className="mt-1">{perfilCasal.objetivo}</p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs uppercase tracking-wide text-background"
            >
              {saved ? <Check size={13} /> : null}
              {saved ? "salvo" : "salvar alterações"}
            </button>
          </form>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">ciclo atual</h2>
            <p className="text-sm">{perfilCasal.cicloAtual}</p>
            <p className="mt-1 text-xs capitalize text-success">{perfilCasal.status}</p>
            <p className="mt-2 text-sm text-muted-foreground">{perfilCasal.proximoPasso}</p>
          </Card>

          <Card>
            <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">alertas ativos</h2>
            <ul className="space-y-2 text-sm">
              {perfilCasal.alertas.map((a) => (
                <li key={a} className="flex items-start gap-2 text-warning">
                  <AlertTriangle size={13} className="mt-0.5 shrink-0" />
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">histórico resumido</h2>
            <p className="text-sm text-muted-foreground">
              Conteúdo de demonstração. Substitua por dados reais via banco de dados autenticado.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
