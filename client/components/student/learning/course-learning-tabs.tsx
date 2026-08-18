"use client";

import { useState } from "react";

type CourseTab =
  | "content"
  | "progress"
  | "notes";

export function CourseLearningTabs() {
  const [activeTab, setActiveTab] =
    useState<CourseTab>("content");

  const tabs: {
    id: CourseTab;
    label: string;
  }[] = [
    {
      id: "content",
      label: "Course Content",
    },
    {
      id: "progress",
      label: "Progress",
    },
    {
      id: "notes",
      label: "Notes",
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
          onClick={() =>
            setActiveTab(tab.id)
          }
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