"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is not available
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
        copied
          ? "bg-[#10B981]/20 text-[#6EE7B7] border border-[#10B981]/40"
          : "bg-white/[0.06] text-[#CBD5E1] border border-white/10 hover:bg-white/[0.1] hover:text-white hover:border-white/20"
      } ${className}`}
      aria-label={`Copy ${text} to clipboard`}
      title="Click to copy"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#34D399]" />
          <span className="font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3 text-[#94A3B8]" />
          <span>{label || text}</span>
        </>
      )}
    </button>
  );
}
