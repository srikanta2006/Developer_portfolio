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
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
        copied
          ? "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]"
          : "bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-[#EEF2FF] hover:text-[#4F46E5] hover:border-[#C7D2FE]"
      } ${className}`}
      aria-label={`Copy ${text} to clipboard`}
      title="Click to copy"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#059669]" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>{label || text}</span>
        </>
      )}
    </button>
  );
}
