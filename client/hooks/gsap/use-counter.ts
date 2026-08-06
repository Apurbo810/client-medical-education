"use client";

import { useRef } from "react";

import { ANIMATION } from "@/lib/animation";
import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";

export function useCounter<
  T extends HTMLElement = HTMLDivElement,>(
  value: number,
  formatter: (value: number) => string,
) {
    const ref = useRef<T | null>(null);


  useAppGSAP(
    () => {
      if (!ref.current) return;

      const counter = {
        value: 0,
      };

      gsap.to(counter, {
        value,
        duration: ANIMATION.counter.duration,
        ease: ANIMATION.counter.ease,

        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },

        onUpdate: () => {
          if (!ref.current) return;

          ref.current.textContent = formatter(
            Math.round(counter.value),
          );
        },
      });
    },
    {
      scope: ref,
      dependencies: [value],
    },
  );

  return ref;
}