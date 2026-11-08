import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bentoCards } from "../lib/data";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 pt-4 sm:pt-6">
      {bentoCards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
        >
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.12),transparent_60%)]"
            />
            <h2 className="font-display text-xl lowercase tracking-tight">{card.title}</h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{card.description}</p>
            <Link
              to={card.href}
              className="mt-6 inline-flex items-center rounded-full bg-secondary px-5 py-2 text-xs uppercase tracking-wide text-secondary-foreground transition-transform group-hover:translate-x-1"
            >
              abrir
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
