"use client";

import type { CourseContent } from "@/types/course";

import { CourseVideoCard } from "./course-video-card";

interface StudentVideoContent
  extends CourseContent {
  isUnlocked: boolean;
  progress: number;
  completed: boolean;
  completedAt?: string | null;
}

interface CourseVideoGridProps {
  courseId: string;

  weeks: {
    id: string;
    week: number;
    title: string;
    isUnlocked: boolean;
    contents: StudentVideoContent[];
  }[];
}

export function CourseVideoGrid({
  courseId,
  weeks,
}: CourseVideoGridProps) {
  const videos = weeks.flatMap((week) =>
    week.contents
      .filter(
        (content) =>
          content.type === "video",
      )
      .map((content) => ({
        weekNumber: week.week,
        weekTitle: week.title,
        content,
      })),
  );

  if (videos.length === 0) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-border bg-card">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-foreground">
            No videos available
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Video lectures will appear here when
            they become available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Video Lectures
        </h2>

        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Expert-led HD lectures with progress
          tracking.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map(
          ({
            content,
            weekNumber,
            weekTitle,
          }) => (
            <CourseVideoCard
              key={content.id}
              courseId={courseId}
              content={content}
              weekNumber={weekNumber}
              weekTitle={weekTitle}
            />
          ),
        )}
      </div>
    </section>
  );
}