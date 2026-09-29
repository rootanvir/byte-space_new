import Image from "next/image";

interface ClientReviewCardProps {
  name: string;
  role: string;
  image: string;
  date: string;
  rating: number;
  review: string;
}

export default function ClientReviewCard({
  name,
  role,
  image,
  date,
  rating,
  review,
}: ClientReviewCardProps) {
  return (
    <div className="w-full max-w-[800px] rounded-[26px] border border-gray-300 px-11 py-10">


      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-medium text-gray-900">
              {name}
            </h3>

            <p className="text-base text-gray-500">
              {role}
            </p>
          </div>
        </div>

        <span className="text-base text-gray-500">
          {date}
        </span>
      </div>

      <div className="mt-8 flex gap-2 text-2xl text-gray-600">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <p className="mt-7 text-[16px] leading-7 text-gray-600">
        {review}
      </p>
    </div>
  );
}