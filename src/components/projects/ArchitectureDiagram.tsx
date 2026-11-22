interface ArchitectureDiagramProps {
  type: "biznexus" | "burst" | "hackos";
  title: string;
}

export function ArchitectureDiagram({ type, title }: ArchitectureDiagramProps) {
  if (type === "biznexus") {
    return (
      <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5DD] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-[#6D5DFB] bg-[#F0EEFE] px-2 py-0.5 rounded">
            Decoupled Multi-Agent Pipeline
          </span>
        </div>

        <svg
          viewBox="0 0 880 340"
          className="w-full h-auto text-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Client UI */}
          <rect x="20" y="40" width="160" height="260" rx="8" fill="#F7F6F2" stroke="#E8E5DD" />
          <text x="100" y="70" fill="#171717" font-weight="600" text-anchor="middle" font-family="sans-serif">
            CLIENT TIER
          </text>
          <rect x="35" y="95" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="100" y="125" fill="#171717" text-anchor="middle" font-family="monospace">React UI</text>
          <rect x="35" y="160" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="100" y="190" fill="#706E6B" text-anchor="middle" font-family="monospace">SSE Stream Reader</text>
          <rect x="35" y="225" width="130" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="100" y="255" fill="#706E6B" text-anchor="middle" font-family="monospace">Citation Viewer</text>

          {/* Connection Arrow 1 */}
          <path d="M180 120 L230 120" stroke="#6D5DFB" stroke-width="2" marker-end="url(#arrow)" />
          <path d="M230 185 L180 185" stroke="#706E6B" stroke-width="2" stroke-dasharray="4 4" />

          {/* Layer 2: API Gateway */}
          <rect x="230" y="40" width="170" height="260" rx="8" fill="#F7F6F2" stroke="#E8E5DD" />
          <text x="315" y="70" fill="#171717" font-weight="600" text-anchor="middle" font-family="sans-serif">
            FASTAPI GATEWAY
          </text>
          <rect x="245" y="95" width="140" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="315" y="125" fill="#171717" text-anchor="middle" font-family="monospace">REST API Router</text>
          <rect x="245" y="160" width="140" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="315" y="190" fill="#706E6B" text-anchor="middle" font-family="monospace">Pydantic Schemas</text>
          <rect x="245" y="225" width="140" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="315" y="255" fill="#706E6B" text-anchor="middle" font-family="monospace">Auth & Rate Guard</text>

          {/* Connection Arrow 2 */}
          <path d="M400 120 L450 120" stroke="#6D5DFB" stroke-width="2" />

          {/* Layer 3: Agent Orchestrator */}
          <rect x="450" y="40" width="220" height="260" rx="8" fill="#F0EEFE" stroke="#6D5DFB" stroke-opacity="0.3" />
          <text x="560" y="70" fill="#6D5DFB" font-weight="600" text-anchor="middle" font-family="sans-serif">
            AGENT ORCHESTRATION
          </text>
          <rect x="465" y="95" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="560" y="120" fill="#171717" text-anchor="middle" font-family="monospace">1. Query Planner Agent</text>
          <rect x="465" y="145" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="560" y="170" fill="#171717" text-anchor="middle" font-family="monospace">2. SQL & Math Tools</text>
          <rect x="465" y="195" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="560" y="220" fill="#171717" text-anchor="middle" font-family="monospace">3. Verifier / Critic</text>
          <rect x="465" y="245" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="560" y="270" fill="#706E6B" text-anchor="middle" font-family="monospace">4. Synthesis Engine</text>

          {/* Connection Arrow 3 */}
          <path d="M670 120 L720 120" stroke="#6D5DFB" stroke-width="2" />
          <path d="M670 165 L720 225" stroke="#706E6B" stroke-width="2" />

          {/* Layer 4: Storage & Foundation */}
          <rect x="720" y="40" width="140" height="260" rx="8" fill="#F2F5EF" stroke="#B8C6A5" />
          <text x="790" y="70" fill="#4F5B40" font-weight="600" text-anchor="middle" font-family="sans-serif">
            DATA & MODELS
          </text>
          <rect x="730" y="95" width="120" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="790" y="125" fill="#171717" text-anchor="middle" font-family="monospace">LLM APIs</text>
          <rect x="730" y="160" width="120" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="790" y="190" fill="#171717" text-anchor="middle" font-family="monospace">SQLite DB</text>
          <rect x="730" y="225" width="120" height="50" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="790" y="255" fill="#706E6B" text-anchor="middle" font-family="monospace">Vector Index</text>
        </svg>
      </div>
    );
  }

  if (type === "burst") {
    return (
      <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5DD] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
            System Architecture · {title}
          </span>
          <span className="font-mono text-[11px] text-[#4F5B40] bg-[#F2F5EF] px-2 py-0.5 rounded">
            Next.js App Router Hybrid Architecture
          </span>
        </div>

        <svg
          viewBox="0 0 880 300"
          className="w-full h-auto text-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Client Components */}
          <rect x="30" y="40" width="220" height="220" rx="8" fill="#F7F6F2" stroke="#E8E5DD" />
          <text x="140" y="70" fill="#171717" font-weight="600" text-anchor="middle" font-family="sans-serif">
            CLIENT (INTERACTION)
          </text>
          <rect x="45" y="95" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="140" y="120" fill="#171717" text-anchor="middle" font-family="monospace">Split Markdown Editor</text>
          <rect x="45" y="145" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="140" y="170" fill="#706E6B" text-anchor="middle" font-family="monospace">DOMPurify Sanitizer</text>
          <rect x="45" y="195" width="190" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="140" y="220" fill="#706E6B" text-anchor="middle" font-family="monospace">Autosave Local Buffer</text>

          {/* Connection */}
          <path d="M250 145 L320 145" stroke="#6D5DFB" stroke-width="2" />

          {/* Server / Next.js Tier */}
          <rect x="320" y="40" width="260" height="220" rx="8" fill="#F0EEFE" stroke="#6D5DFB" stroke-opacity="0.3" />
          <text x="450" y="70" fill="#6D5DFB" font-weight="600" text-anchor="middle" font-family="sans-serif">
            NEXT.JS APP ROUTER CORE
          </text>
          <rect x="340" y="95" width="220" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="450" y="120" fill="#171717" text-anchor="middle" font-family="monospace">Server Component Feeds</text>
          <rect x="340" y="145" width="220" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="450" y="170" fill="#171717" text-anchor="middle" font-family="monospace">Server Actions (Publish/Draft)</text>
          <rect x="340" y="195" width="220" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="450" y="220" fill="#706E6B" text-anchor="middle" font-family="monospace">Session Auth Guard</text>

          {/* Connection */}
          <path d="M580 145 L650 145" stroke="#6D5DFB" stroke-width="2" />

          {/* Database Tier */}
          <rect x="650" y="40" width="200" height="220" rx="8" fill="#F2F5EF" stroke="#B8C6A5" />
          <text x="750" y="70" fill="#4F5B40" font-weight="600" text-anchor="middle" font-family="sans-serif">
            DATA LAYER
          </text>
          <rect x="670" y="95" width="160" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="750" y="120" fill="#171717" text-anchor="middle" font-family="monospace">Users & Sessions</text>
          <rect x="670" y="145" width="160" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="750" y="170" fill="#171717" text-anchor="middle" font-family="monospace">Posts & Tags</text>
          <rect x="670" y="195" width="160" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
          <text x="750" y="220" fill="#706E6B" text-anchor="middle" font-family="monospace">Draft Revisions</text>
        </svg>
      </div>
    );
  }

  // HackOS Architecture Diagram
  return (
    <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 sm:p-8 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5DD] pb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
          System Architecture · {title}
        </span>
        <span className="font-mono text-[11px] text-[#171717] bg-[#E8E5DD]/50 px-2 py-0.5 rounded">
          Offline-First Client Event Bus
        </span>
      </div>

      <svg
        viewBox="0 0 880 280"
        className="w-full h-auto text-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core State Bus */}
        <rect x="40" y="40" width="240" height="200" rx="8" fill="#F0EEFE" stroke="#6D5DFB" stroke-opacity="0.3" />
        <text x="160" y="70" fill="#6D5DFB" font-weight="600" text-anchor="middle" font-family="sans-serif">
          REACT STATE ENGINE
        </text>
        <rect x="60" y="95" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="160" y="120" fill="#171717" text-anchor="middle" font-family="monospace">Event Dispatcher</text>
        <rect x="60" y="145" width="200" height="40" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="160" y="170" fill="#706E6B" text-anchor="middle" font-family="monospace">Drift-Free Delta Timer</text>
        <rect x="60" y="195" width="200" height="30" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="160" y="215" fill="#706E6B" text-anchor="middle" font-family="monospace">Keyboard Listener</text>

        {/* Sync Arrow */}
        <path d="M280 140 L340 140" stroke="#6D5DFB" stroke-width="2" />

        {/* Modular Widgets */}
        <rect x="340" y="40" width="280" height="200" rx="8" fill="#F7F6F2" stroke="#E8E5DD" />
        <text x="480" y="70" fill="#171717" font-weight="600" text-anchor="middle" font-family="sans-serif">
          MODULAR COCKPIT WIDGETS
        </text>
        <rect x="360" y="95" width="240" height="30" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="480" y="115" fill="#171717" text-anchor="middle" font-family="monospace">Countdown Sprint Chrono</text>
        <rect x="360" y="135" width="240" height="30" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="480" y="155" fill="#171717" text-anchor="middle" font-family="monospace">Milestone Kanban Matrix</text>
        <rect x="360" y="175" width="240" height="30" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="480" y="195" fill="#706E6B" text-anchor="middle" font-family="monospace">Quick Scratchpad Buffer</text>

        {/* Sync Arrow */}
        <path d="M620 140 L680 140" stroke="#6D5DFB" stroke-width="2" />

        {/* Storage */}
        <rect x="680" y="40" width="160" height="200" rx="8" fill="#F2F5EF" stroke="#B8C6A5" />
        <text x="760" y="70" fill="#4F5B40" font-weight="600" text-anchor="middle" font-family="sans-serif">
          OFFLINE STORAGE
        </text>
        <rect x="695" y="105" width="130" height="45" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="760" y="132" fill="#171717" text-anchor="middle" font-family="monospace">LocalStorage</text>
        <rect x="695" y="165" width="130" height="45" rx="6" fill="#FFFFFF" stroke="#E8E5DD" />
        <text x="760" y="192" fill="#706E6B" text-anchor="middle" font-family="monospace">JSON Exporter</text>
      </svg>
    </div>
  );
}
