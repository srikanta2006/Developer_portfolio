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
    <div className="rounded-2xl border border-[#C7D2FE] bg-gradient-to-r from-[#EEF2FF]/95 via-[#F8FAFC] to-[#EEF2FF]/70 p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#4F46E5] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4338CA]">
            Recruiter Perspective Lens:
          </span>
        </div>

        {/* Lens Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
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
                    ? "bg-[#4F46E5] text-white shadow-xs font-semibold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-[#4F46E5]"}`} />
                <span>{lens.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Recruiter Briefing Banner */}
      <div className="pt-2 border-t border-[#E0E7FF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <p className="text-[#312E81] font-medium leading-relaxed">
          <strong className="text-[#1E1B4B]">{currentLensInfo.tagline}</strong> &mdash;{" "}
          <span className="text-[#4338CA]">{currentLensInfo.matchReason}</span>
        </p>

        <Link
          href={currentLensInfo.targetAnchor}
          className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#4F46E5] hover:text-[#3730A3] hover:underline shrink-0"
        >
          <span>{currentLensInfo.ctaText}</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
