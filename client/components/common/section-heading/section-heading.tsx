"use client";

import { cn } from "@/lib/utils";
import { SectionBadge } from "../section-badge";
import { useSectionHeadingAnimation } from "./animations/useSectionHeadingAnimation";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  highlighted?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  animated?: boolean;
  
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  size = "lg",
  className,
  animated = false,
  highlighted,
}: SectionHeadingProps) {
  // Always call hooks
  const refs = useSectionHeadingAnimation();

  const titleParts =
    highlighted && title.includes(highlighted)
      ? title.split(highlighted)
      : [title, ""];

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
        <div ref={animated ? refs.badgeRef : undefined}>
          <SectionBadge>{badge}</SectionBadge>
        </div>
      )}

      <h2
        ref={animated ? refs.titleRef : undefined}
        className={cn(
          size === "lg" ? "heading-lg" : "heading-md",
        )}
      >
        {highlighted ? (
          <>
            {titleParts[0]}
            <span className="heading-highlight">
              {highlighted}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          ref={animated ? refs.descriptionRef : undefined}
          className={cn(
            "paragraph",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}