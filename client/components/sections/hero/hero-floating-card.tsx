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
        "hero-card-shadow flex w-80 items-start gap-4 rounded-3xl border border-border/50 bg-background/85 p-5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {" "}
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
