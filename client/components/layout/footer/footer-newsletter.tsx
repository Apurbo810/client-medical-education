"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FooterNewsletter() {
  return (
    <div className="footer-newsletter">
      <h3 className="footer-heading">
        Newsletter
      </h3>

      <p className="footer-newsletter-text">
        Get study tips, NCLEX updates, and learning resources delivered
        straight to your inbox.
      </p>

      <div className="footer-input-group">
        <input
          type="email"
          placeholder="Your email"
          className="footer-input"
        />

        <Button
          size="icon"
          className="footer-button"
        >
          <Send className="size-5" />
        </Button>
      </div>
    </div>
  );
}