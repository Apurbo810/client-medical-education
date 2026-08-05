// types/course.ts

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;

  category: string;


  lessons: number;
  duration: string;
  rating: number;
  price: string;
  href: string;
}