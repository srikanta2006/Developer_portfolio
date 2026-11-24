import { TechnicalDecision } from "@/data/caseStudies";

interface DecisionsTableProps {
  decisions: TechnicalDecision[];
}

export function DecisionsTable({ decisions }: DecisionsTableProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl overflow-hidden shadow-xl">
      <div className="p-5 sm:p-6 border-b border-white/10 bg-[#111827]/70">
        <h3 className="font-heading text-xl font-bold text-white">
          Key Engineering Decisions & Trade-offs
        </h3>
        <p className="text-xs text-slate-400 pt-1">
          Architectural choices made during design and implementation, balancing speed, maintainability, and complexity.
        </p>
      </div>

      <div className="divide-y divide-white/10">
        {decisions.map((item, idx) => (
          <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400">
                Decision {idx + 1}
              </span>
              <h4 className="font-heading text-sm font-semibold text-white">
                {item.decision}
              </h4>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Engineering Rationale
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {item.rationale}
              </p>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Accepted Trade-off
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.tradeoff}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
