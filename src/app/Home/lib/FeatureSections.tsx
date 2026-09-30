import type { ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { CourseCard, type Course } from "@/app/CreatorProfile/lib/CourseCard";

const LIME = "#d7f73b";
const BLUE = "#0b3cf5";
 
 
export function ProgressCard({
  label = "Learning Progress",
  percent,
  className = "",
}: {
  label?: string;
  percent: number;
  className?: string;
}) {
  const value = Math.min(100, Math.max(0, percent));
  return (
    <div className={`w-[230px] rounded-2xl bg-white p-5 shadow-xl ${className}`}>
      <p className="text-sm text-neutral-700">{label}</p>
      <p className="mt-2 text-4xl font-semibold text-neutral-950">{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: LIME }} />
      </div>
    </div>
  );
}
 
export function RevenueCard({
  label = "Total Revenue",
  period,
  amount,
  percent,
  className = "",
}: {
  label?: string;
  period: string;
  amount: string;
  percent: number;
  className?: string;
}) {
  const value = Math.min(100, Math.max(0, percent));
  return (
    <div
      className={`w-[225px] rounded-2xl p-5 text-white shadow-lg ${className}`}
      style={{ background: BLUE }}
    >
      <p className="text-sm font-medium">{label}</p>
      <p className="text-[10px] text-white/70">{period}</p>
      <p className="mt-2 text-[22px] font-bold leading-none">{amount}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/25">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: LIME }} />
      </div>
    </div>
  );
}
 
export function YearCard({
  label = "Year to Date",
  year,
  amount,
  badge,
  className = "",
}: {
  label?: string;
  year: string;
  amount: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-[140px] rounded-2xl p-4 text-white shadow-lg ${className}`}
      style={{ background: BLUE }}
    >
      <p className="text-sm font-medium">{label}</p>
      <p className="text-[10px] text-white/70">{year}</p>
      <p className="mt-2 text-xl font-bold leading-none">{amount}</p>
      {badge && (
        <span
          className="mt-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-neutral-950"
          style={{ background: LIME }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
 
export function HappyStudentsCard({
  title = "Happy Students",
  rating,
  reviews,
  avatars,
  countLabel,
  className = "",
}: {
  title?: string;
  rating: string;
  reviews: string;
  avatars: ImageProps["src"][];
  countLabel: string;
  className?: string;
}) {
  return (
    <div className={`w-[253px] rounded-2xl bg-white p-4 shadow-xl ${className}`}>
      <p className="text-sm font-medium text-neutral-900">{title}</p>
      <p className="mt-0.5 flex items-center gap-1 text-[10px] text-neutral-500">
        {rating} {reviews}
        <Star className="size-3 fill-yellow-400 text-yellow-400" />
      </p>
      <div className="mt-2.5 flex items-center">
        {avatars.slice(0, 6).map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={36}
            height={36}
            className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover first:ml-0"
          />
        ))}
        <span
          className="-ml-2.5 grid size-11 place-items-center rounded-full border-2 border-white text-xs font-bold text-neutral-950"
          style={{ background: LIME }}
        >
          {countLabel}
        </span>
      </div>
    </div>
  );
}
 

 
export type Stat = { value: string; label: string };
 
export type PathSectionProps = {
  title: string;
  description: string;
  stats: Stat[];
  course: Course;
  image: ImageProps["src"]; 
  imageAlt?: string;
  progressPercent: number;
};
 
export function PathSection({
  title,
  description,
  stats,
  course,
  image,
  imageAlt = "",
  progressPercent,
}: PathSectionProps) {
  return (
    <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2">
      {/* text + stats */}
      <div>
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 md:text-5xl">
          {title}
        </h2>
        <p className="mt-8 max-w-[520px] text-base leading-relaxed text-neutral-500">
          {description}
        </p>
        <dl className="mt-10 flex gap-14">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-3xl font-medium text-blue-700">{s.value}</dd>
              <dt className="mt-1 text-sm text-neutral-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
 
      <div className="relative mx-auto h-[340px] w-[360px] sm:h-[560px] sm:w-[600px]">
        <div className="absolute left-0 top-0 h-[560px] w-[600px] origin-top-left scale-[0.6] sm:scale-100">
          <div className="absolute left-[38px] top-0 w-[370px]">
            <CourseCard course={course} />
          </div>
 
          <Image
            src={image}
            alt={imageAlt}
            width={620}
            height={600}
            className="pointer-events-none absolute right-[-20px] top-[70px] z-10"
          />
          <Image
            src="/shapes/zigzag3.png"
            alt=""
            aria-hidden
            width={300}
            height={300}
            className="pointer-events-none absolute left-[490px] top-[85px] z-20 w-[154px]"
          />
          <ProgressCard
            percent={progressPercent}
            className="absolute left-[383px] top-[215px] z-30"
          />
        </div>
      </div>
    </div>
  );
}
 

 
export type ManageSectionProps = {
  title: string;
  description: ReactNode;
  items: string[];
  image: ImageProps["src"]; 
  imageAlt?: string;
  revenue: { label?: string; period: string; amount: string; percent: number };
  yearToDate: { label?: string; year: string; amount: string; badge?: string };
  students: {
    title?: string;
    rating: string;
    reviews: string;
    avatars: ImageProps["src"][];
    countLabel: string;
  };
};
 
export function ManageSection({
  title,
  description,
  items,
  image,
  imageAlt = "",
  revenue,
  yearToDate,
  students,
}: ManageSectionProps) {
  return (
    <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2">
      {/* visual (designed at 600 x 596, scaled down on small screens) */}
      <div className="relative mx-auto h-[360px] w-[360px] sm:h-[596px] sm:w-[600px] lg:order-first">
        <div className="absolute left-0 top-0 h-[596px] w-[600px] origin-top-left scale-[0.6] sm:scale-100">
          {/* cards sit behind the creator */}
          <RevenueCard {...revenue} className="absolute left-0 top-[46px] z-0" />
          <YearCard {...yearToDate} className="absolute left-0 top-[194px] z-0" />
 
          <Image
            src={image}
            alt={imageAlt}
            width={520}
            height={640}
            className="pointer-events-none absolute bottom-0 left-[60px] z-10 h-[556px] w-auto drop-shadow2xl"
          />
          <Image
            src="/shapes/zigzag.png"
            alt=""
            aria-hidden
            width={200}
            height={200}
            className="pointer-events-none absolute left-[340px] top-[145px] z-20 w-[143px]"
          />
          <HappyStudentsCard
            {...students}
            className="absolute bottom-[65px] left-[286px] z-30"
          />
        </div>
      </div>
 
      {/* text + checklist */}
      <div className="lg:pl-10">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 md:text-5xl">
          {title}
        </h2>
        <p className="mt-8 max-w-[520px] text-base leading-relaxed text-neutral-500">
          {description}
        </p>
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-base text-neutral-700">
              <CheckCircle2 className="size-5 shrink-0 fill-blue-600 text-white" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

 
export default function FeatureSections({
  path,
  manage,
}: {
  path: PathSectionProps;
  manage: ManageSectionProps;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
  
      <div aria-hidden className="pointer-events-none absolute -top-24 left-[12%] h-[420px] w-[520px] rounded-full bg-[#fcff9c]/40 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-[38%] h-[360px] w-[360px] rounded-full bg-blue-300/30 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-[-6%] h-[280px] w-[280px] rounded-full bg-[#fcff9c]/50 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-[-6%] h-[380px] w-[380px] rounded-full bg-blue-300/30 blur-[110px]" />
 
      <div className="relative space-y-20">
        <PathSection {...path} />
        <ManageSection {...manage} />
      </div>
    </section>
  );
}