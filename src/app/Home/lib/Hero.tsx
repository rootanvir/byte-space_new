import Image from "next/image";
import { CategoryCard, ProgressCard, HappyStudentsCard } from "./HeroCard";
import Navbar from "@/app/NotFound/lib/NavBar";

type Shape = { src: string; className: string };


const shapes: Shape[] = [
    { src: "/shapes/zigzag.png", className: "-left-13 top-50 w-58" },
    { src: "/shapes/zigzag2.png", className: "left-[15%] top-[45%] w-40" },
    { src: "/shapes/limecylinder.png", className: "-right-25 top-30 w-60" },
    { src: "/shapes/cone3.png", className: "right-[15%] top-[45%] w-30" },
    { src: "/shapes/whitecircle.png", className: "left-[4%] bottom-0 w-70" },
    { src: "/shapes/zigzag22.png", className: "right-60 bottom-0 w-60" },
];

export default function Hero() {
    return (
        
        <section
            className="relative overflow-hidden bg-[#0b3cf5]"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
            }}
        > <Navbar />
            {shapes.map((shape) => (
                <Image
                    key={shape.src}
                    src={shape.src}
                    alt={shape.src}
                    aria-hidden
                    width={300}
                    height={300}
                    className={`pointer-events-none absolute hidden h-auto select-none md:block ${shape.className}`}
                />
            ))}

            <div className="relative mx-auto max-w-4xl px-6 pt-14 text-center">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Get Access to Hundreds
                    <br />
                    Courses Available
                </h1>

                <p className="mt-6 text-xs text-white/80">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>


                <form action="/courses" method="get" className="mx-auto mt-8 flex max-w-md items-center gap-3">
                    <label className="flex h-10 flex-1 items-center gap-2 rounded-full bg-white px-4">
                        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input
                            type="search"
                            name="q"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-xs text-neutral-900 outline-none placeholder:text-neutral-400"
                        />
                    </label>
                    <button
                        type="submit"
                        className="h-10 rounded-full bg-[#d7f73b] px-5 text-xs font-semibold text-neutral-950 hover:bg-[#c8ea2a]"
                    >
                        Search
                    </button>
                </form>


                <div className="relative mx-auto mt-10 h-[360px] max-w-3xl">
                    {/* Lime background */}
                    <div
                        aria-hidden
                        className="absolute left-1/2 top-10 z-0 h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-[#d7f73b]"
                    />


                    <div
                        aria-hidden
                        className="absolute left-1/2 top-70 z-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500"
                    />


                    <Image
                        src="/img/model1.png"
                        alt="Smiling student holding a laptop"
                        width={600}
                        height={720}
                        priority
                        className="absolute bottom-0 left-1/2 z-30 h-[360px] w-auto -translate-x-1/2"
                    />

                    <CategoryCard
                        title="UI/UX Design"
                        courses="200 Courses"
                        students="1000+ Students"
                        className="absolute left-[18%] top-[70px] z-40 hidden text-left md:block"
                    />

                    {/* Progress card */}
                    <ProgressCard
                        percent={55}
                        className="absolute right-[12%] top-[90px] z-40 hidden text-left md:block"
                    />


                    <HappyStudentsCard
                        rating="4.5"
                        reviews="(340)"
                        countLabel="2K+"
                        avatars={[
                            "/img/profile1.png",
                            "/img/profile2.png",
                            "/img/profile3.png",
                            "/img/profile4.png",
                            "/img/profile1.png",
                            "/img/profile2.png",
                        ]}
                        className="absolute bottom-10 left-[4%] z-40 hidden text-left md:block"
                    />
                </div>
            </div>
        </section>
    );
}