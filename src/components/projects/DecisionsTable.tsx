import { TechnicalDecision } from "@/data/caseStudies";

interface DecisionsTableProps {
  decisions: TechnicalDecision[];
}

export function DecisionsTable({ decisions }: DecisionsTableProps) {
  return (
    <div className="rounded-xl border border-[#E8E5DD] bg-white overflow-hidden shadow-xs">
      <div className="p-5 sm:p-6 border-b border-[#E8E5DD] bg-[#F7F6F2]">
        <h3 className="font-display text-xl font-medium text-[#171717]">
          Key Engineering Decisions & Trade-offs
        </h3>
        <p className="text-xs text-[#706E6B] pt-1">
          Architectural choices made during design and implementation, balancing speed, maintainability, and complexity.
        </p>
      </div>

      <div className="divide-y divide-[#E8E5DD]">
        {decisions.map((item, idx) => (
          <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6D5DFB]">
                Decision {idx + 1}
              </span>
              <h4 className="font-sans text-sm font-semibold text-[#171717]">
                {item.decision}
              </h4>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B]">
                Engineering Rationale
              </span>
              <p className="text-xs text-[#171717] leading-relaxed">
                {item.rationale}
              </p>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B]">
                Accepted Trade-off
              </span>
              <p className="text-xs text-[#706E6B] leading-relaxed">
                {item.tradeoff}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
