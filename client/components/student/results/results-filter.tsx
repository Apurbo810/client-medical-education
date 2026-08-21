"use client";

import {
  ArrowDownAZ,
  Check,
  Filter,
} from "lucide-react";

import type {
  ResultExamType,
} from "@/types/student/results";

export type ResultsFilterType =
  | "all"
  | ResultExamType;

export type ResultsSort =
  | "newest"
  | "oldest"
  | "highest"
  | "lowest";

interface ResultsFilterProps {
  activeFilter: ResultsFilterType;
  sort: ResultsSort;
  onFilterChange: (
    filter: ResultsFilterType,
  ) => void;
  onSortChange: (
    sort: ResultsSort,
  ) => void;
}

const filters: {
  id: ResultsFilterType;
  label: string;
}[] = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "practice",
    label: "Practice",
  },
  {
    id: "mock",
    label: "Mock Exams",
  },
  {
    id: "cat",
    label: "CAT",
  },
];

export function ResultsFilter({
  activeFilter,
  sort,
  onFilterChange,
  onSortChange,
}: ResultsFilterProps) {
  return (
    <div className="results-toolbar">
      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div className="results-filters">
        {filters.map((filter) => {
          const active =
            activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() =>
                onFilterChange(filter.id)
              }
              className={[
                "results-filter-button",
                active
                  ? "results-filter-button-active"
                  : "",
              ].join(" ")}
            >
              {active && (
                <Check className="mr-1.5 inline size-3.5" />
              )}

              {filter.label}
            </button>
          );
        })}
      </div>

      {/* =====================================================
          SORT
      ===================================================== */}

      <label className="results-sort">
        <ArrowDownAZ className="size-4 text-muted-foreground" />

        <span className="results-sort-label">
          Sort:
        </span>

        <select
          value={sort}
          onChange={(event) =>
            onSortChange(
              event.target.value as ResultsSort,
            )
          }
          className="bg-transparent text-sm font-medium text-foreground outline-none"
        >
          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="highest">
            Highest Score
          </option>

          <option value="lowest">
            Lowest Score
          </option>
        </select>
      </label>
    </div>
  );
}