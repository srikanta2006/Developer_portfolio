"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

const QUICK_COMMANDS = [
  "help",
  "arena",
  "hackathons",
  "about",
  "projects",
  "skills",
  "github",
  "contact",
  "clear",
];

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-xs leading-relaxed">
          <p className="text-[#818CF8] font-semibold">
            Srikanta Bellamkonda &mdash; Interactive Terminal v2.0.0
          </p>
          <p className="text-slate-400">
            Type <span className="text-white font-semibold bg-white/[0.08] px-1.5 py-0.5 rounded border border-white/10 font-mono">help</span> to view available portfolio commands, or click the shortcuts below.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandLog, setCommandLog] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of output on new output
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCommandLog((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmd = trimmed.toLowerCase();
    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-slate-200 font-mono">
            <p className="text-slate-400">Available deterministic commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div>
                <span className="text-[#818CF8] font-semibold">arena</span>: Multi-agent AI courtroom simulation
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">hackathons</span>: 7+ hackathons, tech events &amp; SIH log
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">about</span>: Brief professional bio
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">projects</span>: List featured work &amp; case studies
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">skills</span>: Technical capabilities inventory
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">github</span>: Public GitHub profile information
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">contact</span>: Direct communication channels
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">resume</span>: Request resume link
              </div>
              <div>
                <span className="text-[#818CF8] font-semibold">clear</span>: Clear terminal display
              </div>
            </div>
          </div>
        );
        break;

      case "arena":
      case "debate":
      case "legal":
        output = (
          <div className="space-y-2 text-xs font-mono p-3.5 rounded-xl bg-[#0F1626] border border-white/10">
            <div className="text-white font-bold flex items-center justify-between">
              <span>⚖️ LegalArena Multi-Agent Courtroom Simulation (LangChain + LangGraph)</span>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">ACTIVE</span>
            </div>
            <div className="space-y-1.5 pt-1 border-t border-white/10 text-[11px]">
              <p>
                <span className="text-red-400 font-semibold">PROSECUTION AGENT:</span> &ldquo;The defendant model deployed unsupervised neural weights into high-frequency trading without verifiable circuit breakers.&rdquo;
              </p>
              <p>
                <span className="text-blue-400 font-semibold">DEFENCE AGENT:</span> &ldquo;Objection. Rigorous vector sandboxing and human-in-the-loop guardrails were validated in pre-production benchmarks.&rdquo;
              </p>
              <p>
                <span className="text-purple-300 font-semibold">JUDGE AGENT:</span> &ldquo;Verdict: Defence establishes compliance protocol. Partial fine assessed for audit logging latency. LangGraph state transitions completed in 240ms.&rdquo;
              </p>
            </div>
            <p className="text-[10px] text-slate-400 pt-1">
              💡 Tip: Check out the <strong>Interactive Architecture Blueprint</strong> on the LegalArena card!
            </p>
          </div>
        );
        break;

      case "hackathons":
      case "hackathon":
        output = (
          <div className="space-y-2 text-xs font-mono p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <div className="text-white font-bold flex items-center justify-between">
              <span>🏆 7+ Hackathons &amp; Tech Events Log</span>
              <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">1st Place Internal SIH</span>
            </div>
            <div className="space-y-1.5 pt-1 border-t border-amber-500/20 text-[11px] text-amber-100/90">
              <p>• <strong>Smart India Hackathon (SIH) Internal Screening:</strong> 1st Place Winner &amp; Team Lead.</p>
              <p>• <strong>Collegiate &amp; National Competitions:</strong> Competed in 7 hackathons plus collegiate tech events across 2023–Present.</p>
              <p>• <strong>Core Takeaway:</strong> 250+ sprint hours mastering high-pressure zero-to-one prototyping and zero-distraction tooling (directly inspired HackOS).</p>
            </div>
            <p className="text-[10px] text-amber-300 pt-1">
              💡 Tip: Check out the <strong>7+ Hackathons &amp; Tech Events</strong> section on the portfolio!
            </p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-1 text-xs text-slate-200 font-sans">
            <p className="font-semibold text-white">Srikanta Bellamkonda</p>
            <p className="text-slate-300">
              Student Developer · Software Engineer &amp; Applied AI Engineer based in Hyderabad, India.
            </p>
            <p className="text-slate-300">
              Computer Science undergraduate at CVR College of Engineering (Expected May 2027).
            </p>
            <p className="text-slate-300">
              The Engineer Who Builds Intelligent Products. Combining full-stack web development, multi-agent AI systems, and RAG.
            </p>
          </div>
        );
        break;

      case "projects":
      case "work":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-slate-400">Featured Portfolio Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{p.title}</span>
                  <Link
                    href={`/work/${p.slug}`}
                    className="text-[#818CF8] hover:underline shrink-0 ml-2 font-sans font-medium text-xs"
                  >
                    View Case Study &rarr;
                  </Link>
                </div>
                <div className="text-slate-400 text-[11px]">{p.tagline}</div>
                {p.liveUrl && (
                  <div className="text-[11px]">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Live Demo: {p.liveUrl}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-slate-400">Technical Capabilities &amp; Assessed Proficiencies:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-0.5">
                <span className="text-[#818CF8] font-semibold">{cat.category}:</span>{" "}
                <span className="text-slate-200">
                  {cat.skills.map((s) => `${s.name} (${s.proficiency})`).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "github":
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-white font-semibold">GitHub Profile: srikanta2006</p>
            <p className="text-slate-400">
              Public Repositories: 32 · Followers: 16
            </p>
            <p>
              URL:{" "}
              <a
                href="https://github.com/srikanta2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#818CF8] hover:underline"
              >
                https://github.com/srikanta2006
              </a>
            </p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-white font-semibold">Direct Communication:</p>
            <p>Email: <a href="mailto:srikantacvr@gmail.com" className="text-[#818CF8] hover:underline">srikantacvr@gmail.com</a></p>
            <p>Location: Hyderabad, India</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/srikanta-bellamkonda" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">linkedin.com/in/srikanta-bellamkonda</a></p>
            <p>GitHub: <a href="https://github.com/srikanta2006" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">github.com/srikanta2006</a></p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-white font-semibold">Curriculum Vitae / Resume:</p>
            <p className="text-slate-300">Request a verified copy of Srikanta&apos;s latest resume:</p>
            <a
              href="mailto:srikantacvr@gmail.com?subject=Resume%20Request%20-%20Srikanta%20Bellamkonda"
              className="text-[#818CF8] hover:underline"
            >
              Email srikantacvr@gmail.com (Subject: Resume Request)
            </a>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "whoami":
        output = (
          <p className="text-xs font-mono text-emerald-400">
            guest@portfolio (a welcome visitor exploring Srikanta&apos;s work)
          </p>
        );
        break;

      case "sudo":
        output = (
          <p className="text-xs font-mono text-rose-400">
            permission denied: guest is not in the sudoers file. This incident will be reported to Srikanta ☕
          </p>
        );
        break;

      default:
        output = (
          <p className="text-xs font-mono text-slate-400">
            command not found: <span className="text-white">{trimmed}</span>. Type <span className="text-[#818CF8]">help</span> to see supported commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandLog.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="rounded-3xl border border-white/10 bg-[#090D16] shadow-2xl overflow-hidden cursor-text transition-all focus-within:border-indigo-500/50"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0E1322]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 border border-rose-400/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 border border-amber-400/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
          </div>
          <span className="font-mono text-xs text-slate-300 pl-2 flex items-center gap-1.5">
            <TerminalIcon className="h-3 w-3 text-[#818CF8]" />
            guest@srikanta: ~
          </span>
        </div>

        <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
          interactive portfolio shell
        </span>
      </div>

      {/* Terminal Content Buffer */}
      <div
        className="p-5 sm:p-6 font-mono text-xs max-h-[420px] overflow-y-auto space-y-4"
        role="region"
        aria-live="polite"
        aria-label="Terminal output stream"
      >
        {history.map((entry, i) => (
          <div key={i} className="space-y-1.5">
            {entry.command !== "welcome" && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[#818CF8] font-bold">guest@srikanta:~$</span>
                <span className="text-white font-semibold">{entry.command}</span>
              </div>
            )}
            <div className="pl-0 sm:pl-2">{entry.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Command Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-5 py-3 border-t border-white/[0.08] bg-[#0D121F]"
      >
        <span className="font-mono text-xs font-bold text-[#818CF8] shrink-0">
          guest@srikanta:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. arena, hackathons, projects, skills)..."
          className="flex-1 bg-transparent font-mono text-xs text-white placeholder:text-slate-500 focus:outline-none"
          aria-label="Terminal input"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="p-1 rounded text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1]"
          aria-label="Submit command"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>

      {/* Mobile-Friendly Quick Command Buttons */}
      <div className="px-5 py-2.5 border-t border-white/[0.08] bg-[#090D16] flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
          Quick commands:
        </span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="font-mono text-[11px] px-2.5 py-0.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-indigo-400/50 hover:text-white text-slate-300 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
