import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { Features } from "@/components/sections/features"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { LearningProcess } from "@/components/sections/learning-process"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"


import { faqs  } from "@/data/faq/faq";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Features />
      <WhyChooseUs />
      <LearningProcess />
      <Testimonials />
            <FAQ
              title="Pricing Questions"
              highlighted="Questions"
              description="Find answers to the most common questions."
              faqs={faqs}
            />
      <Pricing />
      <CTA />
    </>
  );
}