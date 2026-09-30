
import { CourseCard,type Course } from "@/app/CreatorProfile/lib/CourseCard";
const learners = [
  { name: "Ava", avatar: "/img/profile1.png" },
  { name: "Ben", avatar: "/img/profile2.png" },
  { name: "Dan", avatar: "/img/profile4.png" },
  { name: "cara", avatar: "/img/profile3.png"}
];

const base = {
  creator: { name: "purepearl studio", slug: "purepearl-studio" },
  rating: 4.5,
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  price: 25,
  priceUnit: "lifetime",
  learners,
  learnerCount: 30,  
};

 
const sampleCourses: Course[] = [
  { ...base, id: "1", slug: "learn-figma-from-basic", title: "Learn Figma from Basic", thumbnail: "/template/video.png" },
  { ...base, id: "2", slug: "build-digital-asset", title: "Build Digital Asset", thumbnail: "/template/video2.png" },
  { ...base, id: "3", slug: "the-power-of-big-data", title: "the Power of Big Data", thumbnail: "/template/video3.png" },
  { ...base, id: "4", slug: "balancing-productivity-and-life", title: "Balancing Productivity and Life", thumbnail: "/template/video4.png" },
  { ...base, id: "5", slug: "mastering-money-management", title: "Mastering Money Management", thumbnail: "/template/video5.png" },
  { ...base, id: "6", slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", thumbnail: "/template/video6.png" },
];

export default function CourseGrid({
  courses = sampleCourses,
}: {
  courses?: Course[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}