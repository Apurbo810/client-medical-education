"use client";

import { useState } from "react";

import { useReveal } from "@/hooks/gsap";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { FAQItem } from "./faq-item";

import type { FAQ as FAQType } from "@/types/faq";

interface FAQProps {
  faqs: FAQType[];
  title?: string;
  highlighted?: string;
  description?: string;
}

export function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  highlighted,
  description = "Find answers to the most common questions.",
}: FAQProps) {
  const faqRef = useReveal({
    y: 30,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section spacing="lg">
      <Container>
        <SectionHeading
          title={title}
          highlighted={highlighted}
          description={description}
          animated
        />

        <div
          ref={faqRef}
          className="faq-wrapper"
        >
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex(
                    openIndex === index ? null : index,
                  )
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}