"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseCard, type Course } from "@/app/CreatorProfile/lib/CourseCard";
import Logo from "../NotFound/lib/Logo";
import HappyStudents from "./lib/HappyStudent";

const SHAPES = {
    ring: "/shapes/circle.png",
    cone: "/shapes/cone2.png",
    squiggle: "/shapes/zigzag2.png",
};

const learners = [
    { name: "Ava", avatar: "/img/profile1.png" },
    { name: "Ben", avatar: "/img/profile2.png" },
    { name: "Dan", avatar: "/img/profile4.png" },
    { name: "Cara", avatar: "/img/profile3.png" },
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
    learnerCount: 26,
};

const frontCourse: Course = {
    ...base, id: "3", slug: "the-power-of-big-data",
    title: "the Power of Big Data", thumbnail: "/template/video3.png",
};
const backCourse: Course = {
    ...base, id: "2", slug: "build-digital-asset",
    title: "Build Digital Asset", thumbnail: "/template/video2.png",
};

function LogoMark() {
    return <Logo />;
}

function Field({
    id, label, type = "text", placeholder, value, onChange, autoComplete,
}: {
    id: string; label: string; type?: string; placeholder: string;
    value: string; onChange: (v: string) => void; autoComplete?: string;
}) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-xs font-medium text-neutral-800">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                required
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
        </div>
    );
}



function SocialButton({
    label, onClick, children,
}: {
    label: string; onClick: () => void; children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-neutral-200 bg-white transition-colors hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
            {children}
        </button>
    );
}


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);
        try {
        } catch {
            setError("Email or password is incorrect. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleSocial = (provider: "facebook" | "google") => {
        console.log(provider);
    };

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-[#0A2BEB] text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
            }}
        >
            <header className="mx-auto flex h-20 max-w-[1440px] items-center px-6 lg:px-[9%]">
                <LogoMark />
            </header>

            <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-[9%]">
                <section className="pt-2">
                    <h2 className="text-base font-semibold">Sign in with ease</h2>
                    <p className="mt-3 max-w-[330px] text-sm leading-relaxed text-white/85">
                        Experience a seamless and efficient sign-in process that grants you
                        instant access to a world of knowledge.
                    </p>

                    <div className="relative mt-12 hidden h-[470px] w-[430px] md:block" aria-hidden>
                        <div className="absolute left-0 top-[70px] w-[300px]">
                            <CourseCard course={backCourse} compact />
                        </div>
                        <div className="absolute left-[95px] top-0 z-10 w-[300px]">
                            <CourseCard course={frontCourse} compact />
                        </div>

                        <Image src={SHAPES.ring} alt="" width={90} height={90} className="absolute top-0 left-[26px] z-20 h-[100px] w-[100px] object-contain" />
                        <Image src={SHAPES.cone} alt="" width={110} height={110} className="absolute bottom-[10px] left-[15px] z-20 h-[115px] w-[115px] object-contain" />
                        <Image src={SHAPES.squiggle} alt="" width={90} height={90} className="absolute bottom-[50px] right-[10px] z-40 h-[120px] w-[120px] object-contain" />

                        <div className="absolute bottom-[-10px] left-[190px] z-30">
                            <HappyStudents />
                        </div>
                    </div>
                </section>

                <section className="flex justify-center lg:justify-start">
                    <div className="flex min-h-[520px] w-full max-w-[385px] flex-col rounded-3xl bg-white p-9 text-neutral-900 shadow-xl">
                        <p className="text-sm text-blue-600">Sign In</p>
                        <h1 className="mt-1 text-[38px] font-bold leading-[1.1] tracking-tight text-neutral-900">
                            Welcome Back
                        </h1>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <Field id="email" label="Email" type="email" placeholder="designer@example.com" autoComplete="email" value={email} onChange={setEmail} />
                            <Field id="password" label="Password" type="password" placeholder="********" autoComplete="current-password" value={password} onChange={setPassword} />

                            {error && (
                                <p role="alert" className="text-xs text-red-600">
                                    {error}
                                </p>
                            )}

                            <div className="flex justify-end pt-1">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="rounded-full bg-[#d7f73b] px-7 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-[#c9ea2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 disabled:opacity-60"
                                >
                                    {submitting ? "Signing in…" : "Sign In"}
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 flex items-center gap-3 text-xs text-neutral-500">
                            <span className="h-px flex-1 bg-neutral-300" />
                            or
                            <span className="h-px flex-1 bg-neutral-300" />
                        </div>

                        <div className="mt-6 flex justify-center gap-4">
                            <div className="border border-gray-300 p-3 rounded-xl">
                                <Image src="/logo/fb.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
                            </div>
                            <div className="border border-gray-300 rounded-xl p-3">
                                <Image src="/logo/google.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
                            </div>

                        </div>

                        <p className="mt-auto pt-10 text-center text-xs text-neutral-600">
                            New user?{" "}
                            <Link href="/SignUp" className="text-blue-600 hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}