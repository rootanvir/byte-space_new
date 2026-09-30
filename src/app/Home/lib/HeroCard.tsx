import Image, { type ImageProps } from "next/image";

const cardBase = "rounded-xl bg-white shadow-lg";


type CategoryCardProps = {
  title: string;
  courses: string;
  students: string; 
  className?: string;
};

export function CategoryCard({ title, courses, students, className = "" }: CategoryCardProps) {
  return (
    <div className={`${cardBase} px-4 py-3 ${className}`}>
      <p className="text-xs font-medium text-neutral-900">{title}</p>
      <p className="mt-1 flex items-center gap-1.5 text-[10px] text-neutral-400">
        <span>{courses}</span>
        <span className="h-0.5 w-0.5 rounded-full bg-neutral-400" />
        <span>{students}</span>
      </p>
    </div>
  );
}


type ProgressCardProps = {
  label?: string;
  percent: number; // 0 - 100
  className?: string;
};

export function ProgressCard({ label = "Learning Progress", percent, className = "" }: ProgressCardProps) {
  const value = Math.min(100, Math.max(0, percent));
  return (
    <div className={`${cardBase} w-48 p-4 ${className}`}>
      <p className="text-[11px] text-neutral-700">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-neutral-950">{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div className="h-full rounded-full bg-[#d7f73b]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}


type HappyStudentsCardProps = {
  title?: string;
  rating: string; // "4.5"
  reviews: string; // "(340)"
  avatars: ImageProps["src"][];
  countLabel: string; // "2K+"
  className?: string;
};

export function HappyStudentsCard({
  title = "Happy Students",
  rating,
  reviews,
  avatars,
  countLabel,
  className = "",
}: HappyStudentsCardProps) {
  return (
    <div className={`${cardBase} p-3 ${className}`}>
      <p className="text-xs font-medium text-neutral-900">{title}</p>
      <p className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500">
        {rating} {reviews}
        <span aria-hidden className="h-2 w-2 rounded-full bg-[#d7f73b]" />
      </p>

      <div className="mt-2 flex items-center">
        {avatars.slice(0, 6).map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={24}
            height={24}
            className="-ml-1.5 h-6 w-6 rounded-full border-2 border-white object-cover first:ml-0"
          />
        ))}
        <span className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#d7f73b] text-[8px] font-bold text-neutral-950">
          {countLabel}
        </span>
      </div>
    </div>
  );
}