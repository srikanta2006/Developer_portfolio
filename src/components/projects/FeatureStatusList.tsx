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
    <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <h3 className="font-heading text-xl font-bold text-white">
          Implementation Status & Roadmap
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <Badge variant="emerald" size="sm">
              Implemented & Working
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-slate-200">
            {status.implemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold" aria-hidden="true">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Partially Implemented Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-indigo-400" aria-hidden="true" />
            <Badge variant="accent" size="sm">
              Partially Implemented
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-slate-200">
            {status.partiallyImplemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">◷</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planned Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <Badge variant="outline" size="sm">
              Planned / Future Scope
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            {status.planned.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-400 font-bold" aria-hidden="true">○</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
