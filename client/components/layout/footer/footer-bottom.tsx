import Link from "next/link";

export function FooterBottom() {
  return (
    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} Booster Prep.
        All rights reserved.
      </p>

      <div className="footer-bottom-links">
        <Link
          href="/privacy"
          className="footer-bottom-link"
        >
          Privacy
        </Link>

        <Link
          href="/terms"
          className="footer-bottom-link"
        >
          Terms
        </Link>

        <Link
          href="/cookies"
          className="footer-bottom-link"
        >
          Cookies
        </Link>
      </div>
    </div>
  );
}