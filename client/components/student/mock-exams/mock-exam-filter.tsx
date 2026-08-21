"use client";

export type MockExamFilter =
  | "all"
  | "cat"
  | "mock"
  | "weekly";

interface MockExamFilterProps {
  selectedFilter: MockExamFilter;
  onFilterChange: (filter: MockExamFilter) => void;
}

const filters: {
  value: MockExamFilter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Exams",
  },
  {
    value: "cat",
    label: "CAT",
  },
  {
    value: "mock",
    label: "Mock Exams",
  },
  {
    value: "weekly",
    label: "Weekly Mock",
  },
];

export function MockExamFilter({
  selectedFilter,
  onFilterChange,
}: MockExamFilterProps) {
  return (
    <div className="mock-exams-filter">
      {filters.map((filter) => {
        const active =
          selectedFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() =>
              onFilterChange(filter.value)
            }
            className={[
              "mock-exams-filter-button",
              active &&
                "mock-exams-filter-button-active",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}