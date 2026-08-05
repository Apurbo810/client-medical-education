"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  Users,
  BookOpen,
  ClipboardList,
  Award,
} from "lucide-react";

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
  const valueRef = useRef<HTMLHeadingElement>(null);

  const Icon = icons[statistic.icon];

  useEffect(() => {
    if (!valueRef.current) return;

    const number = Number(
      statistic.value.replace(/[^\d.]/g, "")
    );

    if (Number.isNaN(number)) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: number,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (!valueRef.current) return;

        valueRef.current.textContent =
          statistic.value.replace(
            /[0-9,.]+/,
            Math.round(counter.value).toLocaleString()
          );
      },
    });
  }, [statistic.value]);

  return (
    <div
      className={cn(
        "group flex items-center gap-4 p-6 transition-all duration-300 hover:bg-white/5",
        className
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-7 text-white" />
      </div>

      <div>
        <h3
          ref={valueRef}
          className="text-3xl font-extrabold leading-none text-white lg:text-4xl"
        >
          {statistic.value}
        </h3>

        <p className="mt-2 text-sm text-white/80">
          {statistic.label}
        </p>
      </div>
    </div>
  );
}