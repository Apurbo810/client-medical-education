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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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