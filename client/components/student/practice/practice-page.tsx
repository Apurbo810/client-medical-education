"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { courses } from "@/data/courses";
import { practiceQuestions } from "@/data/practice-questions";
import { getQuestions } from "@/lib/questions";

import { CourseSelector } from "./course-selector";
import { QuizSettings } from "./quiz-settings";
import { TopicSelector } from "./topic-selector";

export function PracticePage() {
  const router = useRouter();

  /* =========================================================
     PRACTICE SETTINGS
  ========================================================= */

  const [selectedCourseId, setSelectedCourseId] =
    useState<string>("nclex-complete");

  const [selectedTopic, setSelectedTopic] =
    useState<string>("all");

  const [questionCount, setQuestionCount] =
    useState<number>(10);

  /* =========================================================
     SELECTED COURSE
  ========================================================= */

  const selectedCourse = useMemo(() => {
    return courses.find(
      (course) =>
        course.id === selectedCourseId,
    );
  }, [selectedCourseId]);

  /* =========================================================
     COURSE QUESTIONS
  ========================================================= */

  const courseQuestions = useMemo(() => {
    return getQuestions(
      practiceQuestions,
      {
        courseId: selectedCourseId,
      },
    );
  }, [selectedCourseId]);

  /* =========================================================
     AVAILABLE TOPICS
  ========================================================= */

  const availableTopics = useMemo(
    (): string[] => {
      return Array.from(
        new Set(
          courseQuestions.map(
            (question) =>
              question.category,
          ),
        ),
      );
    },
    [courseQuestions],
  );

  /* =========================================================
     FILTERED QUESTIONS
  ========================================================= */

  const filteredQuestions = useMemo(() => {
    return getQuestions(
      practiceQuestions,
      {
        courseId: selectedCourseId,
        category:
          selectedTopic === "all"
            ? undefined
            : selectedTopic,
      },
    );
  }, [
    selectedCourseId,
    selectedTopic,
  ]);

  /* =========================================================
     START PRACTICE
     
     Practice page only creates the practice configuration.
     The actual MCQ is handled by the Quiz page.
  ========================================================= */

  function startPractice() {
    if (filteredQuestions.length === 0) {
      return;
    }

    const quizId =
      `practice-${Date.now()}`;

    const practiceConfig = {
      quizId,
      type: "practice",
      courseId: selectedCourseId,
      topic: selectedTopic,
      questionCount: Math.min(
        questionCount,
        filteredQuestions.length,
      ),
    };

    sessionStorage.setItem(
      `practice:${quizId}`,
      JSON.stringify(practiceConfig),
    );

    router.push(
      `/student/practice/${quizId}`,
    );
  }

  /* =========================================================
     RESET TOPIC WHEN COURSE CHANGES
  ========================================================= */

  function handleCourseChange(
    courseId: string,
  ) {
    setSelectedCourseId(courseId);
    setSelectedTopic("all");

    setQuestionCount((current) => {
      const available = getQuestions(
        practiceQuestions,
        {
          courseId,
        },
      ).length;

      if (available === 0) {
        return 10;
      }

      return Math.min(
        current,
        available,
      );
    });
  }

  /* =========================================================
     QUESTION COUNT
  ========================================================= */

  function handleQuestionCountChange(
    count: number,
  ) {
    setQuestionCount(
      Math.min(
        count,
        Math.max(
          filteredQuestions.length,
          1,
        ),
      ),
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-8">
          <p className="text-sm font-medium text-primary">
            Practice
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Practice Questions
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Configure your practice session
            and test your knowledge.
          </p>
        </header>

        {/* =====================================================
            PRACTICE SETUP
        ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <div className="space-y-6">
            {/* =================================================
                COURSE
            ================================================= */}

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <CourseSelector
                courses={courses}
                selectedCourseId={
                  selectedCourseId
                }
                onCourseChange={
                  handleCourseChange
                }
              />
            </section>

            {/* =================================================
                TOPICS
            ================================================= */}

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <TopicSelector
                topics={availableTopics}
                selectedTopic={
                  selectedTopic
                }
                onTopicChange={
                  setSelectedTopic
                }
              />
            </section>

            {/* =================================================
                SETTINGS
            ================================================= */}

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <QuizSettings
                questionCount={
                  questionCount
                }
                onQuestionCountChange={
                  handleQuestionCountChange
                }
              />
            </section>
          </div>

          {/* ===================================================
              RIGHT SIDE — SUMMARY
          =================================================== */}

          <aside className="lg:pt-0">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold text-foreground">
                Summary
              </h2>

              {/* Course */}

              <div className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-muted-foreground">
                    Course
                  </span>

                  <span className="max-w-45 text-right text-sm font-medium text-foreground">
                    {selectedCourse?.title ??
                      "Course"}
                  </span>
                </div>

                {/* Topic */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">
                    Topic
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {selectedTopic ===
                    "all"
                      ? "All Topics"
                      : selectedTopic}
                  </span>
                </div>

                {/* Questions */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">
                    Questions
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {Math.min(
                      questionCount,
                      filteredQuestions.length,
                    )}
                  </span>
                </div>

                {/* Available */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">
                    Available
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {
                      filteredQuestions.length
                    }
                  </span>
                </div>
              </div>

              {/* =================================================
                  INFO
              ================================================= */}

              <div className="mt-6 rounded-xl bg-primary/5 p-4">
                <p className="text-sm leading-5 text-muted-foreground">
                  Answers are checked after
                  you complete the practice
                  session. You will see the
                  correct answers and
                  rationales afterward.
                </p>
              </div>

              {/* =================================================
                  START
              ================================================= */}

              <button
                type="button"
                onClick={startPractice}
                disabled={
                  filteredQuestions.length ===
                  0
                }
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
              >
                Start Practice
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}