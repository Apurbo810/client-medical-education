"use client";


import { ArrowRight } from "lucide-react";

import { hero } from "@/data/hero";

import { SectionBadge } from "@/components/common/section-badge";
import { LinkButton } from "@/components/common/link-button";

export function HeroContent() {
  const {
    badge,
    title,
    highlighted,
    description,
    primaryButton,
    secondaryButton,
    students,
  } = hero;

  const titleParts = title.split(highlighted);

  return (
    <div className="relative z-20 flex max-w-md flex-col lg:max-w-lg">
      {/* Badge */}
      <SectionBadge data-hero-el="badge">{badge}</SectionBadge>

      {/* Heading */}
      <h1 data-hero-el="heading" className="heading-lg mt-4 sm:mt-6 leading-[1.08] ">
        {titleParts[0]}
        <span className="text-primary">{highlighted}</span>
        {titleParts[1]}
      </h1>

      {/* Description */}
      <p data-hero-el="description" className="mt-5 max-w-md text-sm leading-6 text-black/90 sm:mt-6 sm:max-w-lg sm:text-base sm:leading-7 lg:text-muted-foreground">        
        
        {description}
      </p>

      {/* Buttons */}
      <div data-hero-el="buttons" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

        <LinkButton href={primaryButton.href} size="lg" className="w-full rounded-xl sm:w-auto">

          {primaryButton.label}
          <ArrowRight className="ml-0 size-4" />
        </LinkButton>

        <LinkButton href={primaryButton.href} size="lg" className="w-full rounded-xl sm:w-auto">
          {secondaryButton.label}
        </LinkButton>
      </div>

      {/* Students */}
      <div data-hero-el="students" className="mt-8 flex items-center gap-2 sm:mt-10 sm:gap-4">
        <div className="flex -space-x-3">
          {["A", "M", "S"].map((letter, index) => (
            <div
              key={index}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-semibold text-primary-foreground shadow-sm sm:h-11 sm:w-11 sm:text-sm"
            >
              {letter}
            </div>
          ))}
        </div>
        <p className="text-[11px] leading-4 text-white/90 sm:text-sm sm:leading-6 lg:text-sm lg:text-muted-foreground">   
          <span className="font-semibold text-foreground">
            Join {students}+
          </span>{" "}
          future nurses
          <br />
          on their success journey
        </p>
      </div>
    </div>
  );
}
