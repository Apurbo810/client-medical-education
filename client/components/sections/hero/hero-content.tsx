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
    <div className="hero-content">
      {/* Badge */}
      <SectionBadge data-hero-el="badge">{badge}</SectionBadge>

      {/* Heading */}
      <h1 data-hero-el="heading" className="hero-heading">
        {titleParts[0]}
        <span className="hero-highlight">{highlighted}</span>
        {titleParts[1]}
      </h1>

      {/* Description */}
      <p data-hero-el="description" className="hero-description">{description}</p>

      {/* Buttons */}
      <div data-hero-el="buttons" className="hero-actions">
        <LinkButton href={primaryButton.href} size="lg" className="hero-action">
          {primaryButton.label}
          <ArrowRight className="hero-action-icon" />
        </LinkButton>

        <LinkButton href={primaryButton.href} size="lg" className="hero-action">
          {secondaryButton.label}
        </LinkButton>
      </div>

      {/* Students */}
      <div data-hero-el="students" className="hero-students">
        <div className="hero-student-avatars">
          {["A", "M", "S"].map((letter, index) => (
            <div key={index} className="hero-student-avatar">
              {letter}
            </div>
          ))}
        </div>
        <p className="hero-student-copy">
          <span className="hero-student-count">Join {students}+</span>{" "}
          future nurses
          <br />
          on their success journey
        </p>
      </div>
    </div>
  );
}
