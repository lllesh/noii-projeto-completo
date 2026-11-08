import { motion } from "framer-motion";
import { FileText, AlertCircle } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { planoDeVoo } from "../lib/data";

export default function PlanoDeVoo() {
  return (
    <div>
      <PageHeader title="plano de voo" subtitle="visão geral do seu plano de tratamento atual." />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card>
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">ciclo atual</h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">ciclo</dt>
                <dd>{planoDeVoo.ciclo}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">status</dt>
                <dd className="capitalize text-success">{planoDeVoo.status}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">próximo passo</dt>
                <dd>{planoDeVoo.proximoPasso}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">médica responsável</dt>
                <dd>{planoDeVoo.medica}</dd>
              </div>
            </dl>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <Card>
            <h2 className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">protocolo</h2>
            <p className="mb-3 text-sm">{planoDeVoo.protocolo}</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {planoDeVoo.medicamentos.map((m) => (
                <li key={m}>· {m}</li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">documentos do plano</h2>
            <div className="space-y-2">
              {planoDeVoo.documentos.map((d) => (
                <button
                  key={d}
                  className="flex w-full items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-sm transition-colors hover:border-foreground/30"
                >
                  <FileText size={14} strokeWidth={1.5} /> {d}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <Card>
            <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">orientações da médica</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {planoDeVoo.orientacoes.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-xs uppercase tracking-wide text-warning">
        <AlertCircle size={14} /> {planoDeVoo.aviso}
      </div>
    </div>
  );
}
