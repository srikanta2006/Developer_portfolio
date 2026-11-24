import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "emerald" | "amber" | "neutral" | "outline" | "sage";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium transition-colors select-none";

  const variantStyles = {
    default: "bg-white/[0.06] text-[#E2E8F0] border border-white/10",
    neutral: "bg-[#1E293B]/70 text-[#CBD5E1] border border-white/[0.08] shadow-2xs",
    accent: "bg-[#6366F1]/15 text-[#A5B4FC] border border-[#6366F1]/30",
    emerald: "bg-[#10B981]/15 text-[#6EE7B7] border border-[#10B981]/30",
    sage: "bg-[#10B981]/15 text-[#6EE7B7] border border-[#10B981]/30",
    amber: "bg-[#F59E0B]/15 text-[#FCD34D] border border-[#F59E0B]/30",
    outline: "bg-transparent text-[#94A3B8] border border-white/15",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] rounded-md leading-none",
    md: "px-2.5 py-1 text-xs rounded-lg leading-normal",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
