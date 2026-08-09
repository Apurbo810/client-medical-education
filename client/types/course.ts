// types/course.ts

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;

  category: string;
  level: string;

  lessons: number;
  duration: string;
  rating: number;
  students: number;

  price: string;
  href: string;

  featured: boolean;
}