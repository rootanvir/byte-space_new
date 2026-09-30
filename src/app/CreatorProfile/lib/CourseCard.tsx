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

export function CourseCard({
  course: c,
  compact = false,
}: {
  course: Course;
  /** Smaller pills, text and spacing, for tight spots like the Register page. */
  compact?: boolean;
}) {
  const shown = c.learners.slice(0, 4);
  const extra = c.learnerCount - shown.length;

  return (
    <article
      className={`relative flex flex-col rounded-3xl border border-gray-300 bg-white transition hover:shadow-md ${
        compact ? "gap-3 p-3" : "gap-5 p-4"
      }`}
    >
      <div className="relative aspect-[1.55] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={c.thumbnail}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
        <div
          className={`absolute flex justify-between ${
            compact ? "inset-x-2 bottom-2 gap-1" : "inset-x-3 bottom-3 gap-2"
          }`}
        >
          {[`${c.lessons} Lessons`, c.duration, `${c.comments} Comments`].map((t) => (
            <span
              key={t}
              className={`whitespace-nowrap rounded-full bg-white/50 text-neutral-600 backdrop-blur-md ${
                compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className={`truncate font-semibold text-ink ${compact ? "text-base" : "text-xl"}`}>
            <Link href={`/courses/${c.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
              {c.title}
            </Link>
          </h3>
          <p className={`text-neutral-500 ${compact ? "text-xs" : "text-sm"}`}>
            by{" "}
            <Link href={`/creators/${c.creator.slug}`} className="text-blue-700 relative z-10 text-brand hover:underline">
              {c.creator.name}
            </Link>
          </p>
        </div>
        <span
          className={`flex shrink-0 items-center gap-1.5 text-neutral-500 ${
            compact ? "text-sm" : "text-lg"
          }`}
        >
          {c.rating.toFixed(1)}
          <Star className={`fill-neutral-300 text-neutral-300 ${compact ? "size-4" : "size-5"}`} />
        </span>
      </div>

      <div className={`flex items-center ${compact ? "gap-3" : "gap-4"}`}>
        <span
          className={`inline-flex items-center rounded-xl bg-neutral-100 text-neutral-600 ${
            compact ? "gap-1.5 px-3 py-1.5 text-xs" : "gap-2 px-4 py-2.5 text-sm"
          }`}
        >
          <BarChart3 className={compact ? "size-3.5" : "size-4"} />
          {c.level}
        </span>
        <div className={`flex items-center ${compact ? "-space-x-2" : "-space-x-3"}`}>
          {shown.map((a) => (
            <Image
              key={a.name}
              src={a.avatar}
              alt={a.name}
              width={40}
              height={40}
              loading="eager"
              className={`rounded-full object-cover ring-2 ring-white ${compact ? "size-7" : "size-10"}`}
            />
          ))}
          {extra > 0 && (
            <span
              className={`bg-lime-400 text-black grid place-items-center rounded-full bg-lime font-semibold text-ink ring-2 ring-white font-thin ${
                compact ? "size-8 text-xs" : "size-12 text-sm"
              }`}
            >
              {extra}+
            </span>
          )}
        </div>
      </div>

      <p className={`font-bold text-brand text-blue-700 ${compact ? "text-lg" : "text-2xl"}`}>
        ${c.price}
        <span className={`font-normal text-neutral-500 ${compact ? "text-xs" : "text-sm"}`}>/{c.priceUnit}</span>
      </p>
    </article>
  );
}