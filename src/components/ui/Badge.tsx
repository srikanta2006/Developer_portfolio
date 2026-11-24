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
    default: "bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]",
    neutral: "bg-white text-[#475569] border border-[#E2E8F0] shadow-2xs",
    accent: "bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]",
    emerald: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
    sage: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
    amber: "bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]",
    outline: "bg-transparent text-[#334155] border border-[#CBD5E1]",
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
