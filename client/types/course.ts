export type CourseContentType =
  | "slide"
  | "video"
  | "notes"
  | "mock-test";

export type CourseVersionStatus =
  | "draft"
  | "active"
  | "archived";

export interface CourseContent {
  id: string;
  type: CourseContentType;

  title: string;
  description: string;

  file?: string;
  youtubeId?: string;

  duration?: number;
  questions?: number;

  isNew: boolean;
  isUpdated: boolean;
  required: boolean;
}

export interface CourseWeek {
  id: string;
  week: number;
  title: string;
  description?: string;

  /**
   * Number of days after enrollment
   * before this week becomes available.
   */
  unlockAfterDays: number;

  contents: CourseContent[];
}

export interface CourseVersion {
  id: string;
  version: number;

  title: string;

  publishedAt: string;
  status: CourseVersionStatus;

  weeks: CourseWeek[];
}

export interface Course {
  id: string;

  title: string;
  description: string;

  image: string;

  category: string;
  subject: string;
  level: string;

  lessons: number;
  duration: string;

  rating: number;
  students: number;

  price: string;
  href: string;

  featured: boolean;

  versions: CourseVersion[];
}