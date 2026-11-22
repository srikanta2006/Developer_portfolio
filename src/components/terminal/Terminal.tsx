"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

const QUICK_COMMANDS = [
  "help",
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
          <p className="text-[#6D5DFB] font-semibold">
            Srikanta Bellamkonda — Interactive Terminal v1.0.0
          </p>
          <p className="text-[#8A8884]">
            Type <span className="text-[#171717] font-semibold bg-[#E8E5DD]/70 px-1 rounded">help</span> to view available portfolio commands, or click the shortcuts below.
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
          <div className="space-y-1.5 text-xs text-[#171717] font-mono">
            <p className="text-[#706E6B]">Available deterministic commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div>
                <span className="text-[#6D5DFB] font-semibold">about</span>: Brief professional bio
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">projects</span>: List featured work & case studies
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">skills</span>: Technical capabilities inventory
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">github</span>: Public GitHub profile information
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">contact</span>: Direct communication channels
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">resume</span>: Request resume link
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">whoami</span>: Display session identity
              </div>
              <div>
                <span className="text-[#6D5DFB] font-semibold">clear</span>: Clear terminal display
              </div>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-1 text-xs text-[#171717] font-sans">
            <p className="font-semibold text-[#171717]">Srikanta Bellamkonda</p>
            <p className="text-[#706E6B]">
              Creative Technologist · Software Developer · AI Builder based in Hyderabad, India.
            </p>
            <p className="text-[#706E6B]">
              Focusing on modern web engineering, multi-agent LLM orchestration, and low-latency software.
            </p>
          </div>
        );
        break;

      case "projects":
      case "work":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-[#706E6B]">Featured Portfolio Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded bg-[#F7F6F2] border border-[#E8E5DD] flex items-center justify-between">
                <div>
                  <span className="text-[#171717] font-semibold">{p.title}</span> —{" "}
                  <span className="text-[#706E6B]">{p.tagline}</span>
                </div>
                <Link
                  href={`/work/${p.slug}`}
                  className="text-[#6D5DFB] hover:underline shrink-0 ml-2 font-sans font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-[#706E6B]">Technical Capabilities by Discipline:</p>
            {SKILL_GROUPS.map((s) => (
              <div key={s.category}>
                <span className="text-[#6D5DFB] font-semibold">{s.category}:</span>{" "}
                <span className="text-[#171717]">{s.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "github":
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-[#171717] font-semibold">GitHub Profile: srikanta2006</p>
            <p className="text-[#706E6B]">
              Public Repositories: 32 · Followers: 16
            </p>
            <p>
              URL:{" "}
              <a
                href="https://github.com/srikanta2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6D5DFB] hover:underline"
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
            <p className="text-[#171717] font-semibold">Direct Communication:</p>
            <p>Email: <a href="mailto:contact@srikanta.dev" className="text-[#6D5DFB] hover:underline">contact@srikanta.dev</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/srikanta-bellamkonda" target="_blank" rel="noopener noreferrer" className="text-[#6D5DFB] hover:underline">linkedin.com/in/srikanta-bellamkonda</a></p>
            <p>GitHub: <a href="https://github.com/srikanta2006" target="_blank" rel="noopener noreferrer" className="text-[#6D5DFB] hover:underline">github.com/srikanta2006</a></p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-[#171717] font-semibold">Curriculum Vitae / Resume:</p>
            <p className="text-[#706E6B]">Request a verified copy of Srikanta&apos;s latest resume:</p>
            <a
              href="mailto:contact@srikanta.dev?subject=Resume%20Request%20-%20Srikanta%20Bellamkonda"
              className="text-[#6D5DFB] hover:underline"
            >
              Email contact@srikanta.dev (Subject: Resume Request)
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
          <p className="text-xs font-mono text-[#4F5B40]">
            guest@portfolio (a welcome visitor exploring Srikanta&apos;s work)
          </p>
        );
        break;

      case "sudo":
        output = (
          <p className="text-xs font-mono text-[#D9534F]">
            permission denied: guest is not in the sudoers file. This incident will be reported to Srikanta ☕
          </p>
        );
        break;

      case "date":
        output = (
          <p className="text-xs font-mono text-[#171717]">
            {new Date().toUTCString()}
          </p>
        );
        break;

      default:
        output = (
          <p className="text-xs font-mono text-[#706E6B]">
            command not found: <span className="text-[#171717]">{trimmed}</span>. Type <span className="text-[#6D5DFB]">help</span> to see supported commands.
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
      className="rounded-2xl border border-[#E8E5DD] bg-white shadow-xs overflow-hidden cursor-text transition-all focus-within:border-[#6D5DFB]/40"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8E5DD] bg-[#F7F6F2]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E5DD] border border-[#D4CFBF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E5DD] border border-[#D4CFBF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E5DD] border border-[#D4CFBF]" />
          </div>
          <span className="font-mono text-xs text-[#706E6B] pl-2 flex items-center gap-1.5">
            <TerminalIcon className="h-3 w-3" />
            guest@srikanta: ~
          </span>
        </div>

        <span className="font-mono text-[11px] text-[#706E6B] hidden sm:inline">
          interactive portfolio shell
        </span>
      </div>

      {/* Terminal Content Buffer */}
      <div
        className="p-5 sm:p-6 font-mono text-xs max-h-[380px] overflow-y-auto space-y-4"
        role="region"
        aria-live="polite"
        aria-label="Terminal output stream"
      >
        {history.map((entry, i) => (
          <div key={i} className="space-y-1.5">
            {entry.command !== "welcome" && (
              <div className="flex items-center gap-2 text-[#706E6B]">
                <span className="text-[#6D5DFB] font-bold">guest@srikanta:~$</span>
                <span className="text-[#171717] font-semibold">{entry.command}</span>
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
        className="flex items-center gap-2 px-5 py-3 border-t border-[#E8E5DD] bg-[#F7F6F2]/60"
      >
        <span className="font-mono text-xs font-bold text-[#6D5DFB] shrink-0">
          guest@srikanta:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. help, projects, skills)..."
          className="flex-1 bg-transparent font-mono text-xs text-[#171717] placeholder:text-[#8A8884] focus:outline-none"
          aria-label="Terminal input"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="p-1 rounded text-[#706E6B] hover:text-[#171717] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6D5DFB]"
          aria-label="Submit command"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>

      {/* Mobile-Friendly Quick Command Buttons */}
      <div className="px-5 py-2.5 border-t border-[#E8E5DD]/70 bg-white flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#706E6B] mr-1 hidden sm:inline">
          Quick commands:
        </span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="font-mono text-[11px] px-2 py-0.5 rounded border border-[#E8E5DD] bg-[#F7F6F2] hover:bg-[#6D5DFB]/10 hover:border-[#6D5DFB]/40 hover:text-[#6D5DFB] text-[#171717] transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
