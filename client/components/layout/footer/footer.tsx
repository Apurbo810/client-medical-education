import { Container } from "@/components/layout/container";

import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterBottom } from "./footer-bottom";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-grid">
          <FooterBrand />

          <FooterLinks />

          <FooterNewsletter />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}