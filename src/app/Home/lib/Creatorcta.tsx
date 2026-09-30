import Image from "next/image";
import Link from "next/link";

type Shape = { src: string; className: string };

const shapes: Shape[] = [
  { src: "/shapes/zigzag.png", className: "-left-15 -top-17 w-50" },
  { src: "/shapes/zigzag2.png", className: "left-[10%] top-2 w-35" },
  { src: "/shapes/cone2.png", className: "right-[7%] top-0 w-40" },
  { src: "/shapes/cylinder.png", className: "-right-34 top-6 w-80" },
  { src: "/shapes/cone1.png", className: "-left-10 top-[38%] w-35" },
  { src: "/shapes/circle.png", className: "-bottom-35 left-[1%] w-80" },
  { src: "/shapes/zigzag3.png", className: "-bottom-20 right-[1%] w-70" },
];

type CreatorCTAProps = {
  href: string;
  buttonLabel?: string;
  title?: string;
  description?: string;
};

export default function CreatorCTA({
  href,
  buttonLabel = "Join as Creator",
  title = "Unlock Your Potential as a\nCreator with ByteSpace",
  description = "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
}: CreatorCTAProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#0b3cf5]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      {shapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt={shape.src}
          aria-hidden
          width={300}
          height={300}
          className={`pointer-events-none absolute hidden h-auto select-none md:block ${shape.className}`}
        />
      ))}

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <h2 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-white">
          {title}
        </h2>

        <p className="mt-8 text-sm leading-relaxed text-white/80">
          {description}
        </p>

        <Link
          href={href}
          className="mt-8 rounded-full bg-[#d7f73b] px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-[#c8ea2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

