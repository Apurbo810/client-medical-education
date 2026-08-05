import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  spacing?: "none" | "sm" | "md" | "lg";
}

const spacingVariants = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20 lg:py-24",
  lg: "py-20 md:py-24 lg:py-28",
};

export function Section({
  children,
  className,
  id,
  as: Component = "section",
  spacing = "lg",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(spacingVariants[spacing], className)}
    >
      {children}
    </Component>
  );
}