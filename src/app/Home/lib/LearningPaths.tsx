import Image, { type ImageProps } from "next/image";

export type PathItem = {
  title: string;
  src: ImageProps["src"]; 
};

type LearningPathsProps = {
  items: PathItem[];
  title?: string;
  description?: string;
};

export function PathCard({ title, src }: PathItem) {
  return (
    <li className="flex h-[102px] w-[102px] flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7f73b]">
        <Image
          src={src}
          alt=""
          width={40}
          height={40}
       
        />
      </span>
      <span className="text-sm font-medium text-neutral-900">{title}</span>
    </li>
  );
}

export default function LearningPaths({
  items,
  title = "Explore Diverse Learning Paths at Bytespace",
  description = "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
}: LearningPathsProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      <ul className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-between">
        {items.map((item) => (
          <PathCard key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

