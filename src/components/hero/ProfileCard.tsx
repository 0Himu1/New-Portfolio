import { ArrowDownToLine, ArrowRight, MapPin, Sparkles } from "lucide-react";
import type { Personal } from "@/types/portfolio";

type ProfileCardProps = {
  personal: Personal;
  onPrimary: () => void;
  onSecondary: () => void;
};

export function ProfileCard({ personal, onPrimary, onSecondary }: ProfileCardProps) {
  return (
    <aside className="glass-panel relative overflow-hidden rounded-xl p-5">
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-amber-glow/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1 text-xs font-semibold text-cyan-glow">
          <Sparkles size={14} />
          Available for full-stack work
        </div>

        <p className="text-sm text-slate-400">Hi, I&apos;m</p>
        <h1 className="mt-1 text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-4xl xl:text-5xl">{personal.name}</h1>
        <p className="mt-3 text-lg font-semibold text-cyan-glow">{personal.title}</p>
        <p className="mt-4 text-sm leading-6 text-slate-300">{personal.tagline}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-700/70 bg-slate-950/45 p-3">
            <p className="text-2xl font-black text-white">{personal.years_experience}+</p>
            <p className="text-xs text-slate-400">Years MERN experience</p>
          </div>
          <div className="rounded-lg border border-slate-700/70 bg-slate-950/45 p-3">
            <p className="text-2xl font-black text-white">7</p>
            <p className="text-xs text-slate-400">Interactive rooms</p>
          </div>
        </div>

        <p className="mt-5 flex items-start gap-2 text-sm text-slate-400">
          <MapPin className="mt-0.5 shrink-0 text-amber-glow" size={16} />
          {personal.location}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <button onClick={onPrimary} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-glow px-4 py-3 text-sm font-bold text-slate-950 shadow-neon transition hover:bg-white" type="button">
            View My Work
            <ArrowRight size={16} />
          </button>
          <button onClick={onSecondary} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-950/60 px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-amber-glow/60 hover:text-amber-glow" type="button">
            <ArrowDownToLine size={16} />
            Contact Me
          </button>
        </div>

        <div className="mt-6 rounded-lg border border-slate-700/70 bg-slate-950/35 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Positioning</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{personal.positioning_goal}</p>
        </div>
      </div>
    </aside>
  );
}
