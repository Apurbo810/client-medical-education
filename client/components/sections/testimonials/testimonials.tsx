import { testimonials } from "@/data/testimonials";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Nurses Who Made It"
          highlighted="Nurses"
          description="Real stories from students who trusted Booster Prep to achieve their NCLEX success."
          animated
        />

        <div className="testimonial-grid">
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