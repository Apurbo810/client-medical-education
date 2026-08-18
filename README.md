"RepoTree.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/.next": true,
    "**/dist": true,
    "**/build": true,
    "**/out": true,
    "**/coverage": true,
    "**/.cache": true,
    "**/.vscode": true,
    "**/.env*": true,
    "**/backend": true
}

```
📦client-medical-education
 ┣ 📂client
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂(auth)
 ┃ ┃ ┃ ┣ 📂forgot-password
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂reset-password
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂verify-email
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂verify-login-otp
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂verify-otp
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┗ 📂verify-reset-otp
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂(marketing)
 ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📂[courseId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂pricing
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📂student
 ┃ ┃ ┃ ┣ 📂learning
 ┃ ┃ ┃ ┃ ┗ 📂[courseId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📂my-courses
 ┃ ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┃ ┗ 📄page.tsx
 ┃ ┃ ┣ 📄error.tsx
 ┃ ┃ ┣ 📄globals.css
 ┃ ┃ ┣ 📄layout.tsx
 ┃ ┃ ┣ 📄loading.tsx
 ┃ ┃ ┣ 📄not-found.tsx
 ┃ ┃ ┗ 📄providers.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂section-heading
 ┃ ┃ ┃ ┃ ┣ 📂animations
 ┃ ┃ ┃ ┃ ┃ ┗ 📄useSectionHeadingAnimation.ts
 ┃ ┃ ┃ ┃ ┗ 📄section-heading.tsx
 ┃ ┃ ┃ ┣ 📄link-button.tsx
 ┃ ┃ ┃ ┣ 📄logo.tsx
 ┃ ┃ ┃ ┣ 📄section-badge.tsx
 ┃ ┃ ┃ ┣ 📄section-divider.tsx
 ┃ ┃ ┃ ┣ 📄section-grid.tsx
 ┃ ┃ ┃ ┣ 📄section.tsx
 ┃ ┃ ┃ ┗ 📄theme-toggle.tsx
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┣ 📄footer-bottom.tsx
 ┃ ┃ ┃ ┃ ┣ 📄footer-brand.tsx
 ┃ ┃ ┃ ┃ ┣ 📄footer-links.tsx
 ┃ ┃ ┃ ┃ ┣ 📄footer-newsletter.tsx
 ┃ ┃ ┃ ┃ ┣ 📄footer-social.tsx
 ┃ ┃ ┃ ┃ ┣ 📄footer.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📄container.tsx
 ┃ ┃ ┃ ┣ 📄mobile-navbar.tsx
 ┃ ┃ ┃ ┣ 📄navbar.tsx
 ┃ ┃ ┃ ┗ 📄navigation-links.tsx
 ┃ ┃ ┣ 📂providers
 ┃ ┃ ┃ ┗ 📄LenisProvider.tsx
 ┃ ┃ ┣ 📂sections
 ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┣ 📄about-cta.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-different.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-impact.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-mission.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-platform.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-services.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about-tutors.tsx
 ┃ ┃ ┃ ┃ ┣ 📄about.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📂forgot-password
 ┃ ┃ ┃ ┃ ┃ ┣ 📄forgot-password-form.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📄forgot-password-hero.tsx
 ┃ ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┃ ┣ 📄login-form.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📄login-hero.tsx
 ┃ ┃ ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┃ ┃ ┣ 📄register-form.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📄register-hero.tsx
 ┃ ┃ ┃ ┃ ┣ 📂reset-password
 ┃ ┃ ┃ ┃ ┃ ┗ 📄reset-password-form.tsx
 ┃ ┃ ┃ ┃ ┣ 📂verify-login-otp
 ┃ ┃ ┃ ┃ ┃ ┗ 📄verify-login-otp-form.tsx
 ┃ ┃ ┃ ┃ ┣ 📂verify-otp
 ┃ ┃ ┃ ┃ ┃ ┗ 📄verify-otp-form.tsx
 ┃ ┃ ┃ ┃ ┗ 📂verify-reset-otp
 ┃ ┃ ┃ ┃ ┃ ┗ 📄verify-reset-otp-form.tsx
 ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┣ 📄contact-form.tsx
 ┃ ┃ ┃ ┃ ┣ 📄contact-info.tsx
 ┃ ┃ ┃ ┃ ┗ 📄contact.tsx
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📄course-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-detail.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-filters.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-pagination.tsx
 ┃ ┃ ┃ ┃ ┗ 📄courses-grid.tsx
 ┃ ┃ ┃ ┣ 📂cta
 ┃ ┃ ┃ ┃ ┣ 📄cta.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┃ ┣ 📄faq-item.tsx
 ┃ ┃ ┃ ┃ ┣ 📄faq.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂featured-courses
 ┃ ┃ ┃ ┃ ┣ 📄course-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-image.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-meta.tsx
 ┃ ┃ ┃ ┃ ┣ 📄featured-courses.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┃ ┣ 📄feature-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄features.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂hero
 ┃ ┃ ┃ ┃ ┣ 📄hero-client.tsx
 ┃ ┃ ┃ ┃ ┣ 📄hero-content.tsx
 ┃ ┃ ┃ ┃ ┣ 📄hero-floating-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄hero-image.tsx
 ┃ ┃ ┃ ┃ ┣ 📄hero.tsx
 ┃ ┃ ┃ ┃ ┗ 📄index.ts
 ┃ ┃ ┃ ┣ 📂learning-process
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄learning-process.tsx
 ┃ ┃ ┃ ┃ ┗ 📄process-card.tsx
 ┃ ┃ ┃ ┣ 📂pricing
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄pricing-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄pricing-feature.tsx
 ┃ ┃ ┃ ┃ ┗ 📄pricing.tsx
 ┃ ┃ ┃ ┣ 📂stats
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄stat-card.tsx
 ┃ ┃ ┃ ┃ ┗ 📄stats.tsx
 ┃ ┃ ┃ ┣ 📂testimonials
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄testimonial-card.tsx
 ┃ ┃ ┃ ┃ ┗ 📄testimonials.tsx
 ┃ ┃ ┃ ┗ 📂why-choose-us
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄why-choose-item.tsx
 ┃ ┃ ┃ ┃ ┣ 📄why-choose-us-content.tsx
 ┃ ┃ ┃ ┃ ┣ 📄why-choose-us-image.tsx
 ┃ ┃ ┃ ┃ ┗ 📄why-choose-us.tsx
 ┃ ┃ ┣ 📂student
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄my-course-card.tsx
 ┃ ┃ ┃ ┃ ┣ 📄my-courses-header.tsx
 ┃ ┃ ┃ ┃ ┗ 📄my-courses.tsx
 ┃ ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┃ ┣ 📄student-courses.tsx
 ┃ ┃ ┃ ┃ ┣ 📄student-quick-actions.tsx
 ┃ ┃ ┃ ┃ ┣ 📄student-stats.tsx
 ┃ ┃ ┃ ┃ ┗ 📄student-welcome.tsx
 ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📄student-mobile-nav.tsx
 ┃ ┃ ┃ ┃ ┣ 📄student-navbar.tsx
 ┃ ┃ ┃ ┃ ┣ 📄student-shell.tsx
 ┃ ┃ ┃ ┃ ┗ 📄student-sidebar.tsx
 ┃ ┃ ┃ ┣ 📂learning
 ┃ ┃ ┃ ┃ ┣ 📄course-learning-header.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-learning-page.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-learning-tabs.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-progress.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-week-item.tsx
 ┃ ┃ ┃ ┃ ┣ 📄course-week.tsx
 ┃ ┃ ┃ ┃ ┗ 📄locked-course.tsx
 ┃ ┃ ┃ ┗ 📂StudentStats
 ┃ ┃ ┃ ┃ ┣ 📂Average Score
 ┃ ┃ ┃ ┃ ┣ 📂Mock Exams
 ┃ ┃ ┃ ┃ ┣ 📂Questions Solved
 ┃ ┃ ┃ ┃ ┗ 📂Readiness
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📄button.tsx
 ┃ ┃ ┃ ┣ 📄field-error.tsx
 ┃ ┃ ┃ ┣ 📄input.tsx
 ┃ ┃ ┃ ┣ 📄label.tsx
 ┃ ┃ ┃ ┣ 📄navigation-menu.tsx
 ┃ ┃ ┃ ┣ 📄sheet.tsx
 ┃ ┃ ┃ ┗ 📄textarea.tsx
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┣ 📄faq.ts
 ┃ ┃ ┃ ┗ 📄pricing-faq.ts
 ┃ ┃ ┣ 📂student
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📄student-course-content.ts
 ┃ ┃ ┃ ┃ ┗ 📄student-courses.ts
 ┃ ┃ ┃ ┣ 📄current-student.ts
 ┃ ┃ ┃ ┣ 📄student-courses.ts
 ┃ ┃ ┃ ┗ 📄student-dashboard.ts
 ┃ ┃ ┣ 📄courses.ts
 ┃ ┃ ┣ 📄features.ts
 ┃ ┃ ┣ 📄footer.ts
 ┃ ┃ ┣ 📄hero.ts
 ┃ ┃ ┣ 📄learning-process.ts
 ┃ ┃ ┣ 📄navigation.ts
 ┃ ┃ ┣ 📄pricing.ts
 ┃ ┃ ┣ 📄socials.ts
 ┃ ┃ ┣ 📄statistics.ts
 ┃ ┃ ┣ 📄testimonials.ts
 ┃ ┃ ┗ 📄why-choose-us.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂gsap
 ┃ ┃ ┃ ┣ 📄index.ts
 ┃ ┃ ┃ ┣ 📄use-counter.ts
 ┃ ┃ ┃ ┣ 📄use-floating.ts
 ┃ ┃ ┃ ┣ 📄use-gsap.ts
 ┃ ┃ ┃ ┣ 📄use-hero-animation.ts
 ┃ ┃ ┃ ┣ 📄use-parallax.ts
 ┃ ┃ ┃ ┣ 📄use-reveal.ts
 ┃ ┃ ┃ ┗ 📄use-stagger.ts
 ┃ ┃ ┣ 📄use-lenis.ts
 ┃ ┃ ┣ 📄use-scroll.ts
 ┃ ┃ ┣ 📄useCourses.ts
 ┃ ┃ ┣ 📄usePricing.ts
 ┃ ┃ ┗ 📄useTestimonials.ts
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📄auth.ts
 ┃ ┃ ┣ 📂validations
 ┃ ┃ ┃ ┣ 📄auth.ts
 ┃ ┃ ┃ ┗ 📄contact.ts
 ┃ ┃ ┣ 📄animation.ts
 ┃ ┃ ┣ 📄gsap.ts
 ┃ ┃ ┣ 📄use-hero-animation.ts
 ┃ ┃ ┗ 📄utils.ts
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂documents
 ┃ ┃ ┃ ┣ 📂week-1
 ┃ ┃ ┃ ┃ ┗ 📄fundamentals.pdf
 ┃ ┃ ┃ ┣ 📂week-2
 ┃ ┃ ┃ ┃ ┗ 📄clinical-judgment.pdf
 ┃ ┃ ┃ ┗ 📂week-3
 ┃ ┃ ┃ ┃ ┗ 📄review.pdf
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📄nclex-complete.webp
 ┃ ┃ ┃ ┃ ┣ 📄pharmacology.webp
 ┃ ┃ ┃ ┃ ┣ 📄practice-questions.webp
 ┃ ┃ ┃ ┃ ┗ 📄test-strategies.webp
 ┃ ┃ ┃ ┣ 📂hero
 ┃ ┃ ┃ ┃ ┣ 📄hero.jpeg
 ┃ ┃ ┃ ┃ ┣ 📄hero.webp
 ┃ ┃ ┃ ┃ ┗ 📄hero2.png
 ┃ ┃ ┃ ┗ 📂why-choose-us
 ┃ ┃ ┃ ┃ ┗ 📄team.webp
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📄auth.service.ts
 ┃ ┃ ┣ 📄course.service.ts
 ┃ ┃ ┗ 📄student.service.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📂student
 ┃ ┃ ┃ ┣ 📂courses
 ┃ ┃ ┃ ┃ ┣ 📄student-course-content.ts
 ┃ ┃ ┃ ┃ ┗ 📄student-course.ts
 ┃ ┃ ┃ ┗ 📄student-dashboard.ts
 ┃ ┃ ┣ 📄course.ts
 ┃ ┃ ┣ 📄faq.ts
 ┃ ┃ ┣ 📄feature.ts
 ┃ ┃ ┣ 📄footer.ts
 ┃ ┃ ┣ 📄learning-process.ts
 ┃ ┃ ┣ 📄navigation.ts
 ┃ ┃ ┣ 📄pricing.ts
 ┃ ┃ ┣ 📄social.ts
 ┃ ┃ ┣ 📄statistic.ts
 ┃ ┃ ┣ 📄testimonial.ts
 ┃ ┃ ┗ 📄why-choose-us.ts
 ┃ ┣ 📄.gitignore
 ┃ ┣ 📄AGENTS.md
 ┃ ┣ 📄CLAUDE.md
 ┃ ┣ 📄components.json
 ┃ ┣ 📄env
 ┃ ┣ 📄eslint.config.mjs
 ┃ ┣ 📄next-env.d.ts
 ┃ ┣ 📄next.config.ts
 ┃ ┣ 📄package-lock.json
 ┃ ┣ 📄package.json
 ┃ ┣ 📄postcss.config.mjs
 ┃ ┣ 📄README.md
 ┃ ┣ 📄tsconfig.json
 ┃ ┗ 📄tsconfig.tsbuildinfo
 ┣ 📄.gitignore
 ┣ 📄git.txt
 ┗ 📄README.md
```
