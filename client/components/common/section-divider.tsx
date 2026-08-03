import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "mx-auto my-16 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent",
        className,
      )}
    />
  );
}
