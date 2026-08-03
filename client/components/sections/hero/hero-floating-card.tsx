import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeroFloatingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function HeroFloatingCard({
  icon,
  title,
  description,
  className,
}: HeroFloatingCardProps) {
  return (
    <div
      className={cn(
        "flex w-72 items-start gap-4 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
