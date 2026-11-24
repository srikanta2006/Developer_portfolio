"use client";

import { useState } from "react";
import { Play, RotateCcw, Scale, Shield, Landmark, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface Scenario {
  id: string;
  title: string;
  description: string;
  prosecutionArg: string;
  defenceArg: string;
  judgeVerdict: string;
  statute: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "ai-copyright",
    title: "AI Training Data & Copyright Infringement",
    description: "Plaintiff claims generative model extracted verbatim copyrighted technical documentation without authorization.",
    prosecutionArg: "ChromaDB vector search retrieved 87% cosine similarity against Plaintiff's proprietary manuals. Under Section 106, unauthorized ingestion and substantial verbatim reconstruction constitutes prima facie copyright infringement.",
    defenceArg: "Model weights represent transformative statistical abstractions, not mechanical reproduction. Under Authors Guild v. Google, transformative functional utility without market substitution constitutes permissible fair use.",
    judgeVerdict: "VERDICT FOR DEFENCE (TRANSFORMATIVE USE). The multi-round debate proves mathematical parameter weights do not retain infringing copies. However, guardrail filtering must be enforced to suppress literal token emissions.",
    statute: "Copyright Act § 107 (Transformative Analysis) · ChromaDB Semantic Distance: 0.13",
  },
  {
    id: "agent-liability",
    title: "Autonomous Agent Unauthorized Trade Execution",
    description: "DeFi trading agent initiated liquidation sequence following anomalous oracle volatility spike.",
    prosecutionArg: "Prosecution demonstrates deterministic negligence: LangGraph state machine lacked bounds-checking on oracle feeds, allowing hallucinated price spreads to trigger irreversible smart contract calls.",
    defenceArg: "Autonomous agent adhered strictly to on-chain slippage tolerance bounds. The execution occurred within certified protocol parameters; market liquidation was driven by external oracle liquidity drought.",
    judgeVerdict: "PARTIAL LIABILITY ASSIGNED. Protocol designer held liable for absent anomaly guardrails. Smart contracts require deterministic circuit-breaker nodes in LangGraph orchestration before invoking high-value tools.",
    statute: "UCC Article 4A / Agentic Autonomous Systems Safety Framework",
  },
];

export function LegalArenaSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"debate" | "architecture">("debate");

  const startSimulation = () => {
    setIsRunning(true);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
    }, 1200);

    setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
    }, 2400);
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsRunning(false);
  };

  return (
    <div className="rounded-xl border border-[#C7D2FE] bg-gradient-to-br from-[#EEF2FF]/40 via-white to-[#F8FAFC] p-5 sm:p-6 space-y-5 shadow-xs">
      {/* Header bar with live simulator indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#4F46E5] text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-[#0F172A] flex items-center gap-2">
              <span>Interactive Multi-Agent Courtroom Simulator</span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                Live LangGraph Demo
              </span>
            </h4>
            <p className="text-xs text-[#64748B]">
              Simulate adversarial reasoning between Prosecution, Defence, and Judge agents
            </p>
          </div>
        </div>

        {/* Tab switch: Live Debate vs Architecture State Machine */}
        <div className="flex items-center rounded-lg border border-[#E2E8F0] bg-white p-0.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("debate")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "debate"
                ? "bg-[#4F46E5] text-white font-semibold"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Live Debate
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "architecture"
                ? "bg-[#4F46E5] text-white font-semibold"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Agent Roles & Tools
          </button>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <div className="space-y-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
          Choose Dispute Scenario:
        </span>
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => {
                setSelectedScenario(scenario);
                resetSimulation();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium text-left border transition-all ${
                selectedScenario.id === scenario.id
                  ? "bg-white border-[#4F46E5] text-[#4F46E5] shadow-xs ring-1 ring-[#4F46E5]/20 font-semibold"
                  : "bg-white/80 border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1]"
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "debate" ? (
        <div className="space-y-4">
          {/* Action trigger: Run Simulation */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white border border-[#E2E8F0]">
            <p className="text-xs text-[#475569] line-clamp-1 flex-1">
              <strong>Context:</strong> {selectedScenario.description}
            </p>
            <div className="flex items-center gap-2">
              {activeStep === 0 ? (
                <button
                  type="button"
                  onClick={startSimulation}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Run Agent Debate</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] text-xs font-medium transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Debate</span>
                </button>
              )}
            </div>
          </div>

          {/* Stepper Status Indicators */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div
              className={`p-2 rounded-lg border transition-all ${
                activeStep >= 1
                  ? "bg-[#EEF2FF] border-[#C7D2FE] text-[#4F46E5] font-semibold"
                  : "bg-white/60 border-[#E2E8F0] text-[#94A3B8]"
              }`}
            >
              1. Prosecution Agent
            </div>
            <div
              className={`p-2 rounded-lg border transition-all ${
                activeStep >= 2
                  ? "bg-[#ECFDF5] border-[#A7F3D0] text-[#059669] font-semibold"
                  : "bg-white/60 border-[#E2E8F0] text-[#94A3B8]"
              }`}
            >
              2. Defence Agent
            </div>
            <div
              className={`p-2 rounded-lg border transition-all ${
                activeStep >= 3
                  ? "bg-[#FEF3C7] border-[#FDE68A] text-[#B45309] font-semibold"
                  : "bg-white/60 border-[#E2E8F0] text-[#94A3B8]"
              }`}
            >
              3. Judge Verdict
            </div>
          </div>

          {/* Streamed Dialogue Box */}
          <div className="space-y-3 pt-1">
            {activeStep === 0 && (
              <div className="p-6 rounded-xl border border-dashed border-[#CBD5E1] bg-white text-center space-y-2">
                <Scale className="h-6 w-6 text-[#4F46E5] mx-auto opacity-70" />
                <p className="text-xs text-[#64748B]">
                  Click <strong>&quot;Run Agent Debate&quot;</strong> to watch LangChain agents formulate arguments and stream a reasoned judicial verdict in real-time.
                </p>
              </div>
            )}

            {/* Step 1: Prosecution */}
            {activeStep >= 1 && (
              <div className="p-4 rounded-xl border border-[#C7D2FE] bg-white shadow-2xs space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                <div className="flex items-center justify-between text-xs font-semibold text-[#4F46E5]">
                  <span className="flex items-center gap-1.5">
                    <Scale className="h-4 w-4" />
                    Prosecution Agent (LangChain + ChromaDB Retrieval)
                  </span>
                  <span className="font-mono text-[10px] text-[#64748B]">Round 1</span>
                </div>
                <p className="text-xs text-[#0F172A] leading-relaxed font-sans">
                  {selectedScenario.prosecutionArg}
                </p>
              </div>
            )}

            {/* Step 2: Defence */}
            {activeStep >= 2 && (
              <div className="p-4 rounded-xl border border-[#A7F3D0] bg-white shadow-2xs space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                <div className="flex items-center justify-between text-xs font-semibold text-[#059669]">
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4" />
                    Defence Agent (Rebuttal State)
                  </span>
                  <span className="font-mono text-[10px] text-[#64748B]">Round 2</span>
                </div>
                <p className="text-xs text-[#0F172A] leading-relaxed font-sans">
                  {selectedScenario.defenceArg}
                </p>
              </div>
            )}

            {/* Step 3: Judge Verdict */}
            {activeStep >= 3 && (
              <div className="p-4 rounded-xl border-2 border-[#FDE68A] bg-[#FFFBEB] shadow-xs space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between text-xs font-bold text-[#B45309]">
                  <span className="flex items-center gap-1.5">
                    <Landmark className="h-4 w-4" />
                    Judge Agent (LangGraph State Synthesis)
                  </span>
                  <Badge variant="amber" size="sm">Reasoned Verdict</Badge>
                </div>
                <p className="text-xs text-[#78350F] font-semibold leading-relaxed font-sans">
                  {selectedScenario.judgeVerdict}
                </p>
                <div className="pt-2 border-t border-[#FDE68A] text-[11px] font-mono text-[#92400E]">
                  Statutory Basis: {selectedScenario.statute}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Architecture Roles Tab */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#4F46E5]">
              <Scale className="h-4 w-4" />
              <span>Prosecution Agent</span>
            </div>
            <p className="text-[#64748B]">
              <strong>Role:</strong> Identifies violations, extracts statutory clauses, and builds initial adversarial claim.
            </p>
            <div className="font-mono text-[10px] text-[#0F172A] bg-[#F8FAFC] p-2 rounded border border-[#E2E8F0]">
              Tools: ChromaDB Vector Query, LangChain Document Retriever
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#059669]">
              <Shield className="h-4 w-4" />
              <span>Defence Agent</span>
            </div>
            <p className="text-[#64748B]">
              <strong>Role:</strong> Formulates counterarguments, challenges evidence validity, and asserts affirmative defenses.
            </p>
            <div className="font-mono text-[10px] text-[#0F172A] bg-[#F8FAFC] p-2 rounded border border-[#E2E8F0]">
              Tools: Precedent Cross-Checker, Fair-Use Evaluator
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#B45309]">
              <Landmark className="h-4 w-4" />
              <span>Judge Agent</span>
            </div>
            <p className="text-[#64748B]">
              <strong>Role:</strong> Orchestrated via LangGraph. Evaluates debate completeness, scores arguments, and outputs verdict.
            </p>
            <div className="font-mono text-[10px] text-[#0F172A] bg-[#F8FAFC] p-2 rounded border border-[#E2E8F0]">
              Tools: Structured Output Parser, Multi-Turn State Machine
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
