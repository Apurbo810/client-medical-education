"use client";

import {
  Users,
  BookOpen,
  ClipboardList,
  Award,
} from "lucide-react";

import { useCounter } from "@/hooks/gsap";
import { cn } from "@/lib/utils";
import type { Statistic } from "@/types/statistic";

interface StatCardProps {
  statistic: Statistic;
  className?: string;
}

const icons = {
  users: Users,
  book: BookOpen,
  clipboard: ClipboardList,
  award: Award,
} as const;

export function StatCard({
  statistic,
  className,
}: StatCardProps) {
  const Icon = icons[statistic.icon];

  const valueRef = useCounter(
    Number(statistic.value.replace(/[^\d.]/g, "")),
    (value) =>
      statistic.value.replace(
        /\d[\d,.]*/,
        value.toLocaleString(),
      ),
  );

  return (
    <div
      data-animate
      className={cn(
        "group flex flex-col items-center justify-center gap-3 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 md:flex-row md:items-center md:justify-start md:gap-4 md:p-6 md:text-left",
        className,
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 md:h-14 md:w-14">
        <Icon className="size-6 text-white md:size-7" />
      </div>

      <div>
        <h3
          ref={valueRef}
          className="text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl"
        >
          {statistic.value}
        </h3>

        <p className="mt-1 text-[13px] leading-5 text-white/80 sm:text-sm">
          {statistic.label}
        </p>
      </div>
    </div>
  );
}