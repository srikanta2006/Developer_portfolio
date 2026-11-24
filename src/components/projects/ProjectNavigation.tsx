import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  previousProject?: {
    slug: string;
    title: string;
    tagline: string;
  };
  nextProject?: {
    slug: string;
    title: string;
    tagline: string;
  };
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Previous and Next Project Navigation"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-white/10"
    >
      {previousProject ? (
        <Link
          href={`/work/${previousProject.slug}`}
          className="group p-6 rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-[#111827] transition-all text-left flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-indigo-400" />
            <span>Previous Case Study</span>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
              {previousProject.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-1">
              {previousProject.tagline}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={`/work/${nextProject.slug}`}
          className="group p-6 rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-[#111827] transition-all text-right flex flex-col justify-between sm:items-end"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
            <span>Next Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-indigo-400" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
              {nextProject.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-1">
              {nextProject.tagline}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
