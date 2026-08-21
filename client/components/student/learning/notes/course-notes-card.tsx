"use client";

import {
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";
import Link from "next/link";

import type { CourseContent } from "@/types/course";

interface StudentNoteContent extends CourseContent {
  isUnlocked: boolean;
  progress: number;
  completed: boolean;
  completedAt?: string | null;
}

interface CourseNotesCardProps {
  courseId: string;
  content: StudentNoteContent;
  weekNumber: number;
  weekTitle: string;
}

export function CourseNotesCard({
  courseId,
  content,
  weekNumber,
  weekTitle,
}: CourseNotesCardProps) {
  const locked = !content.isUnlocked;

  const typeLabel =
    content.type === "notes"
      ? "Notes"
      : "Study Material";

  const href =
    !locked && content.file
      ? `/student/learning/${courseId}/pdf/${content.id}`
      : "#";

  const duration =
    typeof content.duration === "number"
      ? `${Math.floor(content.duration / 60)} min`
      : null;

  return (
    <article
      className={[
        "group overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-sm transition-all duration-300",
        locked
          ? "opacity-60"
          : "hover:-translate-y-1 hover:shadow-lg",
      ].join(" ")}
    >
      {/* =====================================================
          DOCUMENT PREVIEW
      ===================================================== */}

      <Link
        href={href}
        aria-disabled={locked}
        onClick={(event) => {
          if (locked || !content.file) {
            event.preventDefault();
          }
        }}
        className="block"
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-primary/5">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

          {/* Document */}
          <div className="relative flex h-24 w-20 flex-col items-center justify-center rounded-xl border border-border bg-card shadow-md transition-transform duration-300 group-hover:scale-105">
            <FileText className="size-9 text-primary" />

            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              PDF
            </span>
          </div>

          {/* Completed */}
          {content.completed && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">
              <CheckCircle2 className="size-3.5" />
              Completed
            </span>
          )}

          {/* Locked */}
          {locked && (
            <span className="absolute right-3 top-3 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Locked
            </span>
          )}
        </div>
      </Link>

      {/* =====================================================
          CARD CONTENT
      ===================================================== */}

      <div className="space-y-4 p-4">
        {/* Week */}
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Week {weekNumber} · {weekTitle}
        </span>

        {/* Type */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="size-3.5" />

          <span>{typeLabel}</span>

          {content.required && (
            <>
              <span>•</span>
              <span>Required</span>
            </>
          )}
        </div>

        {/* Title + Description */}
        <div className="space-y-1.5">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
            {content.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </div>

        {/* Duration */}
        {duration && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock3 className="size-3.5" />
            <span>{duration}</span>
          </div>
        )}

        {/* =================================================
            PROGRESS
        ================================================= */}

        {!locked && (
          <div className="space-y-2">
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{
                  width: `${content.progress}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                {content.completed
                  ? "Completed"
                  : content.progress > 0
                    ? `${content.progress}% done`
                    : "Not started"}
              </span>

              {content.file && !content.completed && (
                <Link
                  href={href}
                  className="font-medium text-primary hover:underline"
                >
                  Open
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Locked */}
        {locked && (
          <p className="text-xs font-medium text-muted-foreground">
            This material is locked.
          </p>
        )}
      </div>
    </article>
  );
}