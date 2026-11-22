export interface Project {
  id: string;
  slug: string;
  title: string;
  number: string;
  tagline: string;
  category: string;
  timeframe: string;
  role: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  isVerifiedDemo?: boolean;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "biznexus",
    slug: "biznexus",
    number: "01",
    title: "BizNexus",
    tagline: "AI-powered business intelligence & co-pilot platform",
    category: "AI Engineering · Agentic Systems",
    timeframe: "2024 – 2025",
    role: "Lead Engineer / AI Architect",
    summary:
      "An intelligent business co-pilot that orchestrates multi-agent LLM workflows to ingest corporate data, perform comparative analytics, and generate actionable executive summaries.",
    tags: [
      "Python",
      "FastAPI",
      "Agentic AI",
      "LLM Orchestration",
      "React",
      "SQLite",
    ],
    image: "/projects/placeholder-biznexus.svg",
    imageAlt: "BizNexus AI Business Intelligence interface screenshot placeholder",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Designed deterministic multi-agent orchestration for business telemetry queries",
      "Implemented vectorized document ingestion pipeline with strict citation tracking",
      "Engineered low-latency REST endpoints using FastAPI and async background workers",
    ],
  },
  {
    id: "burst",
    slug: "burst",
    number: "02",
    title: "Burst",
    tagline: "High-performance full-stack publishing & blogging application",
    category: "Full-Stack Web Development",
    timeframe: "2024",
    role: "Full-Stack Developer",
    summary:
      "A fast, distraction-free publishing platform engineered with clean content feeds, role-based draft reviews, markdown authoring, and responsive editorial layout.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL / Database",
    ],
    image: "/projects/placeholder-burst.svg",
    imageAlt: "Burst multi-user blogging platform preview placeholder",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Engineered secure session management and role-based publishing controls",
      "Implemented real-time markdown preview with client-side syntax highlighting",
      "Designed responsive editorial grid with sub-second page transitions",
    ],
  },
  {
    id: "hackos",
    slug: "hackos",
    number: "03",
    title: "HackOS",
    tagline: "Productivity & telemetry workspace for hackathon teams",
    category: "Developer Tools · Productivity",
    timeframe: "2024",
    role: "Frontend & Systems Engineer",
    summary:
      "A dedicated operating cockpit built for high-pressure hackathon sprints, consolidating milestone tracking, team task synchronization, and focused scratchpads into a single unified tab.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Local State Architecture",
    ],
    image: "/projects/placeholder-hackos.svg",
    imageAlt: "HackOS hackathon productivity cockpit interface placeholder",
    githubUrl: "https://github.com/srikanta2006",
    liveUrl: undefined,
    isVerifiedDemo: false,
    highlights: [
      "Constructed modular dashboard widgets with offline-first local persistence",
      "Integrated sprint countdown timer, milestone board, and scratchpad tools",
      "Maintained zero-dependency minimalist UI optimized for low latency and zero layout shift",
    ],
  },
];
