import { motion } from "framer-motion";
import type { RoomConfig, RoomId } from "@/lib/room-config";

type RoomZoneProps = {
  room: RoomConfig;
  active: boolean;
  hovered: boolean;
  visited: boolean;
  onHover: (roomId: RoomId | null) => void;
  onSelect: (roomId: RoomId) => void;
};

const accentClass = {
  cyan: "border-cyan-glow/50 from-cyan-glow/22 to-slate-950/70 text-cyan-glow",
  amber: "border-amber-glow/50 from-amber-glow/22 to-slate-950/70 text-amber-glow",
  teal: "border-teal-400/50 from-teal-400/22 to-slate-950/70 text-teal-300"
};

export function RoomZone({ room, active, hovered, visited, onHover, onSelect }: RoomZoneProps) {
  const Icon = room.icon;
  return (
    <motion.button
      type="button"
      aria-label={`Open ${room.title}`}
      className={`iso-room absolute h-[25%] w-[24%] rounded-xl text-left transition ${active ? "z-20" : "z-10"}`}
      style={{ left: `${room.position.x}%`, top: `${room.position.y}%` }}
      onMouseEnter={() => onHover(room.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(room.id)}
      onBlur={() => onHover(null)}
      onClick={() => onSelect(room.id)}
      whileHover={{ y: -8, scale: 1.03 }}
      animate={{ y: active ? -10 : 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
    >
      <span className={`room-face absolute inset-0 overflow-hidden rounded-xl border bg-gradient-to-br p-4 shadow-2xl ${accentClass[room.accent]} ${active || hovered ? "shadow-neon" : ""}`}>
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08),transparent_38%)]" />
        <span className="relative flex items-center justify-between">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-current/30 bg-slate-950/45">
            <Icon size={18} />
          </span>
          <span className="rounded-full border border-current/30 bg-slate-950/50 px-2 py-1 text-[10px] font-black">0{room.number}</span>
        </span>
        <span className="relative mt-8 block text-lg font-black tracking-normal text-white">{room.label}</span>
        <span className="relative mt-1 block text-[11px] font-medium leading-4 text-slate-300">{room.shortDescription}</span>
        {visited ? <span className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-cyan-glow shadow-neon" /> : null}
      </span>
    </motion.button>
  );
}
