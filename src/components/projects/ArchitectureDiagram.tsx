interface ArchitectureDiagramProps {
  type: "biznexus" | "burst" | "hackos" | "legal-arena";
  title: string;
}

export function ArchitectureDiagram({ type, title }: ArchitectureDiagramProps) {
  if (type === "legal-arena") {
    return (
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full border border-[#C7D2FE]">
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
          <rect x="20" y="40" width="160" height="280" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="100" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
            WEB INTERFACE
          </text>
          <rect x="35" y="95" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="125" fill="#0F172A" text-anchor="middle" font-family="monospace">Next.js UI</text>
          <rect x="35" y="160" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="190" fill="#475569" text-anchor="middle" font-family="monospace">Debate Stream</text>
          <rect x="35" y="225" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="255" fill="#475569" text-anchor="middle" font-family="monospace">Verdict Modal</text>

          {/* Connection to Gateway */}
          <path d="M180 120 L230 120" stroke="#4F46E5" stroke-width="2" />
          <path d="M230 185 L180 185" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 4" />

          {/* FastAPI Gateway */}
          <rect x="230" y="40" width="160" height="280" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="310" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
            FASTAPI GATEWAY
          </text>
          <rect x="245" y="95" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="310" y="125" fill="#0F172A" text-anchor="middle" font-family="monospace">Case Ingestion</text>
          <rect x="245" y="160" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="310" y="190" fill="#475569" text-anchor="middle" font-family="monospace">SSE Streamer</text>
          <rect x="245" y="225" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="310" y="255" fill="#475569" text-anchor="middle" font-family="monospace">State Manager</text>

          {/* Connection to LangGraph */}
          <path d="M390 120 L440 120" stroke="#4F46E5" stroke-width="2" />

          {/* LangGraph Orchestrator & 3 Agents */}
          <rect x="440" y="40" width="270" height="280" rx="10" fill="#EEF2FF" stroke="#C7D2FE" />
          <text x="575" y="70" fill="#4338CA" font-weight="700" text-anchor="middle" font-family="sans-serif">
            LANGGRAPH ORCHESTRATION
          </text>

          {/* Prosecution Agent */}
          <rect x="455" y="90" width="240" height="55" rx="6" fill="#FFFFFF" stroke="#C7D2FE" />
          <text x="575" y="115" fill="#4338CA" font-weight="600" text-anchor="middle" font-family="sans-serif">
            1. Prosecution Agent (LangChain)
          </text>
          <text x="575" y="133" fill="#64748B" font-size="10" text-anchor="middle" font-family="monospace">
            Constructs charges & cites precedent
          </text>

          {/* Defence Agent */}
          <rect x="455" y="155" width="240" height="55" rx="6" fill="#FFFFFF" stroke="#A7F3D0" />
          <text x="575" y="180" fill="#065F46" font-weight="600" text-anchor="middle" font-family="sans-serif">
            2. Defence Agent (LangChain)
          </text>
          <text x="575" y="198" fill="#64748B" font-size="10" text-anchor="middle" font-family="monospace">
            Challenges claims & counters arguments
          </text>

          {/* Judge Agent */}
          <rect x="455" y="220" width="240" height="55" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
          <text x="575" y="245" fill="#0F172A" font-weight="600" text-anchor="middle" font-family="sans-serif">
            3. Judge Agent (Evaluator)
          </text>
          <text x="575" y="263" fill="#64748B" font-size="10" text-anchor="middle" font-family="monospace">
            Evaluates debate & issues verdict
          </text>

          {/* Connection to ChromaDB */}
          <path d="M710 120 L760 120" stroke="#4F46E5" stroke-width="2" />
          <path d="M710 180 L760 180" stroke="#059669" stroke-width="2" />

          {/* Vector Store (ChromaDB) */}
          <rect x="760" y="40" width="120" height="280" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
          <text x="820" y="70" fill="#065F46" font-weight="700" text-anchor="middle" font-family="sans-serif">
            RAG / DB
          </text>
          <rect x="770" y="95" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#A7F3D0" />
          <text x="820" y="125" fill="#065F46" font-weight="600" text-anchor="middle" font-family="monospace">ChromaDB</text>
          <text x="820" y="142" fill="#64748B" font-size="9" text-anchor="middle" font-family="sans-serif">Vector Search</text>

          <rect x="770" y="170" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#A7F3D0" />
          <text x="820" y="200" fill="#065F46" font-weight="600" text-anchor="middle" font-family="monospace">Case Law</text>
          <text x="820" y="217" fill="#64748B" font-size="9" text-anchor="middle" font-family="sans-serif">Statutory Precedents</text>
        </svg>
      </div>
    );
  }

  if (type === "biznexus") {
    return (
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full border border-[#C7D2FE]">
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
          <rect x="20" y="40" width="160" height="250" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="100" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
            WEB CLIENT
          </text>
          <rect x="35" y="95" width="130" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="122" fill="#0F172A" text-anchor="middle" font-family="monospace">React UI</text>
          <rect x="35" y="150" width="130" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="177" fill="#475569" text-anchor="middle" font-family="monospace">Metrics Cards</text>
          <rect x="35" y="205" width="130" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="100" y="232" fill="#475569" text-anchor="middle" font-family="monospace">Co-Pilot Chat</text>

          <path d="M180 120 L230 120" stroke="#4F46E5" stroke-width="2" />

          {/* Layer 2: API Gateway */}
          <rect x="230" y="40" width="170" height="250" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="315" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
            FASTAPI BACKEND
          </text>
          <rect x="245" y="95" width="140" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="315" y="122" fill="#0F172A" text-anchor="middle" font-family="monospace">REST API Layer</text>
          <rect x="245" y="150" width="140" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="315" y="177" fill="#475569" text-anchor="middle" font-family="monospace">Pydantic Models</text>
          <rect x="245" y="205" width="140" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="315" y="232" fill="#475569" text-anchor="middle" font-family="monospace">Analytics Service</text>

          <path d="M400 120 L450 120" stroke="#4F46E5" stroke-width="2" />

          {/* Layer 3: AI Co-Pilot Pipeline */}
          <rect x="450" y="40" width="220" height="250" rx="10" fill="#EEF2FF" stroke="#C7D2FE" />
          <text x="560" y="70" fill="#4338CA" font-weight="700" text-anchor="middle" font-family="sans-serif">
            APPLIED AI CO-PILOT
          </text>
          <rect x="465" y="95" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="560" y="120" fill="#0F172A" text-anchor="middle" font-family="monospace">Natural Query Parser</text>
          <rect x="465" y="145" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="560" y="170" fill="#0F172A" text-anchor="middle" font-family="monospace">Metric Extraction</text>
          <rect x="465" y="195" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="560" y="220" fill="#475569" text-anchor="middle" font-family="monospace">Executive Summarizer</text>

          <path d="M670 120 L720 120" stroke="#4F46E5" stroke-width="2" />

          {/* Layer 4: Storage */}
          <rect x="720" y="40" width="140" height="250" rx="10" fill="#F1F5F9" stroke="#CBD5E1" />
          <text x="790" y="70" fill="#334155" font-weight="700" text-anchor="middle" font-family="sans-serif">
            DATABASE
          </text>
          <rect x="730" y="95" width="120" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="790" y="122" fill="#0F172A" text-anchor="middle" font-family="monospace">SQLite Database</text>
          <rect x="730" y="150" width="120" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="790" y="177" fill="#475569" text-anchor="middle" font-family="monospace">Sales & Profits</text>
          <rect x="730" y="205" width="120" height="45" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="790" y="232" fill="#475569" text-anchor="middle" font-family="monospace">Inventory Logs</text>
        </svg>
      </div>
    );
  }

  if (type === "burst") {
    return (
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
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
          <rect x="30" y="40" width="230" height="210" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="145" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
            REACT 19 + VITE CLIENT
          </text>
          <rect x="45" y="95" width="200" height="35" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="145" y="118" fill="#0F172A" text-anchor="middle" font-family="monospace">Custom WYSIWYG Editor</text>
          <rect x="45" y="140" width="200" height="35" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="145" y="163" fill="#475569" text-anchor="middle" font-family="monospace">HTML5 Canvas Image Compression</text>
          <rect x="45" y="185" width="200" height="35" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="145" y="208" fill="#475569" text-anchor="middle" font-family="monospace">Global & Following Feeds</text>

          <path d="M260 145 L320 145" stroke="#4F46E5" stroke-width="2" />

          {/* Firebase Authentication & Services */}
          <rect x="320" y="40" width="240" height="210" rx="10" fill="#EEF2FF" stroke="#C7D2FE" />
          <text x="440" y="70" fill="#4338CA" font-weight="700" text-anchor="middle" font-family="sans-serif">
            FIREBASE SERVICES
          </text>
          <rect x="335" y="95" width="210" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="440" y="120" fill="#0F172A" text-anchor="middle" font-family="monospace">Firebase Authentication</text>
          <rect x="335" y="145" width="210" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="440" y="170" fill="#4338CA" text-anchor="middle" font-family="monospace">Cloud Firestore (Real-Time)</text>
          <rect x="335" y="195" width="210" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="440" y="220" fill="#64748B" text-anchor="middle" font-family="monospace">Firebase Storage (Media)</text>

          <path d="M560 145 L620 145" stroke="#059669" stroke-width="2" />

          {/* Analytics & Hosting */}
          <rect x="620" y="40" width="230" height="210" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
          <text x="735" y="70" fill="#065F46" font-weight="700" text-anchor="middle" font-family="sans-serif">
            ANALYTICS & HOSTING
          </text>
          <rect x="635" y="95" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="735" y="120" fill="#0F172A" text-anchor="middle" font-family="monospace">Creator Dashboard</text>
          <rect x="635" y="145" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="735" y="170" fill="#065F46" text-anchor="middle" font-family="monospace">Engagement Metrics</text>
          <rect x="635" y="195" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="735" y="220" fill="#64748B" text-anchor="middle" font-family="monospace">Vercel Edge Deployment</text>
        </svg>
      </div>
    );
  }

  // HackOS Architecture Diagram
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
          System Architecture · {title}
        </span>
        <span className="font-mono text-[11px] text-[#0F172A] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full border border-[#CBD5E1]">
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
        <rect x="30" y="40" width="230" height="210" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="145" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
          HACKOS COCKPIT
        </text>
        <rect x="45" y="95" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="145" y="120" fill="#0F172A" text-anchor="middle" font-family="monospace">Focus Mode Controller</text>
        <rect x="45" y="145" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="145" y="170" fill="#475569" text-anchor="middle" font-family="monospace">Tool Dock Switcher</text>
        <rect x="45" y="195" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="145" y="220" fill="#475569" text-anchor="middle" font-family="monospace">Resource Manager</text>

        <path d="M260 145 L320 145" stroke="#4F46E5" stroke-width="2" />

        {/* Embedded External Tools */}
        <rect x="320" y="40" width="280" height="210" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="460" y="70" fill="#0F172A" font-weight="700" text-anchor="middle" font-family="sans-serif">
          CONNECTED SPRINT TOOLS
        </text>
        <rect x="340" y="95" width="240" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="460" y="116" fill="#0F172A" text-anchor="middle" font-family="monospace">Trello & Notion Boards</text>
        <rect x="340" y="132" width="240" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="460" y="153" fill="#0F172A" text-anchor="middle" font-family="monospace">Figma & Draw.io Embeds</text>
        <rect x="340" y="169" width="240" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="460" y="190" fill="#475569" text-anchor="middle" font-family="monospace">Google Docs Integration</text>

        <path d="M600 145 L660 145" stroke="#4F46E5" stroke-width="2" />

        {/* AI & Intelligence */}
        <rect x="660" y="40" width="190" height="210" rx="10" fill="#EEF2FF" stroke="#C7D2FE" />
        <text x="755" y="70" fill="#4338CA" font-weight="700" text-anchor="middle" font-family="sans-serif">
          AI ASSISTANCE
        </text>
        <rect x="675" y="95" width="160" height="50" rx="6" fill="#FFFFFF" stroke="#C7D2FE" />
        <text x="755" y="125" fill="#4338CA" font-weight="600" text-anchor="middle" font-family="monospace">Groq API</text>
        <text x="755" y="140" fill="#64748B" font-size="9" text-anchor="middle" font-family="sans-serif">Ultra Low-Latency LLM</text>

        <rect x="675" y="155" width="160" height="50" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <text x="755" y="185" fill="#0F172A" text-anchor="middle" font-family="monospace">Context Assistant</text>
        <text x="755" y="200" fill="#64748B" font-size="9" text-anchor="middle" font-family="sans-serif">Instant Syntax & Code</text>
      </svg>
    </div>
  );
}
