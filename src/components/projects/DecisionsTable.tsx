import { TechnicalDecision } from "@/data/caseStudies";

interface DecisionsTableProps {
  decisions: TechnicalDecision[];
}

export function DecisionsTable({ decisions }: DecisionsTableProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
      <div className="p-5 sm:p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <h3 className="font-heading text-xl font-bold text-[#0F172A]">
          Key Engineering Decisions & Trade-offs
        </h3>
        <p className="text-xs text-[#475569] pt-1">
          Architectural choices made during design and implementation, balancing speed, maintainability, and complexity.
        </p>
      </div>

      <div className="divide-y divide-[#E2E8F0]">
        {decisions.map((item, idx) => (
          <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#4F46E5]">
                Decision {idx + 1}
              </span>
              <h4 className="font-heading text-sm font-semibold text-[#0F172A]">
                {item.decision}
              </h4>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                Engineering Rationale
              </span>
              <p className="text-xs text-[#0F172A] leading-relaxed">
                {item.rationale}
              </p>
            </div>

            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                Accepted Trade-off
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                {item.tradeoff}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
