"use client";

import type { Course } from "@/types/course";

interface CourseSelectorProps {
  courses: readonly Course[];
  selectedCourseId: string;
  onCourseChange: (courseId: string) => void;
}

export function CourseSelector({
  courses,
  selectedCourseId,
  onCourseChange,
}: CourseSelectorProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Select Course
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose the course you want to practice.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map((course) => {
          const selected =
            selectedCourseId === course.id;

          return (
            <button
              key={course.id}
              type="button"
              onClick={() =>
                onCourseChange(course.id)
              }
              className={[
                "rounded-2xl border p-4 text-left",
                "transition-all duration-200",
                selected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/10"
                  : "border-border bg-card hover:border-primary/40 hover:bg-primary/5",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className="size-12 shrink-0 overflow-hidden rounded-xl bg-muted">
                  <img
                    src={course.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">
                    {course.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}