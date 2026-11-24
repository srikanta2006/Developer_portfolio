import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Zap, ShieldAlert, Rocket, Clock, CheckCircle } from "lucide-react";

export function HackathonStats() {
  return (
    <section id="hackathons" className="py-16 sm:py-24 border-t border-white/[0.08] bg-transparent scroll-mt-20">
      <Container>
        <SectionHeading
          number="Proof / Rapid Prototyping"
          title="7+ Hackathons, Tech Events & Execution Velocity"
          description="High-pressure prototyping under intense sprint deadlines. Competed in 7 hackathons plus collegiate tech events, winning 1st Place in the SIH internal college screening."
        />

        {/* 4 Kinetic Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 sm:p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-[#111827]/70 to-[#111827]/50 backdrop-blur-xl shadow-xl space-y-1 hover:border-amber-400/50 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FCD34D]">
                Battletested
              </span>
              <Trophy className="h-4 w-4 text-[#FBBF24] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
              7+
            </div>
            <p className="text-xs text-amber-200/80 font-medium pt-1">
              Hackathons &amp; tech events competed
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-[#111827]/70 to-[#111827]/50 backdrop-blur-xl shadow-xl space-y-1 hover:border-indigo-400/50 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A5B4FC]">
                SIH Screening
              </span>
              <CheckCircle className="h-4 w-4 text-[#818CF8] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
              1st Place
            </div>
            <p className="text-xs text-indigo-200/80 font-medium pt-1">
              Internal college screening victory for SIH nomination
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-[#111827]/70 to-[#111827]/50 backdrop-blur-xl shadow-xl space-y-1 hover:border-emerald-400/50 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6EE7B7]">
                Sprint Speed
              </span>
              <Clock className="h-4 w-4 text-[#34D399] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">
              250+
            </div>
            <p className="text-xs text-emerald-200/80 font-medium pt-1">
              Hours of zero-to-one prototyping under strict deadlines
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl shadow-xl space-y-1 hover:border-white/25 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Delivery Rate
              </span>
              <Rocket className="h-4 w-4 text-[#818CF8] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              100%
            </div>
            <p className="text-xs text-slate-300 font-medium pt-1">
              Working, deployable MVPs shipped at code-freeze
            </p>
          </div>
        </div>

        {/* What Hackathons Taught Me (The 3 Core Lessons) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#111827]/60 backdrop-blur-xl shadow-xl space-y-2 hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center gap-2 text-[#FBBF24]">
              <Zap className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-heading text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                1. Speed as an Architecture Feature
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              When you only have 36 hours, you can&apos;t waste 8 hours deliberating over boilerplate. I mastered selecting the right primitives &mdash; FastAPI for async endpoints, ChromaDB for zero-fuss vector search, and React 19 for rapid UX state.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#111827]/60 backdrop-blur-xl shadow-xl space-y-2 hover:border-indigo-400/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center gap-2 text-[#818CF8]">
              <ShieldAlert className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-heading text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                2. Live Triage Under Fire
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              API rate limits, WebSocket reconnection storms, and race conditions always hit late in sprints. Competing in 7 hackathons plus collegiate tech events taught me defensive error handling, fallback caching, and how to debug calmly when judges are minutes away.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#111827]/60 backdrop-blur-xl shadow-xl space-y-2 hover:border-emerald-400/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shimmer-card group">
            <div className="flex items-center gap-2 text-[#34D399]">
              <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-heading text-sm font-bold text-white group-hover:text-emerald-200 transition-colors">
                3. Products Born From Friction
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              I built <strong>HackOS</strong> directly because my teams were constantly losing 20% of their mental bandwidth context-switching between Trello, Figma, Notion, and Docs. Real products solve real developer pain.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
