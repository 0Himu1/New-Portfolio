import { CheckCircle2, RadioTower } from "lucide-react";
import type { RoomConfig } from "@/lib/room-config";

type ProgressPanelProps = {
  visited: number;
  total: number;
  activeRoom: RoomConfig;
  complete: boolean;
};

export function ProgressPanel({ visited, total, activeRoom, complete }: ProgressPanelProps) {
  const percent = Math.round((visited / total) * 100);

  return (
    <section className="glass-panel rounded-xl p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow">
          {complete ? <CheckCircle2 size={19} /> : <RadioTower size={19} />}
        </span>
        <div>
          <h2 className="text-sm font-black text-white">Explore All</h2>
          <p className="text-xs text-slate-400">{visited} / {total} rooms visited</p>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-amber-glow transition-all" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-4 text-sm leading-5 text-slate-300">
        Active: <span className="font-semibold text-white">{activeRoom.title}</span>
      </p>
      {complete ? <p className="mt-3 rounded-lg border border-cyan-glow/25 bg-cyan-glow/10 p-3 text-sm font-semibold text-cyan-glow">Achievement unlocked: full portfolio explored.</p> : null}
    </section>
  );
}
