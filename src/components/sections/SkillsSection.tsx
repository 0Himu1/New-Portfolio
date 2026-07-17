import type { PortfolioData } from "@/types/portfolio";
import { TagCloud } from "@/components/sections/SectionBits";

export function SkillsSection({ data }: { data: PortfolioData }) {
  const groups = [
    ["Frontend", data.skills.frontend],
    ["Backend", data.skills.backend],
    ["Tools & Platforms", data.skills.tools_platforms],
    ["Technical Principles", data.skills.technical_principles],
    ["Marketing Tools", data.skills.marketing_tools]
  ] as const;

  return (
    <div className="grid gap-4">
      {groups.map(([title, skills]) => (
        <article key={title} className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
          <h3 className="font-black text-white">{title}</h3>
          <TagCloud items={skills} compact />
        </article>
      ))}
    </div>
  );
}
