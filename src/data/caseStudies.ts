export interface TechnicalDecision {
  decision: string;
  rationale: string;
  tradeoff: string;
}

export interface ChallengeResolution {
  challenge: string;
  solution: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  number: string;
  tagline: string;
  category: string;
  role: string;
  ownership: string;
  timeframe: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string;
  problem: string;
  goals: string[];
  constraints: string[];
  solution: string;
  keyFlows: string[];
  architectureDiagramType: "biznexus" | "burst" | "hackos" | "legal-arena";
  architectureDescription: string;
  technicalDecisions: TechnicalDecision[];
  challenges: ChallengeResolution[];
  featureStatus: {
    implemented: string[];
    partiallyImplemented: string[];
    planned: string[];
  };
  individualContribution?: string[];
  outcomesAndLearnings: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  biznexus: {
    slug: "biznexus",
    title: "BizNexus",
    number: "01",
    tagline: "AI-powered business management & analytics co-pilot for SMEs",
    category: "Full-Stack Development · Applied AI",
    role: "Full-Stack & AI Developer",
    ownership: "Independent Project",
    timeframe: "2024 – 2025",
    heroImage: "/projects/placeholder-biznexus.svg",
    heroImageAlt: "BizNexus system architecture and dashboard preview",
    overview:
      "BizNexus is an AI-powered business management and analytics platform engineered specifically for small and medium-sized businesses (SMEs). It empowers business owners to monitor and coordinate business operations through intelligent operational visibility into inventory levels, sales metrics, profit margins, and customer communication.",
    problem:
      "Small-scale business owners frequently lack dedicated analytics staff and struggle to piece together fragmented data across inventory ledgers, billing spreadsheets, and customer logs. Traditional enterprise ERPs are overly complex and costly, while basic spreadsheets offer zero proactive operational intelligence.",
    goals: [
      "Provide centralized operational visibility into inventory, sales volumes, and profitability.",
      "Deliver an intelligent natural language interface for instant retrieval of business performance metrics.",
      "Automate customer communication workflows and summarize business health for non-technical owners.",
    ],
    constraints: [
      "Intuitive UI that requires zero technical training for retail and small business owners.",
      "Lightweight, predictable deployment footprint without costly cloud infrastructure requirements.",
      "Accurate telemetry aggregation with zero hallucinated arithmetic figures.",
    ],
    solution:
      "Designed and developed a cohesive full-stack platform pairing a clean web dashboard with an applied AI co-pilot. The system aggregates core operational metrics into an intuitive visual console, while an AI assistant enables owners to query sales data, generate restock reminders, and review customer communication logs.",
    keyFlows: [
      "Owner logs in to view unified dashboard showing real-time sales, profit margins, and low-inventory alerts.",
      "Owner submits a natural-language query (e.g., 'What were our top 3 profitable items this month?').",
      "Backend parses the query against structured SQLite records and returns exact metrics with explanatory context.",
      "System flags inventory thresholds and drafts automated customer notifications for pending orders.",
    ],
    architectureDiagramType: "biznexus",
    architectureDescription:
      "A layered full-stack application decoupling a responsive web frontend, an asynchronous FastAPI backend service, and an intelligent query execution pipeline querying structured relational business records.",
    technicalDecisions: [
      {
        decision: "FastAPI + Python for backend services",
        rationale: "Rapid endpoint development with native asynchronous execution and clean integration with AI/LLM libraries.",
        tradeoff: "Requires careful process management compared to serverless functions.",
      },
      {
        decision: "Relational storage for transactional business telemetry",
        rationale: "Ensures strict ACID consistency for sales figures, price records, and inventory counts.",
        tradeoff: "Schema migrations must be carefully managed as new business metrics are tracked.",
      },
      {
        decision: "Component-driven dashboard with modular card telemetry",
        rationale: "Allows business owners to prioritize widgets (e.g. sales vs inventory) according to their business model.",
        tradeoff: "Requires thoughtful state management across interdependent dashboard cards.",
      },
    ],
    challenges: [
      {
        challenge: "Ensuring natural language queries produce verifiable, exact numbers without hallucination",
        solution: "Separated natural language query translation from numeric calculation, forcing queries to execute exact SQL lookups against structured database records.",
      },
      {
        challenge: "Designing an interface that remains simple for non-technical business operators",
        solution: "Conducted continuous UX refinement, replacing technical jargon with clear terminology like 'Gross Profit', 'Low Stock Alert', and 'Customer Responses'.",
      },
    ],
    featureStatus: {
      implemented: [
        "Interactive dashboard displaying sales, profits, and inventory telemetry",
        "Natural-language query co-pilot for operational and metric inquiries",
        "Inventory tracking with threshold-based restock indicators",
        "Customer communication history and message log tracking",
      ],
      partiallyImplemented: [
        "Automated multi-channel customer notification dispatch",
        "Weekly automated business summary email generation",
      ],
      planned: [
        "Multi-store inventory synchronization across branch locations",
        "Direct point-of-sale (POS) hardware integration",
      ],
    },
    outcomesAndLearnings: [
      "Demonstrated that combining full-stack development with applied AI solves concrete operational problems for small business owners.",
      "Gained deep practical experience structuring clean API schemas with FastAPI and integrating LLM tool execution.",
      "Reinforced the engineering principle that business software must be trustworthy, fast, and remarkably simple to use.",
    ],
    techStack: [
      {
        category: "Backend & Applied AI",
        items: ["Python", "FastAPI", "OpenAI API / Groq API", "Asyncio"],
      },
      {
        category: "Frontend & UI",
        items: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
      },
      {
        category: "Database & Tooling",
        items: ["SQLite", "Git", "RESTful APIs", "Vercel"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006",
  },

  burst: {
    slug: "burst",
    title: "Burst",
    number: "02",
    tagline: "Full-stack multi-user blogging & content-sharing platform",
    category: "Full-Stack Development · Web Applications",
    role: "Full-Stack Developer",
    ownership: "Independently Designed & Built",
    timeframe: "2024",
    heroImage: "/projects/placeholder-burst.svg",
    heroImageAlt: "Burst multi-user blogging application editorial interface and editor",
    overview:
      "Burst is a modern blogging and content-sharing platform built to provide writers and readers with a smooth, interactive publishing experience. Built from the ground up with React 19, Firebase, and Cloud Firestore, it features personalized global and following feeds, a custom rich-text editor, real-time social interactions, and a creator analytics dashboard.",
    problem:
      "Most modern blogging platforms either enforce rigid paywalls, overwhelm readers with aggressive advertising, or rely on heavy third-party embedded editors that degrade mobile responsiveness. Writers needed an autonomous, lightning-fast platform that offers distraction-free authoring and real-time social engagement.",
    goals: [
      "Build a custom WYSIWYG editor without relying on third-party blackbox editors.",
      "Implement client-side image compression using HTML5 Canvas to optimize storage and upload speeds.",
      "Provide real-time social interactions (likes, comments, bookmarks, following) with Cloud Firestore.",
      "Deliver a comprehensive creator analytics dashboard tracking multiple reader engagement metrics.",
    ],
    constraints: [
      "Mobile-first responsive design supporting seamless reading across all screen sizes.",
      "Instant reader preview with zero cumulative layout shifts (CLS).",
      "Secure authenticated sessions and role-protected publishing controls.",
    ],
    solution:
      "Independently engineered the entire full-stack application using React 19, Vite, and Firebase. Implemented a custom rich-text editor with instant preview, client-side canvas image compression, context-based profile caching, and real-time Firestore listeners for comments and likes.",
    keyFlows: [
      "User authenticates securely via Firebase Authentication (email/password or OAuth).",
      "Writer authors content in custom rich-text editor, compresses featured images via HTML5 Canvas, and publishes instantly.",
      "Readers discover content via personalized 'Global' and 'Following' feeds with category filtering.",
      "Real-time social engagement (likes, comments, bookmarks) syncs immediately across open client sessions.",
      "Creator monitors post performance, reader retention, and engagement in the analytics dashboard.",
    ],
    architectureDiagramType: "burst",
    architectureDescription:
      "React 19 client application with Vite and CSS Modules, integrating Firebase Authentication, Cloud Firestore real-time subscriptions, and an HTML5 Canvas image preprocessing pipeline.",
    technicalDecisions: [
      {
        decision: "Custom WYSIWYG editor instead of embedded third-party library",
        rationale: "Full control over DOM manipulation, clean markdown/HTML output, and zero unwanted external bundle bloat.",
        tradeoff: "Required custom implementation of keyboard formatting shortcuts and selection ranges.",
      },
      {
        decision: "Client-side image compression via HTML5 Canvas",
        rationale: "Drastically reduces image payload size before upload, accelerating publish speed and saving cloud bandwidth.",
        tradeoff: "Compression CPU workload runs on the client device during upload.",
      },
      {
        decision: "Real-time Cloud Firestore synchronization",
        rationale: "Instant UI updates for social interactions (likes, comments, follower counts) without manual polling.",
        tradeoff: "Careful listener cleanup in React useEffect hooks to avoid memory leaks and runaway read counts.",
      },
    ],
    challenges: [
      {
        challenge: "Managing real-time comment and like counters without race conditions",
        solution: "Implemented Firestore atomic increment transactions for likes and engagement tallies, ensuring consistent counters under concurrent interactions.",
      },
      {
        challenge: "Maintaining smooth rich-text editing performance with embedded images",
        solution: "Preprocessed images on an in-memory canvas and used asynchronous blob URLs for instant editor preview while uploading occurred in the background.",
      },
    ],
    featureStatus: {
      implemented: [
        "Personalized Global and Following feeds with category and topic discovery",
        "Firebase user authentication with protected routes and profile customization",
        "Custom WYSIWYG rich-text post authoring and live reader preview",
        "Client-side image compression via HTML5 Canvas",
        "Real-time likes, threaded comments, bookmarks, and user following system",
        "Creator analytics dashboard with multi-metric engagement visualizations",
        "Responsive interface with dark and light theme support",
      ],
      partiallyImplemented: [
        "In-app push notifications for new follower activities",
        "Automated reading list recommendation engine",
      ],
      planned: [
        "Export articles to clean portable Markdown / PDF formats",
        "Newsletter email digest generation for publication subscribers",
      ],
    },
    outcomesAndLearnings: [
      "Gained comprehensive experience taking a complex full-stack web application from initial concept to live production deployment.",
      "Mastered real-time NoSQL state management, security rules, and client-side media manipulation with HTML5 Canvas.",
      "Delivered a production application used by real readers: https://blogging-page-gamma.vercel.app/",
    ],
    techStack: [
      {
        category: "Core Frontend & Styling",
        items: ["React 19", "React Router", "Vite", "CSS Modules", "HTML5 Canvas"],
      },
      {
        category: "Backend & Database",
        items: ["Firebase Authentication", "Cloud Firestore", "Firebase Storage"],
      },
      {
        category: "UI & Hosting",
        items: ["Lucide React", "Vercel Hosting", "Git / GitHub"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006/Burst_Blogging",
    liveUrl: "https://blogging-page-gamma.vercel.app/",
  },

  hackos: {
    slug: "hackos",
    title: "HackOS",
    number: "03",
    tagline: "Post-hackathon centralized productivity workspace",
    category: "Full-Stack Development · Productivity",
    role: "Frontend & Systems Developer",
    ownership: "Independently Built",
    timeframe: "2024",
    heroImage: "/projects/placeholder-hackos.svg",
    heroImageAlt: "HackOS hackathon productivity cockpit interface",
    overview:
      "HackOS is a centralized productivity workspace engineered to help hackathon teams organize development activities and maintain razor-sharp focus. It consolidates essential development and project tools—including Trello, Figma, Draw.io, Notion, and Google Docs—alongside a dedicated Focus Mode and Groq-powered AI assistance into a single unified browser tab.",
    problem:
      "During intensive 24-to-48 hour hackathons, developers waste critical cognitive energy constantly switching between task boards, diagramming canvases, slide drafts, and API documentation. This context-switching leads to fragmented communication and wasted sprint time.",
    goals: [
      "Bring essential hackathon tools into one unified, low-latency environment.",
      "Provide a distraction-free Focus Mode that eliminates UI clutter during coding sprints.",
      "Integrate high-speed Groq AI assistance for instant syntax, debugging, and ideation help.",
      "Maintain zero-friction tool switching without tab explosion.",
    ],
    constraints: [
      "Fast load times with zero heavy desktop installation requirements.",
      "Seamless embedded integration with major web productivity tools.",
      "Lightweight resource consumption to preserve laptop battery at hackathon venues.",
    ],
    solution:
      "Independently designed and built a browser-based operating cockpit using React and Tailwind CSS. The workspace houses modular tool docks for Trello, Figma, Draw.io, Google Docs, and Notion, backed by an ultra-fast Groq AI chat sidebar for on-demand engineering assistance.",
    keyFlows: [
      "Participant launches HackOS and connects sprint boards (Trello, Notion, Figma).",
      "Team toggles 'Focus Mode' during deep coding blocks to minimize distracting elements.",
      "Developer opens the Groq AI panel for rapid architectural advice or code snippet generation.",
      "Team reviews embedded Draw.io architecture diagrams and Google Docs submission drafts in parallel.",
    ],
    architectureDiagramType: "hackos",
    architectureDescription:
      "Modular single-page application orchestrating external productivity embeds, a centralized state manager, and an asynchronous Groq API client interface.",
    technicalDecisions: [
      {
        decision: "Unified single-page workspace with embedded tool docks",
        rationale: "Keeps all project resources visible and switchable within one tab, eliminating 20+ open browser windows.",
        tradeoff: "Requires managing iframe sandboxing and responsive scaling across diverse external tools.",
      },
      {
        decision: "Groq API for integrated AI assistance",
        rationale: "Near-instantaneous token generation speeds (500+ tokens/sec) provide instant feedback during tight hackathon deadlines.",
        tradeoff: "Requires handling API key storage securely on the client.",
      },
      {
        decision: "Tailwind CSS with minimal custom styling",
        rationale: "Rapid component assembly with tiny production CSS bundle size and predictable layout behavior.",
        tradeoff: "Requires strict consistency in utility classes across widget containers.",
      },
    ],
    challenges: [
      {
        challenge: "Embedding multiple complex web tools without browser performance degradation",
        solution: "Implemented lazy-loading on tool docks so heavy embeds (like Figma and Draw.io) only initialize when their respective tabs are activated.",
      },
      {
        challenge: "Balancing feature richness with a truly distraction-free interface",
        solution: "Designed a dedicated one-key 'Focus Mode' that collapses all tool docks into a minimal timer and scratchpad.",
      },
    ],
    featureStatus: {
      implemented: [
        "Centralized multi-tool dock integrating Trello, Figma, Draw.io, Notion, and Google Docs",
        "Distraction-free Focus Mode for dedicated coding sessions",
        "High-speed AI assistant powered by the Groq API for instant engineering answers",
        "Responsive workspace layout supporting dual-pane tool exploration",
      ],
      partiallyImplemented: [
        "Customizable keyboard shortcuts for rapid tool docking",
        "Local sprint countdown timer with auditory milestones",
      ],
      planned: [
        "Shared team workspace rooms via WebSockets",
        "Direct GitHub issue synchronization within the task panel",
      ],
    },
    outcomesAndLearnings: [
      "Validated the concept that consolidating developer tools into a single cockpit drastically reduces context switching.",
      "Gained deep experience integrating the high-speed Groq API and managing multi-embed iframe state.",
      "Created a tool born directly out of personal hackathon participation that solves real sprint pain points.",
    ],
    techStack: [
      {
        category: "Frontend Architecture",
        items: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "AI & External Integrations",
        items: ["Groq API", "Trello API", "Figma Embeds", "Draw.io", "Notion", "Google Docs"],
      },
      {
        category: "Tooling & Deployment",
        items: ["Vite", "Lucide React", "Vercel", "Git"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006",
  },

  "legal-arena": {
    slug: "legal-arena",
    title: "LegalArena",
    number: "04",
    tagline: "AI-powered legal reasoning & multi-agent courtroom simulation",
    category: "Agentic AI · Multi-Agent Systems · RAG",
    role: "Agent Architecture & Orchestration Lead",
    ownership: "Team Project (Architecture & Agent Lead)",
    timeframe: "2024 – 2025",
    heroImage: "/projects/placeholder-legalarena.svg",
    heroImageAlt: "LegalArena AI multi-agent courtroom simulation interface",
    overview:
      "LegalArena is an AI-powered courtroom simulation system that uses specialized AI agents to simulate adversarial legal reasoning. Built as a team engineering project, it coordinates three specialized autonomous agents—Prosecution, Defence, and Judge—orchestrated through LangGraph to model multi-round adversarial debates grounded in case law retrieved from ChromaDB.",
    problem:
      "Legal preparation requires evaluating how arguments will be scrutinized from opposing perspectives. However, single-prompt LLMs struggle with complex multi-perspective debates: they conflate opposing positions, fail to identify argumentative fallacies, and lack structured grounding in relevant statutory precedents.",
    goals: [
      "Design a deterministic multi-agent courtroom simulation modeling adversarial legal argumentation.",
      "Implement three specialized agents (Prosecution, Defence, Judge) with distinct role personas and objectives.",
      "Orchestrate multi-round debate transitions and structured turn-taking using LangGraph.",
      "Ground all legal arguments in relevant case law and statutory records using ChromaDB vector search.",
      "Produce a reasoned, structured judicial verdict evaluating the strength of each side's arguments.",
    ],
    constraints: [
      "Agents must maintain strict adversarial separation without bleeding into opposing arguments.",
      "Arguments must cite retrieved case law precedents rather than inventing fictional case citations.",
      "Debate workflows must terminate deterministically within a configured round limit without infinite loop recursion.",
    ],
    solution:
      "Co-designed and implemented the complete multi-agent architecture. Specialized Prosecution and Defence agents were developed using LangChain to generate claims, challenge counterarguments, and cite precedents retrieved from ChromaDB. The entire debate state machine was orchestrated via LangGraph, concluding with an impartial Judge Agent that renders a structured verdict.",
    keyFlows: [
      "User submits a legal case brief with factual background and charges.",
      "ChromaDB executes vector search to retrieve relevant statutory precedents and landmark rulings.",
      "Prosecution Agent constructs initial legal charges supported by retrieved citations.",
      "Defence Agent analyzes prosecution claims, identifies weaknesses, and presents counter-arguments.",
      "LangGraph manages multi-round rebuttal cycles, updating shared debate state.",
      "Judge Agent analyzes argument validity, cites precedent adherence, and produces a final reasoned verdict.",
    ],
    architectureDiagramType: "legal-arena",
    architectureDescription:
      "LangGraph cyclical state machine coordinating Prosecution and Defence LangChain agents over a ChromaDB vector store, mediated by an authoritative Judge Agent evaluating arguments.",
    technicalDecisions: [
      {
        decision: "LangGraph for multi-agent state orchestration instead of linear chains",
        rationale: "Courtroom debates are cyclical and stateful. LangGraph natively models conditional edges, multi-round turns, and deterministic termination.",
        tradeoff: "Higher initial architectural complexity compared to simple LangChain SequentialChains.",
      },
      {
        decision: "ChromaDB for statutory and case law vector storage",
        rationale: "Fast local vector retrieval with minimal setup, ideal for embedding legal statutes and factual case files.",
        tradeoff: "Requires chunking legal documents carefully to avoid splitting statutory definitions.",
      },
      {
        decision: "Three specialized role-prompted agents instead of a single general LLM",
        rationale: "Separating personas forces authentic adversarial rigor. The prosecution strictly argues guilt, the defence strictly defends, and the judge remains neutral.",
        tradeoff: "Triples the token usage per debate round compared to a single aggregated prompt.",
      },
    ],
    challenges: [
      {
        challenge: "Preventing opposing agents from conceding too early or repeating identical rebuttals",
        solution: "Engineered strict role prompts with LangGraph state tracking that forces each agent to explicitly address points raised in the immediately preceding opponent turn.",
      },
      {
        challenge: "Ensuring case law retrieval accurately aligns with specific legal claims",
        solution: "Implemented metadata filtering in ChromaDB and similarity threshold gating, preventing agents from hallucinating case citations when no matching precedent exists.",
      },
    ],
    featureStatus: {
      implemented: [
        "Three specialized autonomous legal agents (Prosecution, Defence, Judge) via LangChain",
        "LangGraph state machine orchestrating multi-round adversarial debate loops",
        "ChromaDB legal precedent retrieval pipeline (RAG) for grounded statutory citations",
        "Structured judicial verdict generation evaluating argument strength and evidence",
        "Real-time streaming of courtroom debate arguments to the web interface",
      ],
      partiallyImplemented: [
        "User intervention mode allowing human attorneys to inject new evidence mid-debate",
        "Exporting full courtroom transcripts to formal legal brief formats",
      ],
      planned: [
        "Jurisdiction-specific statutory modules (e.g. Indian Penal Code vs Common Law)",
        "Automated cross-examination agent for simulated witness questioning",
      ],
    },
    individualContribution: [
      "Designed the complete 3-agent adversarial architecture (Prosecution, Defence, Judge)",
      "Defined individual agent responsibilities, prompting strategies, and adversarial constraints",
      "Implemented the LangChain agent components with structured schema outputs",
      "Engineered the cyclical LangGraph orchestration state machine and transition conditions",
      "Coordinated multi-agent debate-state transitions and synchronized with backend API endpoints",
    ],
    outcomesAndLearnings: [
      "Mastered multi-agent system design, cyclical state orchestration with LangGraph, and RAG architectures.",
      "Demonstrated that adversarial multi-agent dynamics produce far deeper, more nuanced reasoning than single-prompt LLMs.",
      "Proved the viability of applied AI simulations for professional legal analysis and student courtroom preparation.",
    ],
    techStack: [
      {
        category: "Agentic AI & Orchestration",
        items: ["LangGraph", "LangChain", "OpenAI API", "Google Gemini API"],
      },
      {
        category: "Vector Search & RAG",
        items: ["ChromaDB", "Python Embeddings", "Document Ingestion Pipeline"],
      },
      {
        category: "Full-Stack Web & API",
        items: ["Python", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006",
  },
};
