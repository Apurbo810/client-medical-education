"use client";

import { useStagger } from "@/hooks/gsap";

import { learningProcess } from "@/data/learning-process";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { ProcessCard } from "./process-card";

export function LearningProcess() {
  const gridRef = useStagger({
    y: 30,
    stagger: 0.12,
  });

  return (
    <Section spacing="sm">
      <Container>
        <SectionHeading
          animated
          badge="Learning Process"
          title="Your Path to NCLEX Success"
          highlighted="NCLEX Success"
          description="Follow our proven step-by-step learning process designed to maximize your confidence and exam performance."
        />

        <div
          ref={gridRef}
          className="process-grid"
        >
          {learningProcess.map((process, index) => (
            <ProcessCard
              key={process.step}
              process={process}
              isLast={index === learningProcess.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}