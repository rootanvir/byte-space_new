import LogoBar from "./lib/LogoBar";
import CategorySection from "./lib/CategorySection";
import LearningPaths from "./lib/LearningPaths";
import TestimonialsSection from "./lib/TestimonialSection";
import Footer from "../NotFound/lib/Footer";
import CreatorCTA from "./lib/Creatorcta";
import Hero from "./lib/Hero";
import FeatureSections from "./lib/FeatureSections";
import type { Course } from "../CreatorProfile/lib/CourseCard";
import CourseGrid from "./lib/Coursegrid";
import Navbar from "../NotFound/lib/NavBar";

const logos = [
    { title: "Logoipsum", src: "/logo/logo2.png" },
    { title: "Logoipsum", src: "/logo/logo3.png" },
    { title: "Logoipsum", src: "/logo/logo4.png" },
    { title: "Logoipsum", src: "/logo/logo5.png" },
    { title: "Logoipsum", src: "/logo/logo6.png" },
];

const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
    "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
    "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
    "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

const items = [
    { title: "Design", src: "/icon/design.png" },
    { title: "Development", src: "/icon/development.png" },
    { title: "IT & Software", src: "/icon/it.png" },
    { title: "Business", src: "/icon/business.png" },
    { title: "Marketing", src: "/icon/marketing.png" },
    { title: "Photography", src: "/icon/photography.png" },
];

const featuredCourse: Course = {
    id: "1",
    slug: "learn-figma-from-scratch",
    title: "Learn Figma from Scratch",
    thumbnail: "/img/video.png",
    creator: { name: "pureheart studio", slug: "pureheart-studio" },
    rating: 4.8,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 24,
    price: 25,
    priceUnit: "lifetime",
    learners: [
        { name: "Ava", avatar: "/img/profile1.png" },
        { name: "Ben", avatar: "/img/profile2.png" },
        { name: "Cara", avatar: "/img/profile3.png" }, 
        { name: "Dan", avatar: "/img/profile4.png" },
    ],
    learnerCount: 120,
};

export default function Landing() {
    return (
        <div className="overflow-x-hidden ">
            <Hero />
            <LogoBar logos={logos} />
            <CategorySection categories={categories} moreHref="/courses" />
            <CourseGrid />
            <LearningPaths items={items} />

            <FeatureSections
                path={{
                    title: "Your Path to Professional Growth Starts Here!",
                    description:
                        "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
                    stats: [
                        { value: "12K", label: "Students" },
                        { value: "70+", label: "Courses" },
                        { value: "16", label: "Creators" },
                    ],
                    course: featuredCourse,
                    image: "/img/model1.png",
                    progressPercent: 55,
                }}
                manage={{
                    title: "Create & Manage Courses Easily.",
                    description: (
                        <>
                            <strong className="font-semibold text-neutral-900">ByteSpace</strong> supports
                            individuals or entities in the creation, publication, and administration of
                            educational courses.
                        </>
                    ),
                    items: ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"],
                    image: "/img/model2.png",
                    revenue: { period: "July 1-28", amount: "$120.29", percent: 70 },
                    yearToDate: { year: "2023", amount: "$1,200.38", badge: "+125" },
                    students: {
                        rating: "4.5",
                        reviews: "(340)",
                        countLabel: "2K+",
                        avatars: [
                            "/img/profile1.png", "/img/profile2.png", "/img/profile3.png",
                            "/img/profile4.png", "/img/profile1.png", "/img/profile2.png",
                        ],
                    },
                }}
            />
            <CreatorCTA href="/become-a-creator" />
            <TestimonialsSection />
            <Footer />
        </div>
    );
}