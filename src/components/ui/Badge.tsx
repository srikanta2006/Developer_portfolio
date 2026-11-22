import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "sage" | "outline" | "neutral";
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
    "inline-flex items-center font-mono font-medium border transition-colors select-none";

  const variantStyles = {
    default: "bg-[#E8E5DD]/50 text-[#171717] border-[#E8E5DD]",
    neutral: "bg-white text-[#706E6B] border-[#E8E5DD]",
    accent: "bg-[#F0EEFE] text-[#6D5DFB] border-[#6D5DFB]/20",
    sage: "bg-[#F2F5EF] text-[#4F5B40] border-[#B8C6A5]/40",
    outline: "bg-transparent text-[#171717] border-[#E8E5DD]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] rounded leading-none",
    md: "px-2.5 py-1 text-xs rounded-md leading-normal",
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
