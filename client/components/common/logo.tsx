import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
        <GraduationCap className="h-5 w-5" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight">
          Booster Prep
        </span>

        <span className="text-xs font-medium text-muted-foreground">
          Medical Education
        </span>
      </div>
    </Link>
  );
}
