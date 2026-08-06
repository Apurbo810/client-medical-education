import { Logo } from "@/components/common/logo";

import { FooterSocial } from "./footer-social";

export function FooterBrand() {
  return (
    <div className="footer-brand">
      <Logo />

      <p className="footer-description">
        Premium NCLEX-RN preparation with comprehensive courses,
        practice questions, mock exams, and study resources designed
        to help you pass with confidence.
      </p>

      <FooterSocial />
    </div>
  );
}