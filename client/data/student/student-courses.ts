export interface StudentCourseAccess {
  studentId: string;
  courseId: string;

  hasAccess: boolean;

  unlockedWeeks: number;
}

export const studentCourseAccess: StudentCourseAccess[] = [
  {
    studentId: "student-1",
    courseId: "nclex-complete",

    hasAccess: true,
    unlockedWeeks: 3,
  },

  {
    studentId: "student-2",
    courseId: "nclex-complete",

    hasAccess: true,
    unlockedWeeks: 1,
  },

  {
    studentId: "student-3",
    courseId: "nclex-complete",

    hasAccess: false,
    unlockedWeeks: 0,
  },
];