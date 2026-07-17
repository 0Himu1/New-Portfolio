import type { PortfolioData } from "@/types/portfolio";

export function ExperienceSection({ data }: { data: PortfolioData }) {
  return (
    <div className="space-y-4">
      {data.experience.map((item) => (
        <article key={`${item.company}-${item.role}-${item.start_date}`} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-black text-white">{item.role}</h3>
              <p className="text-sm text-cyan-glow">{item.company} - {item.location}</p>
            </div>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{item.start_date} - {item.end_date}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            {item.highlights.map((highlight) => <li key={highlight}>- {highlight}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
