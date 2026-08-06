"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FAQ } from "@/types/faq";

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "faq-item",
        open && "faq-item-open"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="faq-trigger"
      >
        <h3 className="faq-question">
          {faq.question}
        </h3>

        <div className="faq-icon">
          {open ? (
            <Minus className="size-5" />
          ) : (
            <Plus className="size-5" />
          )}
        </div>
      </button>

      {open && (
        <>
          <div className="faq-divider" />

          <div className="faq-content">
            <p className="faq-answer">
              {faq.answer}
            </p>
          </div>
        </>
      )}
    </article>
  );
}