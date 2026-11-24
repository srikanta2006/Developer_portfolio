import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCES, ExperienceType } from "@/data/experience";

function getCategoryBadge(type: ExperienceType, metaBadge?: string) {
  switch (type) {
    case "internship":
      return <Badge variant="accent" size="sm">Internship</Badge>;
    case "achievement":
      return <Badge variant="emerald" size="sm">{metaBadge || "Achievement"}</Badge>;
    case "education":
      return <Badge variant="neutral" size="sm">Education</Badge>;
    case "leadership":
      return <Badge variant="outline" size="sm">Leadership</Badge>;
    default:
      return <Badge variant="default" size="sm">Milestone</Badge>;
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <SectionHeading
          number="04 / Experience"
          title="Experience, Education & Achievements"
          description="Verified background spanning software and data science internships, academic excellence, competitive hackathon leadership, and organizational leadership."
        />

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l border-[#E2E8F0] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Bullet */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#0F172A] group-hover:bg-[#4F46E5] transition-colors ring-2 ring-[#E2E8F0]"
                aria-hidden="true"
              />

              <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-4 hover:border-[#4F46E5]/40 transition-colors">
                {/* Header Meta: Category, Period, Organization */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(item.type, item.metaBadge)}
                    {item.location && (
                      <span className="font-mono text-xs text-[#64748B] hidden sm:inline">
                        · {item.location}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#0F172A]">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#475569]">
                    {item.organization}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>

                {/* Specific Accomplishments / Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-[#E2E8F0] text-xs text-[#0F172A]">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#4F46E5] font-bold" aria-hidden="true">
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
                    <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
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
