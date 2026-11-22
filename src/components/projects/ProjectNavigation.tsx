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
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[#E8E5DD]"
    >
      {previousProject ? (
        <Link
          href={`/work/${previousProject.slug}`}
          className="group p-6 rounded-xl border border-[#E8E5DD] bg-white hover:border-[#6D5DFB]/40 hover:bg-[#F7F6F2]/50 transition-all text-left flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#706E6B] mb-2">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-[#6D5DFB]" />
            <span>Previous Case Study</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-medium text-[#171717] group-hover:text-[#6D5DFB] transition-colors">
              {previousProject.title}
            </h4>
            <p className="text-xs text-[#706E6B] line-clamp-1">
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
          className="group p-6 rounded-xl border border-[#E8E5DD] bg-white hover:border-[#6D5DFB]/40 hover:bg-[#F7F6F2]/50 transition-all text-right flex flex-col justify-between sm:items-end"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#706E6B] mb-2">
            <span>Next Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#6D5DFB]" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium text-[#171717] group-hover:text-[#6D5DFB] transition-colors">
              {nextProject.title}
            </h4>
            <p className="text-xs text-[#706E6B] line-clamp-1">
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
