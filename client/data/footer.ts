import type { FooterSection } from "@/types/footer";

export const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Study Notes", href: "/notes" },
      { label: "Practice Questions", href: "/questions" },
      { label: "Mock Exams", href: "/mock-exams" },
      { label: "NCLEX Guide", href: "/guide" },
    ],
  },
];