"use client";

import { MockExamCard } from "./mock-exam-card";
import { MockExamEmpty } from "./mock-exam-empty";

import type { MockExam } from "@/types/mock-exam";

import {
  getMockExamAccess,
  type MockExamAccess,
} from "@/lib/mock-exams";

interface MockExamGridProps {
  exams: MockExam[];
  studentId: string;
  onStart: (exam: MockExam) => void;
}

export function MockExamGrid({
  exams,
  studentId,
  onStart,
}: MockExamGridProps) {
  if (exams.length === 0) {
    return <MockExamEmpty />;
  }

  return (
    <div className="mock-exams-grid">
      {exams.map((exam) => {
        const access: MockExamAccess =
          getMockExamAccess(
            studentId,
            exam.courseId,
            exam.contentId,
          );

        return (
          <MockExamCard
            key={exam.id}
            exam={exam}
            access={access}
            onStart={onStart}
          />
        );
      })}
    </div>
  );
}