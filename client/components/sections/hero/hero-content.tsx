"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { hero } from "@/data/hero";

import { Button } from "@/components/ui/button";
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
    <div className="relative z-20 flex max-w-lg flex-col">
      {/* Badge */}
      <SectionBadge>{badge}</SectionBadge>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight lg:text-6xl">
        {titleParts[0]}
        <span className="text-primary">{highlighted}</span>
        {titleParts[1]}
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href={primaryButton.href} size="lg" className="rounded-xl">
          {primaryButton.label}
          <ArrowRight className="ml-2 size-4" />
        </LinkButton>

        <LinkButton href={primaryButton.href} size="lg" className="rounded-xl">
          {secondaryButton.label}
        </LinkButton>
      </div>

      {/* Students */}
      <div className="mt-10 flex items-center gap-4">
        <div className="flex -space-x-3">
          <Image
            src="/images/avatars/avatar-1.jpg"
            alt="Student"
            width={44}
            height={44}
            className="rounded-full border-2 border-background object-cover"
          />

          <Image
            src="/images/avatars/avatar-2.jpg"
            alt="Student"
            width={44}
            height={44}
            className="rounded-full border-2 border-background object-cover"
          />

          <Image
            src="/images/avatars/avatar-3.jpg"
            alt="Student"
            width={44}
            height={44}
            className="rounded-full border-2 border-background object-cover"
          />
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
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
