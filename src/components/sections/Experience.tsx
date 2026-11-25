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
    <section id="experience" className="py-20 sm:py-24 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <SectionHeading
          number="04 / Experience"
          title="Experience, Education & Achievements"
          description="Verified background spanning software and data science internships, academic excellence, competitive hackathon leadership, and organizational leadership."
        />

        {/* Clean Vertical Timeline */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-6">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full border-2 border-[#070809] bg-[#3B82F6] group-hover:scale-125 transition-transform"
                aria-hidden="true"
              />

              <div className="rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 space-y-3.5 transition-colors duration-200 hover:border-[#3B82F6]/35">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(item.type, item.metaBadge)}
                    {item.location && (
                      <span className="font-mono text-xs text-[#64748B] hidden sm:inline">
                        · {item.location}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-medium text-[#94A3B8]">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#ECEEF0]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#94A3B8]">
                    {item.organization}
                  </p>
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-3 border-t border-white/[0.06] text-xs text-[#CBD5E1]">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#3B82F6] font-bold" aria-hidden="true">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
