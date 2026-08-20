"use client";

import type { CourseContent } from "@/types/course";

import { CourseNotesCard } from "./course-notes-card";

interface StudentNoteContent extends CourseContent {
  isUnlocked: boolean;
  progress: number;
  completed: boolean;
  completedAt?: string | null;
}

interface CourseNotesGridProps {
  courseId: string;

  weeks: {
    id: string;
    week: number;
    title: string;
    isUnlocked: boolean;
    contents: StudentNoteContent[];
  }[];
}

export function CourseNotesGrid({
  courseId,
  weeks,
}: CourseNotesGridProps) {
  const notes = weeks.flatMap((week) =>
    week.contents
      .filter(
        (content) =>
          content.type === "slide" ||
          content.type === "notes",
      )
      .map((content) => ({
        weekNumber: week.week,
        weekTitle: week.title,
        content,
      })),
  );

  if (notes.length === 0) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-border bg-card">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-foreground">
            No notes available
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Study notes and materials will appear
            here when they become available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      {/* =====================================================
          HEADING
      ===================================================== */}

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Study Notes
        </h2>
      </div>

      {/* =====================================================
          GRID
      ===================================================== */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map(
          ({
            content,
            weekNumber,
            weekTitle,
          }) => (
            <CourseNotesCard
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