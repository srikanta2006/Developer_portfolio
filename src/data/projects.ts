export interface Project {
  id: string;
  slug: string;
  title: string;
  number: string;
  tagline: string;
  category: string;
  timeframe: string;
  role: string;
  ownership: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  isVerifiedDemo?: boolean;
  highlights: string[];
  individualContribution?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "biznexus",
    slug: "biznexus",
    number: "01",
    title: "BizNexus",
    tagline: "AI-powered business management & analytics co-pilot for SMEs",
    category: "Full-Stack Development · Applied AI",
    timeframe: "2024 – 2025",
    role: "Full-Stack & AI Developer",
    ownership: "Independent Project",
    summary:
      "An AI-powered business management and analytics platform engineered for small and medium-sized businesses. Helps owners monitor business operations through intelligent insights into inventory, sales, profitability, and customer communication.",
    tags: [
      "Python",
      "FastAPI",
      "Applied AI",
      "React",
      "SQLite",
      "LLM Integration",
    ],
    image: "/projects/placeholder-biznexus.svg",
    imageAlt: "BizNexus AI Business Intelligence interface preview",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Operational visibility across inventory tracking, sales trends, and profit margins",
      "Intelligent natural language query interface for instant business metric retrieval",
      "Actionable automated executive summaries for SMB owners and teams",
    ],
  },
  {
    id: "burst",
    slug: "burst",
    number: "02",
    title: "Burst",
    tagline: "Full-stack multi-user blogging & content-sharing platform",
    category: "Full-Stack Development · Web Applications",
    timeframe: "2024",
    role: "Full-Stack Developer",
    ownership: "Independently Designed & Built",
    summary:
      "A modern, responsive blogging platform featuring personalized global/following feeds, custom WYSIWYG rich-text authoring, client-side image compression, real-time social interactions, and a creator analytics dashboard.",
    tags: [
      "React 19",
      "Vite",
      "Firebase Auth",
      "Cloud Firestore",
      "HTML5 Canvas",
      "CSS Modules",
      "Lucide React",
    ],
    image: "/projects/placeholder-burst.svg",
    imageAlt: "Burst multi-user blogging platform preview",
    githubUrl: "https://github.com/srikanta2006/Burst_Blogging",
    liveUrl: "https://blogging-page-gamma.vercel.app/",
    isVerifiedDemo: true,
    highlights: [
      "Engineered custom WYSIWYG editor instead of relying on third-party blackbox editors",
      "Implemented client-side image compression using HTML5 Canvas before Firestore upload",
      "Real-time Firestore synchronization for likes, comments, following, and creator analytics",
    ],
  },
  {
    id: "hackos",
    slug: "hackos",
    number: "03",
    title: "HackOS",
    tagline: "Post-hackathon centralized productivity workspace",
    category: "Full-Stack Development · Productivity",
    timeframe: "2024",
    role: "Frontend & Systems Developer",
    ownership: "Independently Built",
    summary:
      "A centralized productivity operating workspace designed to help hackathon teams organize development activities without context-switching. Integrates Focus Mode, Trello, Figma, Draw.io, Notion, Google Docs, and Groq-powered AI assistance.",
    tags: [
      "React",
      "TypeScript",
      "Groq API",
      "Tailwind CSS",
      "Trello & Figma Integrations",
    ],
    image: "/projects/placeholder-hackos.svg",
    imageAlt: "HackOS hackathon productivity cockpit interface",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Consolidates Trello, Figma, Draw.io, Notion, and Google Docs into one distraction-free tab",
      "Dedicated Focus Mode minimizing mental friction during high-pressure coding sprints",
      "Integrated Groq-powered high-speed AI assistance for fast syntax and architectural queries",
    ],
  },
  {
    id: "legal-arena",
    slug: "legal-arena",
    number: "04",
    title: "LegalArena",
    tagline: "AI-powered legal reasoning & multi-agent courtroom simulation",
    category: "Agentic AI · Multi-Agent Systems · RAG",
    timeframe: "2024 – 2025",
    role: "Agent Architecture & Orchestration Lead",
    ownership: "Team Project (Architecture & Agent Lead)",
    individualContribution: "Designed the three-agent architecture (Prosecution, Defence, Judge) and orchestrated adversarial legal debate workflows using LangGraph and ChromaDB.",
    summary:
      "An AI-powered courtroom simulation system that uses specialized AI agents to simulate adversarial legal reasoning. Features Prosecution, Defence, and Judge agents orchestrated via LangGraph, with legal document retrieval powered by ChromaDB.",
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "FastAPI",
      "Next.js",
      "TypeScript",
    ],
    image: "/projects/placeholder-legalarena.svg",
    imageAlt: "LegalArena multi-agent courtroom reasoning system preview",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Designed the 3-agent adversarial architecture: Prosecution, Defence, and Judge Agents",
      "Orchestrated multi-round legal debate workflows and state transitions using LangGraph",
      "Implemented Retrieval-Augmented Generation (RAG) over case law using ChromaDB vector search",
    ],
  },
];
