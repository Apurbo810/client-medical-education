"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Lock,
  Play,
} from "lucide-react";
import Link from "next/link";

import type { StudentCourseContent } from "@/types/student/courses/student-course";

interface CourseWeekItemProps {
  courseId: string;
  content: StudentCourseContent;
}

export function CourseWeekItem({
  courseId,
  content,
}: CourseWeekItemProps) {
  const locked = !content.isUnlocked;

  const Icon =
    locked
      ? Lock
      : content.type === "video"
        ? Play
        : content.type === "mock-test"
          ? ClipboardCheck
          : FileText;

  const normalizedDuration =
    typeof content.duration === "number"
      ? `${Math.floor(
          content.duration / 60,
        )} min`
      : content.duration;

  const typeLabel =
    content.type === "video"
      ? "Video"
      : content.type === "mock-test"
        ? "Mock Test"
        : content.type === "notes"
          ? "Notes"
          : "Study Material";

  const actionLabel = locked
    ? "Locked"
    : content.completed
      ? "Completed"
      : content.type === "mock-test"
        ? "Take Test"
        : "Open";

  const fileHref =
    !locked &&
    content.file
      ? `/student/learning/${courseId}/pdf/${content.id}`
      : null;

  return (
    <article
      className={[
        "student-learning-item",
        locked
          ? "student-learning-item-locked"
          : "",
        content.completed
          ? "student-learning-item-completed"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Icon */}
      <div
        className={[
          "student-learning-item-icon",
          locked
            ? "student-learning-item-icon-locked"
            : content.type ===
                "mock-test"
              ? "student-learning-item-icon-test"
              : "student-learning-item-icon-slide",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Icon className="size-5" />
      </div>

      {/* Content */}
      <div className="student-learning-item-info">
        <div className="student-learning-item-title-row">
          <h3 className="student-learning-item-title">
            {content.title}
          </h3>

          {content.isNew &&
            !locked && (
              <span className="student-learning-item-badge student-learning-item-badge-new">
                New
              </span>
            )}

          {content.isUpdated &&
            !locked && (
              <span className="student-learning-item-badge student-learning-item-badge-updated">
                Updated
              </span>
            )}

          {content.completed &&
            !locked && (
              <span className="student-learning-item-badge student-learning-item-badge-completed">
                Completed
              </span>
            )}
        </div>

        <p className="student-learning-item-description">
          {content.description}
        </p>

        <div className="student-learning-item-meta">
          <span className="student-learning-item-meta-item">
            {content.type ===
            "mock-test" ? (
              <ClipboardCheck className="student-learning-item-meta-icon" />
            ) : (
              <FileText className="student-learning-item-meta-icon" />
            )}

            {typeLabel}
          </span>

          {normalizedDuration && (
            <span className="student-learning-item-meta-item">
              <Clock3 className="student-learning-item-meta-icon" />
              {normalizedDuration}
            </span>
          )}

          {content.required && (
            <span className="student-learning-item-meta-item">
              Required
            </span>
          )}
        </div>

        {!locked &&
          !content.completed &&
          content.progress > 0 && (
            <div className="student-learning-item-progress">
              <div
                className="student-learning-item-progress-fill"
                style={{
                  width: `${content.progress}%`,
                }}
              />
            </div>
          )}
      </div>

      {/* Action */}
      <div className="student-learning-item-action">
        {locked ? (
          <button
            type="button"
            disabled
            className="student-learning-item-button student-learning-item-button-locked"
          >
            <Lock className="size-4" />
            <span>{actionLabel}</span>
          </button>
        ) : fileHref ? (
          <Link
            href={fileHref}
            className={[
              "student-learning-item-button",
              content.completed
                ? "student-learning-item-button-completed"
                : "student-learning-item-button-active",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {content.completed ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <FileText className="size-4" />
            )}

            <span>{actionLabel}</span>
          </Link>
        ) : (
          <button
            type="button"
            className={[
              "student-learning-item-button",
              content.completed
                ? "student-learning-item-button-completed"
                : "student-learning-item-button-active",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {content.completed ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <ClipboardCheck className="size-4" />
            )}

            <span>{actionLabel}</span>
          </button>
        )}
      </div>
    </article>
  );
}