import Link from "next/link";
import { Urbanist } from "next/font/google";
import { Folder, Headset, IdCard, Video } from "lucide-react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const icons = {
  folder: Folder,
  video: Video,
  "id-card": IdCard,
  headset: Headset,
};

type Props = {
  totalLessons: number;
  totalHours: number;
  lessons: { title: string; duration: string }[];
  moreVideos?: number;
  description: string;
  price: string;
  priceSuffix?: string;
  enrollLabel?: string;
  enrollHref: string;
  includesTitle?: string;
  includes: { label: string; icon: keyof typeof icons }[];
  creator: { name: string; role: string; avatarSrc?: string };
  creatorDescription?: string;
  profileLabel?: string;
  profileHref: string;
};

export default function EnrollCourseCard({
  totalLessons,
  totalHours,
  lessons,
  moreVideos,
  description,
  price,
  priceSuffix = "/lifetime",
  enrollLabel = "Enroll Now",
  enrollHref,
  includesTitle = "This course include",
  includes,
  creator,
  creatorDescription,
  profileLabel = "See Full Profile",
  profileHref,
}: Props) {
  return (
    <article
      className={`${urbanist.className} w-full max-w-[372px] rounded-[28px] bg-white px-9 pb-8 pt-9 text-[#1c1c22] shadow-[0_10px_40px_rgba(10,60,230,0.12)]`}
    >
      <h2 className="mb-[22px] text-[22px] font-semibold tracking-tight">
        {totalLessons} Lessons ({totalHours} hours)
      </h2>

      <ul>
        {lessons.map((lesson, i) => (
          <li
            key={lesson.title}
            className="mb-2.5 grid grid-cols-[28px_1fr_auto] items-start text-[15px] leading-[1.3]"
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <span>{lesson.title}</span>
            <span className="whitespace-nowrap pl-3 pt-px text-sm text-[#0a3ce6]">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ul>

      {moreVideos ? (
        <p className="mt-3.5 text-sm text-[#5d5f68]">{moreVideos} more videos</p>
      ) : null}

      <p className="mt-8 text-[14.5px] font-light leading-[1.75] text-[#5d5f68]">
        {description}
      </p>

      <div className="mb-3.5 mt-7 flex items-baseline gap-0.5">
        <strong className="text-4xl font-bold tracking-tight text-[#0a3ce6]">{price}</strong>
        <span className="text-sm text-[#5d5f68]">{priceSuffix}</span>
      </div>

      <Link
        href={enrollHref}
        className="flex h-[42px] w-full items-center justify-center rounded-full bg-[#d4ff1f] text-base font-medium text-[#1c1c22] transition hover:brightness-95 active:scale-[0.985]"
      >
        {enrollLabel}
      </Link>

      <h3 className="mb-[18px] mt-7 text-lg font-semibold">{includesTitle}</h3>
      <ul className="text-[14.5px] font-light text-[#5d5f68]">
        {includes.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={label} className="mb-4 flex items-center gap-3.5">
              <Icon className="size-5 shrink-0 text-[#0a3ce6]" strokeWidth={2} />
              {label}
            </li>
          );
        })}
      </ul>

      <hr className="my-[22px] border-0 border-t border-[#dcdde2]" />

      <div className="mb-[26px] flex items-center gap-3.5">
        {creator.avatarSrc ? (

          <img
            src={creator.avatarSrc}
            alt={creator.name}
            className="size-[47px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="size-[47px] shrink-0 rounded-full bg-[#cfd4dd]" />
        )}
        <div>
          <b className="block text-[17px] font-medium leading-tight">{creator.name}</b>
          <small className="text-[14.5px] font-light text-[#5d5f68]">{creator.role}</small>
        </div>
      </div>

      <p className="text-[14.5px] font-light leading-[1.75] text-[#5d5f68]">
        {creatorDescription ?? description}
      </p>

      <Link
        href={profileHref}
        className="mt-[22px] inline-flex h-8 items-center rounded-full border border-[#c9cbd3] px-3.5 text-sm text-[#5d5f68] hover:border-[#0a3ce6] hover:text-[#0a3ce6]"
      >
        {profileLabel}
      </Link>
    </article>
  );
}