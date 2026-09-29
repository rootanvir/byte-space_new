// src/app/CreatorProfile/page.tsx
import Navbar from "../NotFound/lib/NavBar";
import Footer from "../NotFound/lib/Footer";
import { CreatorHero } from "./lib/CreatorHero";
import { CourseToolBar } from "./lib/CursorToolBar";
import { CourseCard, type Course } from "./lib/CourseCard";

const learners = [11, 47, 32, 15].map((img, i) => ({
  name: `Learner ${i + 1}`,
  avatar: `https://i.pravatar.cc/80?img=${img}`,
}));

const shared = {
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

const courses: Course[] = [
  { ...shared, id: "1", slug: "learn-figma-from-basic", title: "Learn Figma from Basic",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800" },
  { ...shared, id: "2", slug: "build-digital-asset", title: "Build Digital Asset",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" },
  { ...shared, id: "3", slug: "the-power-of-big-data", title: "The Power of Big Data",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { ...shared, id: "4", slug: "balancing-productivity-and-rest", title: "Balancing Productivity and Rest",
    thumbnail: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800" },
  { ...shared, id: "5", slug: "mastering-money-management", title: "Mastering Money Management",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" },
  { ...shared, id: "6", slug: "from-idea-to-startup-success", title: "From Idea to Startup Success",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
];

export default function CreatorProfilePage() {
  return (
    <>
      <div className="bg-[#0a2cf5] text-white">
        <Navbar />
        <CreatorHero
          creator={{
            slug: "purepearl-studio",
            name: "PurePearl Studio",
            avatar: "/img/profile1.png",
            role: "Passionate UI/UX, Web designer",
            bio:
              "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\n" +
              "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
            productCount: 3,
            followerCount: 12,
          }}
        />
      </div>

      <main>
        <section className="mx-auto max-w-6xl space-y-8 px-6 py-10 md:px-10">
          <CourseToolBar sortLabel="Most relevant" />

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course}/>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}