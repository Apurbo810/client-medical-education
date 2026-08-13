import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "none" | "sm" | "md" | "lg";
}

const spacingVariants = {
  none: "",
  sm: "py-8 md:py-8",
  md: "py-16 md:py-20 lg:py-24",
  lg: "py-20 md:py-24 lg:py-28",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className,
      id,
      spacing = "lg",
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          spacingVariants[spacing],
          className,
        )}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";