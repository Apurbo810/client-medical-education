"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Lock,
  Play,
} from "lucide-react";

interface CourseWeekItemProps {
  content: {
    id: string;
    type: "slide" | "video" | "notes" | "mock-test";
    title: string;
    description: string;

    required: boolean;

    isNew: boolean;
    isUpdated: boolean;

    file?: string;
    videoUrl?: string;
    youtubeId?: string;
    href?: string;

    duration?: number | string;

    isUnlocked: boolean;

    progress: number;

    completed: boolean;

    completedAt?: string | null;
  };
}

export function CourseWeekItem({
  content,
}: CourseWeekItemProps) {
  const locked = !content.isUnlocked;

  function getIcon() {
    if (locked) {
      return Lock;
    }

    if (content.type === "video") {
      return Play;
    }

    if (content.type === "mock-test") {
      return ClipboardCheck;
    }

    return FileText;
  }

  const Icon = getIcon();

  const normalizedDuration =
    typeof content.duration === "number"
      ? `${Math.floor(content.duration / 60)} min`
      : content.duration;

  const typeLabel =
    content.type === "video"
      ? "Video"
      : content.type === "mock-test"
        ? "Mock Test"
        : content.type === "notes"
          ? "Notes"
          : "PDF Slide";

  const actionLabel = locked
    ? "Locked"
    : content.completed
      ? "Completed"
      : content.type === "video"
        ? "Watch"
        : content.type === "mock-test"
          ? "Take Test"
          : "Open";

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
      ].join(" ")}
    >
      {/* Icon */}
      <div
        className={[
          "student-learning-item-icon",

          locked
            ? "student-learning-item-icon-locked"
            : content.type === "video"
              ? "student-learning-item-icon-video"
              : content.type === "mock-test"
                ? "student-learning-item-icon-test"
                : "student-learning-item-icon-slide",
        ].join(" ")}
      >
        <Icon className="size-5" />
      </div>

      {/* Content */}
      <div className="student-learning-item-info">
        <div className="student-learning-item-title-row">
          <h3 className="student-learning-item-title">
            {content.title}
          </h3>

          {content.isNew && !locked && (
            <span className="student-learning-item-badge student-learning-item-badge-new">
              New
            </span>
          )}

          {content.isUpdated && !locked && (
            <span className="student-learning-item-badge student-learning-item-badge-updated">
              Updated
            </span>
          )}

          {content.completed && !locked && (
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
            {content.type === "video" ? (
              <Play className="student-learning-item-meta-icon" />
            ) : content.type === "mock-test" ? (
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

        {/* Progress */}
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
        ) : content.completed ? (
          <button
            type="button"
            className="student-learning-item-button student-learning-item-button-completed"
          >
            <CheckCircle2 className="size-4" />

            <span>{actionLabel}</span>
          </button>
        ) : (
          <button
            type="button"
            className="student-learning-item-button student-learning-item-button-active"
          >
            <Icon className="size-4" />

            <span>{actionLabel}</span>
          </button>
        )}
      </div>
    </article>
  );
}