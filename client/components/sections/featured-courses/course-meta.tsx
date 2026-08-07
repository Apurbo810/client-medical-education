  import { BookOpen, Clock3, Star } from "lucide-react";

  interface CourseMetaProps {
    lessons: number;
    duration: string;
    rating: number;
  }

  export function CourseMeta({
    lessons,
    duration,
    rating,
  }: CourseMetaProps) {
    return (
      <div className="mb-5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen className="size-4 text-primary" />
            <span>{lessons} Lessons</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock3 className="size-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="font-medium text-foreground">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    );
  }