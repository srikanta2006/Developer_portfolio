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
          {/* Card 1: 🏆 7+ Hackathons & Tech Events & Internal SIH Win (Top Proof, Span 7) */}
          <div className="md:col-span-7 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-[#111827]/80 to-[#111827]/50 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-amber-400/50 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/20 text-[#FBBF24]">
                  <Trophy className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FCD34D]">
                  7+ Hackathons &amp; Tech Events · Internal SIH Winner
                </span>
              </div>
              <Badge variant="amber" size="sm">Internal 1st Place</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold text-white">
                7 Hackathons + Tech Events &amp; SIH Screening Victory
              </h3>
              <p className="text-sm text-amber-100/80 font-medium leading-relaxed">
                Led team to 1st place in the competitive college screening for Smart India Hackathon. Competed across 7 hackathons plus collegiate tech events, mastering zero-to-one prototyping, async debugging, and agile engineering under intense sprint deadlines.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-amber-500/20">
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                7+ Hackathons &amp; Tech Events
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                1st Place Internal SIH
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                0 &rarr; 1 Rapid Architecture
              </span>
            </div>
          </div>

          {/* Card 2: 💼 Industry Internship (Span 5) */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-[#A5B4FC]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">
                  Industry Experience
                </span>
              </div>
              <Badge variant="accent" size="sm">May – July 2026</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold text-white">
                Data Science Intern
              </h3>
              <p className="text-sm text-[#94A3B8] font-medium">
                Celebal Technologies &middot; Remote
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered end-to-end data science pipelines, automated preprocessing, and developed classification models (XGBoost). Built hands-on RAG mini-projects combining vector search with LLMs.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                Python &amp; XGBoost
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                RAG Mini-Projects
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                Scikit-learn
              </span>
            </div>
          </div>

          {/* Card 3: 🎓 Education (Span 5) */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-[#6EE7B7]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6EE7B7]">
                  Education
                </span>
              </div>
              <Badge variant="emerald" size="sm">Expected May 2027</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-white">
                B.Tech &mdash; Computer Science &amp; Engineering
              </h3>
              <p className="text-sm text-[#94A3B8] font-medium">
                CVR College of Engineering &middot; Hyderabad, India
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Core foundation in Data Structures, Algorithms, Operating Systems, Database Management, and System Architecture with active experimentation in Agentic AI.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                Data Structures
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                Algorithms
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                System Design
              </span>
            </div>
          </div>

          {/* Card 4: ⚡ Engineering Philosophy (Span 7) */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-[#A5B4FC]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">
                  Builder Philosophy
                </span>
              </div>
              <Badge variant="accent" size="sm">Hands-On Ownership</Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold text-white">
                The Engineer Who Builds Intelligent Products
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I believe in learning by building, taking complete ownership of ideas, and turning prototypes into production-grade systems. I combine full-stack reliability with multi-agent intelligence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-white block">Backend</span>
                <span className="text-[10px] text-slate-400">APIs &amp; Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-white block">Applied AI</span>
                <span className="text-[10px] text-slate-400">Agents &amp; RAG</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-white block">Execution</span>
                <span className="text-[10px] text-slate-400">0 &rarr; 1 Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
