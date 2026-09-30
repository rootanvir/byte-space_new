"use client";

import { useState } from "react";
import Link from "next/link";

type CategorySectionProps = {
  categories: string[];
  defaultActive?: string;
  onChange?: (category: string) => void;
  moreHref?: string;
  moreLabel?: string;
  title?: string;
  description?: string;
  /** How many buttons go in each row. Whatever is left goes in a final row. */
  rowSizes?: number[];
};

/** Split a list into rows: [8, 6] -> first 8, next 6, remainder in a last row */
function toRows<T>(items: T[], sizes: number[]): T[][] {
  const rows: T[][] = [];
  let start = 0;
  for (const size of sizes) {
    if (start >= items.length) break;
    rows.push(items.slice(start, start + size));
    start += size;
  }
  if (start < items.length) rows.push(items.slice(start));
  return rows;
}

export default function CategorySection({
  categories,
  defaultActive,
  onChange,
  moreHref,
  moreLabel = "+ More",
  title = "Discover Your Passion,\nBuild Your Skills",
  description = "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  rowSizes = [8, 6],
}: CategorySectionProps) {
  const [active, setActive] = useState(defaultActive ?? categories[0]);

  const handleClick = (category: string) => {
    setActive(category);
    onChange?.(category);
  };

  const rows = toRows(categories, rowSizes);
  const lastRow = rows.length - 1;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
      <h2 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-neutral-950 md:text-[42px]">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      <div className="mt-10 flex flex-col items-center gap-y-4">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {row.map((category) => {
              const isActive = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleClick(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                    isActive
                      ? "bg-[#d7f73b] text-neutral-950"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {i === lastRow && moreHref && (
              <Link href={moreHref} className="px-2 text-sm font-medium text-blue-600 hover:underline">
                {moreLabel}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}