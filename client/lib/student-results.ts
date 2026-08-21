import type {
  ResultExamType,
  ResultGrade,
  ResultPassChance,
  StudentExamResult,
} from "@/types/student/results";

/* =========================================================
   GRADE
========================================================= */

export function getResultGrade(
  percentage: number,
): ResultGrade {
  if (percentage >= 80) {
    return "A";
  }

  if (percentage >= 70) {
    return "B";
  }

  if (percentage >= 60) {
    return "C";
  }

  if (percentage >= 50) {
    return "D";
  }

  return "F";
}

/* =========================================================
   PASS CHANCE
========================================================= */

export function getResultPassChance(
  percentage: number,
): ResultPassChance {
  if (percentage >= 75) {
    return "HIGH";
  }

  if (percentage >= 50) {
    return "BORDERLINE";
  }

  return "LOW";
}

/* =========================================================
   FILTER
========================================================= */

export function filterResults(
  results: StudentExamResult[],
  type?: ResultExamType | "all",
): StudentExamResult[] {
  if (!type || type === "all") {
    return results;
  }

  return results.filter(
    (result) =>
      result.type === type,
  );
}

/* =========================================================
   STUDENT RESULTS
========================================================= */

export function getStudentResults(
  results: StudentExamResult[],
  studentId: string,
): StudentExamResult[] {
  return results.filter(
    (result) =>
      result.studentId === studentId,
  );
}

/* =========================================================
   SORT
========================================================= */

export function sortResultsByDate(
  results: StudentExamResult[],
): StudentExamResult[] {
  return [...results].sort(
    (a, b) =>
      new Date(b.completedAt).getTime() -
      new Date(a.completedAt).getTime(),
  );
}