import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { Features } from "@/components/sections/features"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { LearningProcess } from "@/components/sections/learning-process"
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Features />
      <WhyChooseUs />
      <LearningProcess />
    </>
  );
}