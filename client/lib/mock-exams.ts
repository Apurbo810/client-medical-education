import {
  studentCourseEnrollments,
} from "@/data/student/courses/student-courses";

export type MockExamAccess =
  | "result"
  | "available"
  | "soon"
  | "subscription";

export function getMockExamAccess(
  studentId: string,
  courseId: string,
  contentId: string,
): MockExamAccess {
  const enrollment =
    studentCourseEnrollments.find(
      (item) =>
        item.userId === studentId &&
        item.courseId === courseId,
    );

  if (!enrollment?.hasActiveSubscription) {
    return "subscription";
  }

  const mockContent =
    enrollment.contentProgress.find(
      (item) =>
        item.contentId === contentId,
    );

  if (mockContent?.completed) {
    return "result";
  }

  if (enrollment.unlockedWeek >= 3) {
    return "available";
  }

  return "soon";
}