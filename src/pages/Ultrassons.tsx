import { motion } from "framer-motion";
import { Image, ArrowRight } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { ultrassons } from "../lib/data";

export default function Ultrassons() {
  return (
    <div>
      <PageHeader title="ultrassons" subtitle="monitoramento folicular e endometrial ao longo do ciclo." />
      <div className="space-y-4">
        {ultrassons.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium">{u.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {u.date} · {u.cycle}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-xs uppercase tracking-wide text-foreground underline underline-offset-4">
                  <Image size={12} /> arquivo
                </button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">endométrio</p>
                  <p className="text-sm">{u.endometrio}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{u.endometrioTipo}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">ovário direito</p>
                  <p className="text-sm">{u.ovarioDireito}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">ovário esquerdo</p>
                  <p className="text-sm">{u.ovarioEsquerdo}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">maior folículo</p>
                  <p className="text-sm">{u.maiorFoliculo}</p>
                </div>
              </div>
              <p className="mt-4 text-sm">{u.nota}</p>
              <p className="mt-2 flex items-center gap-1 text-xs uppercase tracking-wide text-success">
                <ArrowRight size={12} /> próximo passo: {u.proximoPasso}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
