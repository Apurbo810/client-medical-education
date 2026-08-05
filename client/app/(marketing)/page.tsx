import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedCourses } from "@/components/sections/featured-courses";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
    </>
  );
}