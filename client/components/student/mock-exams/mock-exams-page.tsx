"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { mockExams } from "@/data/mock-exams";
import { currentStudentId } from "@/data/student/current-student";
import { getMockExamAccess } from "@/lib/mock-exams";

import type { MockExam } from "@/types/mock-exam";

import { MockExamFilter } from "./mock-exam-filter";
import { MockExamGrid } from "./mock-exam-grid";

export function MockExamsPage() {
  const router = useRouter();

  const selectedFilter = "all";

  const filteredExams = useMemo(() => {
    if (selectedFilter === "all") {
      return mockExams;
    }

    return mockExams.filter(
      (exam) =>
        exam.type === selectedFilter,
    );
  }, [selectedFilter]);

  function handleStart(exam: MockExam) {
    const access = getMockExamAccess(
      currentStudentId,
      exam.courseId,
      exam.contentId,
    );

    router.push(
      access === "result"
        ? `/student/practice/result/${exam.id}`
        : `/student/practice/${exam.id}`,
    );
  }

  return (
    <main className="mock-exams-page">
      <div className="mock-exams-container">
        <header className="mock-exams-header">
          <div className="mock-exams-header-content">
            <span className="mock-exams-badge">
              Examination
            </span>

            <h1 className="mock-exams-title">
              Mock Exams
            </h1>

            <p className="mock-exams-description">
              Test your preparation with CAT,
              mock, and weekly examinations.
            </p>
          </div>
        </header>

        <MockExamFilter
          selectedFilter={selectedFilter}
          onFilterChange={() => {}}
        />

        <MockExamGrid
          exams={filteredExams}
          studentId={currentStudentId}
          onStart={handleStart}
        />
      </div>
    </main>
  );
}