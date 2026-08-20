"use client";

import { FileQuestion } from "lucide-react";

interface MockExamEmptyProps {
  title?: string;
  description?: string;
}

export function MockExamEmpty({
  title = "No exams found",
  description = "There are no exams available for the selected filter.",
}: MockExamEmptyProps) {
  return (
    <div className="mock-exams-empty">
      <div className="mock-exams-empty-icon">
        <FileQuestion className="size-6" />
      </div>

      <h2 className="mock-exams-empty-title">
        {title}
      </h2>

      <p className="mock-exams-empty-description">
        {description}
      </p>
    </div>
  );
}