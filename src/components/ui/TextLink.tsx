import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
  showIcon?: boolean;
  children: React.ReactNode;
}

export function TextLink({
  href,
  isExternal = false,
  showIcon = false,
  className,
  children,
  ...props
}: TextLinkProps) {
  const isActuallyExternal =
    isExternal || href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <span className="inline-flex items-center gap-1 group">
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      {(showIcon || isActuallyExternal) && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </span>
  );

  const combinedClasses = cn(
    "inline-flex items-center text-[#171717] hover:text-[#6D5DFB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D5DFB] rounded-sm font-medium",
    className
  );

  if (isActuallyExternal) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {content}
    </Link>
  );
}
