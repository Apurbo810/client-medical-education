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
    <div className={cn("hero-floating-card hero-card-shadow", className)}>
      <div className="hero-card-icon">{icon}</div>

      <div>
        <h3 className="hero-card-title">{title}</h3>

        <p className="hero-card-description">{description}</p>
      </div>
    </div>
  );
}
