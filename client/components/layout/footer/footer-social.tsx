import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import { socials } from "@/data/socials";

const icons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
} as const;

export function FooterSocial() {
  return (
    <div className="footer-socials">
      {socials.map((social) => {
        const Icon =
          icons[social.icon as keyof typeof icons];

        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label={social.name}
          >
            <Icon className="size-5" />
          </Link>
        );
      })}
    </div>
  );
}