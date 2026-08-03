import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
