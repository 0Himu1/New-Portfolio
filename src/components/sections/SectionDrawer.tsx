import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";
import { rooms, type RoomConfig, type RoomId } from "@/lib/room-config";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { MarketingSection } from "@/components/sections/MarketingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

type SectionDrawerProps = {
  room: RoomConfig;
  data: PortfolioData;
  onClose: () => void;
  onNavigate: (roomId: RoomId) => void;
};

export function SectionDrawer({ room, data, onClose, onNavigate }: SectionDrawerProps) {
  return (
    <motion.div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="section-title">
      <button className="absolute inset-0 h-full w-full cursor-default" type="button" aria-label="Close section drawer" onClick={onClose} />
      <motion.aside
        className="glass-panel absolute bottom-0 right-0 top-0 flex w-full max-w-2xl flex-col overflow-hidden rounded-l-2xl max-sm:rounded-none"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 130, damping: 24 }}
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-700/70 p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-glow">Room 0{room.number}</p>
            <h2 id="section-title" className="mt-2 text-2xl font-black text-white">{room.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{room.shortDescription}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-glow hover:text-cyan-glow" aria-label="Close drawer">
            <X size={18} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {room.id === "intro" ? <IntroSection data={data} /> : null}
          {room.id === "experience" ? <ExperienceSection data={data} /> : null}
          {room.id === "projects" ? <ProjectsSection data={data} /> : null}
          {room.id === "skills" ? <SkillsSection data={data} /> : null}
          {room.id === "education" ? <EducationSection data={data} /> : null}
          {room.id === "marketing" ? <MarketingSection data={data} /> : null}
          {room.id === "contact" ? <ContactSection data={data} /> : null}
        </div>

        <footer className="flex gap-2 overflow-x-auto border-t border-slate-700/70 p-4">
          {rooms.map((nextRoom) => (
            <button key={nextRoom.id} type="button" onClick={() => onNavigate(nextRoom.id)} className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition ${nextRoom.id === room.id ? "border-cyan-glow bg-cyan-glow text-slate-950" : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-glow/60"}`}>
              0{nextRoom.number} {nextRoom.label}
            </button>
          ))}
        </footer>
      </motion.aside>
    </motion.div>
  );
}
