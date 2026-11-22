import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

export function Container({
  children,
  id,
  className,
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-[840px]",
    default: "max-w-[1120px]",
    wide: "max-w-[1240px]",
  };

  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
