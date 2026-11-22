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
  timeframe: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string;
  problem: string;
  goals: string[];
  constraints: string[];
  solution: string;
  keyFlows: string[];
  architectureDiagramType: "biznexus" | "burst" | "hackos";
  architectureDescription: string;
  technicalDecisions: TechnicalDecision[];
  challenges: ChallengeResolution[];
  featureStatus: {
    implemented: string[];
    partiallyImplemented: string[];
    planned: string[];
  };
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
    tagline: "AI-powered business intelligence & multi-agent co-pilot",
    category: "AI Engineering · Agentic Systems",
    role: "Lead Engineer / AI Architect",
    timeframe: "2024 – 2025",
    heroImage: "/projects/placeholder-biznexus.svg",
    heroImageAlt: "BizNexus system architecture and dashboard preview",
    overview:
      "BizNexus is an experimental business intelligence co-pilot designed to augment executive and operations teams. It coordinates multi-agent LLM pipelines to query corporate databases, reconcile conflicting reports, and generate traceable, cited executive summaries.",
    problem:
      "Modern SMBs and project teams often accumulate fragmented data across spreadsheets, databases, and reporting portals. Manually aggregating comparative data is time-consuming, while naive single-prompt LLM wrappers hallucinate figures and fail on complex multi-step reasoning.",
    goals: [
      "Enable conversational queries against structured corporate data with deterministic calculations.",
      "Isolate LLM reasoning from mathematical calculations using tool execution patterns.",
      "Maintain citation and provenance tracking for every figure presented in summaries.",
    ],
    constraints: [
      "Operate within predictable API token budgets without runaway loop recursion.",
      "Strict data privacy: no training on proprietary customer inputs.",
      "Fast endpoint response times (<2s for query routing).",
    ],
    solution:
      "Architected a hub-and-spoke multi-agent system where a Query Planner breaks high-level business questions into discrete sub-tasks. Dedicated specialized agents execute database queries, statistical math, and document synthesis, while a Verifier Agent cross-checks outputs against raw telemetry before returning to the UI.",
    keyFlows: [
      "User submits comparative telemetry prompt (e.g., 'Compare Q3 vs Q4 churn rates').",
      "Query Planner agent dispatches schema discovery and SQL generation tools.",
      "Deterministic calculator agent executes exact arithmetic on returned rowsets.",
      "Synthesis agent compiles markdown report with footnote citations to raw database rows.",
    ],
    architectureDiagramType: "biznexus",
    architectureDescription:
      "A layered multi-agent pipeline decoupling the user-facing React UI, an asynchronous FastAPI gateway, and specialized LLM worker agents orchestrated with strict schema validation.",
    technicalDecisions: [
      {
        decision: "Python + FastAPI over Node.js for backend orchestration",
        rationale: "Rich native ecosystem for data analysis, vector operations, and async LLM streaming libraries.",
        tradeoff: "Slightly higher server memory baseline compared to lightweight Go or Rust microservices.",
      },
      {
        decision: "Deterministic math tool instead of LLM arithmetic",
        rationale: "LLMs frequently hallucinate floating-point arithmetic and statistical summaries.",
        tradeoff: "Required custom prompt engineering to force structured tool call emission.",
      },
      {
        decision: "SQLite with strict schemas for local prototyping",
        rationale: "Zero-dependency setup with rapid test iteration before cloud database migration.",
        tradeoff: "Limited concurrent write throughput under high distributed loads.",
      },
    ],
    challenges: [
      {
        challenge: "Agent hallucinations during multi-table SQL queries",
        solution: "Implemented an iterative self-correction loop where SQL execution errors are fed back into the agent alongside table schema definitions for automatic re-planning.",
      },
      {
        challenge: "High latency on multi-step reasoning chains",
        solution: "Parallelized independent tool queries using async asyncio.gather and streamed preliminary status indicators to the user interface.",
      },
    ],
    featureStatus: {
      implemented: [
        "Natural language to SQL query generation with schema grounding",
        "Deterministic arithmetic verification via sandboxed Python tools",
        "FastAPI async streaming endpoints with structured SSE events",
        "Interactive React dashboard with markdown export and citation popovers",
      ],
      partiallyImplemented: [
        "Automated PDF executive report generation",
        "Vector document retrieval (RAG) for unstructured PDF knowledge bases",
      ],
      planned: [
        "Multi-tenant role-based access control (RBAC)",
        "Automated scheduled alerting via Slack and email webhooks",
      ],
    },
    outcomesAndLearnings: [
      "Demonstrated that multi-agent decomposition with tool execution eliminates arithmetic errors that plague single-shot LLM queries.",
      "Gained hands-on expertise in asynchronous LLM stream handling, structured Pydantic schema validation, and prompt observability.",
      "Recognized that deterministic software guardrails are more valuable than larger model parameter sizes for enterprise trust.",
    ],
    techStack: [
      {
        category: "Backend & Orchestration",
        items: ["Python", "FastAPI", "Pydantic", "Asyncio", "OpenAI / Anthropic APIs"],
      },
      {
        category: "Frontend & UI",
        items: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
      },
      {
        category: "Storage & Tooling",
        items: ["SQLite", "Git", "Docker", "REST APIs"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006",
  },

  burst: {
    slug: "burst",
    title: "Burst",
    number: "02",
    tagline: "High-performance full-stack publishing & blogging application",
    category: "Full-Stack Web Development",
    role: "Full-Stack Developer",
    timeframe: "2024",
    heroImage: "/projects/placeholder-burst.svg",
    heroImageAlt: "Burst publishing application editorial layout and editor",
    overview:
      "Burst is a modern, responsive publishing platform engineered for technical writers and editorial teams. It emphasizes distraction-free authoring, instantaneous markdown preview, robust draft workflows, and clean responsive typography.",
    problem:
      "Many modern blogging platforms are either bloated with intrusive popups and trackers or require complex Git-based CI/CD workflows inaccessible to non-technical writers. Writers needed a fast, elegant publishing tool that respects typography and speed.",
    goals: [
      "Sub-second page navigation and zero cumulative layout shift (CLS).",
      "Real-time synchronized split-pane markdown editing with syntax highlighting.",
      "Role-based draft publishing workflows with preview sharing.",
    ],
    constraints: [
      "Must run smoothly on mobile browsers and lower-power laptops.",
      "Strict sanitization of user-submitted HTML/Markdown to prevent XSS attacks.",
      "Lightweight database queries avoiding N+1 feed resolution issues.",
    ],
    solution:
      "Engineered with Next.js App Router utilizing Server Components for cached, static-first public article delivery, while delegating interactive authoring to isolated client components. Implemented clean database relations and edge-cached feeds.",
    keyFlows: [
      "Author composes in split-view markdown editor with instant preview.",
      "Drafts are autosaved locally with background synchronization to the backend.",
      "Author submits draft for peer review or publishes immediately with slug validation.",
      "Readers browse responsive, paginated feeds optimized for reading comfort.",
    ],
    architectureDiagramType: "burst",
    architectureDescription:
      "Next.js App Router hybrid architecture utilizing React Server Components for article feeds and client components for editor interactivity, backed by relational storage.",
    technicalDecisions: [
      {
        decision: "Next.js App Router with Server Components for article views",
        rationale: "Articles are static content that benefit from server prerendering, fast TTFB, and minimal client JS bundle size.",
        tradeoff: "Requires clear separation of server-only and interactive client code boundaries.",
      },
      {
        decision: "Client-side markdown parsing with DOMPurify sanitization",
        rationale: "Immediate visual feedback during typing without roundtripping every keystroke to the server.",
        tradeoff: "Slight increase in client-side bundle size for the editor route.",
      },
      {
        decision: "Tailwind Typography plugin for editorial rendering",
        rationale: "Guarantees consistent, accessible font sizing, line height, and contrast out of the box.",
        tradeoff: "Slight customization needed to match custom brand design tokens.",
      },
    ],
    challenges: [
      {
        challenge: "Scroll synchronization between raw markdown editor and preview pane",
        solution: "Calculated proportional scroll offsets based on percentage heights rather than absolute pixel coordinates to account for rendered media variations.",
      },
      {
        challenge: "Preventing cross-site scripting (XSS) through custom markdown embeds",
        solution: "Configured strict DOMPurify hook whitelist and blocked raw executable scripts inside markdown render blocks.",
      },
    ],
    featureStatus: {
      implemented: [
        "Authenticated user sessions and profile management",
        "Full-screen split-pane markdown editor with live syntax styling",
        "Public publication feed with tag filtering and reading time estimation",
        "Responsive editorial reader layout adhering to light theme tokens",
      ],
      partiallyImplemented: [
        "Draft share link preview for unauthenticated reviewers",
        "Image upload optimization and CDN hosting pipeline",
      ],
      planned: [
        "Newsletter email dispatch integration",
        "Collaborative multi-cursor editing via WebSockets",
      ],
    },
    outcomesAndLearnings: [
      "Deepened understanding of React 19 Server vs Client component boundaries.",
      "Learned the critical value of input sanitization and secure session management in multi-user applications.",
      "Delivered a publishing interface that proves web typography and fast load speeds create superior reading experiences.",
    ],
    techStack: [
      {
        category: "Application Framework",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Data",
        items: ["Node.js", "Relational Database", "REST APIs"],
      },
      {
        category: "Authoring Tools",
        items: ["Markdown Parser", "DOMPurify", "Lucide React"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006/Burst_Blogging",
  },

  hackos: {
    slug: "hackos",
    title: "HackOS",
    number: "03",
    tagline: "Productivity & telemetry workspace for hackathon sprint teams",
    category: "Developer Tools · Productivity",
    role: "Frontend & Systems Engineer",
    timeframe: "2024",
    heroImage: "/projects/placeholder-hackos.svg",
    heroImageAlt: "HackOS cockpit interface showing sprint timer, task board, and scratchpad",
    overview:
      "HackOS is a focused productivity dashboard created to eliminate context switching during 24-to-48 hour hackathons. It integrates a live sprint countdown timer, milestone Kanban board, team scratchpad, and presentation quick links into a single unified browser workspace.",
    problem:
      "During intensive hackathons, team members frequently lose focus jumping between separate timers, task boards, scattered code snippets, and pitch slide links. Existing enterprise project management tools are overly complex and require too much setup during tight deadlines.",
    goals: [
      "Zero-setup onboarding: instant functionality in a single browser tab.",
      "Offline-first persistence so network dropouts at crowded hackathon venues never lose notes.",
      "Minimalist, low-latency UI that does not consume scarce laptop battery or CPU resources.",
    ],
    constraints: [
      "Must operate entirely client-side with no mandatory backend dependency.",
      "Instant loading (<300ms) with zero layout shifting.",
      "Accessible keyboard shortcuts for rapid scratchpad access during coding sprints.",
    ],
    solution:
      "Engineered an offline-first Single Page Application using React and TypeScript. State is managed through an optimized local event bus and synced to browser LocalStorage with schema validation. Features dedicated sprint tracking widgets and quick-capture notes.",
    keyFlows: [
      "Team initializes sprint duration (e.g., 24h) and inputs core pitch milestones.",
      "Developers use keyboard shortcuts to quickly jot architecture snippets and API endpoints.",
      "Timer emits visual notifications at key milestones (H-12, H-4 code freeze, H-1 pitch rehearsal).",
      "Export workspace telemetry as clean markdown for project submission forms.",
    ],
    architectureDiagramType: "hackos",
    architectureDescription:
      "Client-side event-driven state architecture with localStorage persistence, modular widget components, and responsive grid layout.",
    technicalDecisions: [
      {
        decision: "Zero-backend architecture with LocalStorage persistence",
        rationale: "Guarantees 100% offline uptime in convention centers with unstable Wi-Fi.",
        tradeoff: "Data is local to one browser unless exported manually as JSON/Markdown.",
      },
      {
        decision: "Single-bundle React + Tailwind without heavy component libraries",
        rationale: "Extremely fast execution, minimal memory consumption, and predictable rendering.",
        tradeoff: "Custom building of modal dialogs and drag-and-drop task ordering.",
      },
      {
        decision: "Keyboard-first navigation model",
        rationale: "Developers hate leaving the keyboard to manage task timers while coding.",
        tradeoff: "Required careful keyboard focus management to avoid accessibility conflicts.",
      },
    ],
    challenges: [
      {
        challenge: "Browser background throttling slowing down sprint countdown timer",
        solution: "Implemented timestamp-difference delta calculations against performance.now() and Date.now() rather than relying on naive setInterval ticks.",
      },
      {
        challenge: "Preventing data corruption when clearing browser caches",
        solution: "Added an automated one-click 'Export Workspace Backup' JSON button and clear confirmation dialogs before reset.",
      },
    ],
    featureStatus: {
      implemented: [
        "Precision sprint countdown timer with drift compensation",
        "Local milestone Kanban board with drag-and-drop progress columns",
        "Quick-capture scratchpad with auto-saving and markdown export",
        "Keyboard shortcut overlay for hands-free widget switching",
      ],
      partiallyImplemented: [
        "Peer-to-peer WebRTC state sync between teammates on local Wi-Fi",
      ],
      planned: [
        "GitHub repository commit activity widget via public REST API",
        "Integrated presentation slide timer with practice rehearsal mode",
      ],
    },
    outcomesAndLearnings: [
      "Validated that eliminating friction and latency during high-stakes hackathons directly increases developer output.",
      "Mastered resilient client-side state persistence and high-precision timing routines in JavaScript.",
      "Reinforced the product philosophy that simplicity and speed always beat over-engineered feature bloat.",
    ],
    techStack: [
      {
        category: "Client Architecture",
        items: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "State & Storage",
        items: ["Browser LocalStorage", "Custom Event Bus", "JSON Exporter"],
      },
      {
        category: "Tooling",
        items: ["Lucide React", "Vite / Next.js", "Vercel"],
      },
    ],
    githubUrl: "https://github.com/srikanta2006",
  },
};
