"use client";

import { useState } from "react";
import Link from "next/link";

import type { FAQ } from "@/types/faq";

import { FAQItem } from "@/components/sections/faq";

interface SupportFAQProps {
  faqs: FAQ[];
}

export function SupportFAQ({
  faqs,
}: SupportFAQProps) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  function handleToggle(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  }

  return (
    <section className="support-faq-card">
      <div className="support-faq-header">
        <div>
          <h2 className="support-card-title">
            Frequently Asked Questions
          </h2>

          <p className="support-card-description">
            Find quick answers to common questions.
          </p>
        </div>
      </div>

      <div className="support-faq-list">
        {faqs.slice(0, 5).map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            open={openIndex === index}
            onToggle={() =>
              handleToggle(index)
            }
          />
        ))}
      </div>

      {faqs.length > 5 && (
        <Link
          href="/student/support/faqs"
          className="support-faq-link"
        >
          View All FAQs
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
}