"use client";

import { useStagger } from "@/hooks/gsap";

import { features } from "@/data/features";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { FeatureCard } from "./feature-card";

export function Features() {
  const gridRef = useStagger({
    y: 30,
    stagger: 0.08,
  });

  return (
    <Section id="features">
      <Container>
        <SectionHeading
          animated
          badge="Why Choose Us"
          title="Why Students Choose Medix"
          highlighted="Choose Medix"
          description="Discover the features that make our NCLEX preparation courses trusted by aspiring nurses worldwide."
        />

        <div
          ref={gridRef}
          className="feature-grid"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}