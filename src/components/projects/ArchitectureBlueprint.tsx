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
    <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-4 sm:p-5 space-y-4">
      {/* Blueprint Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-[#EEF2FF] text-[#4F46E5]">
            <Network className="h-4 w-4" />
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
              System Architecture Pipeline
            </span>
            <span className="font-mono text-[10px] text-[#64748B]">
              Interactive Node Inspector · Tap any stage to view design trade-offs
            </span>
          </div>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#4F46E5] font-semibold">
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
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs transition-all text-left cursor-pointer border ${
                  isSelected
                    ? "bg-[#4F46E5] text-white border-[#4F46E5] shadow-xs"
                    : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isSelected ? "bg-white text-[#4F46E5]" : "bg-[#F1F5F9] text-[#64748B]"
                  }`}
                >
                  {node.step}
                </span>
                <span className="font-semibold whitespace-nowrap">{node.label}</span>
              </button>

              {idx < nodes.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-[#94A3B8] shrink-0" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Inspector */}
      {activeNode && (
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-4 space-y-3 transition-all animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#4F46E5] font-semibold">
                Stage {activeNode.step} Deep-Dive
              </span>
              <h5 className="font-heading text-sm font-bold text-[#0F172A]">
                {activeNode.label} &mdash;{" "}
                <span className="font-normal text-[#475569]">{activeNode.sublabel}</span>
              </h5>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] font-semibold border border-[#C7D2FE]">
              <Cpu className="h-3 w-3" />
              {activeNode.tech}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#F1F5F9] text-xs">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] font-semibold block">
                Stage Objective
              </span>
              <p className="text-[#334155] leading-relaxed">{activeNode.role}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#059669] font-semibold block">
                Engineering Decision / Trade-off
              </span>
              <p className="text-[#334155] leading-relaxed">{activeNode.decision}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
