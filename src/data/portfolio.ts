import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  personal: {
    name: "Kamruzzaman Khondokar",
    aliases: ["Supto Kumar Bala", "Himu Nazmul"],
    title: "Full-Stack Developer",
    tagline:
      "Full-stack developer who partners with founders to translate business goals into scalable technical solutions - not just write code.",
    location: "Tejgaon, Dhaka, Bangladesh",
    based_in: "Gazipur, Dhaka Division, BD",
    contact: {
      email: "contact.kknazmul@gmail.com",
      phone: "+8801957795943",
      portfolio: "himunazmul.vercel.app",
      linkedin: "",
      github: ""
    },
    summary:
      "Full-stack developer with three years of MERN stack experience building business-focused web applications. Specializes in understanding operational bottlenecks and delivering tools that improve efficiency and profitability. Currently expanding into full-service digital marketing and agency ownership through GrowB, and running independent ventures in visa services (Visa Lab) and apparel (ASH).",
    positioning_goal:
      "Reposition from freelance frontend dev to Full-Stack Developer / systems thinker, targeting CTOs, tech leads, and remote international employers.",
    years_experience: 3
  },
  experience: [
    {
      company: "Solution Provider",
      location: "Tejgaon, Dhaka",
      role: "Full-Stack Developer",
      start_date: "2024-06",
      end_date: "Present",
      highlights: [
        "Developed and deployed a full-stack web application to control and monitor machine operations, bridging software logic with physical workflows",
        "Took complete ownership of system architecture, backend APIs, frontend UI, and deployment pipeline to ensure reliability in production",
        "Worked with stakeholders to map business requirements into efficient digital solutions and technical roadmaps that save time and eliminate repetitive tasks",
        "Supervised a small team of developers, keeping everyone aligned with client business goals and delivery timelines"
      ]
    },
    {
      company: "Solution Provider",
      location: "Tejgaon, Dhaka",
      role: "Web Developer",
      start_date: "2023-12",
      end_date: "2024-05",
      highlights: [
        "Led a small development team, distributing tasks and reviewing code to maintain quality standards",
        "Acted as the primary technical point of contact for clients, clarifying requirements",
        "Engineered full-stack solutions with React, Node.js, and MongoDB that streamlined operations and generated measurable ROI for clients"
      ]
    },
    {
      company: "Inspire IT Academy",
      location: "Remote",
      role: "Web Developer",
      start_date: "2022-12",
      end_date: "2023-12",
      highlights: [
        "Developed interactive and responsive web applications using WordPress, React, and modern frontend tools",
        "Collaborated with the marketing team to set up Meta Pixel, server-side tracking, and test conversion events"
      ]
    },
    {
      company: "Freelance IT Lab",
      location: "Mymensingh",
      role: "Web Designer",
      start_date: "2021-09",
      end_date: "2022-01",
      highlights: [
        "Created clean, user-friendly HTML/CSS templates based on client needs",
        "Focused on making designs that were easy to navigate and matched the client's brand"
      ]
    },
    {
      company: "GrowB",
      location: "Tejgaon, Dhaka",
      role: "Co-founder",
      start_date: "2026-06",
      end_date: "Present",
      highlights: [
        "Co-founded a digital marketing agency delivering full-service strategy, creative, and paid media campaigns",
        "Own technical build of agency site and client-facing assets (Next.js 14, Tailwind, Framer Motion)",
        "Deliver end-to-end Meta Ads campaigns: strategy, creative, funnel design, and performance analytics"
      ]
    }
  ],
  education: [
    {
      credential: "Diploma in Electrical Technology",
      institution: "Govt. Technical School & College",
      location: "Chattak",
      date: "2021-01"
    },
    {
      credential: "Secondary School Certificate (SSC)",
      institution: "Govt. Technical School & College",
      location: "Gazipur",
      date: "2016-02"
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.io", "PHP"],
    tools_platforms: ["Git/GitHub", "Docker", "CI/CD (GitHub Actions)", "AWS", "Vercel", "Stripe", "SendGrid", "Figma"],
    technical_principles: ["OOP", "Reusable npm packages", "DSN factory patterns", "System architecture design"],
    marketing_tools: ["Meta Ads Manager", "Meta Pixel", "Server-side tracking / Conversions API"]
  },
  projects: [
    {
      name: "Cabinet Configurator",
      date: "2025-11",
      description:
        "Web platform for automated board cutting plans and CNC-ready G-code generation, connecting digital design to physical fabrication.",
      tags: ["CNC", "Fusion 360", "G-code", "Fabrication tooling"]
    },
    {
      name: "Letterhead Maker",
      date: "2026-03",
      description:
        "Headless design tool built with Next.js and Google Fonts that generates branded, print-ready PDF letterheads.",
      tags: ["Next.js", "PDF generation", "Google Fonts"]
    },
    {
      name: "Machine Control App",
      date: null,
      description: "Full-stack application to monitor and control physical machine operations in production at Solution Provider.",
      tags: ["Full-stack", "IoT/hardware bridge", "Production system"]
    },
    {
      name: "Etel",
      date: null,
      description:
        "Niche e-commerce platform concept for Bangladesh mobile phone parts and repair (etel.com.bd), including competitive analysis and technical architecture.",
      tags: ["Next.js 14", "Supabase", "Tailwind", "Shadcn/ui", "E-commerce"]
    },
    {
      name: "ASH Shoe E-commerce",
      date: null,
      description:
        "E-commerce build for a Neo-Brutalism-styled sneaker brand, covering 45 wholesale products with a full React/TypeScript/Redux stack.",
      tags: ["React", "TypeScript", "Redux", "Neo-Brutalism design"]
    }
  ],
  digital_marketing_work: [
    {
      client: "360 Engineering & Consultancy",
      industry: "Interior design / consultancy",
      scope:
        "Full Meta Ads funnel: persona development, creative strategy, video + static ads, iterative optimization from Ads Manager data",
      results: "112 leads in 6 weeks on a ৳32,000 budget",
      top_creative: "Hook Static 2 - Copy (~60% of total leads)"
    },
    {
      client: "Saltika",
      industry: "Organic food store",
      scope: "Full marketing ownership: strategy through campaign delivery and results",
      results: null
    },
    {
      client: "Solution Provider (interior design)",
      industry: "Interior design",
      scope: "Full marketing ownership: strategy through campaign delivery and results",
      results: null
    },
    {
      client: "Visa Lab",
      industry: "Saudi labour visa services",
      scope: "Full digital presence ownership: branding, logo, Facebook page, visual identity",
      results: null
    }
  ],
  design_philosophy: {
    aesthetic: "Minimal, premium, high-contrast dark-mode",
    references: ["Linear.app", "Vercel"],
    principle: "One bold accent color per brand against near-black/dark backgrounds",
    workflow: "Google Stitch -> Figma -> Claude Code"
  },
  personal_interests: ["CNC fabrication", "Furniture design", "Fusion 360", "G-code generation", "Cinematic portrait photography"]
};
