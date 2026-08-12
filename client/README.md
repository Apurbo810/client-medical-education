This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





```
📦client
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┣ 📂forgot-password
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂reset-password
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂verify-email
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂verify-login-otp
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂verify-otp
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┗ 📂verify-reset-otp
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┣ 📂(marketing)
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┣ 📂[courseId]
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂pricing
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┗ 📄page.tsx
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┗ 📄page.tsx
 ┃ ┣ 📂student
 ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┗ 📄page.tsx
 ┃ ┣ 📄error.tsx
 ┃ ┣ 📄globals.css
 ┃ ┣ 📄layout.tsx
 ┃ ┣ 📄loading.tsx
 ┃ ┣ 📄not-found.tsx
 ┃ ┗ 📄providers.tsx
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂section-heading
 ┃ ┃ ┃ ┣ 📂animations
 ┃ ┃ ┃ ┃ ┗ 📄useSectionHeadingAnimation.ts
 ┃ ┃ ┃ ┗ 📄section-heading.tsx
 ┃ ┃ ┣ 📄link-button.tsx
 ┃ ┃ ┣ 📄logo.tsx
 ┃ ┃ ┣ 📄section-badge.tsx
 ┃ ┃ ┣ 📄section-divider.tsx
 ┃ ┃ ┣ 📄section-grid.tsx
 ┃ ┃ ┣ 📄section.tsx
 ┃ ┃ ┗ 📄theme-toggle.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📄footer-bottom.tsx
 ┃ ┃ ┃ ┣ 📄footer-brand.tsx
 ┃ ┃ ┃ ┣ 📄footer-links.tsx
 ┃ ┃ ┃ ┣ 📄footer-newsletter.tsx
 ┃ ┃ ┃ ┣ 📄footer-social.tsx
 ┃ ┃ ┃ ┣ 📄footer.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📄container.tsx
 ┃ ┃ ┣ 📄mobile-navbar.tsx
 ┃ ┃ ┣ 📄navbar.tsx
 ┃ ┃ ┗ 📄navigation-links.tsx
 ┃ ┣ 📂providers
 ┃ ┃ ┗ 📄LenisProvider.tsx
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┣ 📄about-cta.tsx
 ┃ ┃ ┃ ┣ 📄about-different.tsx
 ┃ ┃ ┃ ┣ 📄about-impact.tsx
 ┃ ┃ ┃ ┣ 📄about-mission.tsx
 ┃ ┃ ┃ ┣ 📄about-platform.tsx
 ┃ ┃ ┃ ┣ 📄about-services.tsx
 ┃ ┃ ┃ ┣ 📄about-tutors.tsx
 ┃ ┃ ┃ ┣ 📄about.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂forgot-password
 ┃ ┃ ┃ ┃ ┣ 📄forgot-password-form.tsx
 ┃ ┃ ┃ ┃ ┗ 📄forgot-password-hero.tsx
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┣ 📄login-form.tsx
 ┃ ┃ ┃ ┃ ┗ 📄login-hero.tsx
 ┃ ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┃ ┣ 📄register-form.tsx
 ┃ ┃ ┃ ┃ ┗ 📄register-hero.tsx
 ┃ ┃ ┃ ┣ 📂reset-password
 ┃ ┃ ┃ ┃ ┗ 📄reset-password-form.tsx
 ┃ ┃ ┃ ┣ 📂verify-login-otp
 ┃ ┃ ┃ ┃ ┗ 📄verify-login-otp-form.tsx
 ┃ ┃ ┃ ┣ 📂verify-otp
 ┃ ┃ ┃ ┃ ┗ 📄verify-otp-form.tsx
 ┃ ┃ ┃ ┗ 📂verify-reset-otp
 ┃ ┃ ┃ ┃ ┗ 📄verify-reset-otp-form.tsx
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┣ 📄contact-form.tsx
 ┃ ┃ ┃ ┣ 📄contact-info.tsx
 ┃ ┃ ┃ ┗ 📄contact.tsx
 ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┣ 📄course-card.tsx
 ┃ ┃ ┃ ┣ 📄course-detail.tsx
 ┃ ┃ ┃ ┣ 📄course-filters.tsx
 ┃ ┃ ┃ ┣ 📄course-pagination.tsx
 ┃ ┃ ┃ ┗ 📄courses-grid.tsx
 ┃ ┃ ┣ 📂cta
 ┃ ┃ ┃ ┣ 📄cta.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┣ 📄faq-item.tsx
 ┃ ┃ ┃ ┣ 📄faq.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂featured-courses
 ┃ ┃ ┃ ┣ 📄course-card.tsx
 ┃ ┃ ┃ ┣ 📄course-image.tsx
 ┃ ┃ ┃ ┣ 📄course-meta.tsx
 ┃ ┃ ┃ ┣ 📄featured-courses.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┣ 📄feature-card.tsx
 ┃ ┃ ┃ ┣ 📄features.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂hero
 ┃ ┃ ┃ ┣ 📄hero-client.tsx
 ┃ ┃ ┃ ┣ 📄hero-content.tsx
 ┃ ┃ ┃ ┣ 📄hero-floating-card.tsx
 ┃ ┃ ┃ ┣ 📄hero-image.tsx
 ┃ ┃ ┃ ┣ 📄hero.tsx
 ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┣ 📂learning-process
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄learning-process.tsx
 ┃ ┃ ┃ ┗ 📄process-card.tsx
 ┃ ┃ ┣ 📂pricing
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄pricing-card.tsx
 ┃ ┃ ┃ ┣ 📄pricing-feature.tsx
 ┃ ┃ ┃ ┗ 📄pricing.tsx
 ┃ ┃ ┣ 📂stats
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄stat-card.tsx
 ┃ ┃ ┃ ┗ 📄stats.tsx
 ┃ ┃ ┣ 📂testimonials
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄testimonial-card.tsx
 ┃ ┃ ┃ ┗ 📄testimonials.tsx
 ┃ ┃ ┗ 📂why-choose-us
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄why-choose-item.tsx
 ┃ ┃ ┃ ┣ 📄why-choose-us-content.tsx
 ┃ ┃ ┃ ┣ 📄why-choose-us-image.tsx
 ┃ ┃ ┃ ┗ 📄why-choose-us.tsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📄button.tsx
 ┃ ┃ ┣ 📄field-error.tsx
 ┃ ┃ ┣ 📄input.tsx
 ┃ ┃ ┣ 📄label.tsx
 ┃ ┃ ┣ 📄navigation-menu.tsx
 ┃ ┃ ┣ 📄sheet.tsx
 ┃ ┃ ┗ 📄textarea.tsx
 ┣ 📂data
 ┃ ┣ 📂faq
 ┃ ┃ ┣ 📄faq.ts
 ┃ ┃ ┗ 📄pricing-faq.ts
 ┃ ┣ 📄companies.ts
 ┃ ┣ 📄courses.ts
 ┃ ┣ 📄features.ts
 ┃ ┣ 📄footer.ts
 ┃ ┣ 📄hero.ts
 ┃ ┣ 📄learning-process.ts
 ┃ ┣ 📄navigation.ts
 ┃ ┣ 📄pricing.ts
 ┃ ┣ 📄socials.ts
 ┃ ┣ 📄statistics.ts
 ┃ ┣ 📄testimonials.ts
 ┃ ┗ 📄why-choose-us.ts
 ┣ 📂hooks
 ┃ ┣ 📂gsap
 ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┣ 📄use-counter.ts
 ┃ ┃ ┣ 📄use-floating.ts
 ┃ ┃ ┣ 📄use-gsap.ts
 ┃ ┃ ┣ 📄use-hero-animation.ts
 ┃ ┃ ┣ 📄use-parallax.ts
 ┃ ┃ ┣ 📄use-reveal.ts
 ┃ ┃ ┗ 📄use-stagger.ts
 ┃ ┣ 📄use-lenis.ts
 ┃ ┣ 📄use-scroll.ts
 ┃ ┣ 📄useCourses.ts
 ┃ ┣ 📄usePricing.ts
 ┃ ┗ 📄useTestimonials.ts
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📄auth.ts
 ┃ ┣ 📂validations
 ┃ ┃ ┣ 📄auth.ts
 ┃ ┃ ┗ 📄contact.ts
 ┃ ┣ 📄animation.ts
 ┃ ┣ 📄gsap.ts
 ┃ ┣ 📄use-hero-animation.ts
 ┃ ┗ 📄utils.ts
 ┣ 📂public
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┣ 📄nclex-complete.webp
 ┃ ┃ ┃ ┣ 📄pharmacology.webp
 ┃ ┃ ┃ ┣ 📄practice-questions.webp
 ┃ ┃ ┃ ┗ 📄test-strategies.webp
 ┃ ┃ ┣ 📂hero
 ┃ ┃ ┃ ┣ 📄hero.jpeg
 ┃ ┃ ┃ ┣ 📄hero.webp
 ┃ ┃ ┃ ┗ 📄hero2.png
 ┃ ┃ ┗ 📂why-choose-us
 ┃ ┃ ┃ ┗ 📄team.webp
 ┣ 📂services
 ┃ ┣ 📄auth.service.ts
 ┃ ┗ 📄course.service.ts
 ┣ 📂types
 ┃ ┣ 📄course.ts
 ┃ ┣ 📄faq.ts
 ┃ ┣ 📄feature.ts
 ┃ ┣ 📄footer.ts
 ┃ ┣ 📄learning-process.ts
 ┃ ┣ 📄navigation.ts
 ┃ ┣ 📄pricing.ts
 ┃ ┣ 📄social.ts
 ┃ ┣ 📄statistic.ts
 ┃ ┣ 📄testimonial.ts
 ┃ ┗ 📄why-choose-us.ts
 ┣ 📄.gitignore
 ┣ 📄AGENTS.md
 ┣ 📄CLAUDE.md
 ┣ 📄components.json
 ┣ 📄env
 ┣ 📄eslint.config.mjs
 ┣ 📄next.config.ts
 ┣ 📄package-lock.json
 ┣ 📄package.json
 ┣ 📄postcss.config.mjs
 ┣ 📄README.md
 ┗ 📄tsconfig.json
```
