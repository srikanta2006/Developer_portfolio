import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
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
      {number && (
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
            {number}
          </span>
          <div className="h-px w-8 bg-[#E8E5DD]" aria-hidden="true" />
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#171717]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#706E6B] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
