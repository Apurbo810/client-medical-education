export interface StudentContentProgress {
  contentId: string;
  progress: number;
  completed: boolean;
  completedAt?: string;
}

export interface StudentCourseEnrollment {
  userId: string;
  courseId: string;
  courseVersionId: string | null;

  hasActiveSubscription: boolean;

  enrolledAt: string | null;

  unlockedWeek: number;

  contentProgress: StudentContentProgress[];
}