import Image from "next/image";

interface CourseImageProps {
  image: string;
  title: string;
  category: string;
}

export function CourseImage({
  image,
  title,
  category,
}: CourseImageProps) {
  return (
    <div className="course-image">
      <Image
        src={image}
        alt={title}
        fill
        className="course-image-hover"
      />

      {category && (
        <span className="course-badge">
          {category}
        </span>
      )}
    </div>
  );
}