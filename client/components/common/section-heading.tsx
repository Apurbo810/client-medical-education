import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full border bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
