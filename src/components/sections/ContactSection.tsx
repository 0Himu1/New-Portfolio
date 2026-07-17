import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";
import { InfoCard } from "@/components/sections/SectionBits";

export function ContactSection({ data }: { data: PortfolioData }) {
  const { contact } = data.personal;

  return (
    <div className="grid gap-4">
      <InfoCard title="Let's build the next system">{data.personal.tagline}</InfoCard>
      <a className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/45 p-4 text-slate-200 transition hover:border-cyan-glow" href={`mailto:${contact.email}`}>
        <Mail className="text-cyan-glow" size={18} /> {contact.email}
      </a>
      <a className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/45 p-4 text-slate-200 transition hover:border-cyan-glow" href={`tel:${contact.phone}`}>
        <Phone className="text-cyan-glow" size={18} /> {contact.phone}
      </a>
      <p className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/45 p-4 text-slate-200">
        <MapPin className="text-amber-glow" size={18} /> {data.personal.location}
      </p>
      <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-glow px-5 py-4 font-black text-slate-950 shadow-neon transition hover:bg-white" href={`https://${contact.portfolio}`} target="_blank" rel="noreferrer">
        Portfolio <ExternalLink size={18} />
      </a>
    </div>
  );
}
