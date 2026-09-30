"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseCard, type Course } from "@/app/CreatorProfile/lib/CourseCard";
import Logo from "../NotFound/lib/Logo";

const SHAPES = {
  ring:     "/shapes/circle.png",        
  cone:     "/shapes/cone2.png",         
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
  return (
    <Logo />
  );
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

function HappyStudents() {
  return (
    <div className="w-[250px] rounded-xl bg-[#d7f73b] px-3.5 py-3 shadow-lg">
      <p className="text-sm font-medium text-neutral-950">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[10px] text-neutral-700">
        <span className="font-semibold">4.5</span>
        <span className="text-neutral-500">(240)</span>
        <span className="text-blue-600">★</span>
      </p>
      <div className="mt-2 flex items-center">
        {[...learners, ...learners].slice(0, 7).map((l, i) => (
          <Image
            key={i}
            src={l.avatar}
            alt={l.name}
            width={30}
            height={30}
            className="-ml-1.5 h-[30px] w-[30px] rounded-full border-2 border-[#d7f73b] object-cover first:ml-0"
          />
        ))}
        <span className="-ml-1.5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-neutral-950 text-[10px] font-semibold text-white">
          2K+
        </span>
      </div>
    </div>
  );
}

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setSubmitting(true);
    try {

    } catch {
      setError("Could not create your account. Try again.");
    } finally {
      setSubmitting(false);
    }
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
      {/* top bar: logo only */}
      <header className="mx-auto flex h-20 max-w-[1440px] items-center px-6 lg:px-[9%]">
          <LogoMark />
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-[9%]">
        {/* left: copy + course showcase */}
        <section className="pt-2">
          <h2 className="text-base font-semibold">Sign up and come in</h2>
          <p className="mt-3 max-w-[330px] text-sm leading-relaxed text-white/85">
            The registration process is straightforward, uncomplicated, and efficient,
            allowing users to sign up quickly, easily, and at no cost
          </p>

          <div className="relative mt-12 hidden h-[470px] w-[430px] md:block" aria-hidden>
            {/* back card */}
            <div className="absolute left-0 top-[70px] w-[300px]">
              <CourseCard course={backCourse} compact />
            </div>
            {/* front card */}
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

        {/* right: form card */}
        <section className="flex justify-center lg:justify-start">
          <div className="flex min-h-[520px] w-full max-w-[385px] flex-col rounded-3xl bg-white p-9 text-neutral-900 shadow-xl">
            <p className="text-sm text-blue-600">Create an Account</p>
            <h1 className="mt-1 text-[38px] font-bold leading-[1.1] tracking-tight text-neutral-900">
              Welcome to
              <br />
              ByteSpace
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Field id="fullName" label="Full Name" placeholder="Jamie Davis" autoComplete="name" value={fullName} onChange={setFullName} />
              <Field id="email" label="Email" type="email" placeholder="designer@example.com" autoComplete="email" value={email} onChange={setEmail} />
              <Field id="password" label="Password" type="password" placeholder="********" autoComplete="new-password" value={password} onChange={setPassword} />

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
                  {submitting ? "Creating…" : "Continue"}
                </button>
              </div>
            </form>

            <p className="mt-auto pt-10 text-center text-xs text-neutral-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}