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
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
        <h3 className="font-heading text-xl font-bold text-[#0F172A]">
          Implementation Status & Roadmap
        </h3>
        <span className="font-mono text-xs text-[#64748B]">
          Verified against working codebase
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#059669]" aria-hidden="true" />
            <Badge variant="sage" size="sm">
              Implemented & Working
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#0F172A]">
            {status.implemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#059669] font-bold" aria-hidden="true">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Partially Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#4F46E5]" aria-hidden="true" />
            <Badge variant="accent" size="sm">
              Partially Implemented
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#0F172A]">
            {status.partiallyImplemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#4F46E5] font-bold" aria-hidden="true">◷</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planned Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
            <Badge variant="outline" size="sm">
              Planned / Future Scope
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[#64748B]">
            {status.planned.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#64748B] font-bold" aria-hidden="true">○</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
