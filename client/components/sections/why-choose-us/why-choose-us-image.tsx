"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { useReveal } from "@/hooks/gsap";

export function WhyChooseUsImage() {
  const imageRef = useReveal({
    x: 40,
  });

  return (
    <div ref={imageRef}>
      <div className="why-image-frame">
        <Image
          src="/images/why-choose-us/team.webp"
          alt="Medical Team"
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="why-image-hover"
        />
      </div>

      <div className="why-review-card">
        <div className="why-card-stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="size-4 fill-current"
            />
          ))}
        </div>

        <p className="mt-3 font-semibold text-foreground">
          "Passed in 75 Questions!"
        </p>

        <p className="text-sm text-muted-foreground">
          — Sarah M., Recent Graduate
        </p>
      </div>
    </div>
  );
}