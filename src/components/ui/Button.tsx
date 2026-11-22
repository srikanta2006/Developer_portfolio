import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D5DFB] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none";

    const variantStyles = {
      primary:
        "bg-[#171717] text-white hover:bg-[#2b2b2b] active:bg-[#000000] border border-[#171717]",
      secondary:
        "bg-white text-[#171717] hover:bg-[#F7F6F2] active:bg-[#E8E5DD] border border-[#E8E5DD]",
      accent:
        "bg-[#6D5DFB] text-white hover:bg-[#5A49E6] active:bg-[#4C3DD4] border border-[#6D5DFB]",
      ghost:
        "bg-transparent text-[#171717] hover:bg-[#E8E5DD]/40 active:bg-[#E8E5DD]/70 border border-transparent",
      outline:
        "bg-transparent text-[#171717] hover:bg-white active:bg-[#F7F6F2] border border-[#E8E5DD]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-md gap-1.5",
      md: "h-10 px-4 text-sm rounded-lg gap-2",
      lg: "h-12 px-6 text-base rounded-lg gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
