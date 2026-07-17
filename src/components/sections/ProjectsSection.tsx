import type { PortfolioData } from "@/types/portfolio";
import { TagCloud } from "@/components/sections/SectionBits";

export function ProjectsSection({ data }: { data: PortfolioData }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.projects.map((project) => (
        <article key={project.name} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
          <p className="text-xs font-bold text-amber-glow">{project.date ?? "Case study"}</p>
          <h3 className="mt-2 font-black text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
          <TagCloud items={project.tags} compact />
        </article>
      ))}
    </div>
  );
}
