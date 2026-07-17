import { Github, Linkedin, Mail, Send } from "lucide-react";
import type { Personal } from "@/types/portfolio";

type HeaderProps = {
  personal: Personal;
};

export function Header({ personal }: HeaderProps) {
  const navItems = ["Home", "Explore", "About Me", "Resume", "Let's Connect"];

  return (
    <header className="glass-panel flex items-center justify-between gap-4 rounded-xl px-4 py-3">
      <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Kamruzzaman Khondokar home">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan-glow/35 bg-cyan-glow/10 text-lg font-black text-cyan-glow shadow-neon">
          K
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white sm:text-base">{personal.name}</span>
          <span className="block truncate text-xs text-slate-400">{personal.title}</span>
        </span>
      </a>

      <nav className="hidden items-center gap-1 rounded-lg border border-slate-700/60 bg-slate-950/40 p-1 lg:flex" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item} href={item === "Let's Connect" ? "mailto:contact.kknazmul@gmail.com" : "#top"} className="rounded-md px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <a className="hidden rounded-lg border border-slate-700/70 p-2 text-slate-300 transition hover:border-cyan-glow/50 hover:text-cyan-glow sm:inline-flex" href={personal.contact.github || "#"} aria-label="GitHub">
          <Github size={18} />
        </a>
        <a className="hidden rounded-lg border border-slate-700/70 p-2 text-slate-300 transition hover:border-cyan-glow/50 hover:text-cyan-glow sm:inline-flex" href={personal.contact.linkedin || "#"} aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a className="rounded-lg border border-slate-700/70 p-2 text-slate-300 transition hover:border-cyan-glow/50 hover:text-cyan-glow" href={`mailto:${personal.contact.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
        <a className="inline-flex items-center gap-2 rounded-lg bg-cyan-glow px-3 py-2 text-sm font-bold text-slate-950 shadow-neon transition hover:bg-white" href={`mailto:${personal.contact.email}`}>
          <Send size={16} />
          <span className="hidden sm:inline">Hire Me</span>
        </a>
      </div>
    </header>
  );
}
