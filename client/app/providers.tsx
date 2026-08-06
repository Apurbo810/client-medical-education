"use client";

import { ReactNode } from "react";

import { useLenis } from "@/hooks/use-lenis";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  useLenis();

  return children;
}