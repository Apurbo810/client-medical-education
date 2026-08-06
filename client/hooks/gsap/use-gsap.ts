"use client";

import { RefObject } from "react";

import {
  gsap,
  useGSAP,
} from "@/lib/gsap";

interface UseGsapOptions<T extends HTMLElement = HTMLElement> {
  scope: RefObject<T | null>;
  dependencies?: unknown[];
  disabled?: boolean;
}

export function useAppGSAP<T extends HTMLElement = HTMLElement>(
  animation: () => void,
  {
    scope,
    dependencies = [],
    disabled = false,
  }: UseGsapOptions<T>,
) {
  useGSAP(
    () => {
      if (disabled) return;

      animation();
    },
    {
      scope,
      dependencies,
      revertOnUpdate: true,
    },
  );
}

export { gsap };