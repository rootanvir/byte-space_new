import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    src: "/img/profile1.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    src: "/img/profile2.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    src: "/img/profile3.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-y-10 rounded-full bg-[#d7f73b]/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-30 right-20 top-0 h-80 w-80 -translate-y-10 rounded-full bg-[#d7f73b]/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="text-sm leading-relaxed text-neutral-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}