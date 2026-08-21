"use client";

export type CourseTab =
  | "content"
  | "notes"
  | "videos";

interface CourseLearningTabsProps {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}

export function CourseLearningTabs({
  activeTab,
  onTabChange,
}: CourseLearningTabsProps) {
  const tabs: {
    id: CourseTab;
    label: string;
  }[] = [
    {
      id: "content",
      label: "Course Content",
    },
    {
      id: "notes",
      label: "Notes",
    },
    {
      id: "videos",
      label: "Videos",
    },
  ];

  return (
    <nav
      className="student-learning-tabs"
      aria-label="Course navigation"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={[
            "student-learning-tab",
            activeTab === tab.id
              ? "student-learning-tab-active"
              : "",
          ].join(" ")}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}