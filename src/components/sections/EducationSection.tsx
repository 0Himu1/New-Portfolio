import type { PortfolioData } from "@/types/portfolio";

export function EducationSection({ data }: { data: PortfolioData }) {
  return (
    <div className="space-y-4">
      {data.education.map((item) => (
        <article key={item.credential} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
          <p className="text-xs font-bold text-cyan-glow">{item.date}</p>
          <h3 className="mt-2 font-black text-white">{item.credential}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.institution} - {item.location}</p>
        </article>
      ))}
    </div>
  );
}
