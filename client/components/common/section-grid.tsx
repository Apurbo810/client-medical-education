import { cn } from "@/lib/utils";

interface SectionGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  align?: "start" | "center" | "end";
}

const gridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

const alignment = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

export function SectionGrid({
  children,
  className,
  columns = 2,
  align = "center",
}: SectionGridProps) {
  return (
    <div
      className={cn(
        "grid gap-8 lg:gap-12",
        gridColumns[columns],
        alignment[align],
        className,
      )}
    >
      {children}
    </div>
  );
}
