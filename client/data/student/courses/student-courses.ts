import type { StudentCourseEnrollment } from "@/types/student/courses/student-course";

export const studentCourseEnrollments: StudentCourseEnrollment[] = [
  /*
   * =========================================================
   * STUDENT 1
   * Existing subscriber
   *
   * Has access to all 3 weeks.
   * Has completed all course content.
   * =========================================================
   */
  {
    userId: "student-1",

    courseId: "nclex-complete",

    courseVersionId: "nclex-complete-v1",

    hasActiveSubscription: true,

    enrolledAt: "2026-07-20",

    unlockedWeek: 3,

    contentProgress: [
      {
        contentId: "nclex-v1-w1-slide-1",
        progress: 100,
        completed: true,
        completedAt: "2026-07-26",
      },

      {
        contentId: "nclex-v1-w2-slide-1",
        progress: 100,
        completed: true,
        completedAt: "2026-08-02",
      },

      {
        contentId: "nclex-v1-w2-video-1",
        progress: 100,
        completed: true,
        completedAt: "2026-08-03",
      },

      {
        contentId: "nclex-v1-w3-slide-1",
        progress: 100,
        completed: true,
        completedAt: "2026-08-10",
      },

      {
        contentId: "nclex-v1-w3-mock-1",
        progress: 100,
        completed: true,
        completedAt: "2026-08-11",
      },
    ],
  },

  /*
   * =========================================================
   * STUDENT 2
   * New subscriber
   *
   * Only Week 1 is unlocked.
   * Student has started the Week 1 slide.
   * =========================================================
   */
  {
    userId: "student-2",

    courseId: "nclex-complete",

    courseVersionId: "nclex-complete-v1",

    hasActiveSubscription: true,

    enrolledAt: "2026-08-15",

    unlockedWeek: 1,

    contentProgress: [
      {
        contentId: "nclex-v1-w1-slide-1",
        progress: 35,
        completed: false,
      },
    ],
  },

  /*
   * =========================================================
   * STUDENT 3
   * No subscription
   *
   * No course version is assigned.
   * =========================================================
   */
  {
    userId: "student-3",

    courseId: "nclex-complete",

    courseVersionId: null,

    hasActiveSubscription: false,

    enrolledAt: null,

    unlockedWeek: 0,

    contentProgress: [],
  },
];