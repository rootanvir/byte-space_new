"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import EnrollCourseCard from "./lib/EnrollCourseCard";
import ClientReviewCard from "./lib/ClientReviewCard";
import RatingSummary from "./lib/RatingSummary";
import CourseRatingHero from "./lib/CourseRatingHero";
import Navbar from "../NotFound/lib/NavBar";
import Footer from "../NotFound/lib/Footer";

type Tab = "about" | "lesson" | "reviews";
type Filter = "all" | 1 | 2 | 3 | 4 | 5;

const COURSE = {
  title: "Build Digital Asset: A Comprehensive Guide",
  description:
    "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
};

const LESSONS = [
  { title: "Introduction to Digital Assets", duration: "12 mins" },
  { title: "Design Principles for Impacts", duration: "21 mins" },
  { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    image: "/img/profile1.png",
    date: "a year ago",
    rating: 5,
    review:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    image: "/img/profile2.png",
    date: "a year ago",
    rating: 5,
    review:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    image: "/img/profile3.png",
    date: "a year ago",
    rating: 4,
    review:
      "The project showcases and critique modules created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    image: "/img/profile4.png",
    date: "a year ago",
    rating: 5,
    review:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "lesson", label: "Lesson" },
  { id: "reviews", label: "Reviews" },
];

const FILTERS: Filter[] = ["all", 5, 4, 3, 2, 1];

const LIME = "bg-[#d9ff1f] text-neutral-900";

export default function CourseReview() {
  const [tab, setTab] = useState<Tab>("reviews");
  const [filter, setFilter] = useState<Filter>("all");

  const visibleReviews =
    filter === "all" ? REVIEWS : REVIEWS.filter((r) => r.rating === filter);

  return (
    <main className="overflow-x-clip bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-x-12 px-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div
          aria-hidden
          className={[
            "relative col-span-full col-start-1 row-span-2 row-start-1",
            "before:absolute before:inset-y-0 before:-left-[100vw] before:-right-[100vw] before:bg-blue-700 before:content-['']",
            "before:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]",
            "before:[background-size:64px_64px]",
          ].join(" ")}
        />

        <div className="relative  col-span-full col-start-1 row-start-1 -mx-5 text-white mb-5">
          <Navbar />
        </div>

        <div className="relative z-10 col-start-1 row-start-2 pb-10 pt-4 text-white">
          <CourseRatingHero
            title={COURSE.title}
            subtitle="Unlock the Power of Digital Creation with Expert Guidance"
            author="purepearl studio"
            level="Intermediate"
            rating={4.8}
            reviewCount={172}
            studentCount={199}
            thumbnailSrc="/img/videoThumbnail.png"
          />
        </div>


        <aside className="relative z-10 col-start-1 row-start-3 pb-10 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-52 lg:pb-0   ">
          <EnrollCourseCard
            totalLessons={112}
            totalHours={24}
            lessons={LESSONS}
            moreVideos={99}
            description={COURSE.description}
            price="$25"
            enrollHref="/enroll"
            includes={[
              { label: "Learning Resources", icon: "folder" },
              { label: "Quality Lesson Videos", icon: "video" },
              { label: "Certificate of Completion", icon: "id-card" },
              { label: "Private Consultation", icon: "headset" },
            ]}
            creator={{
              name: "PurePearl Studio",
              role: "Professional Creator",
              avatarSrc: "/img/profile2.png",
            }}
            profileHref="/profile"
          />
        </aside>

        <section className="col-start-1 row-start-4 min-w-0 pb-16 pt-10 lg:row-start-3 lg:pt-12">
          <div role="tablist" className="flex gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  tab === t.id
                    ? LIME
                    : "border border-neutral-300 bg-white hover:bg-neutral-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "about" && (
            <div className="mt-8 max-w-2xl">
              <h2 className="text-xl font-semibold">About this course</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {COURSE.description}
              </p>
            </div>
          )}

          {tab === "lesson" && (
            <ul className="mt-8 max-w-2xl divide-y divide-neutral-200">
              {LESSONS.map((l) => (
                <li
                  key={l.title}
                  className="flex items-center justify-between gap-4 py-3 text-sm"
                >
                  <span>{l.title}</span>
                  <span className="text-blue-600">{l.duration}</span>
                </li>
              ))}
            </ul>
          )}

          {tab === "reviews" && (
            <>
              <h2 className="mt-8 text-xl font-semibold">
                What Learners Are Saying
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                Discover what our learners have to say about their experience
                with &lsquo;{COURSE.title}&rsquo;. Read reviews and ratings from
                individuals who have embarked on the transformative journey of
                mastering digital asset creation.
              </p>

              <div className="mt-6">
                <RatingSummary
                  rating={4.7}
                  total={909}
                  ratings={[720, 120, 21, 12, 16]}
                />
              </div>

              <h3 className="mt-10 text-base font-semibold">
                Individual Reviews:
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                      filter === f
                        ? LIME
                        : "border border-neutral-300 bg-white hover:bg-neutral-100"
                    }`}
                  >
                    {f === "all" ? (
                      "All rating"
                    ) : (
                      <>
                        <Star size={14} className="fill-current" aria-hidden />
                        {f}
                      </>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-6">
                {visibleReviews.length > 0 ? (
                  visibleReviews.map((r) => (
                    <ClientReviewCard
                      key={r.name}
                      name={r.name}
                      role={r.role}
                      image={r.image}
                      date={r.date}
                      rating={r.rating}
                      review={r.review}
                    />
                  ))
                ) : (
                  <p className="text-sm text-neutral-500">
                    No reviews with this rating yet.
                  </p>
                )}
              </div>
            </>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}