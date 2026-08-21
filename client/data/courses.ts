import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "nclex-complete",
    title: "NCLEX-RN® Complete Course",
    description:
      "Comprehensive NCLEX review with structured lessons, practice materials, case studies, and evidence-based rationales.",
    image: "/images/courses/nclex-complete.webp",

    category: "Core Course",
    subject: "NCLEX-RN",
    level: "Beginner",

    lessons: 5,
    duration: "40h",

    rating: 4.9,
    students: 18200,

    price: "$49",
    href: "/courses/nclex-complete",

    featured: true,

    versions: [
      {
        id: "nclex-complete-v1",
        version: 1,
        title: "NCLEX-RN Complete Course",
        status: "active",
        publishedAt: "2026-01-01",

        weeks: [
          {
            id: "nclex-v1-week-1",
            week: 1,
            title: "NCLEX-RN Fundamentals",
            description:
              "Build the foundation you need before moving into advanced NCLEX preparation.",
            unlockAfterDays: 0,

            contents: [
              {
                id: "nclex-v1-w1-slide-1",
                type: "slide",
                title: "NCLEX-RN Fundamentals",
                description:
                  "Introduction to the NCLEX-RN examination and core preparation concepts.",

                file: "/documents/week-1/fundamentals.pdf",

                isNew: false,
                isUpdated: false,
                required: true,
              },
            ],
          },

          {
            id: "nclex-v1-week-2",
            week: 2,
            title: "Clinical Judgment",
            description:
              "Develop clinical judgment and decision-making skills for NCLEX questions.",
            unlockAfterDays: 7,

            contents: [
              {
                id: "nclex-v1-w2-slide-1",
                type: "slide",
                title: "Clinical Judgment",
                description:
                  "Understanding clinical judgment and decision-making for NCLEX questions.",

                file: "/documents/week-2/clinical-judgment.pdf",

                isNew: false,
                isUpdated: false,
                required: true,
              },

              {
                id: "nclex-v1-w2-video-1",
                type: "video",
                title: "Clinical Judgment Lecture",
                description:
                  "Video lecture introducing clinical judgment concepts.",

                youtubeId: "M7lc1UVf-VE",

                duration: 600,

                isNew: false,
                isUpdated: false,
                required: true,
              },
            ],
          },

          {
            id: "nclex-v1-week-3",
            week: 3,
            title: "Practice & Assessment",
            description:
              "Review key concepts and test your knowledge with a mock examination.",
            unlockAfterDays: 14,

            contents: [
              {
                id: "nclex-v1-w3-slide-1",
                type: "slide",
                title: "NCLEX Final Review",
                description:
                  "Final review notes covering the key concepts from the first three weeks.",

                file: "/documents/week-3/review.pdf",

                isNew: false,
                isUpdated: false,
                required: true,
              },

              {
                id: "nclex-v1-w3-mock-1",
                type: "mock-test",
                title: "NCLEX Mock Test",
                description:
                  "A practice mock examination using NCLEX-style questions.",

                questions: 50,

                isNew: false,
                isUpdated: false,
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "practice-questions",
    title: "NCLEX Practice Questions",
    description:
      "Master NCLEX-style questions with detailed explanations and evidence-based rationales.",
    image: "/images/courses/practice-questions.webp",

    category: "Question Bank",
    subject: "NCLEX-RN",
    level: "Intermediate",

    lessons: 80,
    duration: "18h",

    rating: 4.8,
    students: 15400,

    price: "$29",
    href: "/courses/practice-questions",

    featured: true,

    versions: [],
  },

  {
    id: "pharmacology",
    title: "Pharmacology Mastery",
    description:
      "Understand medications, side effects, nursing interventions, and clinical applications.",
    image: "/images/courses/pharmacology.webp",

    category: "Medication Safety",
    subject: "Pharmacology",
    level: "Intermediate",

    lessons: 65,
    duration: "15h",

    rating: 4.9,
    students: 12800,

    price: "$29",
    href: "/courses/pharmacology",

    featured: true,

    versions: [],
  },

  {
    id: "test-strategies",
    title: "Prioritization & Test Strategies",
    description:
      "Develop critical thinking, prioritization, delegation, and effective NCLEX test-taking strategies.",
    image: "/images/courses/test-strategies.webp",

    category: "Test Strategies",
    subject: "NCLEX-RN",
    level: "Advanced",

    lessons: 45,
    duration: "10h",

    rating: 4.8,
    students: 9600,

    price: "$29",
    href: "/courses/test-strategies",

    featured: true,

    versions: [],
  },
] as const;