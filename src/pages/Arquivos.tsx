import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { PageHeader, Card } from "../components/ui";
import { arquivosCategorias } from "../lib/data";

export default function Arquivos() {
  return (
    <div>
      <PageHeader title="arquivos" subtitle="seus arquivos organizados por categoria. todos conectados ao seu Google Drive." />
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs uppercase tracking-wide text-secondary-foreground"
      >
        <ExternalLink size={13} /> abrir Google Drive
      </a>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {arquivosCategorias.map((cat, i) => (
          <motion.div
            key={cat.nome}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
          >
            <Card className="flex flex-col items-start gap-3">
              <Folder size={18} strokeWidth={1.5} className="text-muted-foreground" />
              <div>
                <p className="text-sm">{cat.nome}</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {cat.total} arquivo{cat.total === 1 ? "" : "s"}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
