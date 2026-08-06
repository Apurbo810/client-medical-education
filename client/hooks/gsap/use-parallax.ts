"use client";

import { useRef } from "react";

import { ANIMATION } from "@/lib/animation";
import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";


export function useParallax<
  T extends HTMLElement = HTMLDivElement,
>() {
  const ref = useRef<T | null>(null);

  useAppGSAP(
    () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        yPercent: ANIMATION.parallax.yPercent,
        ease: ANIMATION.parallax.ease,
        scrollTrigger: {
          trigger: ref.current,
          start: ANIMATION.parallax.start,
          end: ANIMATION.parallax.end,
          scrub: ANIMATION.parallax.scrub,
        },
      });
    },
    {
      scope: ref,
    },
  );

  return ref;
}