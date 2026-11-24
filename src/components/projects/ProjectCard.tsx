import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:border-[#4F46E5]/40 hover:shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Project Visual / Image Frame */}
        <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[320px] bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-[#E2E8F0] overflow-hidden flex items-center justify-center p-6">
          <div className="relative w-full h-full max-h-[320px] rounded-lg border border-[#E2E8F0] bg-white shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
                Project {project.number} · {project.timeframe}
              </span>
              <div className="flex items-center gap-1.5">
                {project.ownership && (
                  <Badge variant="outline" size="sm">
                    {project.ownership}
                  </Badge>
                )}
                <Badge variant="accent" size="sm">
                  {project.category}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                <Link href={`/work/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="font-sans text-sm font-medium text-[#475569] pt-1">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed">
              {project.summary}
            </p>

            {/* Individual Contribution Note if present */}
            {project.individualContribution && (
              <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155]">
                <strong className="text-[#0F172A]">My Role & Contribution:</strong>{" "}
                {project.individualContribution}
              </div>
            )}

            {/* Key Engineering Highlights */}
            <div className="space-y-2 pt-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                Architecture Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-[#0F172A]">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#4F46E5] font-bold" aria-hidden="true">
                      —
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#E2E8F0]">
            <Button
              variant="primary"
              size="sm"
              href={`/work/${project.slug}`}
              className="gap-1.5"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>

            {project.liveUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.liveUrl}
                isExternal
                className="gap-1.5"
              >
                <span>Live Application</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#059669]" aria-hidden="true" />
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                isExternal
                className="gap-1.5"
              >
                <span>Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
