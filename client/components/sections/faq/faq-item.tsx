"use client";

import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FAQ } from "@/types/faq";

interface FAQItemProps {
  faq: FAQ;
  open: boolean;
  onToggle: () => void;
}

export function FAQItem({
  faq,
  open,
  onToggle,
}: FAQItemProps) {
  return (
    <article
      className={cn(
        "faq-item",
        open && "faq-item-open",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="faq-trigger"
      >
        <h3 className="faq-question">
          {faq.question}
        </h3>

        <div
          className={cn(
            "faq-icon",
            open && "faq-icon-open",
          )}
        >
          {open ? (
            <Minus className="size-5" />
          ) : (
            <Plus className="size-5" />
          )}
        </div>
      </button>

      <div
        className={cn(
          "faq-content",
          open && "faq-content-open",
        )}
      >
        <div className="faq-content-inner">
          <div className="faq-divider" />

          <p className="faq-answer">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  );
}
