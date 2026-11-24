import Image from "next/image";
import { ArrowDown, MapPin, Sparkles, Trophy, Bot, Code, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";
import { LiveClock } from "@/components/ui/LiveClock";
import { RecruiterLens } from "@/components/ui/RecruiterLens";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 5.8a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting pulse */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-emerald-600/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            {/* Status & Live Availability */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent" className="gap-1.5 py-1 backdrop-blur-md">
                <Sparkles className="h-3 w-3 text-[#A5B4FC]" aria-hidden="true" />
                <span>Student Developer · Software & Applied AI</span>
              </Badge>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#34D399] font-medium bg-[#10B981]/15 px-3 py-1 rounded-full border border-[#10B981]/30 backdrop-blur-md shadow-xs transition-all hover:bg-[#10B981]/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
                </span>
                <span>Open for Engineering & AI Roles</span>
              </div>
            </div>

            {/* Monumental Gradient Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 leading-[1.12]">
                Building intelligent products through software and AI.
              </h1>
              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Computer Science student at CVR College of Engineering turning ideas into production-ready software, backend architectures, and multi-agent AI systems.
              </p>
            </div>

            {/* Visual Proof Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-xl border border-white/10 bg-[#111827]/70 backdrop-blur-md space-y-1 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 shimmer-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FBBF24]">
                  <Trophy className="h-3.5 w-3.5" />
                  <span>7+ Hackathons</span>
                </div>
                <div className="text-[11px] font-medium text-white truncate">+ Tech Events · SIH Win</div>
              </div>

              <div className="p-3 rounded-xl border border-white/10 bg-[#111827]/70 backdrop-blur-md space-y-1 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shimmer-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#A5B4FC]">
                  <Bot className="h-3.5 w-3.5" />
                  <span>Agentic AI</span>
                </div>
                <div className="text-[11px] font-medium text-white">LangGraph & RAG</div>
              </div>

              <div className="p-3 rounded-xl border border-white/10 bg-[#111827]/70 backdrop-blur-md space-y-1 hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300 shimmer-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#34D399]">
                  <Code className="h-3.5 w-3.5" />
                  <span>Full-Stack</span>
                </div>
                <div className="text-[11px] font-medium text-white">FastAPI & React</div>
              </div>

              <div className="p-3 rounded-xl border border-white/10 bg-[#111827]/70 backdrop-blur-md space-y-1 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shimmer-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#CBD5E1]">
                  <GraduationCap className="h-3.5 w-3.5 text-[#818CF8]" />
                  <span>Education</span>
                </div>
                <div className="text-[11px] font-medium text-white">CVR CSE &apos;27</div>
              </div>
            </div>

            {/* Primary CTA & Interactive 1-Click Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary" size="lg" href="#work" className="gap-2 group">
                <span>Explore Featured Projects</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
              </Button>

              <CopyButton text="srikantacvr@gmail.com" label="Copy Email" className="py-3 px-4 text-xs font-medium rounded-xl" />
            </div>

            {/* Verified Public Channels & Live Hyderabad Clock */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href="https://github.com/srikanta2006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="text-white/20" aria-hidden="true">/</span>
              <a
                href="https://linkedin.com/in/srikanta-bellamkonda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
              >
                <LinkedInIcon className="h-4 w-4 text-[#818CF8]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20" aria-hidden="true">/</span>
              <div className="inline-flex items-center gap-1.5 text-slate-200 font-mono text-xs">
                <MapPin className="h-3.5 w-3.5 text-[#818CF8]" />
                <span>Hyderabad, India</span>
              </div>
              <span className="text-white/20" aria-hidden="true">·</span>
              <LiveClock />
            </div>
          </div>

          {/* Supporting Visual / Portrait Frame (Right Column) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Layer 1: Ambient Radial Glow Backlight */}
              <div 
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-emerald-500/20 blur-3xl opacity-80 animate-pulse-glow -z-10" 
                aria-hidden="true"
              />
              <div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-transparent to-emerald-500/20 blur-sm opacity-60 -z-10" 
                aria-hidden="true"
              />

              {/* Layer 2: Main Portrait Glass Container */}
              <div className="relative aspect-square w-full rounded-3xl border border-white/15 bg-[#111827]/80 backdrop-blur-xl p-3 shadow-2xl shadow-black/90 group overflow-visible transition-all duration-500 hover:border-indigo-500/50 hover:shadow-indigo-500/20">
                {/* Floating Badge 1 (Top Left): Live Status */}
                <div className="absolute -top-3.5 -left-3 sm:-left-4 bg-[#0D121F]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-3.5 py-2 shadow-2xl animate-float-slow z-20 flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold leading-none">
                      Live Status
                    </span>
                    <span className="block text-xs font-semibold text-white leading-tight mt-0.5">
                      Available to Build
                    </span>
                  </div>
                </div>

                {/* Inner Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0B0F19] border border-white/10">
                  <Image
                    src="/images/portrait-v2.jpg"
                    alt="Srikanta Bellamkonda — Student Developer & Applied AI Engineer"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 440px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle lower gradient overlay for seamless integration */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" 
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Badge 2 (Bottom Right): Autonomous Builder */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#0D121F]/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl px-3.5 py-2 shadow-2xl animate-float-delayed z-20 flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-semibold leading-none">
                      Autonomous
                    </span>
                    <span className="block text-xs font-semibold text-white leading-tight mt-0.5">
                      Product Builder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Recruiter Perspective Lens */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <RecruiterLens />
        </div>
      </Container>
    </section>
  );
}
