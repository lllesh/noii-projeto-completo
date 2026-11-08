import { ShieldCheck } from "lucide-react";
import { PageHeader, Card } from "../components/ui";

export default function Admin() {
  return (
    <div>
      <PageHeader title="painel admin" subtitle="área restrita da equipe clínica." />
      <Card className="flex flex-col items-start gap-3">
        <ShieldCheck size={22} strokeWidth={1.5} className="text-success" />
        <p className="text-sm text-muted-foreground">
          este painel é de demonstração. em produção, aqui a equipe clínica gerencia pacientes, ciclos e conteúdo
          do aplicativo.
        </p>
      </Card>
    </div>
  );
}
