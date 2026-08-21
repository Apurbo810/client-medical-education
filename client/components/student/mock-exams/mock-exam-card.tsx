"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileQuestion,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import { courses } from "@/data/courses";
import type { MockExam } from "@/types/mock-exam";
import type { MockExamAccess } from "@/lib/mock-exams";

interface MockExamCardProps {
  exam: MockExam;
  access: MockExamAccess;
  onStart: (exam: MockExam) => void;
}

const typeLabels: Record<
  MockExam["type"],
  string
> = {
  cat: "CAT",
  mock: "Mock Exam",
  weekly: "Weekly Mock",
};

export function MockExamCard({
  exam,
  access,
  onStart,
}: MockExamCardProps) {
  const course = courses.find(
    (item) => item.id === exam.courseId,
  );

  const isResult = access === "result";
  const isAvailable = access === "available";
  const isSoon = access === "soon";
  const requiresSubscription =
    access === "subscription";

  return (
    <article className="mock-exam-card">
      {/* Header */}
      <div className="mock-exam-card-header">
        <div className="mock-exam-icon">
          <FileQuestion className="size-6" />
        </div>

        <span className="mock-exam-type">
          {typeLabels[exam.type]}
        </span>
      </div>

      {/* Course */}
      {course && (
        <p className="mt-4 text-xs font-medium text-primary">
          {course.title}
        </p>
      )}

      {/* Title */}
      <h2 className="mock-exam-title">
        {exam.title}
      </h2>

      {/* Description */}
      <p className="mock-exam-description">
        {exam.description}
      </p>

      {/* Meta */}
      <div className="mock-exam-meta">
        <div className="mock-exam-meta-item">
          <span className="mock-exam-meta-label">
            Questions
          </span>

          <span className="mock-exam-meta-value">
            {exam.questions}
          </span>
        </div>

        <div className="mock-exam-meta-item">
          <span className="mock-exam-meta-label">
            Duration
          </span>

          <span className="mock-exam-meta-value">
            {exam.duration} min
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="mock-exam-status">
        {isResult && (
          <span className="mock-exam-status-completed">
            <CheckCircle2 className="size-4" />
            Completed
          </span>
        )}

        {isAvailable && (
          <span className="mock-exam-status-upcoming">
            <Sparkles className="size-4" />
            Available
          </span>
        )}

        {isSoon && (
          <span className="mock-exam-status-pending">
            <Clock3 className="size-4" />
            Soon Available
          </span>
        )}

        {requiresSubscription && (
          <span className="mock-exam-status-pending">
            <LockKeyhole className="size-4" />
            Subscription Required
          </span>
        )}
      </div>

      {/* Action */}
      <button
        type="button"
        disabled={
          isSoon || requiresSubscription
        }
        onClick={() => {
          if (
            isResult ||
            isAvailable
          ) {
            onStart(exam);
          }
        }}
        className={[
          "mock-exam-action",

          (isSoon ||
            requiresSubscription) &&
            "cursor-not-allowed opacity-60",

          isResult &&
            "mock-exam-action-secondary",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {isResult && (
          <>
            View Result
            <ArrowRight className="size-4" />
          </>
        )}

        {isAvailable && (
          <>
            Start Exam
            <ArrowRight className="size-4" />
          </>
        )}

        {isSoon && (
          <>
            Soon Available
            <Clock3 className="size-4" />
          </>
        )}

        {requiresSubscription && (
          <>
            Requires Subscription
            <LockKeyhole className="size-4" />
          </>
        )}
      </button>
    </article>
  );
}