import { features } from "@/data/features";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";

import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <Section spacing="none">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything You Need to Succeed"
          highlighted="Pass with Confidence"
          description="A complete, all-in-one NCLEX preparation ecosystem designed by nurses, for nurses."
          align="center"
          size="lg"
        />

        <div className="feature-grid">
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