"use client";

import { useState } from "react";
import { Sparkles, Bot, Trophy, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export type RoleLens = "all" | "ai" | "fullstack" | "hackathon";

export function RecruiterLens() {
  const [activeLens, setActiveLens] = useState<RoleLens>("all");

  const LENSES = [
    {
      id: "all" as RoleLens,
      label: "Autonomous Builder",
      icon: Sparkles,
      tagline: "Combines Full-Stack Software Engineering with Applied AI.",
      matchReason: "Balanced track record across distributed systems, autonomous agents, and production web apps.",
      targetAnchor: "#work",
      ctaText: "Explore Featured Work",
    },
    {
      id: "ai" as RoleLens,
      label: "Applied AI Engineer",
      icon: Bot,
      tagline: "Multi-Agent Systems · LangGraph · ChromaDB RAG · LLM Orchestration.",
      matchReason: "Key Proof: LegalArena multi-agent courtroom, BizNexus AI co-pilot, and Celebal RAG internship.",
      targetAnchor: "#work",
      ctaText: "Test AI Courtroom Simulator",
    },
    {
      id: "fullstack" as RoleLens,
      label: "Full-Stack Engineer",
      icon: Code2,
      tagline: "FastAPI · React 19 · Node.js · Cloud Firestore · REST API Architecture.",
      matchReason: "Key Proof: Burst blogging platform (custom canvas compression + real-time sync) and HackOS.",
      targetAnchor: "#work",
      ctaText: "View Full-Stack Architectures",
    },
    {
      id: "hackathon" as RoleLens,
      label: "7+ Hackathons & Events",
      icon: Trophy,
      tagline: "7 Hackathons & Collegiate Tech Events · 1st Place SIH Internal Screening.",
      matchReason: "Key Proof: 250+ sprint hours, high-velocity zero-to-one delivery, and HackOS origin.",
      targetAnchor: "#hackathons",
      ctaText: "View Hackathons & Events",
    },
  ];

  const currentLensInfo = LENSES.find((l) => l.id === activeLens) || LENSES[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-4 sm:p-5 shadow-2xl space-y-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#818CF8] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">
            Recruiter Perspective Lens:
          </span>
        </div>

        {/* Lens Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0B0F19]/80 border border-white/10 shadow-inner">
          {LENSES.map((lens) => {
            const Icon = lens.icon;
            const isSelected = activeLens === lens.id;
            return (
              <button
                key={lens.id}
                type="button"
                onClick={() => setActiveLens(lens.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#6366F1] text-white shadow-md shadow-indigo-500/25 font-semibold"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-[#818CF8]"}`} />
                <span>{lens.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Recruiter Briefing Banner */}
      <div className="pt-2 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <p className="text-[#E2E8F0] font-medium leading-relaxed">
          <strong className="text-white font-semibold">{currentLensInfo.tagline}</strong> &mdash;{" "}
          <span className="text-[#A5B4FC]">{currentLensInfo.matchReason}</span>
        </p>

        <Link
          href={currentLensInfo.targetAnchor}
          className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#818CF8] hover:text-white hover:underline shrink-0"
        >
          <span>{currentLensInfo.ctaText}</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
