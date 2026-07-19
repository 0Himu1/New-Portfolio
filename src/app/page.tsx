"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Download, Mail, MessageCircle, MapPin, Phone, RadioTower, Send, Terminal } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { capturePortfolioEvent } from "@/lib/analytics";

const navItems = [
  { label: "systems", href: "#systems" },
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" }
];

const projectTypeOptions = [
  "Full-stack application",
  "Dashboard or internal tool",
  "Website or landing page",
  "Technical consultation"
];

const resumePath = "/Kamruzzaman%20Khandakar%20Resume.pdf";

const systemGroups = [
  {
    title: "Frontend & Product",
    items: ["React / Next.js interfaces", "TypeScript component systems", "Tailwind CSS / Framer Motion", "Business-focused UX flows"]
  },
  {
    title: "Backend & Systems",
    items: ["Node.js / Express APIs", "MongoDB / Mongoose data models", "Socket.io real-time workflows", "Machine control dashboards"]
  },
  {
    title: "Delivery & DevOps",
    items: ["Docker / AWS / Vercel deploys", "GitHub Actions pipelines", "Production deployment ownership", "Environment and release workflow"]
  },
  {
    title: "Operating Style",
    items: ["Architecture ownership", "Team supervision", "Founder-facing requirement mapping", "Reusable npm package mindset"]
  }
];

const featuredProjects = [
  ...portfolio.projects.slice(0, 5),
  {
    name: "PeopleDesk AI",
    date: "2026",
    description: "Conversational HRM product concept for the Bangladesh market using Claude API, RAG workflows, and role-based business operations.",
    tags: ["SaaS", "AI workflow", "RAG", "Product architecture"]
  }
];

const terminalCommandOutputs: Record<string, string[]> = {
  about: [
    "Kamruzzaman Khandakar",
    "Full-stack developer building MERN products, machine dashboards, and growth systems.",
    "Current focus: remote-friendly mid-level full-stack roles."
  ],
  skills: ["Next.js, React, TypeScript, Tailwind CSS", "Node.js, Express, MongoDB, Socket.io", "Docker, AWS, Vercel, GitHub Actions, CI/CD"],
  systems: systemGroups.map((group) => `${group.title}: ${group.items.slice(0, 2).join(", ")}`),
  work: portfolio.experience.map((job) => `${job.role} at ${job.company} (${job.start_date} - ${job.end_date})`),
  projects: featuredProjects.map((project) => `${project.name} - ${project.tags.slice(0, 3).join(", ")}`),
  contact: [`email: ${portfolio.personal.contact.email}`, `phone: ${portfolio.personal.contact.phone}`, "location: Tejgaon / Gazipur, Bangladesh"],
  resume: [
    "Kamruzzaman Khandakar - Full-stack developer",
    "3 years MERN experience; React, Next.js, Node.js, MongoDB, Docker, AWS.",
    "Open to mid-level product-minded full-stack roles."
  ]
};

const terminalCommandNames = ["help", ...Object.keys(terminalCommandOutputs), "clear"];

type TerminalLine = {
  kind: "intro" | "command" | "output" | "hint" | "error" | "success";
  text: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const currentRole = portfolio.experience[0];
  const cleanPhoneNumber = portfolio.personal.contact.phone.replace(/\D/g, "");
  const [projectType, setProjectType] = useState(projectTypeOptions[0]);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);

  return (
    <main className="site-shell min-h-screen overflow-hidden text-zinc-200">
      <div className="pointer-events-none fixed inset-0 dotted-grid" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_22%_10%,rgba(11,134,104,0.22),transparent_27%),radial-gradient(circle_at_64%_16%,rgba(83,65,139,0.32),transparent_32%),radial-gradient(circle_at_92%_12%,rgba(245,158,11,0.08),transparent_24%)]" />

      <div className="relative mx-auto min-h-screen w-full max-w-[1540px] px-5 py-6 sm:px-8 xl:px-12">
        <header className="flex items-center justify-between gap-4 rounded-full border border-zinc-800/80 bg-black/30 px-3 py-3 text-sm text-zinc-400 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur">
          <a
            href="#top"
            className="group grid size-12 shrink-0 place-items-center rounded-full border border-emerald-400/20 bg-zinc-950 text-emerald-300 transition hover:border-emerald-300/50 hover:bg-emerald-400/10"
            aria-label="Kamruzzaman Khandakar home"
            onClick={() => capturePortfolioEvent("nav_link_clicked", { label: "brand_mark", target: "#top" })}
          >
            <span className="relative grid size-8 place-items-center rounded-xl border border-zinc-800 bg-zinc-900/90">
              <Code2 size={20} strokeWidth={2.2} />
              <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.85)]" />
            </span>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-950/70 p-1.5 sm:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-full px-4 py-2.5 font-medium text-zinc-300 transition hover:bg-zinc-800/80 hover:text-emerald-300"
                href={item.href}
                onClick={() => capturePortfolioEvent("nav_link_clicked", { label: item.label, target: item.href })}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            aria-label="Download resume"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 font-semibold text-zinc-300 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
            href={resumePath}
            download
            onClick={() => capturePortfolioEvent("resume_download_clicked", { location: "header" })}
          >
            <Download size={17} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </header>

        <section id="top" className="hero-grid min-h-[calc(100vh-5rem)] py-16 lg:py-24">
          <motion.div initial={false} animate="visible" variants={fadeUp} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 text-[12px] text-emerald-300/80">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              available for mid-level full-stack roles
            </div>

            <h1 className="hero-title mt-9 font-semibold leading-[0.9] tracking-[-0.055em] text-zinc-100">
              Kamruzzaman
              <span className="block">Khandakar</span>
            </h1>

            <p className="mt-8 max-w-3xl border-l border-emerald-400/40 pl-4 text-base leading-8 text-zinc-500 sm:text-lg">
              Full-stack developer who turns business bottlenecks into scalable MERN products, production dashboards, and measurable growth systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="action-button primary"
                href="#projects"
                onClick={() => capturePortfolioEvent("hero_cta_clicked", { cta: "view_projects" })}
              >
                view_projects
                <ArrowUpRight size={15} />
              </a>
              <a
                className="action-button"
                href="#contact"
                onClick={() => capturePortfolioEvent("hero_cta_clicked", { cta: "get_in_touch" })}
              >
                get_in_touch
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-side"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <InteractiveTerminal />
            <div className="skill-strip">
              {["Next.js", "TypeScript", "Node.js", "MongoDB", "Express", "Docker", "AWS", "CI/CD"].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.aside>
        </section>

        <SectionShell id="systems" eyebrow="~/systems" title="Systems & Stack" copy="The tools and habits I use to ship product work end to end.">
          <section className="wide-card-grid">
            {systemGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="system-card"
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3>{group.title}</h3>
                  <Cpu size={18} />
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </section>
        </SectionShell>

        <SectionShell
          id="work"
          eyebrow="~/work"
          title="Experience"
          copy={`Currently ${currentRole.role} at ${currentRole.company}, focused on production ownership, system architecture, and business outcomes.`}
        >
          <section className="experience-grid">
            {portfolio.experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}-${job.start_date}`}
                className={index === 0 ? "timeline-card featured" : "timeline-card"}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.5 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.22em] text-emerald-300/70">{job.company}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-100">{job.role}</h3>
                  </div>
                  <p className="font-mono text-[12px] text-zinc-600">
                    {job.start_date} - {job.end_date}
                  </p>
                </div>
                <p className="mt-4 flex items-center gap-2 text-[13px] text-zinc-500">
                  <MapPin size={14} />
                  {job.location}
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-500">
                  {job.highlights.slice(0, index === 0 ? 4 : 2).map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </section>
        </SectionShell>

        <SectionShell id="projects" eyebrow="~/projects" title="Projects" copy="Selected builds across product engineering, hardware-adjacent systems, and growth.">
          <section className="project-grid">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                className="project-card"
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: Math.min(index * 0.045, 0.22), duration: 0.5 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[12px] text-zinc-600">{project.date ?? "selected"}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <RadioTower className="mt-1 shrink-0 text-zinc-700" size={19} />
                </div>
                <p>{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </section>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="~/contact"
          title="Contact"
          copy="Open to full-stack roles, product-minded engineering work, and founder-led builds."
        >
          <section className="contact-panel">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1 text-[12px] text-emerald-300/80">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                available
              </div>
              <h3 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-6xl">
                Let&apos;s build systems that make work easier.
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                Based in Bangladesh (UTC+6). Currently working from {portfolio.personal.location} and focused on remote-friendly full-stack work.
              </p>

              <div className="contact-actions">
                <a
                  className="contact-action"
                  href={`mailto:${portfolio.personal.contact.email}`}
                  onClick={() => capturePortfolioEvent("contact_link_clicked", { method: "email", location: "contact_section" })}
                >
                  <Mail size={17} />
                  <span>
                    <strong>Email</strong>
                    {portfolio.personal.contact.email}
                  </span>
                </a>
                <a
                  className="contact-action"
                  href={`tel:${cleanPhoneNumber}`}
                  onClick={() => capturePortfolioEvent("contact_link_clicked", { method: "phone", location: "contact_section" })}
                >
                  <Phone size={17} />
                  <span>
                    <strong>Call</strong>
                    {portfolio.personal.contact.phone}
                  </span>
                </a>
                <a
                  className="contact-action"
                  href={`https://wa.me/${cleanPhoneNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => capturePortfolioEvent("contact_link_clicked", { method: "whatsapp", location: "contact_section" })}
                >
                  <MessageCircle size={17} />
                  <span>
                    <strong>WhatsApp</strong>
                    {portfolio.personal.contact.phone}
                  </span>
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/contact.kknazmul@gmail.com"
              method="POST"
              onSubmit={() => capturePortfolioEvent("contact_form_submitted", { location: "contact_section" })}
            >
              <input type="hidden" name="_subject" value="New portfolio inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Project type</span>
                <input type="hidden" name="project_type" value={projectType} />
                <div className="custom-select">
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={projectTypeOpen}
                    onClick={() => setProjectTypeOpen((open) => !open)}
                    onBlur={() => window.setTimeout(() => setProjectTypeOpen(false), 120)}
                  >
                    {projectType}
                  </button>
                  {projectTypeOpen ? (
                    <div className="custom-select-menu" role="listbox" aria-label="Project type">
                      {projectTypeOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          role="option"
                          aria-selected={projectType === option}
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => {
                            setProjectType(option);
                            setProjectTypeOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" placeholder="Tell me what you want to build." rows={5} required />
              </label>
              <button type="submit">
                Send message
                <Send size={16} />
              </button>
            </form>
          </section>
        </SectionShell>

        <footer className="flex flex-col gap-4 border-t border-zinc-900 py-10 text-[12px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kamruzzaman Khandakar</p>
          <p className="flex items-center gap-2">
            <Terminal size={14} />
            full-stack developer / systems thinker
          </p>
        </footer>
      </div>
    </main>
  );
}

function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { kind: "intro", text: "Welcome. Type help for available commands." },
    { kind: "success", text: "building practical systems for founders and operators" }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const prompt = useMemo(() => ({ user: "himu@portfolio", path: "~", symbol: "$" }), []);
  const terminalCommands = useMemo(
    () => ({
      help: [`available commands: ${terminalCommandNames.join(", ")}`, "hint: try `projects`, `systems`, or `work`"],
      ...terminalCommandOutputs,
      clear: ["terminal cleared"]
    }),
    []
  );

  useEffect(() => {
    const history = historyRef.current;
    if (!history) {
      return;
    }

    history.scrollTo({ top: history.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const runCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) {
      return;
    }

    capturePortfolioEvent("terminal_command_submitted", {
      command: terminalCommandNames.includes(command) ? command : "unknown"
    });

    if (command === "clear") {
      setLines([
        { kind: "success", text: "terminal cleared" },
        { kind: "hint", text: "type help to continue" }
      ]);
      setInput("");
      return;
    }

    const output = terminalCommands[command as keyof typeof terminalCommands];
    const outputLines: TerminalLine[] = output
      ? output.map((line): TerminalLine => ({ kind: line.startsWith("hint:") ? "hint" : line.startsWith("available commands:") ? "success" : "output", text: line }))
      : [
          { kind: "error", text: `command not found: ${command}` },
          { kind: "hint", text: `available commands: ${terminalCommandNames.join(", ")}` }
        ];

    setLines((current) => [
      ...current,
      { kind: "command", text: command },
      ...outputLines
    ]);
    setInput("");
  };

  return (
    <div className="terminal-window" aria-label="Interactive terminal panel" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-top">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="ml-3 text-zinc-500">himu@portfolio:~</span>
        <span className="ml-auto text-zinc-700">live</span>
      </div>
      <div className="terminal-body">
        <div ref={historyRef} className="terminal-history">
          {lines.map((line, index) => (
            <TerminalHistoryLine key={`${line.kind}-${line.text}-${index}`} line={line} prompt={prompt} />
          ))}
        </div>
        <form className="terminal-form" onSubmit={runCommand}>
          <span className="terminal-prompt" aria-hidden="true">
            <span className="terminal-prompt-user">{prompt.user}</span>
            <span className="terminal-prompt-separator">:</span>
            <span className="terminal-prompt-path">{prompt.path}</span>
            <span className="terminal-prompt-symbol">{prompt.symbol}</span>
          </span>
          <input
            ref={inputRef}
            aria-label="Terminal command"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="type help"
          />
          <button aria-label="Run terminal command" type="submit">
            <Send size={13} />
          </button>
        </form>
      </div>
    </div>
  );
}

function TerminalHistoryLine({ line, prompt }: { line: TerminalLine; prompt: { user: string; path: string; symbol: string } }) {
  if (line.kind === "command") {
    return (
      <p className="terminal-line terminal-line-command">
        <span className="terminal-prompt" aria-hidden="true">
          <span className="terminal-prompt-user">{prompt.user}</span>
          <span className="terminal-prompt-separator">:</span>
          <span className="terminal-prompt-path">{prompt.path}</span>
          <span className="terminal-prompt-symbol">{prompt.symbol}</span>
        </span>
        <span className="terminal-command-text">{line.text}</span>
      </p>
    );
  }

  return <p className={`terminal-line terminal-line-${line.kind}`}>{line.text}</p>;
}

function SectionShell({
  id,
  eyebrow,
  title,
  copy,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-shell scroll-mt-8">
      <motion.div
        className="section-heading"
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
      >
        <p className="font-mono text-sm text-emerald-300/70">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </motion.div>
      <div>{children}</div>
    </section>
  );
}
