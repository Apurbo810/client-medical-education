import type {
  CourseContent,
  CourseContentType,
} from "@/types/course";

/* =========================================================
   STUDENT CONTENT PROGRESS
========================================================= */

export interface StudentContentProgress {
  contentId: string;

  progress: number;

  completed: boolean;

  completedAt?: string;
}

/* =========================================================
   STUDENT COURSE CONTENT
========================================================= */

export interface StudentCourseContent
  extends CourseContent {
  isUnlocked: boolean;

  progress: number;

  completed: boolean;

  completedAt?: string | null;
}

/* =========================================================
   STUDENT COURSE WEEK
========================================================= */

export interface StudentCourseWeek {
  id: string;

  week: number;

  title: string;

  description?: string;

  unlockAfterDays: number;

  isUnlocked: boolean;

  progress: number;

  contents: StudentCourseContent[];
}

/* =========================================================
   STUDENT COURSE ENROLLMENT
========================================================= */

export interface StudentCourseEnrollment {
  userId: string;

  courseId: string;

  courseVersionId: string | null;

  hasActiveSubscription: boolean;

  enrolledAt: string | null;

  unlockedWeek: number;

  contentProgress: StudentContentProgress[];
}