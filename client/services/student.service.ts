import { courses } from "@/data/courses";
import { currentStudentId } from "@/data/student/current-student";
import { studentDashboardData } from "@/data/student/student-dashboard";
import { studentCourseEnrollments } from "@/data/student/courses/student-courses";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

/* =========================================================
   STUDENT DASHBOARD
========================================================= */

export async function getStudentDashboard(
  studentId: string = currentStudentId,
): Promise<StudentDashboardData> {
  // TODO: Replace with backend API request.

  const dashboard = studentDashboardData[studentId];

  if (!dashboard) {
    throw new Error(
      `Dashboard data not found for student: ${studentId}`,
    );
  }

  return dashboard;
}

/* =========================================================
   STUDENT COURSES
========================================================= */

export async function getStudentCourses(
  studentId: string = currentStudentId,
) {
  // TODO: Replace with backend API request.

  /*
   * Get all enrollments for the current student.
   */
  const enrollments =
    studentCourseEnrollments.filter(
      (item) => item.userId === studentId,
    );

  /*
   * Student has an active subscription
   * if at least one enrollment is active.
   */
  const hasActiveSubscription =
    enrollments.some(
      (enrollment) =>
        enrollment.hasActiveSubscription,
    );

  /*
   * Build the student's course list.
   */
  const studentCourses = courses.map(
    (course) => {
      /*
       * Find this student's enrollment
       * for the current course.
       */
      const enrollment =
        enrollments.find(
          (item) =>
            item.courseId === course.id,
        );

      /*
       * No enrollment,
       * inactive subscription,
       * or no assigned course version.
       */
      if (
        !enrollment ||
        !enrollment.hasActiveSubscription ||
        !enrollment.courseVersionId
      ) {
        return {
          ...course,

          progress: 0,

          locked: true,

          unlockedWeek: 0,

          enrollment: null,
        };
      }

      /*
       * Find the exact course version
       * assigned to this student.
       */
      const activeVersion =
        course.versions.find(
          (version) =>
            version.id ===
            enrollment.courseVersionId,
        );

      /*
       * The enrollment references a
       * version that no longer exists.
       */
      if (!activeVersion) {
        return {
          ...course,

          progress: 0,

          locked: true,

          unlockedWeek: 0,

          enrollment,
        };
      }

      /*
       * Get all required content from
       * the assigned course version.
       */
      const requiredContents =
        activeVersion.weeks.flatMap(
          (week) => week.contents,
        );

      const requiredContentIds =
        requiredContents
          .filter(
            (content) => content.required,
          )
          .map((content) => content.id);

      const totalRequired =
        requiredContentIds.length;

      /*
       * Count completed required content.
       */
      const completedRequired =
        requiredContentIds.filter(
          (contentId) => {
            const progress =
              enrollment.contentProgress.find(
                (item) =>
                  item.contentId ===
                  contentId,
              );

            return (
              progress?.completed === true
            );
          },
        ).length;

      /*
       * Calculate overall course progress.
       */
      const progress =
        totalRequired > 0
          ? Math.round(
              (completedRequired /
                totalRequired) *
                100,
            )
          : 0;

      return {
        ...course,

        progress,

        locked: false,

        unlockedWeek:
          enrollment.unlockedWeek,

        enrollment,
      };
    },
  );

  return {
    hasActiveSubscription,

    courses: studentCourses,
  };
}

/* =========================================================
   STUDENT COURSE CONTENT
========================================================= */

export async function getStudentCourseContent(
  courseId: string,
  studentId: string = currentStudentId,
) {
  // TODO: Replace with backend API request.

  /*
   * Find the course from the global
   * course catalog.
   */
  const course = courses.find(
    (item) => item.id === courseId,
  );

  /*
   * Course doesn't exist.
   */
  if (!course) {
    return null;
  }

  /*
   * Find this student's enrollment
   * for this specific course.
   */
  const enrollment =
    studentCourseEnrollments.find(
      (item) =>
        item.userId === studentId &&
        item.courseId === courseId,
    );

  /*
   * No enrollment, inactive subscription,
   * or no assigned course version.
   */
  if (
    !enrollment ||
    !enrollment.hasActiveSubscription ||
    !enrollment.courseVersionId
  ) {
    return {
      course,

      enrollment: null,

      version: null,

      hasAccess: false,

      weeks: [],
    };
  }

  /*
   * Get the exact course version
   * assigned to this student.
   */
  const activeVersion =
    course.versions.find(
      (version) =>
        version.id ===
        enrollment.courseVersionId,
    );

  /*
   * Assigned course version no longer exists.
   */
  if (!activeVersion) {
    return {
      course,

      enrollment,

      version: null,

      hasAccess: false,

      weeks: [],
    };
  }

  /*
   * Build the student's learning view.
   *
   * The original course content comes
   * from courses.ts.
   *
   * Student-specific state comes from
   * studentCourseEnrollments.
   */
  const weeks = activeVersion.weeks.map(
    (week) => {
      /*
       * A week is unlocked when its
       * week number is within the student's
       * unlocked week limit.
       */
      const isUnlocked =
        week.week <=
        enrollment.unlockedWeek;

      /*
       * Add student progress to each
       * canonical course content item.
       */
      const contents = week.contents.map(
        (content) => {
          const progress =
            enrollment.contentProgress.find(
              (item) =>
                item.contentId ===
                content.id,
            );

          return {
            ...content,

            isUnlocked,

            progress:
              progress?.progress ?? 0,

            completed:
              progress?.completed ?? false,

            completedAt:
              progress?.completedAt ?? null,
          };
        },
      );

      /*
       * Calculate progress for this week.
       */
      const completedContents =
        contents.filter(
          (content) =>
            content.completed,
        ).length;

      const totalContents =
        contents.length;

      const progress =
        totalContents > 0
          ? Math.round(
              (completedContents /
                totalContents) *
                100,
            )
          : 0;

      return {
        ...week,

        isUnlocked,

        progress,

        contents,
      };
    },
  );

  return {
    course,

    enrollment,

    version: activeVersion,

    hasAccess: true,

    weeks,
  };
}