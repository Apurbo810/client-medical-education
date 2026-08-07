import { cn } from "@/lib/utils";

type SectionBadgeProps = React.ComponentPropsWithoutRef<"span">;

export function SectionBadge({
  children,
  className,
  ...props
}: SectionBadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
