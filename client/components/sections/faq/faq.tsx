"use client";

import { useState } from "react";

import { useReveal } from "@/hooks/gsap";

import { faqs } from "@/data/faq";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { FAQItem } from "./faq-item";

export function FAQ() {
  const faqRef = useReveal({
    y: 30,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <Container>
        <SectionHeading
          animated
          badge="FAQ"
          title="Frequently Asked Questions"
          highlighted="Asked Questions"
          description="Find answers to the most common questions about our NCLEX preparation courses."
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