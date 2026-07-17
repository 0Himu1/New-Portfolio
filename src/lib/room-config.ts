import { BarChart3, BriefcaseBusiness, Cpu, GraduationCap, Handshake, Home, PanelsTopLeft } from "lucide-react";

export type RoomId = "intro" | "experience" | "projects" | "skills" | "education" | "marketing" | "contact";

export type RoomConfig = {
  id: RoomId;
  number: number;
  title: string;
  label: string;
  type: string;
  position: { x: number; y: number };
  avatarPosition: { x: number; y: number };
  shortDescription: string;
  accent: "cyan" | "amber" | "teal";
  icon: typeof Home;
};

export const rooms: RoomConfig[] = [
  {
    id: "intro",
    number: 1,
    title: "Intro / Hero",
    label: "HELLO",
    type: "intro",
    position: { x: 10, y: 18 },
    avatarPosition: { x: 21, y: 39 },
    shortDescription: "Full-stack developer building scalable digital experiences.",
    accent: "cyan",
    icon: Home
  },
  {
    id: "experience",
    number: 2,
    title: "Work Experience",
    label: "WORK",
    type: "experience",
    position: { x: 38, y: 8 },
    avatarPosition: { x: 49, y: 31 },
    shortDescription: "Timeline of full-stack, team lead, and agency ownership work.",
    accent: "amber",
    icon: BriefcaseBusiness
  },
  {
    id: "projects",
    number: 3,
    title: "Case Studies",
    label: "BUILDS",
    type: "projects",
    position: { x: 66, y: 17 },
    avatarPosition: { x: 76, y: 39 },
    shortDescription: "Production systems, tooling, e-commerce, and fabrication software.",
    accent: "teal",
    icon: PanelsTopLeft
  },
  {
    id: "skills",
    number: 4,
    title: "Tech Stack",
    label: "STACK",
    type: "skills",
    position: { x: 18, y: 49 },
    avatarPosition: { x: 30, y: 70 },
    shortDescription: "Frontend, backend, platforms, architecture, and marketing tech.",
    accent: "teal",
    icon: Cpu
  },
  {
    id: "education",
    number: 5,
    title: "Education",
    label: "STUDY",
    type: "education",
    position: { x: 46, y: 48 },
    avatarPosition: { x: 56, y: 69 },
    shortDescription: "Electrical technology foundation and technical school path.",
    accent: "cyan",
    icon: GraduationCap
  },
  {
    id: "marketing",
    number: 6,
    title: "Digital Marketing",
    label: "GROWTH",
    type: "marketing",
    position: { x: 72, y: 53 },
    avatarPosition: { x: 82, y: 73 },
    shortDescription: "Full-funnel Meta Ads, analytics, creative, and lead generation.",
    accent: "amber",
    icon: BarChart3
  },
  {
    id: "contact",
    number: 7,
    title: "Let's Connect",
    label: "CONNECT",
    type: "contact",
    position: { x: 42, y: 76 },
    avatarPosition: { x: 53, y: 91 },
    shortDescription: "Email, phone, location, and hiring call to action.",
    accent: "cyan",
    icon: Handshake
  }
];
