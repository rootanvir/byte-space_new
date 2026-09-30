import Image, { type ImageProps } from "next/image";

export type Testimonial = {
  src: ImageProps["src"]; 
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ src, name, role, quote }: Testimonial) {
  return (
    <figure className="flex h-full w-full min-h-[320px] flex-col rounded-3xl bg-white p-6 shadow-sm">
      <Image
        src={src}
        alt={name}
        width={60}
        height={60}
        className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
      />

      <figcaption className="mt-5 shrink-0">
        <p className="text-base font-bold text-neutral-950">{name}</p>
        <p className="mt-0.5 text-sm text-blue-600">{role}</p>
      </figcaption>

      {/* flex-1 lets the quote absorb the extra space in shorter cards */}
      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-neutral-600">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
}