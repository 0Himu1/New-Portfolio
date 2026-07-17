import type { RoomConfig, RoomId } from "@/lib/room-config";

type MiniMapProps = {
  rooms: RoomConfig[];
  activeRoomId: RoomId;
  visited: Set<RoomId>;
  onSelect: (roomId: RoomId) => void;
};

export function MiniMap({ rooms, activeRoomId, visited, onSelect }: MiniMapProps) {
  return (
    <section className="glass-panel rounded-xl p-4" aria-label="Mini map navigation">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-black text-white">Mini-map</h2>
        <span className="text-xs text-slate-500">{visited.size}/{rooms.length}</span>
      </div>
      <div className="relative mt-4 h-44 rounded-lg border border-slate-700/70 bg-slate-950/55">
        {rooms.map((room) => (
          <button
            key={room.id}
            type="button"
            aria-label={`Navigate to ${room.title}`}
            onClick={() => onSelect(room.id)}
            className={`absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition ${
              activeRoomId === room.id
                ? "border-cyan-glow bg-cyan-glow shadow-neon"
                : visited.has(room.id)
                  ? "border-teal-300 bg-teal-300/70"
                  : "border-slate-500 bg-slate-800"
            }`}
            style={{ left: `${room.avatarPosition.x}%`, top: `${Math.min(room.avatarPosition.y, 86)}%` }}
          />
        ))}
      </div>
    </section>
  );
}
