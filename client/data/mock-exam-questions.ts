import type { PracticeQuestion } from "@/types/practice-question";

export const mockExamQuestions: PracticeQuestion[] = [
  {
    id: "nclex-v1-w3-mock-1-q1",
    courseId: "nclex-complete",

    question:
      "A nurse is caring for a client who suddenly develops difficulty breathing. Which action should the nurse take first?",

    options: [
      {
        id: "A",
        text: "Document the client's respiratory status.",
      },
      {
        id: "B",
        text: "Assess the client's airway.",
      },
      {
        id: "C",
        text: "Notify the healthcare provider.",
      },
      {
        id: "D",
        text: "Administer the prescribed medication.",
      },
    ],

    correctAnswer: "B",

    explanation:
      "Airway assessment is the first priority when a client develops difficulty breathing because airway compromise can quickly become life-threatening.",

    difficulty: "easy",
    category: "Clinical Judgment",
  },

  {
    id: "nclex-v1-w3-mock-1-q2",
    courseId: "nclex-complete",

    question:
      "Which client should the nurse assess first?",

    options: [
      {
        id: "A",
        text: "A client requesting assistance with bathing.",
      },
      {
        id: "B",
        text: "A client reporting sudden shortness of breath.",
      },
      {
        id: "C",
        text: "A client requesting a snack.",
      },
      {
        id: "D",
        text: "A client waiting for discharge instructions.",
      },
    ],

    correctAnswer: "B",

    explanation:
      "Sudden shortness of breath may indicate an acute airway or breathing problem and therefore takes priority over routine needs.",

    difficulty: "medium",
    category: "Prioritization",
  },

  {
    id: "nclex-v1-w3-mock-1-q3",
    courseId: "nclex-complete",

    question:
      "Which nursing action is most important before administering medication to a client?",

    options: [
      {
        id: "A",
        text: "Check the client's room number.",
      },
      {
        id: "B",
        text: "Verify the medication against the prescription and client identification.",
      },
      {
        id: "C",
        text: "Ask another client to confirm the medication.",
      },
      {
        id: "D",
        text: "Document the medication before giving it.",
      },
    ],

    correctAnswer: "B",

    explanation:
      "Verifying the medication against the prescription and confirming the client's identity are essential medication-safety steps before administration.",

    difficulty: "easy",
    category: "Medication Safety",
  },
];