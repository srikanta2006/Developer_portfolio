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
    default: "bg-white/[0.04] text-[#CBD5E1] border border-white/[0.08]",
    neutral: "bg-white/[0.04] text-[#94A3B8] border border-white/[0.07]",
    accent: "bg-[#2563EB]/12 text-[#60A5FA] border border-[#3B82F6]/25",
    emerald: "bg-[#10B981]/12 text-[#34D399] border border-[#10B981]/25",
    sage: "bg-[#10B981]/12 text-[#34D399] border border-[#10B981]/25",
    amber: "bg-[#F59E0B]/12 text-[#FCD34D] border border-[#F59E0B]/25",
    outline: "bg-transparent text-[#94A3B8] border border-white/[0.1]",
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
