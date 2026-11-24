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
        "space-y-3 mb-10 sm:mb-14",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-3xl",
        className
      )}
    >
      {(number || badge) && (
        <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
          {number && (
            <span className="font-mono text-xs font-semibold tracking-wider text-[#A5B4FC] bg-[#6366F1]/15 px-2.5 py-0.5 rounded-full border border-[#6366F1]/30">
              {number}
            </span>
          )}
          {badge && (
            <span className="font-mono text-xs font-medium tracking-wide text-[#94A3B8]">
              {badge}
            </span>
          )}
        </div>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
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
