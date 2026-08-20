"use client";

import {
  CheckCircle2,
  Clock3,
  Play,
} from "lucide-react";
import Link from "next/link";

import type { CourseContent } from "@/types/course";

interface CourseVideoCardProps {
  courseId: string;

  content: CourseContent & {
    isUnlocked: boolean;
    progress: number;
    completed: boolean;
    completedAt?: string | null;
  };

  weekTitle: string;
  weekNumber: number;
}

export function CourseVideoCard({
  courseId,
  content,
  weekTitle,
  weekNumber,
}: CourseVideoCardProps) {
  const locked = !content.isUnlocked;

  const thumbnail = content.youtubeId
    ? `https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg`
    : null;

  const duration =
    typeof content.duration === "number"
      ? `${Math.floor(content.duration / 60)}:${String(
          content.duration % 60,
        ).padStart(2, "0")}`
      : null;

  const href = locked
    ? "#"
    : `/student/learning/${courseId}/video/${content.id}`;

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
      {/* Thumbnail */}
      <Link
        href={href}
        aria-disabled={locked}
        onClick={(event) => {
          if (locked) {
            event.preventDefault();
          }
        }}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={content.title}
              className={[
                "h-full w-full object-cover",
                "transition-transform duration-500",
                !locked
                  ? "group-hover:scale-105"
                  : "",
              ].join(" ")}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/5">
              <Play className="size-10 text-primary" />
            </div>
          )}

          {/* Play Overlay */}
          {!locked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <div className="flex size-12 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                <Play className="ml-0.5 size-5 fill-current" />
              </div>
            </div>
          )}

          {/* Duration */}
          {duration && (
            <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {duration}
            </span>
          )}

          {/* Completed */}
          {content.completed && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">
              <CheckCircle2 className="size-3.5" />
              Completed
            </span>
          )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="space-y-4 p-4">
        {/* Type */}
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Week {weekNumber} · {weekTitle}
        </span>

        {/* Title */}
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

            {content.required && (
              <>
                <span>•</span>
                <span>Required</span>
              </>
            )}
          </div>
        )}

        {/* Progress */}
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
                    : "0% done"}
              </span>

              {!content.completed && (
                <Link
                  href={href}
                  className="font-medium text-primary hover:underline"
                >
                  Watch
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Locked */}
        {locked && (
          <p className="text-xs font-medium text-muted-foreground">
            This video is locked.
          </p>
        )}
      </div>
    </article>
  );
}