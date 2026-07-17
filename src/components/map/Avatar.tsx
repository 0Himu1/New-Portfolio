import { motion } from "framer-motion";

type AvatarProps = {
  position: { x: number; y: number };
};

export function Avatar({ position }: AvatarProps) {
  return (
    <motion.div
      className="pointer-events-none absolute z-30 h-12 w-12"
      animate={{ left: `${position.x}%`, top: `${position.y}%` }}
      transition={{ type: "spring", stiffness: 95, damping: 18 }}
      aria-hidden="true"
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-10 h-5 w-10 -translate-x-1/2 rounded-full bg-cyan-glow/30 blur-md" />
        <div className="relative h-12 w-10 rounded-t-full border border-cyan-glow/40 bg-gradient-to-b from-slate-100 to-cyan-200 shadow-neon">
          <div className="absolute left-1/2 top-3 h-3 w-5 -translate-x-1/2 rounded-full bg-slate-950" />
          <div className="absolute bottom-0 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-lg bg-cyan-glow" />
        </div>
      </div>
    </motion.div>
  );
}
