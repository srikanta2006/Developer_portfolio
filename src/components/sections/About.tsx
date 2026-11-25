import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 scroll-mt-20">
      <Container>
        <SectionHeading
          number="01 / About"
          title="The Engineer Who Builds Intelligent Products."
          description="A track record of competitive hackathon leadership, hands-on data science internship experience, and full-stack software development."
        />

        {/* Clean 2-Row Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          {/* Card 1: Hackathons & SIH Win */}
          <div className="md:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-[#3B82F6]/35 group">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Trophy className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  Hackathons &amp; SIH Screening
                </span>
              </div>
              <Badge variant="accent" size="sm">1st Place Internal SIH</Badge>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#ECEEF0] group-hover:text-[#60A5FA] transition-colors">
                7+ Hackathons &amp; Tech Events Victory
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Led team to 1st place in the competitive college screening for Smart India Hackathon. Competed across 7 hackathons plus collegiate tech events, mastering zero-to-one prototyping, async debugging, and agile engineering under tight deadlines.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                7+ Hackathons &amp; Events
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                1st Place Internal SIH
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                0 &rarr; 1 Rapid Architecture
              </span>
            </div>
          </div>

          {/* Card 2: Industry Internship */}
          <div className="md:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-[#3B82F6]/35 group">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Briefcase className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  Industry Experience
                </span>
              </div>
              <Badge variant="neutral" size="sm">May – Jul 2026</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#ECEEF0] group-hover:text-[#60A5FA] transition-colors">
                Data Science Intern
              </h3>
              <p className="text-xs font-mono text-[#64748B]">
                Celebal Technologies &middot; Remote
              </p>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Engineered end-to-end data science pipelines, automated preprocessing, and developed classification models (XGBoost) alongside hands-on RAG mini-projects.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                Python &amp; XGBoost
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                RAG Pipelines
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                Scikit-learn
              </span>
            </div>
          </div>

          {/* Card 3: Education */}
          <div className="md:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-[#3B82F6]/35 group">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  Education
                </span>
              </div>
              <Badge variant="neutral" size="sm">Class of 2027</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-[#ECEEF0] group-hover:text-[#60A5FA] transition-colors">
                B.Tech &mdash; Computer Science
              </h3>
              <p className="text-xs font-mono text-[#64748B]">
                CVR College of Engineering &middot; Hyderabad
              </p>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Core foundation in Data Structures, Algorithms, Operating Systems, DBMS, and System Architecture with active work in Agentic AI.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                DSA
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                System Design
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]">
                OS &amp; DBMS
              </span>
            </div>
          </div>

          {/* Card 4: Engineering Philosophy */}
          <div className="md:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-[#3B82F6]/35 group">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  Builder Philosophy
                </span>
              </div>
              <Badge variant="accent" size="sm">Hands-On Ownership</Badge>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#ECEEF0] group-hover:text-[#60A5FA] transition-colors">
                From Zero-to-One Prototype to Production System
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I believe in learning by shipping, taking complete ownership of architecture, and turning prototypes into reliable, maintainable software combining full-stack systems with multi-agent intelligence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/[0.06] text-center">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-semibold text-[#ECEEF0] block">Backend</span>
                <span className="text-[11px] text-[#64748B]">APIs &amp; Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-semibold text-[#ECEEF0] block">Applied AI</span>
                <span className="text-[11px] text-[#64748B]">Agents &amp; RAG</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-semibold text-[#ECEEF0] block">Execution</span>
                <span className="text-[11px] text-[#64748B]">0 &rarr; 1 Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
