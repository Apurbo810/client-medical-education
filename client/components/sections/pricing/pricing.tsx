import { pricingPlans } from "@/data/pricing";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { PricingCard } from "./pricing-card";

export function Pricing() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple Transparent Pricing"
          highlighted="Transparent Pricing"
          description="Choose the study plan that fits your timeline and start preparing with confidence."
          animated
        />

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}