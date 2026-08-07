import { ArrowRight } from "lucide-react";

import type { LearningProcess } from "@/types/learning-process";

interface ProcessCardProps {
  process: LearningProcess;
  isLast?: boolean;
}

export function ProcessCard({
  process,
  isLast = false,
}: ProcessCardProps) {
  const Icon = process.icon;

  return (
    <article data-animate className="group process-card">
      {/* Step Number */}
      <span className="process-step">
        {process.step}
      </span>

      {/* Icon */}
      <div className="process-icon">
        <Icon className="size-8" />
      </div>

      {/* Content */}
      <h3 className="process-title">
        {process.title}
      </h3>

      <p className="process-description">
        {process.description}
      </p>

      {/* Desktop Arrow */}
      {!isLast && (
        <div className="process-arrow">
          <ArrowRight className="size-7" />
        </div>
      )}
    </article>
  );
}