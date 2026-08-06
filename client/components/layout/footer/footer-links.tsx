import Link from "next/link";

import { footerSections } from "@/data/footer";

export function FooterLinks() {
  return (
    <>
      {footerSections.map((section) => (
        <div
          key={section.title}
          className="footer-column"
        >
          <h3 className="footer-heading">
            {section.title}
          </h3>

          <ul className="footer-links">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}