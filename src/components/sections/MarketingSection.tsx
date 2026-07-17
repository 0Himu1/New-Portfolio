import type { PortfolioData } from "@/types/portfolio";

export function MarketingSection({ data }: { data: PortfolioData }) {
  return (
    <div className="grid gap-4">
      {data.digital_marketing_work.map((item) => (
        <article key={item.client} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-black text-white">{item.client}</h3>
            <span className="rounded-full border border-amber-glow/30 bg-amber-glow/10 px-3 py-1 text-xs font-bold text-amber-glow">{item.industry}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.scope}</p>
          {item.results ? <p className="mt-4 rounded-lg border border-cyan-glow/25 bg-cyan-glow/10 p-3 text-sm font-bold text-cyan-glow">{item.results}</p> : null}
          {item.top_creative ? <p className="mt-2 text-xs text-slate-400">Top creative: {item.top_creative}</p> : null}
        </article>
      ))}
    </div>
  );
}
