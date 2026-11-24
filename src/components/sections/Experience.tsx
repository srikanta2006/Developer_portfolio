import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCES, ExperienceType } from "@/data/experience";

function getCategoryBadge(type: ExperienceType, metaBadge?: string) {
  switch (type) {
    case "internship":
      return <Badge variant="accent" size="sm">Internship</Badge>;
    case "achievement":
      return <Badge variant="amber" size="sm">{metaBadge || "Achievement"}</Badge>;
    case "education":
      return <Badge variant="emerald" size="sm">Education</Badge>;
    case "leadership":
      return <Badge variant="outline" size="sm">Leadership</Badge>;
    default:
      return <Badge variant="default" size="sm">Milestone</Badge>;
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <SectionHeading
          number="04 / Experience"
          title="Experience, Education & Achievements"
          description="Verified background spanning software and data science internships, academic excellence, competitive hackathon leadership, and organizational leadership."
        />

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Bullet */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#0B0F19] bg-[#6366F1] group-hover:bg-[#818CF8] group-hover:ring-4 group-hover:ring-[#6366F1]/30 transition-all"
                aria-hidden="true"
              />

              <div className="rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4 hover:border-indigo-500/40 transition-colors">
                {/* Header Meta: Category, Period, Organization */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(item.type, item.metaBadge)}
                    {item.location && (
                      <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                        · {item.location}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-200">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#94A3B8]">
                    {item.organization}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Specific Accomplishments / Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-200">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#818CF8] font-bold" aria-hidden="true">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Meta Badge if available */}
                {item.metaBadge && (
                  <div className="pt-1">
                    <span className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {item.metaBadge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
