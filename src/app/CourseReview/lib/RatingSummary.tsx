interface RatingSummaryProps {
  rating: number;
  total: number;
  ratings: number[];
}

export default function RatingSummary({
  rating,
  total,
  ratings,
}: RatingSummaryProps) {
  return (
    <div className="w-full rounded-[18px] border border-gray-300 px-11 py-10">
      <div className="flex items-center gap-7">

 
        <div className="flex h-[153px] w-[142px] flex-col justify-center rounded-lg bg-lime-400 px-10">
          <p className="text-[16px] text-gray-900">Ratings</p>

          <h2 className="text-[40px] font-semibold leading-none">
            {rating}
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {ratings.map((count, index) => {
            const percentage = (count / total) * 100;

            return (
              <div key={index} className="flex items-center gap-5">

                <div className="h-[9px] flex-1 rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-lime-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>


                <div className="flex gap-2 text-[25px] leading-none text-gray-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="w-10 text-right text-[16px] text-gray-600">
                  {count}
                </span>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}