import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  badge,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2.5 mb-10 sm:mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-3xl",
        className
      )}
    >
      {(number || badge) && (
        <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
          {number && (
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#60A5FA]">
              {number}
            </span>
          )}
          {badge && (
            <span className="font-mono text-[11px] font-medium tracking-wide text-[#64748B]">
              {badge}
            </span>
          )}
        </div>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.125rem] font-bold tracking-tight text-[#ECEEF0]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
