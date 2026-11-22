import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Clock, CircleDot } from "lucide-react";

interface FeatureStatusListProps {
  status: {
    implemented: string[];
    partiallyImplemented: string[];
    planned: string[];
  };
}

export function FeatureStatusList({ status }: FeatureStatusListProps) {
  return (
    <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5DD] pb-3">
        <h3 className="font-display text-xl font-medium text-[#171717]">
          Implementation Status & Roadmap
        </h3>
        <span className="font-mono text-xs text-[#706E6B]">
          Verified against working codebase
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#4F5B40]" aria-hidden="true" />
            <Badge variant="sage" size="sm">
              Implemented & Working
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#171717]">
            {status.implemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#4F5B40] font-bold" aria-hidden="true">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Partially Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#6D5DFB]" aria-hidden="true" />
            <Badge variant="accent" size="sm">
              Partially Implemented
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#171717]">
            {status.partiallyImplemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#6D5DFB] font-bold" aria-hidden="true">◷</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planned Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-[#706E6B]" aria-hidden="true" />
            <Badge variant="outline" size="sm">
              Planned / Future Scope
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#706E6B]">
            {status.planned.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#706E6B] font-bold" aria-hidden="true">○</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
