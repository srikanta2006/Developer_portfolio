import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl border border-[#E8E5DD] bg-white transition-all duration-300 hover:border-[#6D5DFB]/40 hover:shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Project Visual / Image Frame */}
        <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[320px] bg-[#F7F6F2] border-b lg:border-b-0 lg:border-r border-[#E8E5DD] overflow-hidden flex items-center justify-center p-6">
          <div className="relative w-full h-full max-h-[320px] rounded-lg border border-[#E8E5DD] bg-white shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
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
              <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
                Project {project.number} · {project.timeframe}
              </span>
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#171717] group-hover:text-[#6D5DFB] transition-colors">
                <Link href={`/work/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="font-sans text-sm font-medium text-[#706E6B] pt-1">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm text-[#706E6B] leading-relaxed">
              {project.summary}
            </p>

            {/* Key Engineering Highlights */}
            <div className="space-y-2 pt-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B]">
                Architecture Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-[#171717]">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#6D5DFB] font-bold" aria-hidden="true">
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
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E8E5DD]/70">
            <Button
              variant="primary"
              size="sm"
              href={`/work/${project.slug}`}
              className="gap-1.5"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                isExternal
                className="gap-1.5"
              >
                <span>Code Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
