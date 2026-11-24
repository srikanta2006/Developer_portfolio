"use client";

import { useState } from "react";
import { ArrowRight, Cpu, Network } from "lucide-react";

export interface BlueprintNode {
  step: number;
  label: string;
  sublabel: string;
  tech: string;
  role: string;
  decision: string;
}

interface ArchitectureBlueprintProps {
  projectId?: string;
  nodes: BlueprintNode[];
}

export function ArchitectureBlueprint({ nodes }: ArchitectureBlueprintProps) {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const activeNode = nodes[activeNodeIndex] || nodes[0];

  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-[#0D121F] p-4 sm:p-5 space-y-4">
      {/* Blueprint Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-[#A5B4FC]">
            <Network className="h-4 w-4" />
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">
              System Architecture Pipeline
            </span>
            <span className="font-mono text-[10px] text-[#94A3B8]">
              Interactive Node Inspector · Tap any stage to view design trade-offs
            </span>
          </div>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#A5B4FC] font-semibold">
          {nodes.length} Verified Stages
        </span>
      </div>

      {/* Horizontal Node Flow Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {nodes.map((node, idx) => {
          const isSelected = idx === activeNodeIndex;
          return (
            <div key={node.step} className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveNodeIndex(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-xs transition-all text-left cursor-pointer border ${
                  isSelected
                    ? "bg-[#6366F1] text-white border-[#6366F1] shadow-md shadow-indigo-500/30"
                    : "bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isSelected ? "bg-white text-[#6366F1]" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {node.step}
                </span>
                <span className="font-semibold whitespace-nowrap">{node.label}</span>
              </button>

              {idx < nodes.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-slate-600 shrink-0" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Inspector */}
      {activeNode && (
        <div className="rounded-xl border border-white/10 bg-[#111827]/90 p-4 space-y-3 transition-all animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#A5B4FC] font-semibold">
                Stage {activeNode.step} Deep-Dive
              </span>
              <h5 className="font-heading text-sm font-bold text-white">
                {activeNode.label} &mdash;{" "}
                <span className="font-normal text-slate-300">{activeNode.sublabel}</span>
              </h5>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/20 text-[#A5B4FC] font-semibold border border-indigo-500/30">
              <Cpu className="h-3 w-3" />
              {activeNode.tech}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.06] text-xs">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8] font-semibold block">
                Stage Objective
              </span>
              <p className="text-slate-300 leading-relaxed">{activeNode.role}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#34D399] font-semibold block">
                Engineering Decision / Trade-off
              </span>
              <p className="text-slate-300 leading-relaxed">{activeNode.decision}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
