export type Contact = {
  email: string;
  phone: string;
  portfolio: string;
  linkedin: string;
  github: string;
};

export type Personal = {
  name: string;
  aliases: string[];
  title: string;
  tagline: string;
  location: string;
  based_in: string;
  contact: Contact;
  summary: string;
  positioning_goal: string;
  years_experience: number;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  start_date: string;
  end_date: string;
  highlights: string[];
};

export type Education = {
  credential: string;
  institution: string;
  location: string;
  date: string;
};

export type Skills = {
  frontend: string[];
  backend: string[];
  tools_platforms: string[];
  technical_principles: string[];
  marketing_tools: string[];
};

export type Project = {
  name: string;
  date: string | null;
  description: string;
  tags: string[];
};

export type MarketingWork = {
  client: string;
  industry: string;
  scope: string;
  results: string | null;
  top_creative?: string;
};

export type DesignPhilosophy = {
  aesthetic: string;
  references: string[];
  principle: string;
  workflow: string;
};

export type PortfolioData = {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  digital_marketing_work: MarketingWork[];
  design_philosophy: DesignPhilosophy;
  personal_interests: string[];
};
