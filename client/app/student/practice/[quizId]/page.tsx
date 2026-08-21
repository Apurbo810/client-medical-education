"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { practiceQuestions } from "@/data/practice-questions";
import { mockExamQuestions } from "@/data/mock-exam-questions";
import { mockExams } from "@/data/mock-exams";
import { getMockExamQuestions, getQuestions } from "@/lib/questions";
import {
  calculateQuizResult,
  createQuiz,
  createFixedExam,
  saveQuizResult,
} from "@/lib/quiz";
import type {
  PracticeQuestion,
  QuestionOption,
  QuizAnswer,
} from "@/types/practice-question";

import { QuizNavigation } from "@/components/student/quiz/quiz-navigation";
import { QuizQuestion } from "@/components/student/quiz/quiz-question";

type PracticeConfig = {
  courseId: string;
  topic: string;
  questionCount: number;
};

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = String(params.quizId);
  const isMockExam = mockExams.some((exam) => exam.id === quizId);

  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuiz = () => {
      if (isMockExam) {
        const exam = mockExams.find((item) => item.id === quizId);
        const mockQuestions = getMockExamQuestions(
          mockExamQuestions,
          quizId,
        );
        const courseQuestions = getQuestions(
          practiceQuestions,
          { courseId: exam?.courseId },
        );

        setQuestions(
          createFixedExam(
            (mockQuestions.length > 0
              ? mockQuestions
              : courseQuestions
            ).slice(0, exam?.questions ?? courseQuestions.length),
          ),
        );
        setIsLoading(false);
        return;
      }

      try {
        const stored = sessionStorage.getItem(`practice:${quizId}`);
        const config = stored
          ? (JSON.parse(stored) as PracticeConfig)
          : null;

        if (!config) {
          setIsLoading(false);
          return;
        }

        const availableQuestions = getQuestions(practiceQuestions, {
          courseId: config.courseId,
          category: config.topic === "all" ? undefined : config.topic,
        });

        setQuestions(createQuiz(availableQuestions, config.questionCount));
      } catch (error) {
        console.error("Failed to load quiz:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = window.setTimeout(loadQuiz, 0);

    return () => window.clearTimeout(timer);
  }, [isMockExam, quizId]);

  function handleAnswerChange(answer: QuestionOption["id"]) {
    const question = questions[currentQuestion];

    setAnswers((current) => {
      const withoutCurrent = current.filter(
        (item) => item.questionId !== question.id,
      );

      return [...withoutCurrent, { questionId: question.id, answer }];
    });
  }

  function handleFinish() {
    const currentAnswer = answers.find(
      (answer) =>
        answer.questionId === questions[currentQuestion].id,
    );

    const finalAnswers = currentAnswer
      ? answers
      : [
          ...answers,
          {
            questionId: questions[currentQuestion].id,
            answer: selectedAnswer ?? undefined,
          },
        ];

    saveQuizResult(
      quizId,
      calculateQuizResult(questions, finalAnswers),
      questions,
    );
    router.push(`/student/practice/result/${quizId}`);
  }

  if (isLoading) {
    return <main className="p-8 text-center">Loading quiz...</main>;
  }

  if (questions.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4">
        <div className="w-full rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-bold text-foreground">Quiz Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This quiz is no longer available.
          </p>
          <Link
            href={isMockExam ? "/student/mock-exams" : "/student/practice"}
            className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Back to {isMockExam ? "Mock Exams" : "Practice"}
          </Link>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer =
    answers.find((answer) => answer.questionId === question.id)?.answer ?? null;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6">
          <p className="text-sm font-medium text-primary">
            {isMockExam ? "Mock Exam" : "Practice Quiz"}
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </h1>
        </header>

        <QuizQuestion
          question={question}
          selectedAnswer={selectedAnswer}
          onAnswerChange={handleAnswerChange}
        />

        <div className="mt-6">
          <QuizNavigation
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            hasAnswer={selectedAnswer !== null}
            onPrevious={() => setCurrentQuestion((current) => current - 1)}
            onNext={() => setCurrentQuestion((current) => current + 1)}
            onFinish={handleFinish}
          />
        </div>
      </div>
    </main>
  );
}
