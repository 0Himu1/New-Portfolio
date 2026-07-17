import type { ReactNode } from "react";

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
      <h3 className="font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{children}</p>
    </article>
  );
}

export function TagCloud({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : "mt-3"}`}>
      {items.map((item) => (
        <span key={item} className="rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
          {item}
        </span>
      ))}
    </div>
  );
}
