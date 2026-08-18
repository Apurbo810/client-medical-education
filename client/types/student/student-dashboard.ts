export interface StudentDashboardData {
  student: {
    name: string;
  };

  subscription: {
    plan: string;
    daysRemaining: number;
    expiresAt: string;
    hasCourseAccess: boolean;
  };

  streak: {
    days: number;
  };

  readiness: {
    level: string;
  };

  stats: {
    questionsSolved: number;
    questionsTotal: number;
    averageScore: number;
    scoreChange: number;
    mockExamsCompleted: number;
    mockExamsTotal: number;
    readiness: string;
    readinessStatus: string;
  };

  continueLearning: {
    courseTitle: string;
    lessonTitle: string;
    progress: number;
    remainingMinutes: number;
    href: string;
  };

  coursesProgress: {
    id: string;
    progress: number;
  }[];
}