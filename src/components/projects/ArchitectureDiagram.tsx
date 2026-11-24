interface ArchitectureDiagramProps {
  type: "biznexus" | "burst" | "hackos" | "legal-arena";
  title: string;
}

export function ArchitectureDiagram({ type, title }: ArchitectureDiagramProps) {
  if (type === "legal-arena") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-indigo-300 bg-indigo-500/15 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
            LangGraph Multi-Agent Cyclical State Machine
          </span>
        </div>

        <svg
          viewBox="0 0 900 360"
          className="w-full h-auto text-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Web Client Tier */}
          <rect x="20" y="40" width="160" height="280" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="100" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            WEB INTERFACE
          </text>
          <rect x="35" y="95" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="125" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Next.js UI</text>
          <rect x="35" y="160" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="190" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Debate Stream</text>
          <rect x="35" y="225" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="255" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Verdict Modal</text>

          {/* Connection to Gateway */}
          <path d="M180 120 L230 120" stroke="#6366F1" strokeWidth="2" />
          <path d="M230 185 L180 185" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />

          {/* FastAPI Gateway */}
          <rect x="230" y="40" width="160" height="280" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="310" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            FASTAPI GATEWAY
          </text>
          <rect x="245" y="95" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="310" y="125" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Case Ingestion</text>
          <rect x="245" y="160" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="310" y="190" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">SSE Streamer</text>
          <rect x="245" y="225" width="130" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="310" y="255" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">State Manager</text>

          {/* Connection to LangGraph */}
          <path d="M390 120 L440 120" stroke="#6366F1" strokeWidth="2" />

          {/* LangGraph Orchestrator & 3 Agents */}
          <rect x="440" y="40" width="270" height="280" rx="10" fill="#1E1B4B" stroke="#6366F1" strokeOpacity="0.4" />
          <text x="575" y="70" fill="#A5B4FC" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            LANGGRAPH ORCHESTRATION
          </text>

          {/* Prosecution Agent */}
          <rect x="455" y="90" width="240" height="55" rx="6" fill="#111827" stroke="#EF4444" strokeOpacity="0.4" />
          <text x="575" y="115" fill="#F87171" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            1. Prosecution Agent (LangChain)
          </text>
          <text x="575" y="133" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="monospace">
            Constructs charges & cites precedent
          </text>

          {/* Defence Agent */}
          <rect x="455" y="155" width="240" height="55" rx="6" fill="#111827" stroke="#38BDF8" strokeOpacity="0.4" />
          <text x="575" y="180" fill="#38BDF8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            2. Defence Agent (LangChain)
          </text>
          <text x="575" y="198" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="monospace">
            Challenges claims & counters arguments
          </text>

          {/* Judge Agent */}
          <rect x="455" y="220" width="240" height="55" rx="6" fill="#111827" stroke="#A855F7" strokeOpacity="0.4" />
          <text x="575" y="245" fill="#C084FC" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            3. Judge Agent (Evaluator)
          </text>
          <text x="575" y="263" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="monospace">
            Evaluates debate & issues verdict
          </text>

          {/* Connection to ChromaDB */}
          <path d="M710 120 L760 120" stroke="#6366F1" strokeWidth="2" />
          <path d="M710 180 L760 180" stroke="#10B981" strokeWidth="2" />

          {/* Vector Store (ChromaDB) */}
          <rect x="760" y="40" width="120" height="280" rx="10" fill="#064E3B" fillOpacity="0.3" stroke="#10B981" strokeOpacity="0.4" />
          <text x="820" y="70" fill="#34D399" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            RAG / DB
          </text>
          <rect x="770" y="95" width="100" height="60" rx="6" fill="#111827" stroke="#10B981" strokeOpacity="0.4" />
          <text x="820" y="125" fill="#34D399" fontWeight="600" textAnchor="middle" fontFamily="monospace">ChromaDB</text>
          <text x="820" y="142" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Vector Search</text>

          <rect x="770" y="170" width="100" height="60" rx="6" fill="#111827" stroke="#10B981" strokeOpacity="0.4" />
          <text x="820" y="200" fill="#34D399" fontWeight="600" textAnchor="middle" fontFamily="monospace">Case Law</text>
          <text x="820" y="217" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Statutory Precedents</text>
        </svg>
      </div>
    );
  }

  if (type === "biznexus") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-indigo-300 bg-indigo-500/15 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
            Decoupled Co-Pilot & Metric Ingestion Architecture
          </span>
        </div>

        <svg
          viewBox="0 0 880 320"
          className="w-full h-auto text-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Client UI */}
          <rect x="20" y="40" width="160" height="250" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="100" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            WEB CLIENT
          </text>
          <rect x="35" y="95" width="130" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="122" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">React UI</text>
          <rect x="35" y="150" width="130" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="177" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Metrics Cards</text>
          <rect x="35" y="205" width="130" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="100" y="232" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Co-Pilot Chat</text>

          <path d="M180 120 L230 120" stroke="#6366F1" strokeWidth="2" />

          {/* Layer 2: API Gateway */}
          <rect x="230" y="40" width="170" height="250" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="315" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            FASTAPI BACKEND
          </text>
          <rect x="245" y="95" width="140" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="315" y="122" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">REST API Layer</text>
          <rect x="245" y="150" width="140" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="315" y="177" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Pydantic Models</text>
          <rect x="245" y="205" width="140" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="315" y="232" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Analytics Service</text>

          <path d="M400 120 L450 120" stroke="#6366F1" strokeWidth="2" />

          {/* Layer 3: AI Co-Pilot Pipeline */}
          <rect x="450" y="40" width="220" height="250" rx="10" fill="#1E1B4B" fillOpacity="0.4" stroke="#6366F1" strokeOpacity="0.4" />
          <text x="560" y="70" fill="#A5B4FC" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            APPLIED AI CO-PILOT
          </text>
          <rect x="465" y="95" width="190" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="560" y="120" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Natural Query Parser</text>
          <rect x="465" y="145" width="190" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="560" y="170" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Metric Extraction</text>
          <rect x="465" y="195" width="190" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="560" y="220" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Executive Summarizer</text>

          <path d="M670 120 L720 120" stroke="#6366F1" strokeWidth="2" />

          {/* Layer 4: Storage */}
          <rect x="720" y="40" width="140" height="250" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="790" y="70" fill="#CBD5E1" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            DATABASE
          </text>
          <rect x="730" y="95" width="120" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="790" y="122" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">SQLite Database</text>
          <rect x="730" y="150" width="120" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="790" y="177" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Sales & Profits</text>
          <rect x="730" y="205" width="120" height="45" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="790" y="232" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Inventory Logs</text>
        </svg>
      </div>
    );
  }

  if (type === "burst") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            React 19 + Firebase Real-Time Architecture
          </span>
        </div>

        <svg
          viewBox="0 0 880 280"
          className="w-full h-auto text-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Client Components */}
          <rect x="30" y="40" width="230" height="210" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
          <text x="145" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            REACT 19 + VITE CLIENT
          </text>
          <rect x="45" y="95" width="200" height="35" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="145" y="118" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Custom WYSIWYG Editor</text>
          <rect x="45" y="140" width="200" height="35" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="145" y="163" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">HTML5 Canvas Image Compression</text>
          <rect x="45" y="185" width="200" height="35" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="145" y="208" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Global & Following Feeds</text>

          <path d="M260 145 L320 145" stroke="#6366F1" strokeWidth="2" />

          {/* Firebase Authentication & Services */}
          <rect x="320" y="40" width="240" height="210" rx="10" fill="#1E1B4B" fillOpacity="0.4" stroke="#6366F1" strokeOpacity="0.4" />
          <text x="440" y="70" fill="#A5B4FC" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            FIREBASE SERVICES
          </text>
          <rect x="335" y="95" width="210" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="440" y="120" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Firebase Authentication</text>
          <rect x="335" y="145" width="210" height="40" rx="6" fill="#111827" stroke="#6366F1" strokeOpacity="0.4" />
          <text x="440" y="170" fill="#818CF8" textAnchor="middle" fontFamily="monospace">Cloud Firestore (Real-Time)</text>
          <rect x="335" y="195" width="210" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="440" y="220" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Firebase Storage (Media)</text>

          <path d="M560 145 L620 145" stroke="#10B981" strokeWidth="2" />

          {/* Analytics & Hosting */}
          <rect x="620" y="40" width="230" height="210" rx="10" fill="#064E3B" fillOpacity="0.3" stroke="#10B981" strokeOpacity="0.4" />
          <text x="735" y="70" fill="#34D399" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            ANALYTICS & HOSTING
          </text>
          <rect x="635" y="95" width="200" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="735" y="120" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Creator Dashboard</text>
          <rect x="635" y="145" width="200" height="40" rx="6" fill="#111827" stroke="#10B981" strokeOpacity="0.4" />
          <text x="735" y="170" fill="#34D399" textAnchor="middle" fontFamily="monospace">Engagement Metrics</text>
          <rect x="635" y="195" width="200" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
          <text x="735" y="220" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Vercel Edge Deployment</text>
        </svg>
      </div>
    );
  }

  // HackOS Architecture Diagram
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
          System Architecture · {title}
        </span>
        <span className="font-mono text-[11px] text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-white/10">
          Centralized Post-Hackathon Cockpit & Groq Integration
        </span>
      </div>

      <svg
        viewBox="0 0 880 280"
        className="w-full h-auto text-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core State Bus */}
        <rect x="30" y="40" width="230" height="210" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
        <text x="145" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
          HACKOS COCKPIT
        </text>
        <rect x="45" y="95" width="200" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="145" y="120" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Focus Mode Controller</text>
        <rect x="45" y="145" width="200" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="145" y="170" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Tool Dock Switcher</text>
        <rect x="45" y="195" width="200" height="40" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="145" y="220" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Resource Manager</text>

        <path d="M260 145 L320 145" stroke="#6366F1" strokeWidth="2" />

        {/* Embedded External Tools */}
        <rect x="320" y="40" width="280" height="210" rx="10" fill="#0B0F19" stroke="rgba(255,255,255,0.12)" />
        <text x="460" y="70" fill="#FFFFFF" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
          CONNECTED SPRINT TOOLS
        </text>
        <rect x="340" y="95" width="240" height="32" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="460" y="116" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Trello & Notion Boards</text>
        <rect x="340" y="132" width="240" height="32" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="460" y="153" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Figma & Draw.io Embeds</text>
        <rect x="340" y="169" width="240" height="32" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="460" y="190" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">Google Docs Integration</text>

        <path d="M600 145 L660 145" stroke="#6366F1" strokeWidth="2" />

        {/* AI & Intelligence */}
        <rect x="660" y="40" width="190" height="210" rx="10" fill="#1E1B4B" fillOpacity="0.4" stroke="#6366F1" strokeOpacity="0.4" />
        <text x="755" y="70" fill="#A5B4FC" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
          AI ASSISTANCE
        </text>
        <rect x="675" y="95" width="160" height="50" rx="6" fill="#111827" stroke="#6366F1" strokeOpacity="0.4" />
        <text x="755" y="125" fill="#818CF8" fontWeight="600" textAnchor="middle" fontFamily="monospace">Groq API</text>
        <text x="755" y="140" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Ultra Low-Latency LLM</text>

        <rect x="675" y="155" width="160" height="50" rx="6" fill="#111827" stroke="rgba(255,255,255,0.15)" />
        <text x="755" y="185" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">Context Assistant</text>
        <text x="755" y="200" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Instant Syntax & Code</text>
      </svg>
    </div>
  );
}
