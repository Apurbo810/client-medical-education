"use client";

import { useRef } from "react";

import { ANIMATION } from "@/lib/animation";
import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";

export function useFloating<
    T extends HTMLElement = HTMLDivElement,
    >() {
    const ref = useRef<T | null>(null);

  useAppGSAP(
    () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        y: ANIMATION.floating.y,
        duration: ANIMATION.floating.duration,
        repeat: ANIMATION.floating.repeat,
        yoyo: ANIMATION.floating.yoyo,
        ease: ANIMATION.floating.ease,
      });
    },
    {
      scope: ref,
    },
  );

  return ref;
}