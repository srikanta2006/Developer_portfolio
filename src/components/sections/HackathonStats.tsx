import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Zap, ShieldAlert, Rocket, Clock, CheckCircle } from "lucide-react";

export function HackathonStats() {
  return (
    <section id="hackathons" className="py-20 sm:py-24 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <SectionHeading
          number="Proof / Rapid Prototyping"
          title="Hackathons & Execution Velocity"
          description="High-pressure prototyping under strict sprint deadlines. Competed in 7 hackathons plus collegiate tech events, winning 1st Place in the SIH internal college screening."
        />

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-1.5 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                Battletested
              </span>
              <Trophy className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ECEEF0]">
              7+
            </div>
            <p className="text-xs text-[#94A3B8] pt-0.5">
              Hackathons &amp; tech events competed
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-1.5 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                SIH Screening
              </span>
              <CheckCircle className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ECEEF0]">
              1st Place
            </div>
            <p className="text-xs text-[#94A3B8] pt-0.5">
              Internal college screening victory
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-1.5 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                Sprint Speed
              </span>
              <Clock className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ECEEF0]">
              250+
            </div>
            <p className="text-xs text-[#94A3B8] pt-0.5">
              Hours of zero-to-one prototyping
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-1.5 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                Delivery Rate
              </span>
              <Rocket className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ECEEF0]">
              100%
            </div>
            <p className="text-xs text-[#94A3B8] pt-0.5">
              Working MVPs shipped at code-freeze
            </p>
          </div>
        </div>

        {/* 3 Core Engineering Lessons */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-2 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center gap-2 text-[#3B82F6]">
              <Zap className="h-4 w-4" aria-hidden="true" />
              <h3 className="font-heading text-sm font-bold text-[#ECEEF0]">
                1. Speed as Architecture
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              With 36-hour constraints, choosing the right primitives matters &mdash; FastAPI for async endpoints, ChromaDB for vector search, and React 19 for rapid UI state.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-2 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center gap-2 text-[#3B82F6]">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              <h3 className="font-heading text-sm font-bold text-[#ECEEF0]">
                2. Live Triage Under Fire
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Rate limits, WebSocket reconnects, and race conditions always hit late in sprints. Built habits around defensive error handling and fallback caching.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C0E12] space-y-2 transition-colors hover:border-[#3B82F6]/35">
            <div className="flex items-center gap-2 text-[#3B82F6]">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              <h3 className="font-heading text-sm font-bold text-[#ECEEF0]">
                3. Products Born From Friction
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Built <strong className="text-[#ECEEF0]">HackOS</strong> because teams were losing bandwidth context-switching between Trello, Figma, Notion, and Docs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
