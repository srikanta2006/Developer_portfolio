import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TIMELINE_ITEMS, TimelineCategory } from "@/data/experience";

function getCategoryBadge(category: TimelineCategory, label: string) {
  switch (category) {
    case "hackathons":
      return <Badge variant="accent" size="sm">{label}</Badge>;
    case "training":
      return <Badge variant="sage" size="sm">{label}</Badge>;
    case "education":
      return <Badge variant="neutral" size="sm">{label}</Badge>;
    case "leadership":
      return <Badge variant="outline" size="sm">{label}</Badge>;
    default:
      return <Badge variant="default" size="sm">{label}</Badge>;
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#E8E5DD]/70 scroll-mt-20">
      <Container>
        <SectionHeading
          number="04 / Experience"
          title="Journey, Education & Hackathons"
          description="A chronological record of computer science education, structured technical training programs, and competitive hackathon participations."
        />

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l border-[#E8E5DD] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Bullet */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#171717] group-hover:bg-[#6D5DFB] transition-colors ring-2 ring-[#E8E5DD]"
                aria-hidden="true"
              />

              <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 shadow-xs space-y-4 hover:border-[#6D5DFB]/30 transition-colors">
                {/* Header Meta: Category, Period, Organization */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(item.category, item.categoryLabel)}
                    {item.location && (
                      <span className="font-mono text-xs text-[#706E6B] hidden sm:inline">
                        · {item.location}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#171717]">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#706E6B]">
                    {item.organization}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-[#706E6B] leading-relaxed">
                  {item.description}
                </p>

                {/* Specific Accomplishments / Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-[#E8E5DD]/60 text-xs text-[#171717]">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#6D5DFB] font-bold" aria-hidden="true">
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
