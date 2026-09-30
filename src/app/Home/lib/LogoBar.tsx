import Image, { type ImageProps } from "next/image";

export type Logo = {
  title: string;
  src: ImageProps["src"];
};

type LogoBarProps = {
  logos: Logo[];
  className?: string;
};

export function LogoItem({ title, src }: Logo) {
  return (
    <li className="flex items-center gap-2.5">
      <Image
        src={src}
        alt={title}
        width={28}
        height={28}
        className="h-7 w-7 object-contain grayscale"
      />

      <span className="text-xl font-bold tracking-tight text-neutral-500">
        {title}
      </span>
    </li>
  );
}

export default function LogoBar({
  logos,
  className = "",
}: LogoBarProps) {
  return (
    <section className={`w-full bg-[#f4f4f4] py-12 ${className}`}>
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-8 px-6 lg:justify-between">
        {logos.map((logo, index) => (
          <LogoItem
            key={`${logo.title}-${index}`}
            {...logo}
          />
        ))}
      </ul>
    </section>
  );
}