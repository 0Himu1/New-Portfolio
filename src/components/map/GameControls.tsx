import { CornerDownLeft, MousePointer2, Move, SquareDashedMousePointer } from "lucide-react";

const controls = [
  { icon: Move, label: "WASD / Arrows", value: "Move" },
  { icon: MousePointer2, label: "Click", value: "Interact" },
  { icon: SquareDashedMousePointer, label: "E", value: "View Details" },
  { icon: CornerDownLeft, label: "Enter", value: "Open Room" }
];

export function GameControls() {
  return (
    <section className="glass-panel rounded-xl p-4">
      <h2 className="text-sm font-black text-white">Controls</h2>
      <div className="mt-4 grid gap-2">
        {controls.map((control) => {
          const Icon = control.icon;
          return (
            <div key={control.label} className="flex items-center justify-between gap-3 rounded-lg border border-slate-700/70 bg-slate-950/45 px-3 py-2">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Icon size={15} className="text-cyan-glow" />
                {control.value}
              </span>
              <kbd className="rounded border border-slate-600 bg-slate-900 px-2 py-1 text-[11px] font-bold text-slate-300">{control.label}</kbd>
            </div>
          );
        })}
      </div>
    </section>
  );
}
