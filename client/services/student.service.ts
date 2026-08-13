import { studentDashboardData } from "@/data/student/student-dashboard";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

export async function getStudentDashboard(): Promise<StudentDashboardData> {
  // TODO: Replace with backend API request.
  //
  // Example later:
  //
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/student/dashboard`,
  //   {
  //     credentials: "include",
  //   },
  // );
  //
  // if (!response.ok) {
  //   throw new Error("Failed to fetch student dashboard");
  // }
  //
  // return response.json();

  return studentDashboardData;
}