import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  highlighted?: string;
  align?: "left" | "center";
  size?: "md" | "lg" ;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        align === "center"
          ? "mx-auto text-center"
          : "text-left",
        className,
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
          {badge}
        </span>
      )}

      <h2
        className={cn(
          size === "lg" ? "heading-lg" : "heading-md"
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="paragraph mx-auto max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}