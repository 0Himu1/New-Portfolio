import type { RoomConfig, RoomId } from "@/lib/room-config";
import { Avatar } from "@/components/map/Avatar";
import { RoomZone } from "@/components/map/RoomZone";

type PortfolioMapProps = {
  rooms: RoomConfig[];
  activeRoom: RoomConfig;
  hoveredRoomId: RoomId | null;
  visited: Set<RoomId>;
  onHover: (roomId: RoomId | null) => void;
  onSelect: (roomId: RoomId) => void;
};

export function PortfolioMap({ rooms, activeRoom, hoveredRoomId, visited, onHover, onSelect }: PortfolioMapProps) {
  const previewRoom = rooms.find((room) => room.id === hoveredRoomId) ?? activeRoom;

  return (
    <section className="glass-panel relative min-h-[640px] overflow-hidden rounded-xl p-4 lg:min-h-0" aria-label="Interactive portfolio map">
      <div className="absolute left-5 top-5 z-20 rounded-lg border border-cyan-glow/25 bg-slate-950/70 px-4 py-3 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-glow">Portfolio Map</p>
        <p className="mt-1 text-sm text-slate-300">Click a room or use WASD / arrows.</p>
      </div>

      <div className="absolute right-5 top-5 z-20 max-w-[250px] rounded-lg border border-slate-700/70 bg-slate-950/75 p-4 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Room Preview</p>
        <h2 className="mt-2 text-lg font-black text-white">{previewRoom.title}</h2>
        <p className="mt-2 text-sm leading-5 text-slate-300">{previewRoom.shortDescription}</p>
      </div>

      <div className="absolute inset-x-8 bottom-10 top-24 mx-auto max-w-[900px]">
        <div className="absolute inset-0 rounded-[28px] border border-cyan-glow/10 bg-slate-950/20 shadow-[inset_0_0_80px_rgba(34,211,238,.08)]" />
        <div className="iso-map absolute left-1/2 top-1/2 h-[620px] w-[860px] -translate-x-1/2 -translate-y-1/2 max-xl:scale-90 max-lg:scale-75 max-md:hidden">
          <div className="dotted-path absolute left-[18%] top-[32%] h-[48%] w-[66%] rounded-[45%] opacity-40" />
          {rooms.map((room) => (
            <RoomZone key={room.id} room={room} active={activeRoom.id === room.id} hovered={hoveredRoomId === room.id} visited={visited.has(room.id)} onHover={onHover} onSelect={onSelect} />
          ))}
          <Avatar position={activeRoom.avatarPosition} />
        </div>

        <div className="grid gap-3 pt-24 md:hidden">
          {rooms.map((room) => {
            const Icon = room.icon;
            return (
              <button key={room.id} type="button" onClick={() => onSelect(room.id)} className={`rounded-xl border bg-slate-950/50 p-4 text-left transition ${activeRoom.id === room.id ? "border-cyan-glow shadow-neon" : "border-slate-700"}`}>
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-black text-white">0{room.number}. {room.title}</span>
                    <span className="block text-sm text-slate-400">{room.shortDescription}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
