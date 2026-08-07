"use client";

import { useStagger } from "@/hooks/gsap";

import { testimonials } from "@/data/testimonials";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  const gridRef = useStagger({
    y: 30,
    stagger: 0.08,
  });

  return (
    <Section>
      <Container>
        <SectionHeading
          animated
          badge="Testimonials"
          title="What Our Students Say"
          highlighted="Students Say"
          description="Hear from successful nursing graduates who trusted Medix for their NCLEX preparation."
        />

        <div
          ref={gridRef}
          className="testimonial-grid"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}