import { Quote, Star } from "lucide-react";

import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="group testimonial-card">
      <Quote className="testimonial-quote size-10" />

      <p className="testimonial-content">
        "{testimonial.quote}"
      </p>

      <div className="testimonial-stars">
        {Array.from({ length: testimonial.rating }).map(
          (_, index) => (
            <Star
              key={index}
              className="size-4 fill-current"
            />
          ),
        )}
      </div>

      <div className="testimonial-footer">
        <div className="testimonial-avatar">
          {testimonial.initials}
        </div>

        <div>
          <h3 className="testimonial-name">
            {testimonial.name}
          </h3>

          <p className="testimonial-role">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}