import { faqs } from "@/data/faq";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";

import { FAQItem } from "./faq-item";

export function FAQ() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your NCLEX preparation."
        />

        <div className="faq-wrapper">
          <div className="faq-list">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                faq={faq}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}