import { ArrowRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="cta-wrapper">
          <div className="cta-pattern" />

          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Pass the NCLEX?
            </h2>

            <p className="cta-description">
              Join thousands of nursing students using Booster Prep to
              build confidence, master every topic, and succeed on exam
              day.
            </p>

            <div className="cta-actions">
              <Button
                size="lg"
                className="cta-primary"
              >
                Start Learning
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="cta-secondary"
              >
                <MessageCircle className="mr-2 size-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}