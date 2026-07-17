import type { PortfolioData } from "@/types/portfolio";
import { InfoCard, TagCloud } from "@/components/sections/SectionBits";

export function IntroSection({ data }: { data: PortfolioData }) {
  return (
    <div className="grid gap-4">
      <InfoCard title="Summary">{data.personal.summary}</InfoCard>
      <InfoCard title="Design Philosophy">
        {data.design_philosophy.aesthetic}. Inspired by {data.design_philosophy.references.join(" and ")} with the principle: {data.design_philosophy.principle}.
      </InfoCard>
      <TagCloud items={data.personal_interests} />
    </div>
  );
}
