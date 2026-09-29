import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";

export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  creator: { name: string; slug: string };
  rating: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  priceUnit: string;
  learners: { name: string; avatar: string }[];
  learnerCount: number;
}

export function CourseCard({ course: c }: { course: Course; }) {
  const shown = c.learners.slice(0, 4);
  const extra = c.learnerCount - shown.length;

  return (
    <article className="relative flex flex-col gap-5 rounded-3xl border border-gray-300 bg-white p-4 transition hover:shadow-md">
      <div className="relative aspect-[1.55] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={c.thumbnail}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
        <div className="absolute inset-x-3 bottom-3 flex justify-between gap-2">
          {[`${c.lessons} Lessons`, c.duration, `${c.comments} Comments`].map((t) => (
            <span
              key={t}
              className="whitespace-nowrap rounded-full bg-white/50 px-3 py-1.5 text-xs text-neutral-600 backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold text-ink">
            <Link href={`/courses/${c.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
              {c.title}
            </Link>
          </h3>
          <p className="text-sm text-neutral-500">
            by{" "}
            <Link href={`/creators/${c.creator.slug}`} className="text-blue-700 relative z-10 text-brand hover:underline">
              {c.creator.name}
            </Link>
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-lg text-neutral-500">
          {c.rating.toFixed(1)}
          <Star className="size-5 fill-neutral-300 text-neutral-300" />
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm text-neutral-600">
          <BarChart3 className="size-4" />
          {c.level}
        </span>
        <div className="flex items-center -space-x-3">
          {shown.map((a) => (
            <Image
              key={a.name}
              src={a.avatar}
              alt={a.name}
              width={40}
              height={40}
              loading="eager"
              className="size-10 rounded-full object-cover ring-2 ring-white"
            />
          ))}
          {extra > 0 && (
            <span className="bg-lime-400 text-black grid size-12 place-items-center rounded-full bg-lime text-sm font-semibold text-ink ring-2 ring-white font-thin">
              {extra}+
            </span>
          )}
        </div>
      </div>

      <p className="text-2xl font-bold text-brand text-blue-700">
        ${c.price}
        <span className="text-sm font-normal text-neutral-500">/{c.priceUnit}</span>
      </p>
    </article>
  );
}