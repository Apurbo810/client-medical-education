"use client";

import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

import { useFloating } from "@/hooks/gsap";

const contactInfo = [
  {
    label: "Email",
    value: "support@boosterprep.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (800) 555-0142",
    icon: Phone,
  },
  {
    label: "Office",
    value: "1200 Medical Center Blvd, Houston, TX",
    icon: MapPin,
  },
  {
    label: "Live Chat",
    value: "Available 24/7",
    icon: MessageSquare,
  },
];

export function ContactInfo() {
  const availabilityRef = useFloating<HTMLSpanElement>();

  return (
    <div className="contact-info" aria-label="Contact options">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="contact-info-card"
            data-contact-info
          >
            <div className="contact-info-icon">
              <Icon className="size-5" />
            </div>

            <div className="contact-info-content">
              <span className="contact-info-label">
                {item.label}
              </span>

              <span className="contact-info-value">
                {item.value}
              </span>
            </div>
          </div>
        );
      })}

      <div
        className="contact-availability"
        data-contact-info
      >
        <span
          ref={availabilityRef}
          className="contact-availability-dot"
          aria-hidden="true"
        />
        <p>
          Our learner-support team usually replies within one business day.
        </p>
      </div>
    </div>
  );
}
