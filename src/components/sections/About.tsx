import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          number="01 / About"
          title="The Engineer Who Builds Intelligent Products."
          description="A track record of competitive hackathon leadership, hands-on data science internship experience, and full-stack software development."
        />

        {/* Bento Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4">
          {/* Card 1: 🏆 12x Hackathons & Internal SIH Win (Top Proof, Span 7) */}
          <div className="md:col-span-7 rounded-2xl border-2 border-[#FDE68A] bg-gradient-to-br from-[#FFFBEB] via-white to-[#FEF3C7]/30 p-6 sm:p-8 space-y-4 shadow-xs hover:border-[#F59E0B] transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#FEF3C7] text-[#D97706]">
                  <Trophy className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  12× Hackathon Competitor · Internal SIH Winner
                </span>
              </div>
              <Badge variant="amber" size="sm">Internal 1st Place</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold text-[#0F172A]">
                12 Hackathons &amp; Internal SIH Screening Victory
              </h3>
              <p className="text-sm text-[#78350F] font-medium leading-relaxed">
                Led team to 1st place in the competitive college screening for Smart India Hackathon. Competed across ~12 collegiate hackathons, mastering zero-to-one prototyping, async debugging, and agile engineering under 24–36 hour deadlines.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#FDE68A]">
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white text-[#92400E] border border-[#FDE68A]">
                12 Hackathons Participated
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white text-[#92400E] border border-[#FDE68A]">
                1st Place Internal SIH
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white text-[#92400E] border border-[#FDE68A]">
                0 &rarr; 1 Rapid Architecture
              </span>
            </div>
          </div>

          {/* Card 2: 💼 Industry Internship (Span 5) */}
          <div className="md:col-span-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-4 shadow-xs hover:border-[#4F46E5]/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                  Industry Experience
                </span>
              </div>
              <Badge variant="accent" size="sm">Internship</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                Data Science Intern
              </h3>
              <p className="font-sans text-xs font-semibold text-[#4F46E5]">
                Celebal Technologies · Remote
              </p>
              <p className="text-xs text-[#475569] leading-relaxed pt-1">
                Engineered end-to-end data pipelines, XGBoost classification models, and hands-on Retrieval-Augmented Generation (RAG) applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]">
                Python & XGBoost
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]">
                RAG Mini-Projects
              </span>
            </div>
          </div>

          {/* Card 3: 🎓 Academic Foundation (Span 6) */}
          <div className="md:col-span-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 space-y-3 shadow-xs hover:border-[#4F46E5]/40 transition-colors">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#F1F5F9] text-[#0F172A]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[#0F172A]">
                  CVR College of Engineering
                </h4>
                <p className="text-xs text-[#64748B]">B.Tech in Computer Science and Engineering (2023 – 2027)</p>
              </div>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Curriculum centered on Data Structures & Algorithms, Distributed Backend Systems, Database Architectures, and Applied Machine Learning.
            </p>
          </div>

          {/* Card 4: ⚡ Engineering Philosophy (Span 6) */}
          <div className="md:col-span-6 rounded-2xl border border-[#C7D2FE] bg-gradient-to-br from-[#EEF2FF]/40 to-white p-6 space-y-3 shadow-xs hover:border-[#4F46E5] transition-colors">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#0F172A]">
                Autonomous Builder Philosophy
              </h4>
            </div>
            <p className="text-xs text-[#334155] font-medium leading-relaxed italic">
              “I believe in learning by building, taking ownership of ideas, and transforming concepts into working, verifiable products.”
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="accent" size="sm">Full-Stack Development</Badge>
              <Badge variant="emerald" size="sm">Multi-Agent Systems</Badge>
              <Badge variant="neutral" size="sm">RAG & Vector DBs</Badge>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
